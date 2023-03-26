"use client";
import React, { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import {
  Tab,
  Box,
  Divider,
  Stack,
  Tabs,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import * as PushAPI from "@pushprotocol/restapi";

const PK = "7368809f7d6e305408410930bbf9d8edb1c49a0b72e428b17d004a6eedcdf3ef";
const Pkey = `0x${PK}`;
const _signer = new ethers.Wallet(Pkey);

const sendNotification = async (address, transfer) => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: _signer,
      type: 3, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: `X Call Status`,
        body: `Your X call with ${transfer.transfer_id} was ${transfer.status}`,
      },
      payload: {
        title: `X Call status`,
        body: `Your X call with ${transfer.transfer_id} was ${transfer.status}`,
        cta: "",
        img: "",
      },
      recipients: `eip155:5:${address}`,
      channel: "eip155:5:0x9B7e55467605061860b2904aB91F94c766fBa186", // your channel address
      env: "staging",
    });
  } catch (err) {
    console.error("Error: ", err);
  }
};

export default function ProviderLayout({ children }) {
  const { address } = useAccount();
  const [markedTransfers, setMarkedTransfers] = useState([]);
  const url = `https://postgrest.testnet.connext.ninja/transfers?xcall_caller=eq.${address.toLowerCase()}&limit=100&offset=0&order=xcall_timestamp.desc&select=transfer_id,nonce,to,call_data,origin_domain,canonical_domain,canonical_id,destination_domain,bridged_amt,normalized_in,origin_sender,origin_chain,origin_transacting_asset,origin_transacting_amount,origin_bridged_asset,origin_bridged_amount,xcall_caller,xcall_transaction_hash,xcall_timestamp,xcall_gas_price,xcall_gas_limit,xcall_block_number,xcall_tx_origin,destination_chain,receive_local,status,routers,delegate,slippage,updated_slippage,destination_transacting_asset,destination_transacting_amount,destination_local_asset,destination_local_amount,execute_caller,execute_transaction_hash,execute_timestamp,execute_gas_price,execute_gas_limit,execute_block_number,execute_origin_sender,execute_tx_origin,reconcile_caller,reconcile_transaction_hash,reconcile_timestamp,reconcile_gas_price,reconcile_gas_limit,reconcile_block_number,reconcile_tx_origin,relayer_fees,error_status,execute_simulation_input,execute_simulation_from,execute_simulation_to,execute_simulation_network`;
  const [{ data, loading, error }, refetch] = useAxios(url);
  useEffect(() => {
    const sendNotifications = async (
      address,
      transfers,
      markedTransfers,
      setMarkedTransfers
    ) => {
      const transferred = [];
      console.log(transfers);
      if (Array.isArray(transfers)) {
        transfers.forEach((transfer) => {
          if (markedTransfers.indexOf(transfer.transfer_id) < 0) {
            console.log("Sending Notification", transfer);
            sendNotification(address, transfer);
            transferred.push(transfer.transfer_id);
          }
        });
      }
      const transferredx = [...markedTransfers, ...transferred];
      setMarkedTransfers(transferredx);
      console.log("transfers");
      console.log(transfers);
      console.log("marked transfers");
      console.log(markedTransfers);
    };
    const interval = setInterval(() => {
      console.log("Calling refetch with address ", address);
      console.log(url);
      console.log(data);
      refetch();
      sendNotifications(address, data, markedTransfers, setMarkedTransfers);
    }, 10000);
    return () => clearInterval(interval);
  }, [refetch]);
  return (
    <>
      <Tooltip title="PUSH">
        <Box
          component="span"
          sx={{
            marginBottom: 2,
            fontFamily: "Lacquer",
            fontSize: "x-large",
            cursor: "pointer",
          }}
        >
          Track
        </Box>
      </Tooltip>
      <Stack
        direction="column"
        sx={{ padding: 2, marginTop: 4 }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Typography>Tracking requests</Typography>
      </Stack>
    </>
  );
}

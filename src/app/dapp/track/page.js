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

export default function ProviderLayout({ children }) {
  const { address } = useAccount();
  const [markedTransfers, setMarkedTransfers] = useState([]);
  const url = `https://postgrest.testnet.connext.ninja/transfers?xcall_caller=eq.${address.toLowerCase()}&limit=100&offset=0&order=xcall_timestamp.desc&select=transfer_id,nonce,to,call_data,origin_domain,canonical_domain,canonical_id,destination_domain,bridged_amt,normalized_in,origin_sender,origin_chain,origin_transacting_asset,origin_transacting_amount,origin_bridged_asset,origin_bridged_amount,xcall_caller,xcall_transaction_hash,xcall_timestamp,xcall_gas_price,xcall_gas_limit,xcall_block_number,xcall_tx_origin,destination_chain,receive_local,status,routers,delegate,slippage,updated_slippage,destination_transacting_asset,destination_transacting_amount,destination_local_asset,destination_local_amount,execute_caller,execute_transaction_hash,execute_timestamp,execute_gas_price,execute_gas_limit,execute_block_number,execute_origin_sender,execute_tx_origin,reconcile_caller,reconcile_transaction_hash,reconcile_timestamp,reconcile_gas_price,reconcile_gas_limit,reconcile_block_number,reconcile_tx_origin,relayer_fees,error_status,execute_simulation_input,execute_simulation_from,execute_simulation_to,execute_simulation_network`;
  const [{ data, loading, error }, refetch] = useAxios(url);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Calling refetch with address ", address);
      console.log(url);
      console.log(data);
      refetch();
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
        <Typography>{JSON.stringify(data)}</Typography>
      </Stack>
    </>
  );
}

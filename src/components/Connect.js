"use client";

import { useState, useEffect } from "react";
import { Button, ButtonGroup, Tooltip } from "@mui/material";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import toast from "react-hot-toast";
import { fvmChain } from "@/util/chain";
import { motion } from "framer-motion";

const connector = new MetaMaskConnector();

export default function Connect({}) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect({
    onSuccess() {
      toast("Account disconnected!", {
        style: {
          border: "2px solid #000",
        },
      });
    },
    onError() {
      toast.error("Failed to disconnect account!", {
        style: {
          border: "2px solid #000",
        },
      });
    },
  });
  const { connect } = useConnect({
    chainId: fvmChain.id,
    connector,
    onSuccess() {
      toast.success("Account connected!", {
        style: {
          border: "2px solid #000",
        },
      });
    },
    onError() {
      toast.error("Error connecting account!", {
        style: {
          border: "2px solid #000",
        },
      });
    },
  });
  const handleConnect = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };
  let message = "Connect MetaMask";
  let showConnect = true;
  if (isConnected && hydrated) {
    showConnect = false;
    message = address.slice(0, 6) + "..." + address.slice(-4);
  }
  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(address);
    toast.success("Copied to clipboard", {
      style: {
        border: "2px solid #000",
      },
    });
  };
  return (
    <>
      {showConnect && <Button onClick={handleConnect}>{message}</Button>}
      {!showConnect && (
        <ButtonGroup>
          <Tooltip title={`Copy ETH Address ${address}`}>
            <Button onClick={copyAddressToClipboard}>{message}</Button>
          </Tooltip>
          <Tooltip title="Disconnect Account">
            <Button onClick={handleConnect}>Disconnect</Button>
          </Tooltip>
        </ButtonGroup>
      )}
    </>
  );
}

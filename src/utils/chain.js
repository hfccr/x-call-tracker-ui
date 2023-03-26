"use client";
import { configureChains, createClient } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import { goerli, polygonMumbai, optimismGoerli } from "wagmi/chains";

export const { chains, provider, webSocketProvider } = configureChains(
  [goerli, polygonMumbai, optimismGoerli],
  [publicProvider()]
);

export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

"use client";

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";
import { useWallets } from "@wallet-standard/react";
import { createSolanaRpc, createSolanaRpcSubscriptions } from "@solana/kit";
import { StandardConnect } from "@wallet-standard/core";

// RPC connection setup
const RPC_ENDPOINT = "https://api.devnet.solana.com";
const WS_ENDPOINT = "wss://api.devnet.solana.com";
const chain = "solana:devnet";
const rpc = createSolanaRpc(RPC_ENDPOINT);
const ws = createSolanaRpcSubscriptions(WS_ENDPOINT);

// Create Context
const SolanaContext = createContext(undefined);

// Custom hook
export function useSolana() {
  const context = useContext(SolanaContext);
  if (!context) {
    throw new Error("useSolana must be used within a SolanaProvider");
  }
  return context;
}

// Provider Component
export function SolanaProvider({ children }) {
  const allWallets = useWallets();

  // Filter Solana wallets that support signAndSendTransaction
  const wallets = useMemo(() => {
    return allWallets.filter(
      (wallet) =>
        wallet.chains?.some((c) => c.startsWith("solana:")) &&
        wallet.features.includes(StandardConnect) &&
        wallet.features.includes("solana:signAndSendTransaction")
    );
  }, [allWallets]);

  // State management
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);

  // Check if connected
  const isConnected = useMemo(() => {
    if (!selectedAccount || !selectedWallet) return false;

    const currentWallet = wallets.find((w) => w.name === selectedWallet.name);
    return (
      currentWallet &&
      currentWallet.accounts.some(
        (acc) => acc.address === selectedAccount.address
      )
    );
  }, [selectedAccount, selectedWallet, wallets]);

  const setWalletAndAccount = (wallet, account) => {
    setSelectedWallet(wallet);
    setSelectedAccount(account);
  };

  // Context value
  const contextValue = useMemo(
    () => ({
      rpc,
      ws,
      chain,
      wallets,
      selectedWallet,
      selectedAccount,
      isConnected,
      setWalletAndAccount,
    }),
    [wallets, selectedWallet, selectedAccount, isConnected]
  );

  return (
    <SolanaContext.Provider value={contextValue}>
      {children}
    </SolanaContext.Provider>
  );
}

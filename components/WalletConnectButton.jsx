"use client";

import { useState } from "react";
import { useSolana } from "@/provider/solana-provider";
import {
  useConnect,
  useDisconnect,
} from "@wallet-standard/react";

function truncateAddress(address) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

export default function WalletConnectButton() {
  const { wallets, selectedWallet, selectedAccount, isConnected, setWalletAndAccount } = useSolana();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleConnect = async (wallet) => {
    const [isConnecting, connect] = useConnect(wallet);
    try {
      const accounts = await connect();
      if (accounts && accounts.length > 0) {
        const account = accounts[0];
        setWalletAndAccount(wallet, account);
        setMenuOpen(false);
      }
    } catch (err) {
      console.error(`Failed to connect ${wallet.name}:`, err);
    }
  };

  const handleDisconnect = async (wallet) => {
    const [isDisconnecting, disconnect] = useDisconnect(wallet);
    try {
      await disconnect();
      setWalletAndAccount(null, null);
      setMenuOpen(false);
    } catch (err) {
      console.error("Failed to disconnect wallet:", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className=" px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition flex items-center gap-2"
      >
        {isConnected && selectedAccount ? (
          <>
            <span className="text-sm font-mono">
              {truncateAddress(selectedAccount.address)}
            </span>
            <span className="text-gray-500 text-xs">▼</span>
          </>
        ) : (
          <>
            <span>Connect Wallet</span>
            <span className="text-gray-500 text-xs">▼</span>
          </>
        )}
      </button>

      {menuOpen && (
        <div className="absolute mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
          {!isConnected ? (
            <div className="p-2">
              <p className="text-xs text-gray-500 mb-2">Available Wallets</p>
              {wallets.length === 0 && (
                <p className="text-sm text-center text-gray-400">
                  No wallets found
                </p>
              )}
              {wallets.map((wallet) => (
                <button
                  key={wallet.name}
                  onClick={() => handleConnect(wallet)}
                  className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition"
                >
                  {wallet.name}
                </button>
              ))}
            </div>
          ) : (
            <div className="p-2">
              <p className="text-xs text-gray-500 mb-2">Connected</p>
              <div className="flex items-center justify-between px-2 py-1 text-sm border rounded-md">
                <span>{selectedWallet?.name}</span>
                <span className="font-mono">{truncateAddress(selectedAccount?.address)}</span>
              </div>
              <button
                onClick={() => handleDisconnect(selectedWallet)}
                className="w-full mt-2 text-red-600 text-sm px-3 py-2 rounded-md hover:bg-red-50 transition"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

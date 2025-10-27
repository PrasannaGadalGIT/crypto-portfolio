import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SolanaProvider } from "@/provider/solana-provider";
import WalletConnectButton from "@/components/WalletConnectButton";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SolanaScore",
  description: "Your Crypto DeFi Dashboard on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20`}
      >
        <SolanaProvider>
          <Navbar/>
            <main className="">{children}</main>
          
        </SolanaProvider>
      
      </body>
    </html>
  );
}

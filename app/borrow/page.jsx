"use client";

export default function BorrowPage() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-linear-to-b pt-16 from-gray-950 to-purple-950 text-white px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-5xl font-bold mb-6">Borrow SOL</h1>
        <p className="text-gray-400 mb-12">
          Borrow Solana (SOL) instantly using your wallet and unlock DeFi opportunities.
        </p>

        {/* Borrow Card */}
        <div className="bg-black/30 border border-purple-500/20 rounded-2xl p-10 hover:border-purple-500/50 transition">
          <img
            src="/images/sol-logo.png"
            alt="Solana"
            className="w-20 h-20 mx-auto mb-6"
          />
          <h2 className="text-2xl font-semibold mb-2">Solana (SOL)</h2>
          <p className="text-gray-400 mb-6">Current Interest Rate: <span className="text-purple-400 font-semibold">7.5%</span></p>

          {/* Input */}
          <div className="flex justify-center gap-4 mb-6">
            <input
              type="number"
              placeholder="Enter amount to borrow (SOL)"
              className="w-64 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-500 outline-none"
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition">
              Borrow
            </button>
          </div>

          <p className="text-gray-400 text-sm">Your borrowed SOL and repayment info will appear here.</p>
        </div>
      </div>
    </section>
  );
}

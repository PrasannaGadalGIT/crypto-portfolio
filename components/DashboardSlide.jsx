"use client";

export default function DashboardSlide() {
  const stats = [
    { label: "Clients", value: "12K" },
    { label: "Annual Growth", value: "55%" },
    { label: "No of Projects", value: "5K" },
    { label: "Positive Ratings", value: "80%" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          See your <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">DeFi credit dashboard</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Visualize your financial health with a comprehensive wallet performance overview.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold text-purple-600">{stat.value}</span>
              <span className="text-gray-500 mt-2">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Launch Button */}
        <button className="mt-6 px-8 py-4 bg-linear-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
          Launch
        </button>
      </div>
    </section>
  );
}

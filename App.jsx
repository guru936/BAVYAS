import React from "react";
import { Hotel } from "./Hotel";

export default function App() {
  const [activeTab, setActiveTab] = React.useState("hotel");

  return (
    <div className="min-h-screen bg-[#2c1b14] text-[#f9e4c8]">
      <header className="bg-[#1a0e08] p-4 flex justify-between items-center border-b-2 border-yellow-400">
        <h1 className="text-2xl font-bold text-yellow-400">Fine Dining</h1>
        <nav className="flex gap-4">
          <button
            className={\`font-semibold \${activeTab === "hotel" ? "text-yellow-400" : "text-white"}\`}
            onClick={() => setActiveTab("hotel")}
          >
            Hotel
          </button>
          <button
            className={\`font-semibold \${activeTab === "bakery" ? "text-yellow-400" : "text-white"}\`}
            onClick={() => setActiveTab("bakery")}
          >
            Bakery
          </button>
        </nav>
      </header>

      <main className="p-6">
        {activeTab === "hotel" && <Hotel />}
        {activeTab === "bakery" && <div className="text-center text-lg">Bakery section coming soon!</div>}
      </main>
    </div>
  );
}

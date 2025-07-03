"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/api/supabase/supabase";
import toast from "react-hot-toast";

const stageOptions = ["Zero", "1 Step", "2 Step"];
const planOptions = ["FundingPips", "FundingPips Pro"];
const fundingAmounts = ["$5K", "$10K", "$25K", "$50K", "$100K"];
const rewardCycles = ["Monthly 100%", "Bi-weekly 80%", "Tuesday 60%"];
const tabs = ["Student", "Practitioner", "Master"];

const getValues = (tab: string) => {
  switch (tab) {
    case "Student":
      return {
        "Access Level": "Beginner",
        "Profit Split": "60%",
        "Risk Level": "Low",
        "Challenge Time": "30 days",
      };
    case "Practitioner":
      return {
        "Access Level": "Intermediate",
        "Profit Split": "75%",
        "Risk Level": "Medium",
        "Challenge Time": "20 days",
      };
    case "Master":
      return {
        "Access Level": "Advanced",
        "Profit Split": "90%",
        "Risk Level": "High",
        "Challenge Time": "14 days",
      };
    default:
      return {};
  }
};

const Platform = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Student");
  const [user, setUser] = useState<any>(null);

  const handleBuyClick = () => {
    if (!user) {
      toast.error("Please login to continue");
      router.push("/signin");
      return;
    }else{
      router.push("/kyc");
      return;
    }
  };

  return (
    <section className="md:pt-44 sm:pt-24 pt-12 bg-[#0f172a] min-h-screen text-white">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="bg-[#1e293b] px-8 sm:px-16 py-14 rounded-3xl border border-gray-700 flex flex-col items-center justify-center relative overflow-hidden">
          
          <div className="flex flex-wrap gap-3 mb-4">
            {stageOptions.map((opt) => (
              <button
                key={opt}
                className="bg-[#1a1f3d] text-sm px-4 py-2 rounded-full hover:bg-primary transition"
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            {planOptions.map((opt) => (
              <button
                key={opt}
                className="bg-[#1a1f3d] text-sm px-4 py-2 rounded-full hover:bg-primary transition"
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {fundingAmounts.map((amt) => (
              <button
                key={amt}
                className="bg-[#1a1f3d] text-sm px-4 py-2 rounded-full hover:bg-primary transition"
              >
                {amt}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {rewardCycles.map((cycle) => (
              <span
                key={cycle}
                className="bg-[#2e356b] text-xs px-4 py-2 rounded-full border border-primary text-white"
              >
                ✅ {cycle}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow"
                    : "bg-[#1a1f3d] text-gray-300 hover:bg-blue-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="w-full max-w-3xl bg-[#1a1f3d] border border-white/10 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white mb-8">
            {Object.entries(getValues(activeTab)).map(([key, value]) => (
              <div key={key} className="flex justify-between bg-white/5 rounded-xl px-4 py-3">
                <span className="text-gray-300">{key}</span>
                <span className="font-semibold">{value}</span>
              </div>
            ))}
          </div>

          <div className="w-full max-w-3xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white text-xl font-semibold">Account size: 100k</div>
            <div className="text-white text-xl font-semibold">Price: $529</div>
      <button
          // onClick={() => router.push("/kyc")}
          onClick={handleBuyClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
>
           Buy Challenge
           </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
"use client";
import { useState } from "react";

const ChallengeForm = () => {
  const [form, setForm] = useState({
    country: "India",
    accountType: "Two Step",
    fundingType: "FundingPips",
    profitTarget: "8%",
    platform: "MetaTrader5",
    accountSize: "$100,000",
    coupon: "",
  });

  const handleClick = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", form);
    // Proceed to payment flow...
  };

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* LEFT SIDE */}
      <div>
        <h2 className="text-xl font-bold mb-4">Setup Your Challenge</h2>

        <label className="block mb-2">1. Choose Your Country</label>
        <select
          name="country"
          value={form.country}
          onChange={(e) => handleClick("country", e.target.value)}
          className="w-full border rounded p-2 mb-4"
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>

        <label className="block mb-2">2. Choose the Account Type</label>
        <div className="flex gap-2 mb-4">
          {["Instant", "One Step", "Two Step"].map((type) => (
            <button
              key={type}
              type="button"
              className={`px-4 py-2 border rounded ${
                form.accountType === type ? "bg-blue-600 text-white" : ""
              }`}
              onClick={() => handleClick("accountType", type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          {["FundingPips", "FundingPips Pro"].map((type) => (
            <button
              key={type}
              type="button"
              className={`px-4 py-2 border rounded ${
                form.fundingType === type ? "bg-blue-600 text-white" : ""
              }`}
              onClick={() => handleClick("fundingType", type)}
            >
              {type}
            </button>
          ))}
        </div>

        <label className="block mb-2">Configure Your Student Phase</label>
        <div className="flex gap-2 mb-4">
          {["8%", "10%"].map((target) => (
            <button
              key={target}
              type="button"
              className={`px-4 py-2 border rounded ${
                form.profitTarget === target ? "bg-blue-600 text-white" : ""
              }`}
              onClick={() => handleClick("profitTarget", target)}
            >
              {target === "10%" ? "10% (-$40.00)" : target}
            </button>
          ))}
        </div>

        <label className="block mb-2">3. Choose Your Platform</label>
        <div className="flex gap-2 mb-4">
          {["MetaTrader5", "MatchTrader", "cTrader"].map((platform) => (
            <button
              key={platform}
              type="button"
              className={`px-4 py-2 border rounded ${
                form.platform === platform ? "bg-blue-600 text-white" : ""
              }`}
              onClick={() => handleClick("platform", platform)}
            >
              {platform}
            </button>
          ))}
        </div>

        <label className="block mb-2">4. Select Account Size</label>
        <div className="flex gap-2 mb-4">
          {["$5,000", "$10,000", "$25,000", "$50,000", "$100,000"].map(
            (amount) => (
              <button
                key={amount}
                type="button"
                className={`px-4 py-2 border rounded ${
                  form.accountSize === amount ? "bg-blue-600 text-white" : ""
                }`}
                onClick={() => handleClick("accountSize", amount)}
              >
                {amount}
              </button>
            )
          )}
        </div>

        <label className="block mb-2">Enter Coupon Code (Optional)</label>
        <select
          name="coupon"
          value={form.coupon}
          onChange={(e) => handleClick("coupon", e.target.value)}
          className="w-full border rounded p-2 mb-4"
        >
          <option value="">None</option>
          <option value="DISCOUNT10">DISCOUNT10</option>
          <option value="SUMMER50">SUMMER50</option>
        </select>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="border p-4 rounded bg-blue-50 mb-4">
          <p className="font-semibold">
            {form.accountSize} — {form.accountType} {form.fundingType}
          </p>
          <p>Platform: {form.platform}</p>
          <p>Country: {form.country}</p>
          {form.coupon && <p>Coupon Applied: {form.coupon}</p>}
          <p className="mt-2 font-semibold text-right text-lg">$529.00</p>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full text-white font-semibold py-3 rounded bg-blue-600 hover:bg-blue-700"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default ChallengeForm;

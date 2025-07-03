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
    firstName: "Mohammed",
    lastName: "sadik",
    billingAddress: "",
    city: "chennai",
    postalCode: "600081",
    coupon: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleClick = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (!form.agree) {
      alert("Please agree to the terms before proceeding.");
      return;
    }
    console.log("Form Submitted:", form);
    // Proceed to payment flow...
  };

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* LEFT SIDE */}
      <div>
        <h2 className="text-xl font-bold mb-4">Setup Your Challenge</h2>

        {/* Country */}
        <label className="block mb-2">1. Choose Your Country</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-4"
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>

        {/* Account Type */}
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

        {/* Funding Plan */}
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

        {/* Profit Target */}
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

        {/* Platform */}
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

        {/* Account Size */}
        <label className="block mb-2">4. Select Account Size</label>
        <div className="flex gap-2">
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
      </div>

      {/* RIGHT SIDE - Billing Details */}
      <div>
        <h2 className="text-xl font-bold mb-4">Billing Details</h2>

        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-2"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-4"
          placeholder="Last Name"
        />

        <input
          type="text"
          name="billingAddress"
          value={form.billingAddress}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-4"
          placeholder="Billing Address"
        />

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="City"
          />
          <input
            type="text"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="ZIP / Postal Code"
          />
        </div>

        <input
          type="text"
          name="coupon"
          value={form.coupon}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-4"
          placeholder="Enter coupon code"
        />

        {/* Order Summary */}
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <div className="border p-4 rounded bg-blue-50 mb-4">
          <p className="font-semibold">
            {form.accountSize} — {form.accountType} {form.fundingType}
          </p>
          <p>Platform: {form.platform}</p>
          <p className="mt-2 font-semibold text-right text-lg">$529.00</p>
        </div>

        {/* Terms */}
        <div className="border p-4 rounded mb-4">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <div className="text-sm leading-tight">
              <p>
                I have read and agreed to the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms of Use
                </a>
                .
              </p>
              <p>
                All information provided is correct and matches
                government-issued ID.
              </p>
              <p>
                I have read and agree with the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms & Conditions
                </a>
                .
              </p>
              <p>I confirm that I am not a U.S. citizen or resident.</p>
            </div>
          </label>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!form.agree}
          className={`w-full text-white font-semibold py-3 rounded ${
            form.agree ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
          }`}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default ChallengeForm;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Onboarding() {
  const router = useRouter();

  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");

  async function continueToDashboard() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please log in first.");
      return;
    }

    const { error } = await supabase.from("businesses").insert({
      user_id: user.id,
      business_name: businessName,
      business_type: businessType,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-lg space-y-6">
        <h1 className="text-4xl font-bold">
          🚀 Welcome to GrowthHub AI
        </h1>

        <p className="text-gray-400">
          Let's set up your business in a few steps.
        </p>

        <input
          className="w-full p-3 rounded text-black"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />

        <select
          className="w-full p-3 rounded text-black"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
        >
          <option value="">Select Business Type</option>
          <option>Restaurant</option>
          <option>Fashion</option>
          <option>Retail</option>
          <option>Technology</option>
          <option>Healthcare</option>
          <option>Education</option>
          <option>Other</option>
        </select>

        <button
          className="w-full bg-green-500 text-black font-bold p-3 rounded"
          onClick={continueToDashboard}
        >
          Continue
        </button>
      </div>
    </main>
  );
}

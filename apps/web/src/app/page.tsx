"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function joinWaitlist() {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("🎉 Welcome to the GrowthHub AI waitlist!");
      setEmail("");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">

        <h1 className="text-5xl font-bold">
          🚀 GrowthHub AI
        </h1>

        <p className="mt-4 text-green-400 text-xl">
          Your Business. Powered by AI.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="mt-10 w-full rounded-lg p-4 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={joinWaitlist}
          disabled={loading}
          className="mt-5 w-full rounded-lg bg-green-500 p-4 font-bold text-black"
        >
          {loading ? "Joining..." : "Join the Waitlist"}
        </button>

        {message && (
          <p className="mt-5">{message}</p>
        )}

      </div>
    </main>
  );
}

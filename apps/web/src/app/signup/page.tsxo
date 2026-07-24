"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignUp() { const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function signUp() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
      data: {
      full_name: fullName,
    },
  },
});

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(`🎉 Welcome to GrowthHub AI, ${fullName}!`);

setTimeout(() => {
  router.push("/onboarding");
}, 1000);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-4xl font-bold text-center">
          Create Your Account
        </h1>

        <input
          className="w-full p-3 rounded text-black"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="w-full p-3 rounded text-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 rounded text-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-green-500 text-black font-bold p-3 rounded"
          onClick={signUp}
        >
          Sign Up
        </button>

        <p className="text-center">{message}</p>
      </div>
    </main>
  );
}

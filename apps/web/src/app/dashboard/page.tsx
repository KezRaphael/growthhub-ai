"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import QuickActions from "@/components/QuickActions";

export default function Dashboard() {
  const [business, setBusiness] = useState<any>(null);

  useEffect(() => {
    async function loadBusiness() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("businesses")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (!error) {
        setBusiness(data);
      }
    }

    loadBusiness();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold">
        🚀 Business Command Center
      </h1>

      {business ? (
        <div className="mt-8 space-y-4">
          <h2 className="text-3xl font-semibold">
            🏢 {business.business_name}
          </h2>

          <p>Business Type: {business.business_type}</p>

          <QuickActions />

          <div className="mt-6 rounded-lg bg-gray-900 p-4">
            <h3 className="text-green-400 font-bold">
              🤖 Nova
            </h3>

            <p>
              Welcome back! Ready to grow your business today?
            </p>
          </div>
        </div>
      ) : (
        <p className="mt-6">Loading your business...</p>
      )}
    </main>
  );
}

"use client";

import { useState } from "react";
import { demoLoginAction } from "@/actions/auth";
import { LoaderCircle } from "lucide-react";

export default function DemoButton() {
  const [loading, setLoading] = useState(false);

  async function handleDemo() {
    setLoading(true);
    await demoLoginAction();
    setLoading(false);
  }

  return (
    <button
      onClick={handleDemo}
      disabled={loading}
      className="border-accent focus-visible:outline-primary/90 hover:border-chart-1 hover:text-chart-1 bg-background transform cursor-pointer rounded-full border px-8 py-3 text-sm font-semibold transition focus-visible:outline-2"
    >
      <span className="flex items-center gap-2">
        {loading && <LoaderCircle className="size-4 animate-spin" />}
        <span>{loading ? "Loading demo" : "Try the demo"}</span>
      </span>
    </button>
  );
}

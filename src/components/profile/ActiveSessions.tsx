"use client";

import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { NavIcons } from "../shared/NavIcons";

interface CurrentSession {
  browser: string;
  os: string;
  lastActive: string;
}

function detectBrowser(): string {
  if (typeof window === "undefined") return "Unknown browser";
  const ua = navigator.userAgent;
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  return "Unknown browser";
}

function detectOS(): string {
  if (typeof window === "undefined") return "Unknown OS";
  const ua = navigator.userAgent;
  if (ua.includes("Win")) return "Windows";
  if (ua.includes("Mac")) return "macOS";
  if (ua.includes("iPhone")) return "iOS";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("Linux")) return "Linux";
  return "Unknown OS";
}

export default function ActiveSessions({ isDemo }: { isDemo: boolean }) {
  const [signingOutAll, setSigningOutAll] = useState(false);

  const [session] = useState<CurrentSession>(() => ({
    browser: detectBrowser(),
    os: detectOS(),
    lastActive: "Active now",
  }));

  async function handleSignOutAll() {
    setSigningOutAll(true);
    const supabase = createClient();
    await supabase.auth.signOut({ scope: "global" });
    window.location.href = "/login";
  }

  return (
    <div className="rounded-12 bg-background flex flex-col gap-5 p-6 sm:p-8">
      <div>
        <h2 className="text-primary text-xl font-bold">Active Sessions</h2>
        <p className="text-muted-foreground mt-0.5 text-sm">
          Devices currently signed into your account.
        </p>
      </div>

      {isDemo && (
        <p className="bg-muted text-muted-foreground rounded-lg px-4 py-3 text-sm">
          Session management is not available for demo accounts.
        </p>
      )}

      <div className="flex flex-col gap-3">
        {/* Current session — always shown */}
        <div className="bg-chart-1/8 border-chart-1/20 flex items-center gap-4 rounded-lg border p-4">
          <div className="bg-chart-1/15 text-chart-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
            <DeviceIcon type={detectDeviceType()} />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-foreground text-sm font-bold">
                {session ? `${session.browser} · ${session.os}` : "Loading..."}
              </p>
              <span className="bg-chart-1/15 text-chart-1 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                This device
              </span>
            </div>
            <p className="text-muted-foreground truncate text-xs">
              Current session · Active now
            </p>
          </div>
        </div>

        {/* Note about other sessions */}
        {!isDemo && (
          <p className="text-muted-foreground bg-muted rounded-lg px-4 py-3 text-xs">
            Other active sessions are not shown. Use &quot;Sign out
            everywhere&quot; to revoke access from all devices at once.
          </p>
        )}
      </div>

      {!isDemo && (
        <div className="border-border flex justify-end border-t pt-4">
          <button
            onClick={handleSignOutAll}
            disabled={signingOutAll}
            className="text-muted-foreground hover:text-destructive focus-visible:outline-foreground flex cursor-pointer items-center gap-2 rounded-xs text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50"
          >
            {signingOutAll && <LoaderCircle className="size-3 animate-spin" />}
            Sign out everywhere
          </button>
        </div>
      )}
    </div>
  );
}

function detectDeviceType(): "desktop" | "mobile" | "tablet" {
  if (typeof window === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/tablet|ipad/i.test(ua)) return "tablet";
  if (/mobile|iphone|android/i.test(ua)) return "mobile";
  return "desktop";
}

function DeviceIcon({ type }: { type: "desktop" | "mobile" | "tablet" }) {
  if (type === "mobile") return NavIcons.mobileIcon;
  if (type === "tablet") return NavIcons.tabletIcon;
  return NavIcons.desktopIcon;
}

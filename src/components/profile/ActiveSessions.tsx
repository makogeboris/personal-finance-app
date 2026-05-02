"use client";

import clsx from "clsx";
import { useState } from "react";

interface Session {
  id: string;
  device: "desktop" | "mobile" | "tablet";
  browser: string;
  os: string;
  location: string;
  lastActive: string;
  current: boolean;
}

const mockSessions: Session[] = [
  {
    id: "1",
    device: "desktop",
    browser: "Chrome 124",
    os: "macOS",
    location: "London, UK",
    lastActive: "Active now",
    current: true,
  },
  {
    id: "2",
    device: "mobile",
    browser: "Safari 17",
    os: "iOS 17",
    location: "London, UK",
    lastActive: "2 hours ago",
    current: false,
  },
  {
    id: "3",
    device: "desktop",
    browser: "Firefox 125",
    os: "Windows 11",
    location: "Manchester, UK",
    lastActive: "Yesterday",
    current: false,
  },
];

export default function ActiveSessions() {
  const [sessions, setSessions] = useState<Session[]>(mockSessions);
  const [revoking, setRevoking] = useState<string | null>(null);

  function handleRevoke(id: string) {
    setRevoking(id);
    // simulate async — replace with your Supabase call
    setTimeout(() => {
      setSessions((prev) => prev.filter((s) => s.id !== id));
      setRevoking(null);
    }, 800);
  }

  return (
    <div className="rounded-12 bg-background flex flex-col gap-5 p-6 sm:p-8">
      <div>
        <h2 className="text-primary text-xl font-bold">Active Sessions</h2>
        <p className="text-muted-foreground mt-0.5 text-sm">
          Devices currently signed into your account.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {sessions.map((session) => (
          <div
            key={session.id}
            className={clsx(
              "flex items-center gap-4 rounded-lg p-4 transition-colors",
              session.current
                ? "bg-chart-1/8 border-chart-1/20 border"
                : "bg-muted",
            )}
          >
            <div
              className={clsx(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                session.current
                  ? "bg-chart-1/15 text-chart-1"
                  : "bg-background text-muted-foreground",
              )}
            >
              <DeviceIcon type={session.device} />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-foreground text-sm font-bold">
                  {session.browser} · {session.os}
                </p>
                {session.current && (
                  <span className="bg-chart-1/15 text-chart-1 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                    This device
                  </span>
                )}
              </div>
              <p className="text-muted-foreground truncate text-xs">
                {session.location} · {session.lastActive}
              </p>
            </div>

            {!session.current && (
              <button
                onClick={() => handleRevoke(session.id)}
                disabled={revoking === session.id}
                className="text-muted-foreground hover:text-destructive focus-visible:outline-foreground shrink-0 cursor-pointer rounded-xs text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50"
              >
                {revoking === session.id ? "Revoking…" : "Revoke"}
              </button>
            )}
          </div>
        ))}
      </div>

      {sessions.length > 1 && (
        <div className="border-border flex justify-end border-t pt-4">
          <button
            onClick={() => setSessions((prev) => prev.filter((s) => s.current))}
            className="text-muted-foreground hover:text-destructive focus-visible:outline-foreground cursor-pointer rounded-xs text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Sign out all other sessions
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Device icon ── */
function DeviceIcon({ type }: { type: "desktop" | "mobile" | "tablet" }) {
  if (type === "mobile")
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  if (type === "tablet")
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" />
    </svg>
  );
}

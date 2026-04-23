"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NavIcons } from "./NavIcons";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Overview", href: "/overview", icon: NavIcons.overview },
  { label: "Transactions", href: "/transactions", icon: NavIcons.transactions },
  { label: "Budgets", href: "/budgets", icon: NavIcons.budgets },
  { label: "Pots", href: "/pots", icon: NavIcons.pots },
  {
    label: "Recurring Bills",
    href: "/recurring-bills",
    icon: NavIcons.recurringBills,
  },
];

const profileItem: NavItem = {
  label: "Profile",
  href: "/profile",
  icon: NavIcons.profile,
};

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{ width: collapsed ? 88 : 300 }}
      initial={false}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-primary text-primary-foreground hidden h-screen shrink-0 flex-col overflow-hidden rounded-r-[16px] lg:flex"
    >
      <div className="flex items-center border-l-4 border-transparent px-8 py-10">
        {collapsed ? NavIcons.logoSmall : NavIcons.logoApp}
      </div>

      <nav
        className={clsx(
          "flex flex-1 flex-col gap-1 pt-6",
          collapsed ? "pr-2" : "pr-6",
        )}
      >
        {navItems.map((item) => (
          <SidebarLink
            key={item.href}
            item={item}
            collapsed={collapsed}
            active={pathname === item.href}
          />
        ))}
      </nav>

      <div
        className={clsx(
          "flex flex-col gap-1 pb-8",
          collapsed ? "pr-2" : "pr-6",
        )}
      >
        <div className="border-background/10 relative my-2 w-full border-t pl-8" />

        <SidebarLink
          item={profileItem}
          collapsed={collapsed}
          active={pathname === profileItem.href}
        />

        <button
          onClick={() => setCollapsed((prev) => !prev)}
          aria-label={collapsed ? "Expand menu" : "Minimize menu"}
          className="group text-ring hover:bg-background/10 hover:text-background flex min-h-14 w-full cursor-pointer items-center gap-5 rounded-r-[12px] border-l-4 border-transparent py-4 pl-8"
        >
          <motion.div
            animate={{ rotate: collapsed ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-ring group-hover:text-background shrink-0 transition-colors duration-200"
          >
            {NavIcons.minimize}
          </motion.div>

          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
                className="text-base font-bold whitespace-nowrap"
              >
                Minimize Menu
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  );
}

function SidebarLink({
  item,
  collapsed,
  active,
}: {
  item: NavItem;
  collapsed: boolean;
  active: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={clsx(
        "group flex min-h-14 items-center gap-5 rounded-r-[12px] border-l-4 py-4 pl-8 transition-colors",
        collapsed ? "px-0" : "px-4",
        active
          ? "bg-secondary text-primary border-chart-1"
          : "text-ring hover:bg-background/10 hover:text-background border-transparent",
      )}
    >
      <span
        className={clsx(
          "shrink-0 transition-colors",
          active ? "text-chart-1" : "text-ring group-hover:text-background",
        )}
      >
        {item.icon}
      </span>

      {!collapsed && (
        <AnimatePresence initial={false}>
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            className="text-base font-bold whitespace-nowrap"
          >
            {item.label}
          </motion.span>
        </AnimatePresence>
      )}
    </Link>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  const allItems = [...navItems, profileItem];

  return (
    <nav className="bg-primary fixed right-0 bottom-0 left-0 z-50 rounded-t-md px-4 pt-2 md:px-10 lg:hidden">
      <div className="flex items-end justify-between">
        {allItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "group h-fill-available flex w-full flex-col items-center justify-center gap-1 rounded-t-md border-b-4 py-2",
                active
                  ? "bg-secondary text-primary border-chart-1"
                  : "text-ring hover:bg-background/10 hover:text-background border-transparent",
              )}
            >
              <span
                className={clsx(
                  "shrink-0 transition-colors",
                  active
                    ? "text-chart-1"
                    : "text-ring group-hover:text-background",
                )}
              >
                {item.icon}
              </span>

              <span className="hidden text-xs font-bold whitespace-nowrap sm:block">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

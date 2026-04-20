import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Link href="/overview">overview</Link>
      <Link href="/transactions">transactions</Link>
      <Link href="/budgets">budgets</Link>
      <Link href="/recurring-bills">recurring bills</Link>
      <Link href="/pots">pots</Link>
      <Link href="/profile">profile</Link>
      <div>{children}</div>
    </div>
  );
}

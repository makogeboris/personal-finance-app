import { Logo } from "../shared/Logo";

export default function Header() {
  return (
    <header className="bg-foreground flex w-full items-center justify-center rounded-br-md rounded-bl-md p-6 lg:hidden">
      <Logo />
    </header>
  );
}

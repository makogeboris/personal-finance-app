import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Profile() {
  return <h1 className="text-primary text-32 font-bold">Profile</h1>;
}

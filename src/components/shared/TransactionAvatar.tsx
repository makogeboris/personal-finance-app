import Image from "next/image";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function isImageFile(avatar: string) {
  return /\.(jpg|jpeg|png|webp|svg)$/i.test(avatar);
}

export default function TransactionAvatar({
  avatar,
  name,
  size = 40,
}: {
  avatar: string;
  name: string;
  size?: number;
}) {
  if (isImageFile(avatar)) {
    return (
      <div
        className="relative shrink-0 overflow-hidden rounded-full"
        style={{ width: size, height: size }}
      >
        <Image
          src={`/avatars/${avatar}`}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  const initials = getInitials(name);

  const colors = [
    "bg-green",
    "bg-cyan",
    "bg-purple",
    "bg-navy",
    "bg-orange",
    "bg-gold",
    "bg-blue",
    "bg-magenta",
    "bg-turquoise",
    "bg-brown",
  ];
  const colorIndex =
    name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;
  const bgColor = colors[colorIndex];

  return (
    <div
      className={`${bgColor} flex shrink-0 items-center justify-center rounded-full font-bold text-white`}
      style={{ width: size, height: size, fontSize: size * 0.35 }}
    >
      {initials}
    </div>
  );
}

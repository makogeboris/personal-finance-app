import Image from "next/image";

export default function Logo() {
  return (
    <div className="text flex items-center">
      <Image
        width={40}
        height={40}
        src="/icons/icon-app.png"
        alt=""
        style={{ width: "auto", height: "auto" }}
        className="w-8 md:w-10"
        placeholder="empty"
        priority
      />

      <div className="relative h-8 w-24.25 md:w-30.5">
        <Image
          src="/icons/logo-large.svg"
          alt="finance"
          fill
          className="object-contain"
          placeholder="empty"
          priority
        />
      </div>
    </div>
  );
}

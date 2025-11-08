import Image from "next/image";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export default function Logo() {
  return (
    <div className="flex items-center gap-1.25">
      <Image
        width={1299}
        height={50}
        style={{ width: "50px", height: "32px", objectFit: "contain" }}
        src="/logo.png"
        alt="Logo"
      />
      <span
        className={`justify-start text-black text-4xl font-bold ${montserrat.className} antialiased`}
      >
        Furniro
      </span>
    </div>
  );
}

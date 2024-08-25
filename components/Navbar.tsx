"use client";
import Link from "next/link";
import BtnInstall from "./buttons/Install";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const isInstallRoute = usePathname() === "/install";

  return (
    <nav
      className={`flex ${
        isInstallRoute ? "justify-center" : "justify-between"
      } items-center px-10 py-5 border-b-greenDark/15 border-b drop-shadow-md`}
    >
      <Link
        href="/"
        className="font-extrabold text-2xl -skew-x-12 hover:skew-x-0 transition-all duration-200"
      >
        Ad<span className="text-primary">Cense</span>
      </Link>
      {!isInstallRoute && (
        <div className="flex gap-1">
          <BtnInstall />
        </div>
      )}
    </nav>
  );
}

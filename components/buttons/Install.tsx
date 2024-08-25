import Link from "next/link";
import ChromeIcon from "../svg/ChromeIcon";

export default function BtnInstall() {
  return (
    <Link
      href="/install"
      className="flex gap-2 px-4 py-2 border-greenDarker border-2 bg-greenDarker text-greenLight font-semibold hover:bg-primary hover:px-7 hover:border-primary transition-all"
    >
      <ChromeIcon />
      Get AdCense
    </Link>
  );
}

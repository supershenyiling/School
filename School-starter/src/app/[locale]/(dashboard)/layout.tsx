import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[26%] sm:w-[20%] md:w-[16%] lg:w-[14%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logoCopy.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">爱特精英</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[74%] sm:w-[80%] md:w-[84%] lg:w-[86%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

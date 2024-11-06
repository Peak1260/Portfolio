'use client'

import { usePathname } from "next/navigation";
import { Navbar } from "./nav";
import Footer from "./footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
      {!isLandingPage && <Navbar />}
      <div className="flex-1 h-fit">
        {children}
      </div>
      {!isLandingPage && <Footer />}
    </main>
  );
}
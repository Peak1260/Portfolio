'use client'

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[920px] w-full">
      <div className="flex-1 h-fit">
        {children}
      </div>
      {<Footer />}
    </main>
  );
}
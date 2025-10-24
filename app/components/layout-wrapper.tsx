'use client'

import Footer from "./footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col flex-grow min-w-0 px-6 sm:px-4 md:px-0 max-w-[920px] w-full mt-2 md:mt-8 pb-8">

      <div className="flex-grow h-fit">

        {children}
      </div>

      <div className="flex-shrink-0">
        <Footer />
      </div>
    </main>
  );
}
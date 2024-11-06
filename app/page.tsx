import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="fixed inset-0">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
        <h1 className="text-5xl font-bold mb-4 text-center whitespace-normal break-normal max-w-[90vw]">
          Peak Manopchantaroj
        </h1>
        <h2 className="text-3xl mb-16 text-neutral-600 dark:text-neutral-400 text-center">
          Computer Engineer
        </h2>
        <Link
          href="/home"
          className="text-2xl hover:opacity-70 transition-opacity"
        >
          Enter Site →
        </Link>
      </div>
    </div>
  );
}
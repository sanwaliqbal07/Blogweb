// "use client";

import Link from "next/link";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
       className="fixed top-0 left-0 z-50 w-full bg-white/95 text-black border-b backdrop-blur flex items-center justify-between px-4 h-14 shadow-md"
    >
      <div className="py-2 text-center text-sm">
       blogsboi
      </div>
      <nav className="flex space-x-6 text-sm font-medium">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/about" className="hover:text-blue-500">About</Link>
        <Link href="/contact" className="hover:text-blue-500">Contact</Link>
      </nav>
    </div>
  );
}

"use client";

import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: any) {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div>{children}</div>
    </div>
  );
}

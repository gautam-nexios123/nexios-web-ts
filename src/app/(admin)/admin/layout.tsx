"use client";

export default function RootLayout({ children }: any) {
  return (
    <div className="min-h-screen">
      <div>{children}</div>
    </div>
  );
}

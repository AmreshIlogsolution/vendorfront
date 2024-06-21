import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vendor Portal",
  description: "Welcome to vendor Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>Public Layoout</div>

      <div>{children}</div>
    </main>
  );
}

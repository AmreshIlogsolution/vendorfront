import Navigation from "@/components/bars/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vendor Portal",
  description: "Welcome to vendor Portal",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>
        <Navigation />
      </div>

      <div>{children}</div>
    </main>
  );
}

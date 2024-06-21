"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div
        className=" text-[42px] font-bold space-x-5
       tracking-widest"
      >
        <span className="">Vendor</span>

        <span className=" text-blue-800">Central</span>
      </div>

      <div className=" w-full flex items-center justify-center space-x-10">
        <Button onClick={() => router.push("/login")}>Go to Login</Button>
        <Button onClick={() => router.push("/dashboard")}>
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
}

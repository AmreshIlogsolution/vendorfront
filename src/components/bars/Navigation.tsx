"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { removeUser } from "@/action/Client";

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoutButton = () => {
    removeUser();
  };

  return (
    <nav className=" py-1 flex justify-between items-center  px-6 shadow-md">
      <div className=" flex gap-x-10 items-center ">
        <div className=" flex items-center justify-center">
          <svg
            version="1.1"
            viewBox="0 0 1550 1900"
            width="80"
            height="80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              transform="translate(750,235)"
              d="m0 0h20l31 2 24 4 29 8 17 7 5 5v6l-5 8-7 3-60 13-48 13-43 15-36 14-20 9-22 12-27 14-20 12-15 10-14 9-16 12-14 11-13 11-11 9-11 10-8 7-10 10h-2l-2 4h-2l-2 4-11 11-7 8-8 9-18 22-11 14-13 19-10 14-7 11-12 20-10 18-12 23-9 20-12 30-11 33-13 52-6 37-4 39-1 12v58l3 33 4 29 6 34 12 46 14 41 12 29 11 24 8 16 12 22 12 20 8 12 11 16 11 15 11 14 12 14 9 10 12 13 25 25 8 7 10 9 11 9 16 13 18 13 30 20 25 15 24 13 23 12 31 14 34 13 37 12 37 10 37 8 33 5 40 4 47 3h35l38-2 38-4 41-7 56-14 39-12 34-11 4-1h10l7 6 2 5-1 7-6 10-7 7-20 14-18 11-35 18-17 8-32 13-25 9-22 7-28 8-40 9-36 6-39 8-80 3h-20l-54-3-40-4-29-5-39-9-50-15-30-11-42-18-16-8-25-13-16-9-21-13-12-8-19-13-14-10-13-10-18-14-11-10-8-7-33-31-13-13-7-8-14-15-9-11-11-13-27-36-13-19-14-22-10-17-16-29-15-30-16-38-11-30-11-34-11-42-6-30-6-45-3-36v-81l3-34 7-48 9-40 9-33 13-40 7-18 14-33 8-17 10-19 13-24 8-13 13-21 13-19 13-18 13-16 8-10 9-11 29-31 6-6h2v-2l8-7 7-7 8-7 13-11 13-10 17-13 24-16 21-13 24-13 19-10 21-10 35-14 19-7 36-10 24-6 32-6 29-4z"
              fill="#000000"
            />
            <path
              transform="translate(1250,710)"
              d="m0 0 4 2 8 10 12 14 11 14 14 19 10 14 11 17 14 25 10 19 8 18 10 28 9 36 4 27 1 14v55l-2 21-4 23-7 29-5 17-11 30-14 29-11 20-9 14-12 17-14 18-16 20-29 29-11 9-17 14-19 13-14 9-17 10-29 15-23 10-24 9-19 6-32 8-23 4-28 3-16 1h-23l-35-2-27-3-26-5-21-6-17-5-25-9-18-8-23-11-22-12-14-9-17-12-11-9-13-10-13-12-10-9-18-18-7-8-11-13-13-17-10-14-11-16-16-23-9-14-3-6v-5l5 1 22 13 23 12 27 11 36 12 21 6 34 6 23 3h30l13-2 20-5 18-8 16-10 17-16 11-11 7-8 11-13 13-17 11-13 13-17 7-8 8-10 11-13 11-14 11-13 8-10 14-17 8-10 11-13 18-22 14-17 9-11 9-10 8-10 12-14 11-13 9-11 12-14 9-10 9-11 9-10 7-8 11-12 8-10 18-20 11-12 9-10 7-8 6-7h2l2-4 15-16z"
              fill="#49108B"
            />
            <path
              transform="translate(950,410)"
              d="m0 0h27l36 2 34 4 31 7 29 8 20 7 33 13 26 12 10 5-1 2-6 1-6 5-10 13-28 34-9 11-13 16-11 14-13 16-8 10-14 17-11 14-10 13-13 16-11 14-12 14-8 10-10 13-7 9-13 16-10 13-13 16-13 17-12 15-26 34-20 25-24 32-8 11-11 14-10 13-8 11-7 10-8 11-14 19-7 11-10 13-12 17-13 18-10 14-6 9-6-4-13-11-28-28-7-8-13-15-18-22-10-13-10-15-15-25-14-27-10-26-8-24-5-22-4-25-1-10v-35l2-21 5-31 6-23 11-30 14-29 13-22 13-19 13-16 9-10 15-16 15-14 10-9 20-15 13-9 15-10 12-7 16-8 22-10 24-9 24-7 29-7 34-5z"
              fill="#49108B"
            />
          </svg>
        </div>

        <ul className=" flex items-center text-[16px] gap-x-6 tracking-wide font-semibold justify-start">
          <li>
            <Link
              className={`  ${pathname === "/dashboard" ? "link" : ""}`}
              href="/dashboard"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`  ${pathname === "/invoice" ? "link" : ""}`}
              href="/invoice"
            >
              Invoices
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={`  ${pathname === "/documents" ? "link" : ""}`}
              href="/documents"
            >
              Documents
            </Link>
          </li>
          <li>Addon</li>
        </ul>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className=" bg-[#49108B] focus:bg-[#49108B] focus:outline-none focus:ring-0 active:bg-[#491078] hover:bg-[#491078] max-w-[150px] w-full">
            Profile
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              size="sm"
              onClick={handleLogoutButton}
              className=" w-full bg-red-700 hover:bg-red-600 active:bg-red-700 active:scale-95"
            >
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navigation;

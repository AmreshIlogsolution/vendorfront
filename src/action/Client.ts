import Cookies from "js-cookie";
import axiosInstance from "@/lib/axiosInstance";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { NextResponse } from "next/server";

interface UserProps {
  email: string;
  password: string;
}

export const getUser = async (User: UserProps) => {
  try {
    console.log("this is user", User);
    const res = await axiosInstance.post("/login", User);
    console.log(res);
    Cookies.set("session", res.data.access_token, {
      expires: 2,
    });

    console.log(res);
    toast({
      title: `Hey ${res.data.LoggedIn}!`,
      description: "Welcome to Vendor Certral",
    });
    window.location.reload();
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error fetching data:", error.response.data);
      return { error: error.response.data };
    } else {
      console.error("Internal Error:", error.message);
      return { error: "Internal Server Error" };
    }
  }
};

export const removeUser = () => {
  Cookies.remove("session");
  window.location.reload();
};

const Client = () => {};

"use server";

import { getUser } from "@/action/Client";

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    console.log(formData);
    // await getUser(formData)
  } catch (error: any) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

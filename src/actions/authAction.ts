'use server';

import { login } from "@/services/apiService";
import { User } from "@/types/types";
import { RedirectType, redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function authenticate(
    email: string,
    password: string
) {
    const data = await login(email, password);
    cookies().set("currentUser", JSON.stringify(data))
    return data;
}

export async function googleAuthenticate(
    user: User, 
) {
    cookies().set("currentUser", JSON.stringify(user))
    redirect("/home", RedirectType.push)
}
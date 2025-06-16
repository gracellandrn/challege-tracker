"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function loginAction(_, formData) {
    const cookieStore = await cookies();
    const user = cookieStore.get("username");

    if (user) {
        redirect("/tracker");
    }

    const username = formData.get('username');
    const password = formData.get('password');

    if (!username || !password) {
        return {
            status: 'error',
            message: 'username and password are required'
        }
    }

    const res = await fetch("https://v1.appbackend.io/v1/rows/lNIxD3xofbCd");
    const data = await res.json();
    const users = data.data;

    const match = users.find((user) => user.username === username && user.password === password)

    if (!match) {
        return {
            status: 'error',
            message: 'Invalid username or password',
        }
    }

    cookieStore.set("username", username);

    redirect('/tracker');

}

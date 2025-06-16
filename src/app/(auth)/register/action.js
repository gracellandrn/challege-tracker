"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function registerAction(_, formData) {
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

    const usernameExists = data.data.find(user => user.username === username);

    if (usernameExists) {
        return {
            status: 'error',
            message: 'Username already exists.'
        }
    }

    await fetch("https://v1.appbackend.io/v1/rows/lNIxD3xofbCd", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{ username, password }])
    })

    const cookieStore = await cookies();
    cookieStore.set("username", username);

    redirect('/tracker');
}

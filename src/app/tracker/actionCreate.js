"use server";

import { getUsername } from "@/utils/getUsername";
import { revalidatePath } from "next/cache";

export async function createTrackerAction(_, formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const duration = formData.get("duration");
    const username = await getUsername();

    if (!title || !description || !duration) {
        return {
            status: "error",
            message: "Fill the details!"
        }
    }

    await fetch("https://v1.appbackend.io/v1/rows/lNIxD3xofbCd", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{ username, password: "", title, duration, description, progress: "" }])
    })

    revalidatePath('/tracker');

    return {
        status: "success"
    };
}
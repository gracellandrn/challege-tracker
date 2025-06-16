"use server";

import { revalidatePath } from "next/cache";

export async function deleteTrackerAction(formData) {
    const id = formData.get("id");

    await fetch("https://v1.appbackend.io/v1/rows/lNIxD3xofbCd", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([id])
    })

    revalidatePath("/tracker");
}
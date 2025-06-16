"use server";

import { revalidatePath } from "next/cache";

export async function updateProgressAction(_, formData) {
    const id = formData.get("id");
    const day = Number(formData.get("day"));
    const note = formData.get("note");

    if (!day || !note) {
        return {
            status: 'error',
            message: 'day and note are required!'
        }
    }
    const res = await fetch(`https://v1.appbackend.io/v1/rows/lNIxD3xofbCd/${id}`);
    const data = await res.json();

    // if (!data) return;

    let currentProgress = [];
    if (data.progress) {
        try {
            currentProgress = JSON.parse(data.progress);
        } catch {
            currentProgress = [];
        }
    }

    // Update progress
    const updatedProgress = [...currentProgress.filter(p => p.day !== day), { day, note }];

    await fetch("https://v1.appbackend.io/v1/rows/lNIxD3xofbCd", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                _id: data._id,
                username: data.username,
                password: data.password,
                title: data.title,
                duration: data.duration,
                description: data.description,
                progress: JSON.stringify(updatedProgress),
            },
        ),
    });

    console.log(data._id, data.username, data.password, data.title, data.duration, data.description, updatedProgress,);

    revalidatePath(`/tracker/${id}`);
}

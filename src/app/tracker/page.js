import { Card, CardContent } from "@/components/ui/card";
import { getUsername } from "@/utils/getUsername";
import Link from "next/link";
import { FormCreate } from "./formCreate";
import { FormDelete } from "./formDelete";
import { Button } from "@/components/ui/button";
import moment from "moment";
import Avatar from "boring-avatars";
import FormLogout from "./formLogout";

export default async function Page() {
    const username = await getUsername();
    const res = await fetch(`https://v1.appbackend.io/v1/rows/lNIxD3xofbCd/?filterKey=username&filterValue=${username}`);
    const { data: trackers } = await res.json();

    // Filter hanya data yang valid sebagai challenge
    const challenges = trackers.filter(
        (tracker) => tracker.title && tracker.description && tracker.duration
    );

    return (
        <main className="p-6 max-w-3xl mx-auto mt-4">

            <div className="md:flex md:justify-between md:items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Challenges</h2>
                <div className="flex gap-2">
                    <FormCreate />
                    <FormLogout />
                </div>
            </div>
            <div className="flex gap-4 mt-10 mb-4">
                <Avatar name={username} className="w-6 h-6" variant="beam" />
                <p>Welcome, {username}</p>
            </div>

            {challenges.length === 0 ? (
                <p className="text-gray-500">You have no challenges yet. Let’s start one!</p>
            ) : (
                <div className="grid gap-4">

                    {challenges.map((challenge) => (
                        <div
                            key={challenge._id}
                            className="block hover:shadow-md transition-shadow rounded-xl"
                        >
                            <Card className="bg-white shadow-sm rounded-xl border border-gray-200 ">
                                <CardContent className="p-5 flex justify-between space-y-2">
                                    <div className="space-y-2">

                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {challenge.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {challenge.description}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Duration: <span className="font-medium">{challenge.duration} days</span>
                                        </p>
                                        <p className="text-sm text-zinc-300">{moment(challenge.createdAt).format("MMM Do, YYYY")}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <Link href={`/tracker/${challenge._id}`}><Button variant="outline" className="cursor-pointer">Update Progress</Button></Link>
                                        <FormDelete id={challenge._id} />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            )}


        </main>
    )
}

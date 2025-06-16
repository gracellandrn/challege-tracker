// /tracker/[id]/page.jsx
import { Card, CardContent } from "@/components/ui/card";
import { FormUpdateProgress } from "./formProgress";

export default async function TrackerDetail({ params }) {
    const { id } = await params;
    const res = await fetch(`https://v1.appbackend.io/v1/rows/lNIxD3xofbCd/${id}`);
    const tracker = await res.json();

    const progress = tracker.progress ? JSON.parse(tracker.progress) : [];

    return (
        <main className="p-6 max-w-xl mx-auto space-y-6 mt-8">
            <Card>
                <CardContent>
                    <h1 className="text-2xl font-bold">{tracker.title}</h1>
                    <p className="text-gray-600">{tracker.description}</p>
                    <p className="text-sm text-gray-500">Duration: {tracker.duration} days</p>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold">Progress</h2>
                        {progress.length === 0 && <p className="text-gray-500">No progress yet.</p>}
                        {progress.map((p) => (
                            <div key={p.day} className="border rounded p-2 text-sm">
                                <strong>Day {p.day}:</strong> {p.note}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <FormUpdateProgress id={id} duration={tracker.duration} /> </CardContent>
            </Card>
        </main>
    );
}

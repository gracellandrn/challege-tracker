import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-white to-gray-100 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Build Consistency with <span className="text-blue-600">Challenge Tracker</span>
        </h1>
        <p className="text-md text-gray-600 mt-20 mb-8">
          Small habits lead to big results. Challenge Tracker helps you stay committed to your goals by tracking daily progress. Whether you&apos;re trying to exercise, read, or learn a new skill — this tool keeps you on track.
        </p>

        <p className="text-sm text-gray-500 italic">
          “We are what we repeatedly do. Excellence, then, is not an act, but a habit.” — Aristotle
        </p>

        <div className="pt-4">
          <Link href="/register">
            <Button className="p-6 text-lg rounded-full cursor-pointer mt-6">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

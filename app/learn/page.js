"use client";
import { useRouter } from "next/navigation";

export default function LearnPage() {
  const router = useRouter();
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Learn About YouTube Copyright
      </h1>
      <p className="text-gray-700 text-center mb-6">
        Educational resources from HIRXWRLD LLC to help creators understand
        copyright, fair use, and YouTube’s content policies.
      </p>

      <ul className="space-y-6">
        <li>
          <a
            href="/learn/song-copyright"
            className="block p-4 rounded-lg shadow hover:shadow-md transition bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">
              How to Check if a Song Is Copyrighted Before Uploading to YouTube
            </h2>
            <p className="text-gray-600">
              Learn how to identify copyrighted songs and avoid strikes before uploading your content.
            </p>
          </a>
        </li>
        <li>
          <a
            href="/learn/copyright-strike"
            className="block p-4 rounded-lg shadow hover:shadow-md transition bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">
              What Happens When You Get a Copyright Strike on YouTube
            </h2>
            <p className="text-gray-600">
              Understand YouTube’s copyright strike system and what actions you can take.
            </p>
          </a>
        </li>
        <li>
          <a
            href="/learn/fair-use-myths"
            className="block p-4 rounded-lg shadow hover:shadow-md transition bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">
              Top 5 Common Myths About Fair Use
            </h2>
            <p className="text-gray-600">
              Debunking common misconceptions creators have about fair use protection.
            </p>
          </a>
        </li>
      </ul>

      <br></br>

      <button
        onClick={() => router.back()}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
      >
        Return Home
      </button>
    </main>
  );
}

"use client";
import { useRouter } from "next/navigation";

export default function CopyrightStrikePage() {
      const router = useRouter();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        What Happens When You Get a Copyright Strike on YouTube
      </h1>
      <p className="text-gray-700 mb-4">
        A YouTube copyright strike means a copyright owner submitted a formal
        complaint to YouTube claiming your video used their content without permission.
      </p>
      <p className="text-gray-700 mb-4">
        Here’s what happens after receiving one:
      </p>
      <ul className="list-decimal ml-6 text-gray-700 space-y-2">
        <li>Your video is removed and your account receives a strike.</li>
        <li>After <strong>three strikes</strong> within 90 days, your channel may be terminated.</li>
        <li>You can file a counter-notification if you believe it’s a mistake.</li>
        <li>Strikes expire after 90 days if you complete YouTube’s Copyright School.</li>
      </ul>
      <p className="mt-6 text-gray-700">
        Always ensure your content follows fair use and licensing policies before
        uploading to prevent future issues.
      </p>

      <br></br>

      <button
        onClick={() => router.back()}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
      >
        ← Go Back
      </button>
    </main>
  );
}

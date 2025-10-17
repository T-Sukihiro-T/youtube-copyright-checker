"use client";
import { useRouter } from "next/navigation";

export default function SongCopyrightPage() {
    const router = useRouter();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        How to Check if a Song Is Copyrighted Before Uploading to YouTube
      </h1>
      <p className="text-gray-700 mb-4">
        Uploading music without verifying its copyright status can lead to strikes,
        demonetization, or even video removal. Here’s how to check safely:
      </p>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Use YouTube’s built-in <strong>Music Policies</strong> database (if available in your region).</li>
        <li>Search the song in the YouTube Content ID system or upload privately to test for matches.</li>
        <li>Use the <strong>YouTube Copyright Checker</strong> by HIRXWRLD to analyze metadata for known claims.</li>
        <li>When in doubt, choose royalty-free or Creative Commons-licensed tracks.</li>
      </ul>
      <p className="mt-6 text-gray-700">
        Always credit creators properly and read license terms carefully. Copyright
        protection applies automatically to most music — even if it’s old or not
        commercially released.
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

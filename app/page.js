"use client";
import { useState } from "react";
import ResultCard from "./components/ResultCard";

export default function Home() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleCheck() {
    setLoading(true);
    try {
      const res = await fetch(`/api/check?url=${encodeURIComponent(url)}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
      <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_250px] gap-6 w-full max-w-[1400px] mx-auto px-4 items-start">

      <div className="hidden lg:block w-[250px]" />

      {/* 🧭 Center Section */}
      <div className="flex flex-col items-center justify-start w-full">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[700px]">
          <h1 className="text-3xl font-bold mb-4 text-center text-red-600">
            YouTube Copyright Checker
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Paste a YouTube video link below to analyze its copyright risk.
          </p>

          <div className="flex gap-2 mb-4 justify-center">
            <input
              className="border rounded px-3 py-2 w-2/3 focus:outline-red-500"
              placeholder="Paste YouTube URL..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={handleCheck}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              disabled={!url || loading}
            >
              {loading ? "Checking..." : "Check"}
            </button>

            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            > Reload </button>
          </div>

          {data && <ResultCard data={data} />}
        </div>

        {/* about section */}
        <section className="mt-10 text-gray-700 max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-3">What Is This Tool?</h2>
          <p className="text-sm leading-relaxed">
            The YouTube Copyright Checker by HIRXWRLD helps creators instantly analyze
            any YouTube link for potential copyright claims. Our system checks for
            copyrighted music, reused content, and other copyright indicators using
            automated detection logic. This tool is designed to help you create safely
            and protect your channel from strikes.
          </p>

          <br></br>

          <p className="text-sm leading-relaxed">
            Disclaimer: HIRXWRLD LLC is not responsible for any actions, penalties, or 
            claims resulting from the use of this tool. The YouTube Copyright Checker provides 
            informational results only and does not constitute legal advice. Creators are 
            solely responsible for reviewing and managing their own content and copyright compliance.
          </p>
        </section>

        <div className="text-center mt-8">
          <a
            href="/learn"
            className="text-red-600 hover:underline font-semibold"
          >
            Click here to learn more about copyright and fair use!
          </a>
        </div>
        
        <section className="mt-8 text-gray-700 w-full max-w-[700px]">
          <h2 className="text-xl font-semibold mb-4">FAQ</h2>

          <div className="space-y-3 text-sm w-full">
            <details className="bg-white shadow-sm rounded-lg p-3 w-full max-w-[700px]">
              <summary className="font-semibold cursor-pointer text-gray-800">
                How does it work?
              </summary>
              <p className="mt-2 text-gray-700">
                It analyzes YouTube video metadata and public copyright information.
              </p>
            </details>

            <details className="bg-white shadow-sm rounded-lg p-3 w-full max-w-[700px]">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Is this tool free?
              </summary>
              <p className="mt-2 text-gray-700">
                Yes, it’s completely free to use.
              </p>
            </details>

            <details className="bg-white shadow-sm rounded-lg p-3 w-full max-w-[700px]">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Do I need to log in?
              </summary>
              <p className="mt-2 text-gray-700">
                Nope! Just paste a link and check instantly.
              </p>
            </details>
          </div>
        </section>


        <div className="hidden lg:block w-[250px]" />
      </div>
      
    </div>
  );
}

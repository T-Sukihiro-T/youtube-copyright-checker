"use client";
import { useState } from "react";
import ResultCard from "./components/ResultCard";
import AdBanner from "./components/AdBanner";
import AdSideBar from "./components/AdSideBar";
import AdSidebarLeft from "./components/AdSidebarLeft"; 

export default function Home() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAd, setShowAd] = useState(false);

  async function handleCheck() {
    setShowAd(true);
    setTimeout(async () => {
      setShowAd(false);
      setLoading(true);
      const res = await fetch(`/api/check?url=${encodeURIComponent(url)}`);
      const json = await res.json();
      setData(json);
      setLoading(false);
    }, 7000);
  }

  return (
      <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_250px] gap-6 w-full max-w-[1400px] mx-auto px-4 items-start">
      {/* Left Sidebar */}
      <AdSidebarLeft />

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
          </div>

          {showAd && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 text-white">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h2 className="text-lg mb-4">Watching short ad…</h2>
                <div className="h-40 w-80 bg-gray-800 flex items-center justify-center">
                  <p>Advertisement</p>
                </div>
              </div>
            </div>
          )}

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
        </section>

        <section className="mt-8 max-w-2xl mx-auto text-gray-700">
          <h2 className="text-xl font-semibold mb-3">FAQ: </h2>
          <div className="space-y-3 text-sm">
            <p><strong>How does it work?</strong> It analyzes YouTube video metadata and public copyright information.</p>
            <p><strong>Is this tool free?</strong> Yes, it’s completely free to use.</p>
            <p><strong>Do I need to log in?</strong> Nope! Just paste a link and check instantly.</p>
          </div>
        </section>

        {/* Banner Sidebar */}
        <AdBanner />
      </div>
      

      {/* Right Sidebar */}
      <AdSideBar />
    </div>
  );
}

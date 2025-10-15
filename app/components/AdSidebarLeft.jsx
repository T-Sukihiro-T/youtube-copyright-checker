"use client";
import { useEffect } from "react";

export default function AdSidebarLeft() {
  useEffect(() => {
    try {
        const ads = document.getElementsByClassName("adsbygoogle");
        // Only push if ad slot hasn’t been filled yet
        for (let i = 0; i < ads.length; i++) {
        if (!ads[i].getAttribute("data-adsbygoogle-status")) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        }
    } catch (e) {
        console.error("AdSense error:", e);
    }
  }, []);


  return (
    <aside className="hidden lg:flex flex-col items-center justify-start gap-4 p-4 bg-white border border-gray-200 shadow-sm rounded-lg w-[250px] sticky top-6">
      <h3 className="font-semibold text-gray-700 text-sm mb-2 tracking-wide">
        Sponsored
      </h3>

      {/* Ad box 1 */}
      <div className="w-full h-60 bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm shadow-inner hover:shadow transition-all duration-200">
        Ad Placement
      </div>

      {/* Ad box 2 */}
      <div className="w-full h-60 bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm shadow-inner hover:shadow transition-all duration-200">
        Ad Placement
      </div>
    </aside>
  );
}

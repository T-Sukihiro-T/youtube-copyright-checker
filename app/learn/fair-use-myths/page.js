"use client";
import { useRouter } from "next/navigation";

export default function FairUseMythsPage() {
    const router = useRouter();
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Top 5 Common Myths About Fair Use
      </h1>
      <p className="text-gray-700 mb-4">
        Fair use is one of the most misunderstood topics in copyright law. Let’s
        clear up the biggest misconceptions:
      </p>
      <ol className="list-decimal ml-6 text-gray-700 space-y-3">
        <li>
          <strong>“If I credit the creator, it’s fair use.”</strong>  
          — False. Attribution does not replace permission.
        </li>
        <li>
          <strong>“Using less than 10 seconds is fine.”</strong>  
          — False. There’s no fixed time limit for fair use.
        </li>
        <li>
          <strong>“Nonprofit or educational use is automatically fair.”</strong>  
          — False. Context and purpose still matter.
        </li>
        <li>
          <strong>“Fair use is the same worldwide.”</strong>  
          — False. Laws differ by country.
        </li>
        <li>
          <strong>“If it’s on the internet, it’s free to use.”</strong>  
          — Definitely false. Copyright applies to nearly all creative works.
        </li>
      </ol>
      <p className="mt-6 text-gray-700">
        When in doubt, always check licenses, get permission, or use original content.
        Fair use is a defense, not a guarantee.
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

import { useState } from "react";

export default function OutputBox({ emailOutput }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        Generated Email
      </h2>

      {emailOutput ? (
        <>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">
            {emailOutput}
          </pre>

          <button
            onClick={handleCopy}
            className="w-full mt-5 border py-2 rounded-lg hover:bg-gray-50 transition"
          >
            {copied ? "Copied ✅" : "Copy Email"}
          </button>
        </>
      ) : (
        <p className="text-gray-500 text-sm">
          No email generated yet.
        </p>
      )}
    </div>
  );
}

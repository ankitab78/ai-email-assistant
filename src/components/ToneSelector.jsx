export default function ToneSelector({ tone, setTone }) {
  const tones = ["Professional", "Polite", "Friendly", "Formal"];

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-2">
        Tone
      </label>

      <div className="flex flex-wrap gap-2">
        {tones.map((t) => (
          <button
            key={t}
            onClick={() => setTone(t)}
            className={`px-4 py-1.5 rounded-full text-sm border transition ${
              tone === t
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}

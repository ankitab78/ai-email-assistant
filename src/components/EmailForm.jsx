import { useState, useEffect } from "react";
import ToneSelector from "./ToneSelector";
import { emailTemplates } from "./emailTemplates";
import jsPDF from "jspdf";

export default function EmailForm({ setEmailOutput }) {
  const [type, setType] = useState("Leave Request");
  const [tone, setTone] = useState("Professional");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [history, setHistory] = useState([]);
  const [lastEmail, setLastEmail] = useState("");

  const maxChars = 500;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("emailHistory")) || [];
    setHistory(saved);
  }, []);

  const saveToHistory = (email) => {
    const updated = [email, ...history].slice(0, 5);
    setHistory(updated);
    localStorage.setItem("emailHistory", JSON.stringify(updated));
  };

  const handleGenerate = () => {
    if (!details.trim()) {
      setError("Email content is required.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      const email = `Subject: ${type}\n\nTone: ${tone}\n\n${details}`;
      setEmailOutput(email);
      setLastEmail(email);
      saveToHistory(email);

      setLoading(false);
      setSuccess("Email generated successfully ✔");
      setTimeout(() => setSuccess(""), 2000);
    }, 800);
  };

  const handleTemplateSelect = (key) => {
    const tpl = emailTemplates[key];
    setType(tpl.type);
    setDetails(tpl.content);
  };

  // ✏ Rewrite
  const handleRewrite = (mode) => {
    let updated = details;

    if (mode === "short") {
      updated = details.split(" ").slice(0, 25).join(" ") + "...";
    }

    if (mode === "polite") {
      updated = "Please note that " + details.charAt(0).toLowerCase() + details.slice(1);
    }

    if (mode === "professional") {
      updated = "I would like to inform you that " + details.charAt(0).toLowerCase() + details.slice(1);
    }

    setDetails(updated);
  };

  // 📄 PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Times", "Normal");

    doc.setFontSize(16);
    doc.text("AI Email Assistant", 20, 20);

    doc.setFontSize(11);
    doc.text(lastEmail, 20, 35, { maxWidth: 170 });

    doc.save("AI_Email.pdf");
  };

  return (
    <div className="backdrop-blur-md bg-white/90 rounded-2xl shadow-xl p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Email Details
      </h2>

      {/* Template */}
      <label className="block text-sm text-gray-600 mb-1">Use Template</label>
      <select
        className="w-full border rounded-lg px-3 py-2 mb-4"
        onChange={(e) => handleTemplateSelect(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Select template</option>
        {Object.keys(emailTemplates).map((key) => (
          <option key={key}>{key}</option>
        ))}
      </select>

      {/* Type */}
      <label className="block text-sm text-gray-600 mb-1">Email Type</label>
      <select
        className="w-full border rounded-lg px-3 py-2 mb-4"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>Leave Request</option>
        <option>Follow Up</option>
        <option>Job Application</option>
        <option>Client Email</option>
      </select>

      <ToneSelector tone={tone} setTone={setTone} />

      {/* Content */}
      <label className="block text-sm text-gray-600 mt-4 mb-1">Email Content</label>
      <textarea
        className="w-full border rounded-lg px-3 py-2 h-32 resize-none"
        value={details}
        maxLength={maxChars}
        onChange={(e) => setDetails(e.target.value)}
        onKeyDown={(e) => e.ctrlKey && e.key === "Enter" && handleGenerate()}
      />

      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span className="text-red-500">{error}</span>
        <span>{details.length}/{maxChars}</span>
      </div>

      {/* Rewrite */}
      {details.trim() && (
        <div className="flex flex-wrap gap-2 mt-3">
          <button onClick={() => handleRewrite("short")} className="text-xs px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">✂ Shorter</button>
          <button onClick={() => handleRewrite("polite")} className="text-xs px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">😊 Polite</button>
          <button onClick={() => handleRewrite("professional")} className="text-xs px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">💼 Professional</button>
        </div>
      )}

      {success && <p className="text-green-600 text-sm mt-3">{success}</p>}

      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`w-full mt-5 py-2 rounded-lg text-white font-medium ${
          loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Generating…" : "Generate Email"}
      </button>

      {/* PDF */}
      {lastEmail && (
        <button
          onClick={handleDownloadPDF}
          className="w-full mt-3 py-2 rounded-lg border border-blue-600
                     text-blue-600 hover:bg-blue-50 transition text-sm font-medium"
        >
          ⬇ Download as PDF
        </button>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Recent Emails</h3>
          <ul className="space-y-2">
            {history.map((item, i) => (
              <li
                key={i}
                className="text-xs bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200"
                onClick={() => setEmailOutput(item)}
              >
                {item.slice(0, 60)}…
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

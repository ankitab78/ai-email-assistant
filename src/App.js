import { useState } from "react";
import EmailForm from "./components/EmailForm";
import OutputBox from "./components/OutputBox";

function App() {
  const [emailOutput, setEmailOutput] = useState("");
  const [subject, setSubject] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* 🌌 BACKGROUND WITH LIGHT-BLUE OVERLAY (BOTH MODES SAME) */}
      <div
        className="min-h-screen py-10 px-4 bg-cover bg-center transition-colors duration-300"
        style={{
          backgroundImage:
            "linear-gradient(rgba(210,230,255,0.85), rgba(210,230,255,0.85)), url('/bg-ai.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto">

          {/* 🔥 CENTERED HEADING (NO BOX) */}
         <h1 className="text-3xl font-semibold text-black tracking-tight text-center w-full mb-12">
  AI Email Assistant
</h1>


          {/* 🌙 TOGGLE (TOP RIGHT FLOATING) */}
          <div className="fixed top-5 right-5 z-50">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-full text-sm font-medium shadow
                         bg-gray-900 text-white
                         dark:bg-gray-100 dark:text-gray-900 transition"
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>

          {/* 🧱 MAIN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EmailForm
              setEmailOutput={setEmailOutput}
              subject={subject}
              setSubject={setSubject}
            />

            <OutputBox
              emailOutput={emailOutput}
              subject={subject}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


# AI Email Assistant ✉️🤖

AI Email Assistant is a modern, responsive web application that helps users generate professional emails quickly using smart templates, rewrite options, and AI assistance.  
Built as a **portfolio-level project** with clean UI, dark mode, and PDF export.

---

## 🚀 Features

- ✍️ Generate professional emails
- 🔁 Rewrite options:
  - Shorter
  - More polite
  - More professional
- 📄 Download email as PDF
- 🌗 Light / Dark mode
- 📚 Email templates
- 🕘 Recent email history (local storage)
- ⌨️ Ctrl + Enter to generate
- 📱 Fully responsive (desktop, tablet, mobile)

---

## 🛠 Tech Stack

**Frontend**
- React (Create React App)
- Tailwind CSS
- JavaScript
- jsPDF

**Backend**
- Node.js
- Express.js
- Gemini AI API
- dotenv, cors

---

## 📂 Project Structure

```
ai-email-assistant/
├── src/
│   ├── components/
│   │   ├── EmailForm.jsx
│   │   ├── OutputBox.jsx
│   │   ├── ToneSelector.jsx
│   │   └── emailTemplates.js
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── ai-email-backend/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── public/
├── README.md
└── package.json
```

---

## ⚙️ Setup Instructions

### Frontend
```bash
npm install
npm start
```

### Backend
```bash
cd ai-email-backend
npm install
```

Create `.env` file:
```env
GEMINI_API_KEY=your_api_key_here
```

Run backend:
```bash
node index.js
```

---

## 🧠 How It Works

1. Select email type, tone, or template  
2. Enter email content  
3. Generate polished email  
4. Rewrite / copy / download as PDF  
5. Emails are saved locally for quick access  

---

## 👩‍💻 Author

**Ankita**  
Frontend Developer | React | UI/UX | AI Projects  

GitHub: https://github.com/ankitab78

---

⭐ If you like this project, please star the repository!

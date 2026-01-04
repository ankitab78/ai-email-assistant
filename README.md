# AI Email Assistant ✉️🤖

AI Email Assistant is a modern, responsive web application that helps users generate professional emails quickly using smart templates, rewrite options, and AI-assisted logic.  
This project is built as a **portfolio-level application** with clean UI, dark mode, and PDF export functionality.

---

## 🌐 Live Demo

https://ai-email-assistant-app.netlify.app/

---

## 🚀 Features

- ✍️ Generate professional emails instantly  
- 🔁 Rewrite options:
  - Shorter  
  - More polite  
  - More professional  
- 📄 Download generated email as PDF  
- 🌗 Light / Dark mode toggle  
- 📚 Ready-to-use email templates  
- 🕘 Recent email history (saved in local storage)  
- ⌨️ Ctrl + Enter shortcut to generate email  
- 📱 Fully responsive design (desktop, tablet, mobile)  

---

## 🛠 Tech Stack

### Frontend
- React (Create React App)  
- Tailwind CSS  
- JavaScript  
- jsPDF  

### Backend (included for future AI integration)
- Node.js  
- Express.js  
- Gemini AI API  
- dotenv  
- cors  

> Note:  
> The live deployed version focuses on frontend UI/UX and logic.  
> Backend setup is included in the repository for future AI-powered enhancements.

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

### Backend (optional)
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
4. Rewrite or download email as PDF  
5. Emails are saved locally for quick access  

---

## 👩‍💻 Author

**Ankita**  
Frontend Developer | React | UI/UX | AI Projects  

GitHub: https://github.com/ankitab78

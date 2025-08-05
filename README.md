# 🧠 CodeCrafter – AI-Powered Assistant Suite

CodeCrafter is a multi-functional AI web application that leverages **Google's Gemini 1.5 Flash API** to deliver three key generative AI features in a beautifully styled interface:

- 💬 **Chat Model** – Real-time conversational AI interface
- 🖼️ **Caption Generator** – AI-based image captioning with styles and emojis
- 💻 **Code Generator** – Programming assistant that generates code with explanations

---

## 🔥 Live Demo

**Portfolio:** [[https://codecrafter-app.vercel.app/](https://codecrafter-app.vercel.app/)  
*(Deployed via Vercel – Demo videos available on request)*

---

## 🧩 Features

### 💬 Chat Model (Conversational AI)
- Natural language interaction with Gemini 1.5 Flash
- Custom prompt engineering to restrict role to non-coding chatbot
- User and bot avatars with skeleton loading state
- Styled with Tailwind CSS for responsiveness

### 🖼️ Caption Generator
- Upload JPEG/PNG/HEIC image and get stylish captions (fancy, flirty, funny, etc.)
- Captions enhanced with emojis and hashtags
- File type validation and base64 encoding for API compatibility
- Formatted AI output using `\n\n` separation

### 💻 Code Generator
- Prompt AI to generate code (e.g. "write a Python function to...")  
- Displays output in markdown with syntax highlighting
- Includes explanation for each generated snippet
- Handles empty states, errors, and loading animations

---

## 🛠️ Tech Stack

| Layer        | Tools / Libraries                             |
|--------------|-----------------------------------------------|
| Frontend     | React.js, TypeScript, Tailwind CSS, Shadcn UI |
| AI API       | Google Generative AI (`@google/generative-ai`)|
| Markdown     | react-markdown, Syntax Highlighting           |
| UX/Styling   | Skeleton, react-hot-toast, Avatar Components  |

---

## 📂 Project Structure

```
/components
  /ChatComponent.tsx
  /CaptionComponent.tsx
  /CodeComponent.tsx
  /ui (input, button, skeleton, etc.)

/pages
  /index.tsx  → (Home page that links to components)

.env (for API key)
```

## 📧 Contact
Udhva Patel
📫 dal134756@utdallas.edu
📎 LinkedIn | 🌐 Portfolio
git clone https://github.com/your-username/codecrafter-ai-suite.git
cd codecrafter-ai-suite

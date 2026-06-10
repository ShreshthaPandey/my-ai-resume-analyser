# ResuMate 🚀

An AI-powered resume analyzer that gives you ATS scores and actionable feedback to land your dream job.

## What it does

- Upload your resume (PDF)
- Enter the job title, company name, and job description
- Get instant AI-powered feedback including:
  - Overall ATS score
  - Tone & style analysis
  - Content quality review
  - Structure suggestions
  - Skills gap analysis

## Tech Stack

- **Frontend** — React + TypeScript
- **Routing** — React Router v7
- **Styling** — Tailwind CSS
- **File Upload** — react-dropzone
- **PDF Processing** — pdfjs-dist
- **AI & Storage** — Puter.js (AI chat, file system, key-value store)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository

```bash
   git clone https://github.com/your-username/resumate.git
   cd resumate
```

2. Install dependencies

```bash
   npm install
```

3. Copy the PDF worker file to public folder

```bash
   cp node_modules/pdfjs-dist/build/pdf.worker.min.mjs public/
```

4. Start the development server

```bash
   npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## How it works

1. User uploads a PDF resume via drag & drop or file picker
2. PDF is converted to an image using pdfjs-dist
3. Both the PDF and image are uploaded to Puter file system
4. AI analyzes the resume against the provided job description
5. Feedback is stored in Puter KV store and displayed on the results page

## Features

- Drag & drop file upload with validation
- Real-time processing status updates
- PDF to image conversion
- AI-generated feedback with scores across 5 categories
- Clean and responsive UI

## License

MIT

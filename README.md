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

  ## What is Puter?

[Puter](https://puter.com) is a free cloud platform that gives your web app superpowers — no backend needed.

ResuMate uses Puter for 3 things:

### 1. 🗄️ File System (`puter.fs`)
Puter provides a cloud file system where we upload the resume PDF and the converted image. Files are stored securely in the user's Puter account.

### 2. 🤖 AI (`puter.ai`)
Puter gives access to powerful AI models (GPT-4o, Claude, etc.) directly from the frontend — no API keys needed, no backend needed. ResuMate uses this to analyze the resume against the job description and generate detailed feedback.

### 3. 💾 Key-Value Store (`puter.kv`)
Puter provides a simple key-value database to store the resume analysis results. This allows ResuMate to retrieve and display the feedback on the results page.


## License

MIT

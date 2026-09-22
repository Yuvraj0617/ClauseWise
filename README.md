# ClauseWise

ClauseWise is an AI-assisted contract review application. Upload a PDF agreement to get a clear, structured view of its document type, parties, key clauses, important dates, potential risks, suggestions, and next steps.

> ClauseWise is an informational review tool, not a substitute for advice from a qualified legal professional.

## Features

- Upload and analyse PDF agreements up to 5 MB
- Extract named parties and their roles
- Identify the agreement type and important clauses
- Surface explicitly stated dates, risks, suggestions, and recommended next steps
- Present results in a responsive React interface
- Reject non-PDF uploads before analysis

## Tech stack

| Area | Technology |
| --- | --- |
| Frontend | React 19, Vite, Tailwind CSS, Axios |
| Backend | Node.js, Express 5, Multer |
| PDF processing | `pdf-parse-new` |
| AI analysis | Google Gemini (`gemini-2.5-flash`) |

## Project structure

```text
ClauseWise/
|- Frontend/                 # React and Vite web application
|  |- src/pages/             # Home and analysis pages
|  |- src/components/        # Shared UI and upload components
|  |- src/features/          # Home and analysis feature UI
|  `- src/services/api.js    # API client
`- Backend/                  # Express API
   |- routes/                # API routes
   |- controllers/           # Request handling
   |- middleware/            # Upload validation
   `- services/              # PDF cleanup and Gemini integration
```

## Prerequisites

- Node.js 20 or later
- npm
- A Google Gemini API key with access to the configured model

## Getting started

Clone the repository, then install dependencies for both applications.

```bash
cd Backend
npm install

cd ../Frontend
npm install
```

### Configure environment variables

Create `Backend/.env` with the following values:

```env
Port=5000
GEMINI_API_KEY=your_google_gemini_api_key
```

`Port=5000` matches the frontend development proxy. You may use another port, but then update `Frontend/vite.config.js` or set the frontend API URL below.

The frontend includes `Frontend/.env.example`. For a separately hosted API, copy it to `Frontend/.env` and set:

```env
VITE_API_URL=http://localhost:5000/api
```

Leave `VITE_API_URL` unset when using the Vite development proxy.

### Run locally

In one terminal, start the API:

```bash
cd Backend
npm run dev
```

In another terminal, start the web application:

```bash
cd Frontend
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Available scripts

### Frontend

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

### Backend

| Command | Description |
| --- | --- |
| `npm run dev` | Start the API with Nodemon and `.env` loaded |
| `npm start` | Start the API with Node.js |

## API

### `POST /api/analyse`

Uploads and analyses one PDF document.

| Item | Value |
| --- | --- |
| Content type | `multipart/form-data` |
| File field | `pdf` |
| Accepted format | PDF (`application/pdf`) |
| Maximum file size | 5 MB |

Example:

```bash
curl -X POST http://localhost:5000/api/analyse \
  -F "pdf=@./agreement.pdf"
```

A successful response has this shape:

```json
{
  "success": true,
  "data": {
    "documentType": "NDA",
    "summary": ["..."],
    "parties": [{ "name": "Example Company", "role": "Disclosing Party" }],
    "clauses": [{ "title": "Confidentiality", "text": "..." }],
    "risks": ["..."],
    "importantDates": {
      "effectiveDate": null,
      "expirationDate": null,
      "noticePeriod": null,
      "paymentOrSettlementDates": null
    },
    "Suggestions": "...",
    "NextSteps": "..."
  }
}
```

## Notes

- The API sends extracted document text to Google Gemini for analysis. Do not upload documents unless you are authorised to share them with that service.
- The analysis is based on information stated in the uploaded document and may be incomplete or inaccurate. Review important outcomes with a legal professional.
- Keep `Backend/.env` private. Never commit your Gemini API key.

## License

No license has been specified for this project.

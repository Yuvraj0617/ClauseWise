import { useRef, useState } from "react";
const MAX_FILE_SIZE = 5 * 1024 * 1024;
function DocumentUploader({ status, error: requestError, onAnalyse }) {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [validationError, setValidationError] = useState("");
  const error = validationError || requestError;
  const selectFile = (selectedFile) => {
    setValidationError("");
    if (!selectedFile) return;
    if (
      selectedFile.type !== "application/pdf" &&
      !selectedFile.name.toLowerCase().endsWith(".pdf")
    ) {
      setFile(null);
      setValidationError("Please choose a PDF document.");
      return;
    }
    if (selectedFile.size > MAX_FILE_SIZE) {
      setFile(null);
      setValidationError("This file is larger than the 5 MB upload limit.");
      return;
    }
    setFile(selectedFile);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file) {
      setValidationError("Choose a PDF document before starting the analysis.");
      return;
    }
    onAnalyse(file);
  };
  return (
    <form
      className="mt-8 rounded-md border border-line bg-paper p-6"
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        id="pdf-upload"
        type="file"
        accept="application/pdf,.pdf"
        onChange={(event) => selectFile(event.target.files?.[0])}
        hidden
      />
      <button
        className="flex w-full flex-col items-center gap-2 rounded-md border border-dashed border-line bg-canvas px-6 py-10 font-sans text-sm font-semibold text-slate transition-colors hover:border-accent hover:bg-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        type="button"
        onClick={() => inputRef.current?.click()}
      >
        <span
          className="grid size-10 place-items-center rounded-full bg-accent text-base text-white"
          aria-hidden="true"
        >
          &uarr;
        </span>
        <span>{file ? file.name : "Choose a contract PDF"}</span>
        <span className="font-normal text-fog">
          {file
            ? `${(file.size / 1024 / 1024).toFixed(2)} MB selected`
            : "PDF only &middot; up to 5 MB"}
        </span>
      </button>
      <button
        className="mt-4 w-full rounded-md bg-accent px-5 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-65"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Analysing document…" : "Analyse contract"}
      </button>
      {error && (
        <p
          className="mt-3 text-left font-sans text-sm text-alert"
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
export default DocumentUploader;

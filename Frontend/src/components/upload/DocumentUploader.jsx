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
      className="mt-9 rounded-xl border border-[#e5dacd] bg-paper p-3 shadow-[0_10px_32px_rgb(89_61_42_/_5%)]"
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
        className="grid min-h-36 w-full place-items-center gap-1.5 rounded-md border border-dashed border-[#dcb8a7] bg-[#fdf9f2] p-5 font-sans text-sm font-bold text-[#68574d] hover:bg-[#fff5eb]"
        type="button"
        onClick={() => inputRef.current?.click()}
      >
        <span
          className="grid size-8 place-items-center rounded-full bg-clay text-xl text-white"
          aria-hidden="true"
        >
          ↑
        </span>
        <span>{file ? file.name : "Choose a contract PDF"}</span>
        <small className="font-normal text-[#9b8b7e]">
          {file
            ? `${(file.size / 1024 / 1024).toFixed(2)} MB selected`
            : "PDF only · up to 5 MB"}
        </small>
      </button>
      <button
        className="mt-3 w-full rounded-md bg-clay px-4 py-3 font-sans text-xs font-extrabold text-white hover:bg-[#b8573c] disabled:cursor-wait disabled:opacity-65"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Analysing document…" : "Analyse contract"}
      </button>
      {error && (
        <p
          className="mt-2 text-left font-sans text-xs text-red-700"
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
export default DocumentUploader;

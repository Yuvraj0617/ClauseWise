

function preprocessLegalText(text) {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/Page\s+\d+/gi, "")
    .replace(/^\s*\d+\s*$/gm, "")
    .trim();
}
export default preprocessLegalText;
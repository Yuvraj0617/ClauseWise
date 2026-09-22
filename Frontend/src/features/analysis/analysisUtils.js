export function formatLabel(value) {
  return String(value || '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (letter) => letter.toUpperCase())
}

export function getAnalysisValue(analysis, key) {
  return analysis[key] || analysis[key.charAt(0).toLowerCase() + key.slice(1)]
}

function isWord(text) {
  if (!text || text.length === 0) return false;

  for (let i = 0; i < text.length; i++) {
    const code = text[i].charCodeAt(0);
    if (!((code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
      return false;
    }
  }
  return true;
}

module.exports = isWord;
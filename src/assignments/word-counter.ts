function countWordsAndChars(paragraph: string): { wordCount: number, charCount: number } {
    const words = paragraph.split(/\s+/);
    const wordCount = words.length;
    const charCount = words.join('').length;
    return { wordCount, charCount };
}

// Usage:
const paragraph = "The quick brown fox jumps over the lazy dog.";
const result = countWordsAndChars(paragraph);
console.log(`Word Count: ${result.wordCount}, Character Count: ${result.charCount}`);

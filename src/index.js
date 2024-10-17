import { parsePDF } from './parsers/pdfParser.js';
import { parseDOCX } from './parsers/docxParser.js';
import { parseTXT } from './parsers/txtParser.js';
import { parseHTML } from './parsers/htmlParser.js';
import { parseMarkdown } from './parsers/markdownParser.js';

export async function autoParse(filePath) {
  const ext = filePath.split('.').pop().toLowerCase();
  switch (ext) {
    case 'pdf':
      return await parsePDF(filePath);
    case 'docx':
      return await parseDOCX(filePath);
    case 'txt':
      return await parseTXT(filePath);
    case 'html':
      return await parseHTML(filePath);
    case 'md':
      return await parseMarkdown(filePath);
    default:
      throw new Error(`Unsupported file format: ${ext}`);
  }
}

export { parsePDF, parseDOCX, parseTXT, parseHTML, parseMarkdown };

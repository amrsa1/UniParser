import path from 'path';
import { parsePDF } from './parsers/pdfParser.js';
import { parseDOCX } from './parsers/docxParser.js';
import { parseTXT } from './parsers/txtParser.js';
import { parseHTML } from './parsers/htmlParser.js';
import { parseMarkdown } from './parsers/markdownParser.js';

// Unified function to handle text extraction based on file extension
export async function autoParse(filePath) {
    const ext = path.extname(filePath).toLowerCase();

    switch (ext) {
        case '.pdf':
            return await parsePDF(filePath);
        case '.docx':
            return await parseDOCX(filePath);
        case '.txt':
            return await parseTXT(filePath);
        case '.md':
            return await parseMarkdown(filePath);
        case '.html':
            return await parseHTML(filePath);        
        default:
            throw new Error(`Unsupported file format: ${ext}`);
    }
}

// Export individual parsers as well
export { parsePDF } from './parsers/pdfParser.js';
export { parseDOCX } from './parsers/docxParser.js';
export { parseTXT } from './parsers/txtParser.js';
export { parseHTML } from './parsers/htmlParser.js';
export { parseMarkdown } from './parsers/markdownParser.js';

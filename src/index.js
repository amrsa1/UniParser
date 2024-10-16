const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

async function loadPdfModule() {
    const { default: parsePDF } = await import('./parsers/pdfParser.js');
    return parsePDF;
}

async function parsePDF(filePath) {
    const dataBuffer = await readFile(filePath);
    const Pdf = await loadPdfModule();
    return await Pdf(dataBuffer);
}

async function parseDOCX(filePath) {
    const { parseDOCX } = await import('./parsers/docxParser.js');
    const dataBuffer = await readFile(filePath);
    return await parseDOCX(dataBuffer);
}

async function parseTXT(filePath) {
    const { parseTXT } = await import('./parsers/txtParser.js');
    return await parseTXT(filePath);
}

async function parseHTML(filePath) {
    const { parseHTML } = await import('./parsers/htmlParser.js');
    return await parseHTML(filePath);
}

async function parseMarkdown(filePath) {
    const { parseMarkdown } = await import('./parsers/parseMarkdown.js');
    return await parseMarkdown(filePath);
}

async function parseFile(filePath) {
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

module.exports = parseFile;

import fs from 'fs';
import * as cheerio from 'cheerio';

export function parseHTML(filePath) {
    try {
        const htmlContent = fs.readFileSync(filePath, 'utf8');
        const $ = cheerio.load(htmlContent);
        const textContent = $('body').text();
        return textContent;
    } catch (error) {
        throw new Error(`Error reading HTML file: ${error.message}`);
    }
}

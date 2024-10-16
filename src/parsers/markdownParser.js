import fs from "fs";
import { marked } from "marked";
import * as cheerio from 'cheerio';

export function parseMarkdown(filePath) {
    try {
        const markdownContent = fs.readFileSync(filePath, 'utf8');
        const htmlContent = marked(markdownContent);
        const $ = cheerio.load(htmlContent);
        let textContent = $('body').text();
        textContent = textContent.replace(/\n+/g, '\n').trim();
        return textContent;
    } catch (error) {
        throw new Error(`Error reading Markdown file: ${error.message}`);
    }
}

# 📜 **UniParser**: Universal File Parsing for Node.js

**UniParser** is a powerful, lightweight Node.js library designed to handle parsing of multiple file formats—such as **PDF**, **DOCX**, **TXT**, **HTML**, and **Markdown**—and convert them into **plain text** with ease.

🚀 **Say goodbye to file format limitations!** UniParser extracts text content from all these formats, providing a consistent text output for your applications.

---

## ✨ **Features**

- 🔍 **PDF Parsing**: Extracts plain text from PDF documents.
- 📝 **DOCX Parsing**: Reads and extracts text from Microsoft Word `.docx` files.
- 📄 **TXT Parsing**: Handles plain text files with no special formatting.
- 🌐 **HTML Parsing**: Extracts text from the body of HTML documents.
- 🎨 **Markdown Parsing**: Converts Markdown files to plain text, stripping out all formatting syntax.
- 🔄 **Auto-detection**: Automatically detects the file format and parses it using the `autoParse` function.

---

## 📦 **Installation**

To install **UniParser**, simply run:

```bash
npm install uniparser
```

---

## 🛠️ **Usage**

### **CommonJS (CJS) Example**

If you’re working in a Node.js environment with CommonJS (CJS), use `require()` to import UniParser:

```javascript
const { autoParse, parsePDF, parseDOCX, parseTXT, parseHTML, parseMarkdown } = require('uniparser');

// Example: Automatically detect and parse a file
(async () => {
    const parsedText = await autoParse('./path/to/sample-file.pdf');
    console.log(parsedText);
})();

// Example: Parse specific file types
const pdfText = await parsePDF('./path/to/sample-file.pdf');
const docxText = await parseDOCX('./path/to/sample-file.docx');
const txtText = parseTXT('./path/to/sample-file.txt');
const htmlText = parseHTML('./path/to/sample-file.html');
const markdownText = parseMarkdown('./path/to/sample-file.md');
```

### **ES Modules (ESM) Example**

If you’re working in an ES Module environment (modern JavaScript), use `import` to load the functions:

```javascript
import { autoParse, parsePDF, parseDOCX, parseTXT, parseHTML, parseMarkdown } from 'uniparser';

// Example: Automatically detect and parse a file
(async () => {
    const parsedText = await autoParse('./path/to/sample-file.pdf');
    console.log(parsedText);
})();

// Example: Parse specific file types
const pdfText = await parsePDF('./path/to/sample-file.pdf');
const docxText = await parseDOCX('./path/to/sample-file.docx');
const txtText = parseTXT('./path/to/sample-file.txt');
const htmlText = parseHTML('./path/to/sample-file.html');
const markdownText = parseMarkdown('./path/to/sample-file.md');
```

### ⚡ **Synchronous Usage (for small files)**

For small files, you can use UniParser synchronously, but this should only be done for very lightweight files.

#### CommonJS (CJS):
```javascript
const { parseTXT, parseMarkdown } = require('uniparser');

// Synchronously read small text files
const txtContent = parseTXT('./path/to/sample-file.txt');
console.log(txtContent);

const markdownContent = parseMarkdown('./path/to/sample-file.md');
console.log(markdownContent);
```

#### ES Modules (ESM):
```javascript
import { parseTXT, parseMarkdown } from 'uniparser';

// Synchronously read small text files
const txtContent = parseTXT('./path/to/sample-file.txt');
console.log(txtContent);

const markdownContent = parseMarkdown('./path/to/sample-file.md');
console.log(markdownContent);
```

---

## 🔗 **Supported File Formats**

- 📄 **PDF** (`.pdf`): Converts PDF documents to plain text.
- 📝 **DOCX** (`.docx`): Extracts text from Microsoft Word `.docx` files.
- 🖋️ **TXT** (`.txt`): Reads plain text from simple text files.
- 🌐 **HTML** (`.html`): Strips HTML tags and returns the text content.
- ✍️ **Markdown** (`.md`): Converts Markdown files to plain text, removing all formatting.
- 🔄 **Auto-detection**: Detects file types automatically via `autoParse` and processes them accordingly.

---

## 🎯 **Example**

Here's a quick example to get you started with DOCX parsing:

### CommonJS (CJS):
```javascript
const { parseDOCX } = require('uniparser');

(async () => {
    const docxText = await parseDOCX('./path/to/sample-file.docx');
    console.log(docxText);
})();
```

### ES Modules (ESM):
```javascript
import { parseDOCX } from 'uniparser';

(async () => {
    const docxText = await parseDOCX('./path/to/sample-file.docx');
    console.log(docxText);
})();
```

---

## 🔑 **License**

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more information.

---

## 🤝 **Contributing**

Contributions are welcome! If you'd like to improve UniParser, feel free to fork the repository and submit a pull request. We appreciate your feedback and contributions!

---

💡 **UniParser** makes it easier than ever to extract content from a wide range of file formats—**Try it now and streamline your file processing tasks!** 🌟


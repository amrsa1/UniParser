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

---

## 📦 **Installation**

To install **UniParser**, simply run:

```bash
npm install uniparser
```

---

## 🛠️ **Usage**

After installation, you can easily import UniParser to start working with different file formats:

```javascript
const { parsePDF, parseDOCX, parseTXT, parseHTML, parseMarkdown } = require('uniparser');

// Parsing a PDF file
const pdfText = await parsePDF('./path/to/sample-file.pdf');
console.log(pdfText);

// Parsing a DOCX file
const docxText = await parseDOCX('./path/to/sample-file.docx');
console.log(docxText);

// Parsing a TXT file
const txtText = await parseTXT('./path/to/sample-file.txt');
console.log(txtText);

// Parsing an HTML file
const htmlText = await parseHTML('./path/to/sample-file.html');
console.log(htmlText);

// Parsing a Markdown file
const markdownText = await parseMarkdown('./path/to/sample-file.md');
console.log(markdownText);
```

### ⚡ **Synchronous Usage (for small files)**

For small files, you can use UniParser synchronously:

```javascript
const { parseTXT, parseMarkdown } = require('uniparser');

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

---

## 🎯 **Example**

Here's a quick example to get you started with DOCX parsing:

```javascript
const { parseDOCX } = require('uniparser');

(async () => {
    const docxText = await parseDOCX('./path/to/sample-file.docx');
    console.log(docxText);
})();
```

## 🔑 **License**

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more information.

---

## 🤝 **Contributing**

Contributions are welcome! If you'd like to improve UniParser, feel free to fork the repository and submit a pull request. We appreciate your feedback and contributions!

---

💡 **UniParser** makes it easier than ever to extract content from a wide range of file formats—**Try it now and streamline your file processing tasks!** 🌟

---
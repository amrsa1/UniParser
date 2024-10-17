import { expect } from "chai";
import {
  parseMarkdown,
  parseHTML,
  parseTXT,
  parsePDF,
  parseDOCX,
  autoParse,
} from "../../dist/uniparser.esm.js";  // Import the CommonJS build

const docxPath = "./src/test/test-data/sample-file.docx";
const pdfPath = "./src/test/test-data/sample-file.pdf";
const txtPath = "./src/test/test-data/sample-file.txt";
const htmlPath = "./src/test/test-data/sample-file.html";
const markdownPath = "./src/test/test-data/sample-file.md";

describe("File Parsers (CommonJS Build)", () => {
  it("should autoParse text from a DOCX file", async () => {
    const expectedContent = "AMR SALEM, This is docx";
    const result = await autoParse(docxPath);

    expect(result).to.exist;
    expect(typeof result).to.equal("string");
    expect(result).to.contain(expectedContent);
  });

  it("should parse text from a DOCX file and assert the content", async () => {
    const expectedContent = "AMR SALEM, This is docx";
    const result = await parseDOCX(docxPath);

    expect(result).to.exist;
    expect(typeof result).to.equal("string");
    expect(result).to.contain(expectedContent);
  });

  it("should parse text from a PDF file and assert the content", async () => {
    const expectedContent = "AMR SALEM, This is pdf file.";
    const result = await parsePDF(pdfPath);

    expect(result).to.exist;
    expect(typeof result).to.equal("string");
    expect(result).to.contain(expectedContent);
  });

  it("should read text from a TXT file and assert the content", async () => {
    const expectedContent = "AMR SALEM, This is txt file.";
    const result = await parseTXT(txtPath);

    expect(result).to.exist;
    expect(result).to.equal(expectedContent);
  });

  it("should parse text from an HTML file and assert the content", async () => {
    const expectedContent = "Amr Salem, This is html file.";
    const result = parseHTML(htmlPath);

    expect(result).to.exist;
    expect(typeof result).to.equal("string");
    expect(result).to.contain(expectedContent);
  });

  it("should parse text from a Markdown file and assert the content", async () => {
    const expectedContent = "Amr Salem\nThis is markdown file.";
    const result = parseMarkdown(markdownPath);

    expect(result).to.exist;
    expect(typeof result).to.equal("string");
    expect(result).to.contain(expectedContent);
  });
});

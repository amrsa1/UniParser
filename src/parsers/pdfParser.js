import { getDocument } from "pdfjs-dist";
import fs from "fs";


export async function parsePDF(pdfPath) {
  const dataBuffer = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await getDocument(dataBuffer).promise;
  let text = "";

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map((item) => item.str).join(" ") + "\n";
  }

  return text;
}

import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

if (typeof window === 'undefined') {
  GlobalWorkerOptions.workerSrc = '../pdf.worker.mjs';  // Set the correct path relative to dist
}

export async function parsePDF(filePath) {
  const loadingTask = getDocument({
    url: filePath,
    disableWorker: true,
  });

  const pdfDocument = await loadingTask.promise;
  let text = '';

  for (let i = 1; i <= pdfDocument.numPages; i++) {
    const page = await pdfDocument.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(item => item.str).join(' ') + '\n';
  }

  return text;
}

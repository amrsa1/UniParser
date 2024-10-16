import mammoth from "mammoth";

export async function parseDOCX(filePath) {
  try {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  } catch (error) {
    console.error(`Error reading DOCX file ${filePath}:`);
    return "";
  }
}

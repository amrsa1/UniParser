import { promisify } from 'util';
import { readFile } from 'fs';

const readFileAsync = promisify(readFile);

export async function parseTXT(filePath) {
    return await readFileAsync(filePath, 'utf8');
}

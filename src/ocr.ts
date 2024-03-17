import { createWorker } from 'tesseract.js';
import * as fs from 'fs';

const path: string = 'transcription/out.txt';
/**
 * Transcribes text from an image encoded in base64.
 * @param base64Image The base64 encoded image as a string.
 * @returns A promise that resolves to a string containing the transcribed text.
 */
export async function transcribeTextFromImage(base64Image: string): Promise<string> {
    // return base64Image;
    const worker = await createWorker();
    const ret = await worker.recognize(base64Image);
    await fs.writeFileSync(path, ret.data.text, 'utf8');
    await worker.terminate();
    console.log(ret.data.text);
    return ret.data.text;
}

// transcribeTextFromImage('screenshots/out.png');

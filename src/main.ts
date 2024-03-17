import * as webdriver from './webdriver';
import * as ocr from './ocr';

/*
* Entrypoint 
*/
async function main() {
    const target: string = 'https://tesla.com';
    // create the screenshot of the webpage and save it as a .png file
    let webpage_path = await webdriver.takeScreenshot(target);
    console.log('saving to', webpage_path);

    // transcribe the text from the image
    let text_content = ocr.transcribeTextFromImage(webpage_path).toString();
    console.log('text_content:', text_content);
}
main();

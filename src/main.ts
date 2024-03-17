import * as webdriver from './webdriver';
import * as ocr from './ocr';

/*
* TODO:
* 1. Make script look at the "full page of a website"
* 2. Make it iteracte through a list of websites
* 3. Create GUI for the script
*/
async function main() {
    const target: string = ''; // enter the target link here 
    // create the screenshot of the webpage and save it as a .png file
    const webpage_path = await webdriver.takeScreenshot(target);
    console.log('saving to', webpage_path);

    // transcribe the text from the image
    const text_content = ocr.transcribeTextFromImage(webpage_path).toString();
    console.log('text_content:', text_content);
}
main();

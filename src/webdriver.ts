import *  as webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';

// output: *.png file in src folder
// TODO: take screenshot of specific component containing price and sale qty

/**
 * Take a screenshot of a webpage and save it as a .png file in the src folder
 * @param webpage string value of the webpage link to take a screenshot of 
 * @returns string value of the path to the screenshot as a Promise
 */
export async function takeScreenshot(webpage: string): Promise<string> {
    let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build();

    // rewrite path handling
    const imgpath = 'screenshots/out.png';

    try {
        await driver.get(webpage);
        await driver.takeScreenshot().then((data) => {
            require('fs').writeFileSync(imgpath, data, 'base64');
        });
    } finally {
        await driver.quit();
        return imgpath;
    }

    // return imgpath;
}
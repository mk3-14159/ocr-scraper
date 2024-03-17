import *  as webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as fs from 'fs';

// output: *.png file in src folder
// TODO: take screenshot of specific component containing price and sale qty
// const screenshot_path: string = 'screenshots/out.png';

const screenshot_path: string = 'screenshots/out.png';

/**
 * Take a screenshot of a webpage and save it as a .png file in the src folder
 * @param webpage string value of the webpage link to take a screenshot of 
 * @returns string value of the path to the screenshot as a Promise
 */
export async function takeScreenshot(webpage: string): Promise<string> {
    // const screenshot_path: string = 'screenshots/out.png';
    const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build();

    try {
        await driver.get(webpage);
        // await driver.wait(webdriver.until.titleIs('WebDriver'), 6000);

        await driver.wait(async function() {
            const readyState = await driver.executeScript('return document.readyState');
            return readyState === 'complete';
          }, 10000); // waits up to 10 seconds
        await driver.takeScreenshot().then((data) => {
            fs.writeFileSync(screenshot_path, data, 'base64');
        });
    } finally {
        await driver.quit();
    }
    return screenshot_path;
}

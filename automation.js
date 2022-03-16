const puppeteer = require('puppeteer');
const dotenv = require('dotenv')

dotenv.config({ path: 'config.env' })

console.log("Before");
//Documentation Start

(async () => {
    const browser = await puppeteer.launch({headless: false,slowMo: 150});

    const page1 = await browser.pages();
    const page = page1[0];
    //go to linke which is pass in the fucntion go to
    await page.goto('https://www.google.com');
    // console.log("Browser Opened");

    await page.type(".gLFyf","leetcode")
    // console.log("Typing Start");

    await page.keyboard.press("Enter")
    // console.log("Pressed Enter");  

    await page.waitForSelector("h3.LC20lb",{visible:true})
    await page.click("h3.LC20lb");  

    await page.waitForSelector('a[href="/accounts/login/"]',{visible:true})
    await page.click('a[href="/accounts/login/"]')

    await page.waitForSelector('input[data-cy="username"]',{visible:true})
    await page.type('input[data-cy="username"]',process.env.username)

    await page.waitForSelector('input[data-cy="password"]',{visible:true})
    await page.type('input[data-cy="password"]',process.env.password)

    await page.waitForSelector('.btn-content-container__2HVS',{visible:true})
    await page.click('.btn-content-container__2HVS')

    await page.waitForSelector(".ant-dropdown-link.ant-dropdown-trigger",{visible:true})
    await page.click(".ant-dropdown-link.ant-dropdown-trigger")

    await page.waitForSelector('a[href="/uninterested-coder/"]',{visible:true})
    await page.click('a[href="/uninterested-coder/"]')


  })();


//Documentation End

console.log("After");
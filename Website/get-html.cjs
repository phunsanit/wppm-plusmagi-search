const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5182/', { waitUntil: 'networkidle0' });
  await page.waitForSelector('#root > *');
  const html = await page.content();
  console.log(html);
  await browser.close();
})();

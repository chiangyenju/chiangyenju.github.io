const puppeteer = require('puppeteer');
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function captureLogoAndCreateFavicon() {
  // Launch browser and create page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport and load the HTML file
  await page.setViewport({ width: 512, height: 512 });
  await page.goto(`file://${path.join(process.cwd(), 'logo.html')}`);
  
  // Wait for font to load
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Capture the screenshot with transparency
  await page.screenshot({
    path: 'logo-512.png',
    omitBackground: true
  });
  
  // Close browser
  await browser.close();
  
  // Create favicon sizes
  await sharp('logo-512.png')
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toFile('public/favicon.png');
  
  // For ICO we need to ensure it has a solid background
  await sharp('logo-512.png')
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 253, g: 255, b: 240, alpha: 1 } // #fdfff0
    })
    .toFile('public/favicon.ico');
  
  // Clean up
  await fs.unlink('logo-512.png');
  console.log('Favicon created successfully!');
}

captureLogoAndCreateFavicon().catch(console.error); 
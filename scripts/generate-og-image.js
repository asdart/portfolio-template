const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport to a good size for OG images (1200x630 is standard)
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2 // Higher quality
    });

    console.log('Navigating to localhost:3000...');
    // Navigate to the local dev server
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait a bit for animations to settle
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Wait for the hero section to be available
    await page.waitForSelector('section', { timeout: 10000 });
    
    console.log('Taking screenshot of hero section...');
    // Find the hero section bounds
    const heroBounds = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      const heroSection = sections.find(s => s.classList.contains('min-h-screen')) || sections[0];
      
      if (!heroSection) {
        throw new Error('Hero section not found');
      }

      const rect = heroSection.getBoundingClientRect();
      return {
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    });

    // Take screenshot of the viewport area containing the hero section
    // For OG images, standard is 1200x630
    const ogWidth = 1200;
    const ogHeight = 630;
    
    // Calculate crop to maintain aspect ratio, centered on hero section
    const cropWidth = Math.min(heroBounds.width, ogWidth);
    const cropHeight = Math.min(heroBounds.height, ogHeight);
    
    const screenshot = await page.screenshot({
      type: 'png',
      omitBackground: false,
      clip: {
        x: heroBounds.x,
        y: heroBounds.y,
        width: cropWidth,
        height: cropHeight
      }
    });

    // Ensure the app directory exists
    const appDir = path.join(__dirname, '..', 'src', 'app');
    if (!fs.existsSync(appDir)) {
      fs.mkdirSync(appDir, { recursive: true });
    }

    // Save as opengraph-image.png (Next.js will automatically use this)
    const outputPath = path.join(appDir, 'opengraph-image.png');
    fs.writeFileSync(outputPath, screenshot);
    
    console.log(`✅ Open Graph image saved to: ${outputPath}`);
    console.log(`📐 Dimensions: ${cropWidth}x${cropHeight} (OG image format)`);
    
  } catch (error) {
    console.error('Error generating OG image:', error);
    console.error('\nMake sure the dev server is running: npm run dev');
    process.exit(1);
  } finally {
    await browser.close();
  }
}

generateOGImage();


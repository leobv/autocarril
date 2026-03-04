const fs = require('fs');
const { execSync } = require('child_process');

try {
    // Use Jimp if available or fall back to native tools if possible.
    // We can just install sharp temporarily.
    console.log("Installing sharp...");
    execSync('npm install sharp --no-save', { stdio: 'inherit' });
    const sharp = require('sharp');

    console.log("Converting image to WebP...");
    sharp('src/images/autocarril1.png')
        .resize({ width: 1920 }) // Resize to max Full HD width to save space
        .webp({ quality: 80 })
        .toFile('src/images/autocarril1.webp')
        .then(info => {
            console.log("Successfully converted to WebP!", info);
        })
        .catch(err => {
            console.error("Error during conversion:", err);
        });
} catch (e) {
    console.error("Script failed:", e);
}

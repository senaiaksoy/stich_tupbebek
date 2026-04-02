import sharp from 'sharp';

const input = 'C:\\Users\\fatboy\\Downloads\\magnifics_upscale-8AeHr5VnYqcnATUE5CUX-Gemini_Generated_Image_jgociojgociojgoc.png';
const output = 'public/images/articles/yumurta-dondurma-rehberi.webp';

await sharp(input)
  .webp({ quality: 80, effort: 6 })
  .toFile(output);

console.log('Converted:', output);

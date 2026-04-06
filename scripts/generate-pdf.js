#!/usr/bin/env node

/**
 * Generate PDF from HTML file using html2pdf
 * Usage: node scripts/generate-pdf.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import html2pdf
let html2pdf;
try {
  html2pdf = (await import('html2pdf.js')).default;
} catch (e) {
  console.error('Error: html2pdf.js not installed. Run: npm install html2pdf.js');
  process.exit(1);
}

const htmlPath = path.join(__dirname, '..', 'public', 'e-kitap', 'tup-bebek-beslenme-plani.html');
const outputPath = path.join(__dirname, '..', 'public', 'e-kitap', 'tup-bebek-beslenme-plani.pdf');

console.log('📄 PDF oluşturuluyor...');
console.log(`📂 Input: ${htmlPath}`);
console.log(`📥 Output: ${outputPath}`);

try {
  // HTML dosyasını oku
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  // HTML'i parse et ve düzenle
  const element = document.createElement('div');
  element.innerHTML = htmlContent;

  // PDF ayarlarını belirle
  const opt = {
    margin: 10,
    filename: 'Tup-Bebek-Beslenme-Plani-30-Gun.pdf',
    image: { type: 'jpeg', quality: 0.90 },
    html2canvas: { scale: 1.5, useCORS: true, allowTaint: true },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
  };

  // PDF oluştur
  html2pdf().set(opt).from(element).save();

  console.log('✅ PDF başarıyla oluşturuldu!');
} catch (error) {
  console.error('❌ Hata:', error.message);
  process.exit(1);
}

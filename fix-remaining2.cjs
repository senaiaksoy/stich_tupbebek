const fs = require('fs');
const path = require('path');

function getAllFiles(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.includes('node_modules') && !file.includes('.git')) {
      results = results.concat(getAllFiles(filePath, ext));
    } else if (ext.some(e => file.endsWith(e))) {
      results.push(filePath);
    }
  });
  return results;
}

const files = getAllFiles('src', ['.astro', '.md', '.mdx', '.ts']);
let totalChanges = 0;

for (const f of files) {
  let c = fs.readFileSync(f, 'utf8');
  const original = c;

  // JSON-LD structured data
  c = c.replace(/"name": "Doç\. Dr\. Senai Aksoy"/g, '"name": "tupbebek.com Yayın Kurulu"');
  c = c.replace(/"name": "Doç\. Dr\. Senai Aksoy Tüp Bebek Kliniği"/g, '"name": "tupbebek.com"');

  // Article body - personal references
  c = c.replace(/Selamlar, ben \*\*Doç\. Dr\. Senai Aksoy\*\*\./g, '');
  c = c.replace(/Merhaba, ben \*\*Dr\. Senai Aksoy\*\*\./g, '');
  c = c.replace(/ben \*\*Doç\. Dr\. Senai Aksoy\*\*/g, '');

  // Copyright lines
  c = c.replace(/© Doç\. Dr\. Senai Aksoy [–-] Tüm hakları saklıdır\./g, '© tupbebek.com – Tüm hakları saklıdır.');
  
  // Author attributions in body
  c = c.replace(/Yazar: Doç\. Dr\. Senai Aksoy/g, 'Yazar: tupbebek.com Yayın Kurulu');
  c = c.replace(/\*Dr\. Senai Aksoy tarafından bilgilendirme amaçlı yazılmıştır\*/g, '*tupbebek.com yayın kurulu tarafından bilgilendirme amaçlı yazılmıştır*');

  // Disclaimer paragraphs
  c = c.replace(/Bu makale, Doç\. Dr\. Senai Aksoy tarafından yazılmış ve tıbbi açıdan doğrulanmıştır\./g,
    'Bu makale, tupbebek.com yayın kurulu tarafından tıbbi açıdan doğrulanmıştır.');
  c = c.replace(/Kadın Hastalıkları ve Doğum Uzmanı, Üreme Tıbbı Uzmanı Doç\. Dr\. Senai Aksoy tarafından yazılmış ve tıbbi açıdan doğrulanmıştır\./g,
    'tupbebek.com yayın kurulu tarafından tıbbi açıdan doğrulanmıştır.');
  c = c.replace(/\[Dr\. Senai Aksoy\]\(https:\/\/tupbebek\.com\/dr-senai-aksoy\/\)/g, 'tupbebek.com yayın kurulu');

  // Inline references
  c = c.replace(/Dr\. Senai Aksoy'un kliniğinde/g, 'tupbebek.com kliniğinde');
  c = c.replace(/Dr\. Senai Aksoy'un klinik deneyimleri/g, 'tupbebek.com yayın kurulunun klinik deneyimleri');
  c = c.replace(/Dr\. Senai Aksoy ve ekibi olarak, İstanbul'daki kliniğimizde/g, 'tupbebek.com olarak, İstanbul\'daki kliniğimizde');
  c = c.replace(/Dr\. Senai Aksoy'dan net rehber/g, 'tupbebek.com yayın kurulundan net rehber');
  c = c.replace(/Dr\. Senai Aksoy'dan 2025 Vizyonuyla/g, 'tupbebek.com\'dan 2025 Vizyonuyla');
  
  // Titles containing the name
  c = c.replace(/\| Dr\. Senai Aksoy"/g, '| tupbebek.com"');
  c = c.replace(/Dr\. Senai Aksoy ile Erkek Kısırlığında/g, 'Erkek Kısırlığında');
  c = c.replace(/## Dr\. Senai Aksoy ile Erkek Kısırlığında/g, '## Erkek Kısırlığında');
  c = c.replace(/Dr\. Senai Aksoy ile erkek kısırlığında/g, 'Erkek kısırlığında');

  // Description references
  c = c.replace(/Dr\. Senai Aksoy, bu/g, 'tupbebek.com yayın kurulu, bu');
  c = c.replace(/Dr\. Senai Aksoy, 2025/g, 'tupbebek.com yayın kurulu, 2025');
  c = c.replace(/Dr\. Senai Aksoy'un uzman görüşü/g, 'tupbebek.com uzman görüşü');
  c = c.replace(/Dr\. Senai Aksoy'a göre/g, 'tupbebek.com yayın kuruluna göre');

  // Image alt text
  c = c.replace(/alt="Doç\. Dr\. Senai Aksoy[^"]*"/g, 'alt="tupbebek.com yayın kurulu"');
  
  // YouTube video description
  c = c.replace(/Dr\. Senai Aksoy'un bilimsel tavsiyesi/g, 'Bilimsel tavsiye');
  c = c.replace(/## Dr\. Senai Aksoy'un Bilimsel Tavsiyesi/g, '## Bilimsel Tavsiye');
  c = c.replace(/\* \[Dr\. Senai Aksoy'un bilimsel tavsiyesi/g, '* [Bilimsel tavsiye');

  // Remaining misc patterns
  c = c.replace(/Doç\. Dr\. Senai Aksoy tarafından, 2025/g, 'tupbebek.com yayın kurulu tarafından, 2025');
  c = c.replace(/Doç\. \[Dr\. Senai Aksoy\]\(https:\/\/tupbebek\.com\/dr-senai-aksoy\/\)/g, 'tupbebek.com yayın kurulu');

  if (c !== original) {
    fs.writeFileSync(f, c);
    totalChanges++;
    console.log('Updated: ' + f);
  }
}
console.log('\nTotal: ' + totalChanges);

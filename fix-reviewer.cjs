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

  // --- Frontmatter author fields ---
  c = c.replace(/author:\s*"Doç\. Dr\. Senai Aksoy"/g, 'author: "tupbebek.com Yayın Kurulu"');

  // --- Config default ---
  c = c.replace(/author:\s*z\.string\(\)\.default\('Doç\. Dr\. Senai Aksoy'\)/g, "author: z.string().default('tupbebek.com Yayın Kurulu')");

  // --- Component props default ---
  c = c.replace(/reviewedBy\s*=\s*"Doç\. Dr\. Senai Aksoy"/g, 'reviewedBy = "tupbebek.com Yayın Kurulu"');

  // --- HTML/template text replacements ---
  // Avatar images -> verified icon
  c = c.replace(/<img[^>]*src="\/images\/senai-aksoy\.(jpg|webp)"[^>]*alt="(Dr\. Senai Aksoy|Doç\. Dr\. Senai Aksoy|portre)"[^>]*\/?\s*>/g,
    '<span class="material-symbols-outlined text-primary text-2xl">verified</span>');
  c = c.replace(/<img[^>]*alt="(Dr\. Senai Aksoy|Doç\. Dr\. Senai Aksoy|portre)"[^>]*src="\/images\/senai-aksoy\.(jpg|webp)"[^>]*\/?\s*>/g,
    '<span class="material-symbols-outlined text-primary text-2xl">verified</span>');
  
  // OptimizedImage avatars
  c = c.replace(/<OptimizedImage[^>]*src="\/images\/senai-aksoy\.(jpg|webp)"[^>]*\/>/g,
    '<span class="material-symbols-outlined text-primary text-2xl">verified</span>');

  // Name references in HTML
  c = c.replace(/Dr\. Senai Aksoy<\/span>/g, 'Yayın Kurulu</span>');
  c = c.replace(/Dr\. Senai Aksoy<\/p>/g, 'Yayın Kurulu</p>');
  c = c.replace(/Dr\. Senai Aksoy<\/h3>/g, 'Yayın Kurulu</h3>');
  c = c.replace(/Dr\. Senai Aksoy<\/h4>/g, 'Yayın Kurulu</h4>');
  c = c.replace(/Dr\. Senai Aksoy<\/a>/g, 'Yayın Kurulu</a>');
  c = c.replace(/Doç\. Dr\. Senai Aksoy<\/span>/g, 'tupbebek.com Yayın Kurulu</span>');
  c = c.replace(/Doç\. Dr\. Senai Aksoy<\/p>/g, 'tupbebek.com Yayın Kurulu</p>');
  c = c.replace(/Doç\. Dr\. Senai Aksoy<\/h3>/g, 'tupbebek.com Yayın Kurulu</h3>');
  c = c.replace(/Doç\. Dr\. Senai Aksoy<\/strong>/g, 'tupbebek.com yayın kurulu</strong>');

  // Labels
  c = c.replace(/Tıbbi İnceleme Başkanı/g, 'Tıbbi İnceleme ve Onay');
  c = c.replace(/Tıbbi İnceleme Kurulu Başkanı/g, 'tupbebek.com Yayın Kurulu');
  c = c.replace(/>Tıbbi İnceleme & Onay</g, '>Yayın Kurulu Onayı<');
  c = c.replace(/>Tıbbi İnceleme:</g, '>İnceleme:<');
  c = c.replace(/>Medical Reviewer</g, '>İnceleme<');
  c = c.replace(/DR\. SENAI AKSOY ONAYLI/g, 'YAYIN KURULU ONAYLI');
  c = c.replace(/Dr\. Senai Aksoy Onaylı/g, 'Yayın Kurulu Onaylı');
  c = c.replace(/Tıbbi İnceleme: \{article\.data\.author\}/g, 'Yayın Kurulu Onaylı');

  // Long text paragraphs
  c = c.replace(/Bu makale, Doç\. Dr\. Senai Aksoy tarafından tıbbi doğruluk ve güncel klinik protokoller açısından incelenmiş ve onaylanmıştır\./g,
    'Bu makale, tupbebek.com yayın kurulu tarafından tıbbi doğruluk ve güncel klinik protokoller açısından incelenmiş ve onaylanmıştır.');
  c = c.replace(/Bu sayfa, üreme sağlığı alanında uzman.*?Doç\. Dr\. Senai Aksoy.*?onaylanmıştır\./g,
    'Bu sayfa, tupbebek.com yayın kurulu tarafından tıbbi doğruluk açısından incelenmiş ve onaylanmıştır.');
  c = c.replace(/Doç\. Dr\. Senai Aksoy ve tıbbi inceleme kurulumuzun denetimindedir\./g,
    'yayın kurulumuzun denetimindedir.');
  c = c.replace(/Doç\. Dr\. Senai Aksoy'un otuz yılı aşkın klinik derinliğiyle şekillenen bu rehber/g,
    'Otuz yılı aşkın klinik derinlikle şekillenen bu rehber');
  c = c.replace(/Dr\. Senai Aksoy ve ekibimiz tarafından multidisipliner/g,
    'yayın kurulumuz tarafından multidisipliner');
  c = c.replace(/Doç\. Dr\. Senai Aksoy denetiminde hazırlanan içerikler/g,
    'Yayın kurulu denetiminde hazırlanan içerikler');

  // Markdown article body references
  c = c.replace(/\*\*Yazar:\*\* Doç\. Dr\. Senai Aksoy/g, '**Yazar:** tupbebek.com Yayın Kurulu');
  c = c.replace(/- Dr\. Senai Aksoy/g, '- tupbebek.com Yayın Kurulu');
  c = c.replace(/Dr\. Senai Aksoy anlatıyor\./g, 'tupbebek.com yayın kurulu anlatıyor.');
  c = c.replace(/Dr\. Senai Aksoy ile çözün\./g, 'tupbebek.com yayın kurulu rehberliğinde çözün.');
  c = c.replace(/Dr\. Senai Aksoy, bu medyumun/g, 'tupbebek.com yayın kurulu, bu medyumun');

  // MDX QuoteBlock author
  c = c.replace(/author="Dr\. Senai Aksoy"/g, 'author="tupbebek.com Yayın Kurulu"');

  // Page titles containing the name
  c = c.replace(/\| Doç\. Dr\. Senai Aksoy"/g, '| tupbebek.com"');

  // Remaining inline references in markdown content
  c = c.replace(/Bu makale \*\*Doç\. Dr\. Senai Aksoy\*\*.*?hazırlanmıştır\./g, 
    'Bu makale **tupbebek.com yayın kurulu** tarafından genel bilgilendirme amacıyla hazırlanmıştır.');
  c = c.replace(/© Doç\. Dr\. Senai Aksoy - Tüm hakları saklıdır\./g,
    '© tupbebek.com - Tüm hakları saklıdır.');

  // {entry.data.author} display replacement
  c = c.replace(/\{entry\.data\.author\}/g, '"tupbebek.com Yayın Kurulu"');

  // HTML comments
  c = c.replace(/<!-- Medical Reviewer: Dr\. Senai Aksoy -->/g, '<!-- Medical Reviewer: Yayın Kurulu -->');

  if (c !== original) {
    fs.writeFileSync(f, c);
    totalChanges++;
    console.log('Updated: ' + f);
  }
}

console.log('\nTotal files updated: ' + totalChanges);

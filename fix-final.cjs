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

  // Q&A format: "Dr. Senai Aksoy:" -> "Uzman Görüşü:"
  c = c.replace(/\*\*Dr\. Senai Aksoy:\*\*/g, '**Uzman Görüşü:**');
  c = c.replace(/\*"Merhaba Dr\. Senai Aksoy,/g, '*"Merhaba,');

  // Disclaimer notes
  c = c.replace(/Dr\. Senai Aksoy, İstanbul'da tüp bebek ve infertilite alanında geniş bir deneyime sahip olup kişiye özel yaklaşımlar sunmaktadır\./g,
    'tupbebek.com, İstanbul\'da tüp bebek ve infertilite alanında geniş bir deneyime sahip olup kişiye özel yaklaşımlar sunmaktadır.');

  // Istanbul clinic references
  c = c.replace(/İstanbul'da önde gelen bir kısırlık uzmanı olan Dr\. Senai Aksoy,/g, 'tupbebek.com yayın kuruluna göre,');
  c = c.replace(/Dr\. Senai Aksoy gibi deneyimli kısırlık uzmanlarının rehberliğinde/g, 'Deneyimli kısırlık uzmanlarının rehberliğinde');

  // MDX sections
  c = c.replace(/<h2 id="dr-aksoy-yaklasimi">Dr\. Senai Aksoy Yaklaşımı:/g, '<h2 id="dr-aksoy-yaklasimi">tupbebek.com Yaklaşımı:');
  c = c.replace(/<Accordion title="Dr\. Senai Aksoy ile randevu nasıl alabilirim\?">/g, '<Accordion title="Randevu nasıl alabilirim?">');

  // IUI article personal intros
  c = c.replace(/Merhaba, ben Dr\. Senai Aksoy, infertilite uzmanı olarak uzun yıllardır/g, 'Uzun yıllardır infertilite alanında');
  c = c.replace(/Ben Dr\. Senai Aksoy olarak, her hastamın/g, 'Her hastamın');

  // Descriptions
  c = c.replace(/Dr\. Senai Aksoy, aşılama yöntemini/g, 'Aşılama yöntemini');
  c = c.replace(/Dr\. Senai Aksoy'un 'trafik lambası'/g, 'tupbebek.com\'un \'trafik lambası\'');
  c = c.replace(/Dr\. Senai Aksoy'dan bilimsel açıklama/g, 'tupbebek.com\'dan bilimsel açıklama');
  c = c.replace(/Dr\. Senai Aksoy tüp bebek ve kısırlık hakkında/g, 'tupbebek.com yayın kurulu tüp bebek ve kısırlık hakkında');

  // Titles
  c = c.replace(/Dr\. Senai Aksoy'dan A'dan Z'ye Rehber/g, 'A\'dan Z\'ye Rehber');
  c = c.replace(/### Rahim Myomlarına ve Kısırlığa Dair Dr\. Senai Aksoy'dan/g, '### Rahim Myomlarına ve Kısırlığa Dair');
  c = c.replace(/Merhaba, Dr\. Senai Aksoy ben\. Jinekoloji ve üreme sağlığı alanlarında uzmanım\./g, '');

  // Taze dondurulmus
  c = c.replace(/Dr\. Senai Aksoy, avantajları/g, 'Avantajları');
  c = c.replace(/Merhaba, ben Dr\. Senai Aksoy\. İstanbul'daki kliniğimde uzun yıllardır/g, 'İstanbul\'daki kliniğimizde uzun yıllardır');

  // Remaining disclaimers
  c = c.replace(/Bu makale, \*\*Doç\. Dr\. Senai Aksoy\*\* tarafından \*\*bilgilendirme amacıyla\*\* hazırlanmıştır\./g,
    'Bu makale, **tupbebek.com yayın kurulu** tarafından **bilgilendirme amacıyla** hazırlanmıştır.');
  c = c.replace(/© Doç\. Dr\. Senai Aksoy – \*\*Tüm hakları saklıdır\.\*\*/g, '© tupbebek.com – **Tüm hakları saklıdır.**');
  c = c.replace(/Bu makale, \*\*Dr\. Senai Aksoy\*\* tarafından yalnızca bilgilendirme amaçlı yazılmıştır\./g,
    'Bu makale, **tupbebek.com yayın kurulu** tarafından yalnızca bilgilendirme amaçlı yazılmıştır.');
  c = c.replace(/\*\*Dr\. Senai Aksoy\*\*/g, '**tupbebek.com Yayın Kurulu**');
  c = c.replace(/Bu makale, Dr\. Senai Aksoy tarafından eğitim ve bilgilendirme amacıyla hazırlanmıştır\./g,
    'Bu makale, tupbebek.com yayın kurulu tarafından eğitim ve bilgilendirme amacıyla hazırlanmıştır.');
  c = c.replace(/Selamlar, Dr\. Senai Aksoy burada\./g, '');
  c = c.replace(/Dr\. Senai Aksoy'un 30\+ yıllık klinik tecrübesiyle şekillenen bu rehber/g, '30+ yıllık klinik tecrübeyle şekillenen bu rehber');

  // Page meta descriptions
  c = c.replace(/Doç\. Dr\. Senai Aksoy editöryal denetiminde\./g, 'Yayın kurulu denetiminde.');
  c = c.replace(/Doç\. Dr\. Senai Aksoy onaylı\./g, 'Yayın kurulu onaylı.');

  // hakkimizda remaining
  c = c.replace(/Dr\. Senai Aksoy, tupbebek\.com bünyesindeki tüm tıbbi içeriklerin bilimsel doğruluğunu ve güncelliğini denetleyen baş inceleyicimizdir\. Yayınlanan her rehber, hastaların en doğru ve güncel tedavi protokollerine erişebilmesi için kendisinin ve ekibinin onayından geçer\./g,
    'tupbebek.com bünyesindeki tüm tıbbi içeriklerin bilimsel doğruluğunu ve güncelliğini yayın kurulumuz denetlemektedir. Yayınlanan her rehber, hastaların en doğru ve güncel tedavi protokollerine erişebilmesi için yayın kurulunun onayından geçer.');

  if (c !== original) {
    fs.writeFileSync(f, c);
    totalChanges++;
    console.log('Updated: ' + f);
  }
}
console.log('\nTotal: ' + totalChanges);

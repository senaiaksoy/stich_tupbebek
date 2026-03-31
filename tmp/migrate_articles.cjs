const fs = require('fs');
const path = require('path');
const https = require('https');

const articles = [
    { source: 'akinti-kasinti-koku-mantar-mi-bakteriyel-vajinoz-mu.mdx', target: 'akinti-kasinti-koku.md', category: 'Kadın Sağlığı' },
    { source: 'dondurulmus-embriyo-transferi-protokolleri-karsilastirma.md', target: 'dondurulmus-embriyo-transferi.md', category: 'Tedavi' },
    { source: 'embriyo-tup-bebek-laboratuvar-raporu-yorumlama.mdx', target: 'laboratuvar-raporu-yorumlama.md', category: 'Tanı' },
    { source: 'embryoglue-embriyo-yapistiricisi-faydalari.mdx', target: 'embryoglue-faydalari.md', category: 'Tedavi' },
    { source: 'embryoscope-yapay-zeka-embriyo-secimi.md', target: 'embryoscope-yapay-zeka.md', category: 'Teknoloji' },
    { source: 'endometriyal_scratching_ivf.mdx', target: 'endometriyal-scratching.md', category: 'Tedavi' },
    { source: 'fiv-basarisizligi-sonrasi-ne-yapmali-dr-senai-aksoy.mdx', target: 'tup-bebek-basarisizligi.md', category: 'Rehber' },
    { source: 'istanbul-tup-bebek-doktoru-merkezi-secimi-rehberi.mdx', target: 'istanbul-merkezi-secimi.md', category: 'Rehber' },
    { source: 'ivf-oncesi-histeroskopi-rif-hastalari.mdx', target: 'ivf-oncesi-histeroskopi.md', category: 'Tedavi' },
    { source: 'izotretinoin-noa-sperm-uretimi.mdx', target: 'izotretinoin-sperm.md', category: 'Erkek Sağlığı' },
    { source: 'vajinal-mikrobiyom-fiv-basarisi.md', target: 'vajinal-mikrobiyom.md', category: 'Bilim' },
    { source: 'yumurta-dondurma-kac-tanesi-gerekli-yas-gruplari.mdx', target: 'yumurta-dondurma-sayisi.md', category: 'Rehber' }
];

const RAW_BASE = 'https://raw.githubusercontent.com/senaiaksoy/tupbebek/refs/heads/senai30-03/src';
const CONTENT_DIR = path.join(__dirname, '..', 'src', 'content', 'articles');
const IMAGE_DIR = path.join(__dirname, '..', 'public', 'images', 'articles');

if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR, { recursive: true });

function download(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed code ${res.statusCode}`));
                return;
            }
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', reject);
    });
}

function fetchText(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`code ${res.statusCode}`));
                return;
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function migrate() {
    for (const art of articles) {
        console.log(`Processing ${art.source}...`);
        try {
            const raw = await fetchText(`${RAW_BASE}/content/blog/${art.source}`);
            
            let content = raw;
            const fmMatch = content.match(/^---([\s\S]*?)---/);
            if (fmMatch) {
                let fm = fmMatch[1];
                let imagePath = '';
                
                const imgMatch = fm.match(/image:\s*(.*)/);
                if (imgMatch) {
                    const originalImg = imgMatch[1].trim().replace(/^['"]|['"]$/g, '');
                    const imgUrl = originalImg.startsWith('http') ? originalImg : `${RAW_BASE}${originalImg.replace(/^\/src/, '')}`;
                    imagePath = `/images/articles/${art.target.replace('.md', '.jpg')}`;
                    
                    console.log(`Downloading image ${imgUrl}...`);
                    try {
                        await download(imgUrl, path.join(IMAGE_DIR, art.target.replace('.md', '.jpg')));
                    } catch (e) {
                        console.error(`Img Error: ${e.message}`);
                        imagePath = '/images/home/hero.jpg';
                    }
                }

                let newFm = fm
                    .replace(/date:\s*(.*)/, (match, p1) => `publishDate: ${p1}`)
                    .replace(/image:\s*.*/, `image: ${imagePath}\ncategory: ${art.category}\nauthor: Doç. Dr. Senai Aksoy\nimageAlt: ${art.target.replace('.md', '').split('-').join(' ')}`);
                
                content = content.replace(fm, newFm);
            }

            content = content.replace(/<Accordion[^>]*>|<\/Accordion>|<MedicalInfoBox[^>]*>|<\/MedicalInfoBox>|<QuoteBlock[^>]*>|<\/QuoteBlock>/g, '');
            content = content.replace(/import .* from '.*';/g, ''); 

            fs.writeFileSync(path.join(CONTENT_DIR, art.target), content);
            console.log(`Saved ${art.target}`);
        } catch (e) {
            console.error(`Error ${art.source}: ${e.message}`);
        }
    }
}

migrate();

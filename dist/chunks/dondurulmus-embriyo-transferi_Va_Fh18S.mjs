import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"dondurulmuş-embriyo-transferi-fet-protokolleri\">Dondurulmuş Embriyo Transferi (FET) Protokolleri</h1>\n<p>Günümüzde tüp bebek tedavilerinin büyük bir kısmı dondurulmuş embriyo transferi (FET) ile gerçekleştirilmektedir. FET başarısında en kritik aşama, rahmin embriyoyu kabul edeceği “implantasyon penceresini” doğru yakalamaktır.</p>\n<h2 id=\"temel-protokoller\">Temel Protokoller</h2>\n<h3 id=\"1-doğal-siklus-natural-cycle-fet\">1. Doğal Siklus (Natural Cycle FET)</h3>\n<p>Vücudun kendi hormonal dengesi kullanılarak yapılır. Yumurtlama takibi yapılır ve yumurtlamadan belirli bir süre sonra transfer gerçekleştirilir.</p>\n<ul>\n<li><strong>Avantajları:</strong> Daha az ilaç kullanımı, daha düşük maliyet, daha fizyolojik süreç.</li>\n<li><strong>Dezavantajları:</strong> Yakın takip gerektirir, yumurtlama olmazsa iptal edilebilir.</li>\n</ul>\n<h3 id=\"2-i̇laçlı-yapay-siklus-programmedhrt-fet\">2. İlaçlı (Yapay) Siklus (Programmed/HRT FET)</h3>\n<p>Östrojen ve progesteron hormonları dışarıdan verilerek rahim hazırlanır.</p>\n<ul>\n<li><strong>Avantajları:</strong> Transfer günü önceden planlanabilir, yumurtlaması düzensiz hastalarda idealdir.</li>\n<li><strong>Dezavantajları:</strong> Daha fazla ilaç kullanımı.</li>\n</ul>\n<h2 id=\"hangisi-daha-i̇yi\">Hangisi Daha İyi?</h2>\n<p>Bilimsel çalışmalar, her iki yöntemin de <strong>gebelik oranları açısından benzer</strong> sonuçlar verdiğini göstermektedir. Seçim, hastanın adet düzenine ve yaşam tarzına göre kişiselleştirilmelidir.</p>";

				const frontmatter = {"title":"Dondurulmuş Embriyo Transferi (FET): Hangi Protokol Daha Başarılı?","description":"Doğal siklus mu, ilaçlı (yapay) siklus mu? Dondurulmuş embriyo transferi protokollerini ve başarı oranlarını karşılaştırıyoruz.","publishDate":"2025-11-10T00:00:00.000Z","author":"Doç. Dr. Senai Aksoy","category":"Tedavi","image":"/images/articles/dondurulmus-embriyo-transferi.webp","imageAlt":"dondurulmus embriyo transferi protokolleri karsilastirma"};
				const file = "D:/stitch_tupbebek/src/content/articles/dondurulmus-embriyo-transferi.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# Dondurulmuş Embriyo Transferi (FET) Protokolleri\r\n\r\nGünümüzde tüp bebek tedavilerinin büyük bir kısmı dondurulmuş embriyo transferi (FET) ile gerçekleştirilmektedir. FET başarısında en kritik aşama, rahmin embriyoyu kabul edeceği \"implantasyon penceresini\" doğru yakalamaktır.\r\n\r\n## Temel Protokoller\r\n\r\n### 1. Doğal Siklus (Natural Cycle FET)\r\nVücudun kendi hormonal dengesi kullanılarak yapılır. Yumurtlama takibi yapılır ve yumurtlamadan belirli bir süre sonra transfer gerçekleştirilir.\r\n- **Avantajları:** Daha az ilaç kullanımı, daha düşük maliyet, daha fizyolojik süreç.\r\n- **Dezavantajları:** Yakın takip gerektirir, yumurtlama olmazsa iptal edilebilir.\r\n\r\n### 2. İlaçlı (Yapay) Siklus (Programmed/HRT FET)\r\nÖstrojen ve progesteron hormonları dışarıdan verilerek rahim hazırlanır.\r\n- **Avantajları:** Transfer günü önceden planlanabilir, yumurtlaması düzensiz hastalarda idealdir.\r\n- **Dezavantajları:** Daha fazla ilaç kullanımı.\r\n\r\n## Hangisi Daha İyi?\r\nBilimsel çalışmalar, her iki yöntemin de **gebelik oranları açısından benzer** sonuçlar verdiğini göstermektedir. Seçim, hastanın adet düzenine ve yaşam tarzına göre kişiselleştirilmelidir.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"dondurulmuş-embriyo-transferi-fet-protokolleri","text":"Dondurulmuş Embriyo Transferi (FET) Protokolleri"},{"depth":2,"slug":"temel-protokoller","text":"Temel Protokoller"},{"depth":3,"slug":"1-doğal-siklus-natural-cycle-fet","text":"1. Doğal Siklus (Natural Cycle FET)"},{"depth":3,"slug":"2-i̇laçlı-yapay-siklus-programmedhrt-fet","text":"2. İlaçlı (Yapay) Siklus (Programmed/HRT FET)"},{"depth":2,"slug":"hangisi-daha-i̇yi","text":"Hangisi Daha İyi?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

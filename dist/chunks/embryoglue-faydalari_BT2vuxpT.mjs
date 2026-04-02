import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"embryoglue-nedir\">EmbryoGlue Nedir?</h2>\n<p>EmbryoGlue aslında bir “yapıştırıcı” değil, hyaluronan (hyaluronik asit) açısından zenginleştirilmiş özel bir transfer medyumudur. Hyaluronan, vücutta doğal olarak bulunan ve rahmin tutunma döneminde (implantasyon penceresi) salgıladığı bir maddedir.</p>\n<h3 id=\"nasıl-çalışır\">Nasıl Çalışır?</h3>\n<ol>\n<li><strong>Yoğunluk:</strong> Sıvıyı daha vizkoz hale getirerek embriyonun transfer sırasında kaymasını önler.</li>\n<li><strong>Kimyasal Bağ:</strong> Rahim dokusu ile embriyo arasında kimyasal bir köprü kurar.</li>\n</ol>\n<blockquote>\n<p>“Embriyo yapıştırıcısı, özellikle tekrarlayan başarısızlık yaşayan çiftlerde veya ileri yaş hastalarımızda ek bir avantaj sağlayabilir.” - Dr. Senai Aksoy</p>\n</blockquote>\n<h2 id=\"kimler-i̇çin-tavsiye-edilir\">Kimler İçin Tavsiye Edilir?</h2>\n<ul>\n<li>Tekrarlayan implantasyon başarısızlığı (RIF) olanlar.</li>\n<li>İleri yaş anne adayları.</li>\n<li>Kalitesi orta düzey olan embriyoların transferinde.</li>\n</ul>";

				const frontmatter = {"title":"Embryoglue (Embriyo Yapıştırıcısı) Nedir? Tutunmayı Gerçekten Artırır mı?","description":"Embriyo yapıştırıcısı (EmbryoGlue) nedir? Hangi durumda kullanılır? Dr. Senai Aksoy, bu medyumun tutunma oranları üzerindeki bilimsel etkilerini açıklıyor.","publishDate":"2025-02-05T00:00:00.000Z","author":"Doç. Dr. Senai Aksoy","category":"Tedavi","image":"/images/articles/embryoglue-faydalari.webp","imageAlt":"embryoglue embriyo yapistiricisi faydalari"};
				const file = "D:/stitch_tupbebek/src/content/articles/embryoglue-faydalari.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## EmbryoGlue Nedir?\r\n\r\nEmbryoGlue aslında bir \"yapıştırıcı\" değil, hyaluronan (hyaluronik asit) açısından zenginleştirilmiş özel bir transfer medyumudur. Hyaluronan, vücutta doğal olarak bulunan ve rahmin tutunma döneminde (implantasyon penceresi) salgıladığı bir maddedir.\r\n\r\n### Nasıl Çalışır?\r\n1. **Yoğunluk:** Sıvıyı daha vizkoz hale getirerek embriyonun transfer sırasında kaymasını önler.\r\n2. **Kimyasal Bağ:** Rahim dokusu ile embriyo arasında kimyasal bir köprü kurar.\r\n\r\n> \"Embriyo yapıştırıcısı, özellikle tekrarlayan başarısızlık yaşayan çiftlerde veya ileri yaş hastalarımızda ek bir avantaj sağlayabilir.\" - Dr. Senai Aksoy\r\n\r\n## Kimler İçin Tavsiye Edilir?\r\n- Tekrarlayan implantasyon başarısızlığı (RIF) olanlar.\r\n- İleri yaş anne adayları.\r\n- Kalitesi orta düzey olan embriyoların transferinde.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"embryoglue-nedir","text":"EmbryoGlue Nedir?"},{"depth":3,"slug":"nasıl-çalışır","text":"Nasıl Çalışır?"},{"depth":2,"slug":"kimler-i̇çin-tavsiye-edilir","text":"Kimler İçin Tavsiye Edilir?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

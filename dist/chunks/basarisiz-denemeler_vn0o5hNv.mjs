import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Tüp bebek tedavisinde negatif sonuç almak, çiftler için en zorlu deneyimlerden biridir. Ancak modern üreme tıbbında, her başarısız deneme bir sonraki adım için kritik veriler sunar.</p>\n<h3 id=\"neden-olmadı-bilimsel-sorgulama\">Neden Olmadı? Bilimsel Sorgulama</h3>\n<p>Negatif bir sonuçtan sonra sorulması gereken temel medikal sorular şunlardır:</p>\n<ol>\n<li><strong>Embriyo Kalitesi:</strong> Embriyonun genetik yapısı sağlıklı mıydı? (PGT gerekliliği)</li>\n<li><strong>Endometrial Alımlılık:</strong> Rahim içi zarı embriyoyu kabul etmeye hazır mıydı? (ERA testi vb.)</li>\n<li><strong>Protokol Uyumu:</strong> Kullanılan ilaç dozları ve zamanlama hastanın biyolojik ritmine uygun muydu?</li>\n</ol>\n<h3 id=\"psikolojik-i̇yileşme-süreci\">Psikolojik İyileşme Süreci</h3>\n<p>Tıbbi veriler kadar, duygusal sağlığın korunması da bir sonraki denemenin başarısını doğrudan etkiler. Bu süreçte “yas” tutmak doğaldır, ancak “umutsuzluk” bilimin dışındadır.</p>\n<h3 id=\"yeni-strateji-kişiselleştirilmiş-yaklaşım\">Yeni Strateji: Kişiselleştirilmiş Yaklaşım</h3>\n<p>Başarısızlık sonrası biz ne yapıyoruz?</p>\n<ul>\n<li><strong>Derinlemesine Vaka Analizi:</strong> Tüm lab verilerinin yeniden incelenmesi.</li>\n<li><strong>Ek Tanısal Araştırmalar:</strong> İmmünolojik faktörlerin veya rahim içi anomali olasılığının elenmesi.</li>\n<li><strong>Yaşam Tarzı Optimizasyonu:</strong> Beslenmeden stres yönetimine kadar 3 aylık bir hazırlık dönemi.</li>\n</ul>\n<p>Unutmayın; bilim, her “olmadı” dediğinde bir sonraki “olacak” için yeni bir kapı aralar.</p>";

				const frontmatter = {"title":"Başarısız Denemeler ve Psikolojik Destek: Yeni Bir Yol Haritası","description":"Tüp bebek tedavisinde olumsuz sonuç almak, yolun sonu değil, stratejinin yeniden kurgulandığı bir duraktır. Bilimsel ve duygusal olarak nasıl ilerlenmeli?","category":"Rehber","author":"Doç. Dr. Senai Aksoy","publishDate":"2024-03-31T00:00:00.000Z","image":"/images/home/integrity.jpg","imageAlt":"Klinik dürüstlük ve destek vurgulayan tıbbi görsel"};
				const file = "D:/stitch_tupbebek/src/content/articles/basarisiz-denemeler.md";
				const url = undefined;
				function rawContent() {
					return "\nTüp bebek tedavisinde negatif sonuç almak, çiftler için en zorlu deneyimlerden biridir. Ancak modern üreme tıbbında, her başarısız deneme bir sonraki adım için kritik veriler sunar.\n\n### Neden Olmadı? Bilimsel Sorgulama\nNegatif bir sonuçtan sonra sorulması gereken temel medikal sorular şunlardır:\n1. **Embriyo Kalitesi:** Embriyonun genetik yapısı sağlıklı mıydı? (PGT gerekliliği)\n2. **Endometrial Alımlılık:** Rahim içi zarı embriyoyu kabul etmeye hazır mıydı? (ERA testi vb.)\n3. **Protokol Uyumu:** Kullanılan ilaç dozları ve zamanlama hastanın biyolojik ritmine uygun muydu?\n\n### Psikolojik İyileşme Süreci\nTıbbi veriler kadar, duygusal sağlığın korunması da bir sonraki denemenin başarısını doğrudan etkiler. Bu süreçte \"yas\" tutmak doğaldır, ancak \"umutsuzluk\" bilimin dışındadır.\n\n### Yeni Strateji: Kişiselleştirilmiş Yaklaşım\nBaşarısızlık sonrası biz ne yapıyoruz?\n- **Derinlemesine Vaka Analizi:** Tüm lab verilerinin yeniden incelenmesi.\n- **Ek Tanısal Araştırmalar:** İmmünolojik faktörlerin veya rahim içi anomali olasılığının elenmesi.\n- **Yaşam Tarzı Optimizasyonu:** Beslenmeden stres yönetimine kadar 3 aylık bir hazırlık dönemi.\n\nUnutmayın; bilim, her \"olmadı\" dediğinde bir sonraki \"olacak\" için yeni bir kapı aralar.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"neden-olmadı-bilimsel-sorgulama","text":"Neden Olmadı? Bilimsel Sorgulama"},{"depth":3,"slug":"psikolojik-i̇yileşme-süreci","text":"Psikolojik İyileşme Süreci"},{"depth":3,"slug":"yeni-strateji-kişiselleştirilmiş-yaklaşım","text":"Yeni Strateji: Kişiselleştirilmiş Yaklaşım"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

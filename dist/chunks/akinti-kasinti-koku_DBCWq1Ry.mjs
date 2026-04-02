import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"belirtiler-ve-ayırıcı-teşhis\">Belirtiler ve Ayırıcı Teşhis</h2>\n<p>Vajinal enfeksiyonlar kadınların en sık karşılaştığı sağlık sorunlarından biridir. Genellikle “mantar oldum” diyerek geçiştirilen birçok durum aslında farklı bir tablo olabilir.</p>\n<h3 id=\"1-mantar-enfeksiyonu-kandidiyazis\">1. Mantar Enfeksiyonu (Kandidiyazis)</h3>\n<ul>\n<li><strong>Akıntı:</strong> Çökelek peyniri gibi beyaz, parça parça.</li>\n<li><strong>Koku:</strong> Genellikle koku yoktur.</li>\n<li><strong>Kaşıntı:</strong> En belirgin özelliktir, çok şiddetli olabilir.</li>\n<li><strong>Diğer:</strong> Kızarıklık ve yanma hissi eşlik eder.</li>\n</ul>\n<h3 id=\"2-bakteriyel-vajinoz-bv\">2. Bakteriyel Vajinoz (BV)</h3>\n<ul>\n<li><strong>Akıntı:</strong> Gri-beyaz, ince ve homojen.</li>\n<li><strong>Koku:</strong> “Balık kokusu” olarak tarif edilen belirgin bir koku (özellikle ilişki sonrası artar).</li>\n<li><strong>Kaşıntı:</strong> Genellikle hafiftir veya yoktur.</li>\n<li><strong>Diğer:</strong> PH dengesinin bozulması ana nedendir.</li>\n</ul>\n<h2 id=\"vajinal-florayı-korumak-i̇çin-neler-yapılmalı\">Vajinal Florayı Korumak İçin Neler Yapılmalı?</h2>\n<ol>\n<li>Pamuklu iç çamaşırı tercih edin.</li>\n<li>Vajinal duş yapmaktan kaçının (iç bölgeyi yıkamayın).</li>\n<li>Parfümlü ped ve günlük ped kullanımını sınırlayın.</li>\n<li>Antibiyotik kullanımı sonrası probiyotik desteği düşünün.</li>\n</ol>";

				const frontmatter = {"title":"Akıntı, Kaşıntı, Koku: Mantar mı? Bakteriyel Vajinoz mu?","description":"Vajinal akıntı, koku ve kaşıntı neden olur? Mantar enfeksiyonu ile bakteriyel vajinoz arasındaki farkları Dr. Senai Aksoy anlatıyor.","publishDate":"2025-01-15T00:00:00.000Z","author":"Doç. Dr. Senai Aksoy","category":"Kadın Sağlığı","image":"/images/articles/akinti-kasinti-koku.webp","imageAlt":"akinti kasinti koku mantar mi bakteriyel vajinoz mu"};
				const file = "D:/stitch_tupbebek/src/content/articles/akinti-kasinti-koku.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Belirtiler ve Ayırıcı Teşhis\r\n\r\nVajinal enfeksiyonlar kadınların en sık karşılaştığı sağlık sorunlarından biridir. Genellikle \"mantar oldum\" diyerek geçiştirilen birçok durum aslında farklı bir tablo olabilir.\r\n\r\n### 1. Mantar Enfeksiyonu (Kandidiyazis)\r\n- **Akıntı:** Çökelek peyniri gibi beyaz, parça parça.\r\n- **Koku:** Genellikle koku yoktur.\r\n- **Kaşıntı:** En belirgin özelliktir, çok şiddetli olabilir.\r\n- **Diğer:** Kızarıklık ve yanma hissi eşlik eder.\r\n\r\n### 2. Bakteriyel Vajinoz (BV)\r\n- **Akıntı:** Gri-beyaz, ince ve homojen.\r\n- **Koku:** \"Balık kokusu\" olarak tarif edilen belirgin bir koku (özellikle ilişki sonrası artar).\r\n- **Kaşıntı:** Genellikle hafiftir veya yoktur.\r\n- **Diğer:** PH dengesinin bozulması ana nedendir.\r\n\r\n## Vajinal Florayı Korumak İçin Neler Yapılmalı?\r\n1. Pamuklu iç çamaşırı tercih edin.\r\n2. Vajinal duş yapmaktan kaçının (iç bölgeyi yıkamayın).\r\n3. Parfümlü ped ve günlük ped kullanımını sınırlayın.\r\n4. Antibiyotik kullanımı sonrası probiyotik desteği düşünün.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"belirtiler-ve-ayırıcı-teşhis","text":"Belirtiler ve Ayırıcı Teşhis"},{"depth":3,"slug":"1-mantar-enfeksiyonu-kandidiyazis","text":"1. Mantar Enfeksiyonu (Kandidiyazis)"},{"depth":3,"slug":"2-bakteriyel-vajinoz-bv","text":"2. Bakteriyel Vajinoz (BV)"},{"depth":2,"slug":"vajinal-florayı-korumak-i̇çin-neler-yapılmalı","text":"Vajinal Florayı Korumak İçin Neler Yapılmalı?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

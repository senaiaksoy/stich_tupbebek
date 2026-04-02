import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"gardner-sistemi-ivfnin-da-vinci-şifresi\">Gardner Sistemi: IVF’nin Da Vinci Şifresi</h2>\n<p>Dünya standardı olan Gardner sistemi, embriyoyu üç bileşene ayırır: Genişleme derecesi (Sayı), İç Hücre Kitlesi (İlk Harf) ve Trofektoderm (İkinci Harf).</p>\n<h3 id=\"harf-ve-sayıların-analizi\">Harf ve Sayıların Analizi</h3>\n<ul>\n<li><strong>En Üst Düzey (4AA, 5AA):</strong> %60-70 başarı şansı.</li>\n<li><strong>Ortalama ve İyi (3BB, 4BB):</strong> %40-50 başarı şansı.</li>\n<li><strong>Düşük Ortalama (3BC, 5BC):</strong> %25-35 başarı şansı.</li>\n</ul>\n<h3 id=\"sık-sorulan-sorular\">Sık Sorulan Sorular</h3>\n<p><strong>3BB embriyo kötü mü?</strong>\r\nHayır. B ‘iyi’ demektir. 3BB ortalamadır ve gayet başarılıdır. A olmamasına takılmayın.</p>\n<blockquote>\n<p>“Morfometri çalışmaları gösteriyor ki; trofektoderm (2. harf) hamilelik için en iyi belirleyici olabilir.” - Dr. Senai Aksoy</p>\n</blockquote>";

				const frontmatter = {"title":"4AA, 3BB veya 5BC: Embriyo Kalite Kodları ve Gebelik Şansınız","description":"Embriyo 4AA, 3BB veya 5BC? Tüp bebek laboratuvar raporunuzu Dr. Senai Aksoy ile çözün. Bebeğinizin genetik potansiyelinin neden dış görünüşten daha önemli olduğunu keşfedin.","publishDate":"2025-12-22T00:00:00.000Z","author":"Doç. Dr. Senai Aksoy","category":"Tanı","image":"/images/articles/laboratuvar-raporu-yorumlama.webp","imageAlt":"embriyo tup bebek laboratuvar raporu yorumlama"};
				const file = "D:/stitch_tupbebek/src/content/articles/laboratuvar-raporu-yorumlama.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Gardner Sistemi: IVF'nin Da Vinci Şifresi\r\n\r\nDünya standardı olan Gardner sistemi, embriyoyu üç bileşene ayırır: Genişleme derecesi (Sayı), İç Hücre Kitlesi (İlk Harf) ve Trofektoderm (İkinci Harf).\r\n\r\n### Harf ve Sayıların Analizi\r\n- **En Üst Düzey (4AA, 5AA):** %60-70 başarı şansı.\r\n- **Ortalama ve İyi (3BB, 4BB):** %40-50 başarı şansı.\r\n- **Düşük Ortalama (3BC, 5BC):** %25-35 başarı şansı.\r\n\r\n### Sık Sorulan Sorular\r\n**3BB embriyo kötü mü?**\r\nHayır. B 'iyi' demektir. 3BB ortalamadır ve gayet başarılıdır. A olmamasına takılmayın.\r\n\r\n> \"Morfometri çalışmaları gösteriyor ki; trofektoderm (2. harf) hamilelik için en iyi belirleyici olabilir.\" - Dr. Senai Aksoy\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"gardner-sistemi-ivfnin-da-vinci-şifresi","text":"Gardner Sistemi: IVF’nin Da Vinci Şifresi"},{"depth":3,"slug":"harf-ve-sayıların-analizi","text":"Harf ve Sayıların Analizi"},{"depth":3,"slug":"sık-sorulan-sorular","text":"Sık Sorulan Sorular"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

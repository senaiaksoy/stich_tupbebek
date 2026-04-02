import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"preimplantasyon-genetik-testler-pgt-a\">Preimplantasyon Genetik Testler (PGT-A)</h1>\n<p>Genetik tarama teknolojileri, tüp bebek tedavisinde en sağlıklı embriyonun seçilmesini sağlayarak gebelik oranlarını artıran devrim niteliğinde bir adımdır.</p>\n<h2 id=\"pgt-a-nedir\">PGT-A Nedir?</h2>\n<p>PGT-A, embriyoların rahme transfer edilmeden önce kromozomal olarak taranması işlemidir. Bu test, yanlış sayıda kromozoma sahip embriyoların (anöploidi) elenmesini sağlar.</p>\n<h3 id=\"kimler-i̇çin-önerilir\">Kimler İçin Önerilir?</h3>\n<ol>\n<li><strong>37 Yaş ve Üzeri Hastalar</strong>: Yaşla birlikte kromozomal anomali riski artar.</li>\n<li><strong>Tekrarlayan Gebelik Kayıpları</strong>: Düşük nedenlerinin büyük bir kısmı genetik anomali kaynaklıdır.</li>\n<li><strong>Başarısız Tüp Bebek Denemeleri</strong>: İyi kalitede olmasına rağmen tutunmayan embriyoların genetik analizi.</li>\n</ol>\n<h2 id=\"klinik-kazanımlar\">Klinik Kazanımlar</h2>\n<ul>\n<li><strong>Gebelik Başına Düşen Transfer Sayısında Azalma</strong>: Daha az deneme ile gebelik elde edilmesi.</li>\n<li><strong>Düşük Oranlarının Minimize Edilmesi</strong>: Kromozomal olarak normal (euploid) bir embriyo ile sağlıklı gebelik şansı.</li>\n<li><strong>Çoğul Gebelik Riskinin Azaltılması</strong>: Tek embriyo transferi ile sağlıklı sonuç alma olasılığının artması.</li>\n</ul>\n<p>Modern laboratuvar teknikleri, biyopsi işleminin embriyo üzerindeki etkisini minimize ederek güvenliği en üst düzeye çıkarmıştır.</p>";

				const frontmatter = {"title":"Preimplantasyon Genetik Testler (PGT-A) ve Klinik Kazanımlar","description":"İnvaziv olmayan PGT yöntemlerinin ve bunların geleneksel trofektoderm biyopsi tekniklerine karşı karşılaştırmalı doğruluğunun analizi.","publishDate":"2026-03-31T00:00:00.000Z","author":"Doç. Dr. Senai Aksoy","category":"Genetik","image":"/images/home/article-2.jpg","imageAlt":"biyolojik şemalar ve tıbbi görüntülemeye odaklanarak bir ışıklı panoda bilimsel verileri inceleyen bir doktor","featured":false};
				const file = "D:/stitch_tupbebek/src/content/articles/genetik-testler.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# Preimplantasyon Genetik Testler (PGT-A)\r\n\r\nGenetik tarama teknolojileri, tüp bebek tedavisinde en sağlıklı embriyonun seçilmesini sağlayarak gebelik oranlarını artıran devrim niteliğinde bir adımdır.\r\n\r\n## PGT-A Nedir?\r\n\r\nPGT-A, embriyoların rahme transfer edilmeden önce kromozomal olarak taranması işlemidir. Bu test, yanlış sayıda kromozoma sahip embriyoların (anöploidi) elenmesini sağlar.\r\n\r\n### Kimler İçin Önerilir?\r\n\r\n1. **37 Yaş ve Üzeri Hastalar**: Yaşla birlikte kromozomal anomali riski artar.\r\n2. **Tekrarlayan Gebelik Kayıpları**: Düşük nedenlerinin büyük bir kısmı genetik anomali kaynaklıdır.\r\n3. **Başarısız Tüp Bebek Denemeleri**: İyi kalitede olmasına rağmen tutunmayan embriyoların genetik analizi.\r\n\r\n## Klinik Kazanımlar\r\n\r\n- **Gebelik Başına Düşen Transfer Sayısında Azalma**: Daha az deneme ile gebelik elde edilmesi.\r\n- **Düşük Oranlarının Minimize Edilmesi**: Kromozomal olarak normal (euploid) bir embriyo ile sağlıklı gebelik şansı.\r\n- **Çoğul Gebelik Riskinin Azaltılması**: Tek embriyo transferi ile sağlıklı sonuç alma olasılığının artması.\r\n\r\nModern laboratuvar teknikleri, biyopsi işleminin embriyo üzerindeki etkisini minimize ederek güvenliği en üst düzeye çıkarmıştır.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"preimplantasyon-genetik-testler-pgt-a","text":"Preimplantasyon Genetik Testler (PGT-A)"},{"depth":2,"slug":"pgt-a-nedir","text":"PGT-A Nedir?"},{"depth":3,"slug":"kimler-i̇çin-önerilir","text":"Kimler İçin Önerilir?"},{"depth":2,"slug":"klinik-kazanımlar","text":"Klinik Kazanımlar"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

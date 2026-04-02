/* empty css                                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_mvtIGwT5.mjs';
import { $ as $$StatsStrip, a as $$RelatedContent } from '../chunks/RelatedContent_DvrQk9Ig.mjs';
import { $ as $$DisclaimerBar } from '../chunks/DisclaimerBar_r6v0DkI9.mjs';
export { renderers } from '../renderers.mjs';

const $$YasVeFertilite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Ya\u015F ve Fertilite: \xDCreme Ba\u015Far\u0131s\u0131 \xDCzerinde Ya\u015F\u0131n Etkileri | tupbebek.com", "description": "Kad\u0131n ve erkek ya\u015F\u0131n\u0131n fertilite ve t\xFCp bebek ba\u015Far\u0131s\u0131 \xFCzerindeki etkisi, ya\u015Flanma ve oosit kalitesi, erkek ya\u015F\u0131n\u0131n sperm parametrelerine etkisi." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pb-24"> <!-- Hero Section --> <header class="max-w-5xl mx-auto px-8 mb-20"> <div class="flex flex-col md:flex-row gap-12 items-start"> <div class="flex-1"> <div class="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-semibold uppercase tracking-wider mb-6"> <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">schedule</span>
Biyolojik Faktör
</div> <h1 class="font-headline text-5xl md:text-6xl text-on-surface leading-tight mb-8">
Yaş ve Fertilite: <span class="text-primary italic">Zaman</span> Kritikal Faktör
</h1> <div class="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border-l-4 border-primary"> <div class="w-12 h-12 rounded-full overflow-hidden bg-surface-dim"> <img class="w-full h-full object-cover" src="/images/senai-aksoy.jpg" alt="Dr. Senai Aksoy" width="512" height="512" loading="eager" fetchpriority="high"> </div> <div> <p class="font-headline italic text-on-surface text-sm">Tıbbi İnceleme:</p> <p class="font-bold text-primary">Doç. Dr. Senai Aksoy</p> </div> </div> </div> <div class="hidden md:block w-72 shrink-0 aspect-[4/5] bg-surface-container-highest rounded-2xl overflow-hidden shadow-2xl"> <img class="w-full h-full object-cover grayscale opacity-80" src="/images/sorunlar/cell-biology.jpg" alt="Yaş ve fertilite" width="512" height="512" loading="eager" fetchpriority="high"> </div> </div> </header> <!-- Introduction --> <section class="max-w-3xl mx-auto px-8 mb-24"> <p class="text-lg md:text-xl text-on-surface-variant leading-relaxed font-body italic mb-12">
Üreme sağlığında yaş, en kritik faktörlerden biridir. Kadınlar sınırlı sayıda yumurta ile doğarlar ve bu reserve zamanla azalır, kalitesi düşer. Erkeklerde ise yaş, sperm parametrelerini ve DNA fragmentasyonunu etkiler. Bu rehberde yaşın üreme başarısı üzerindeki bilimsel etkisini inceleyeceğiz.
</p> ${renderComponent($$result2, "StatsStrip", $$StatsStrip, { "items": [
    { icon: "fertile", heading: "En Verimli", text: "20-30 ya\u015F aras\u0131 en y\xFCksek do\u011Fal fertilite" },
    { icon: "trending_down", heading: "35+ K\u0131r\u0131lma", text: "35 ya\u015F\u0131ndan sonra ba\u015Far\u0131 oranlar\u0131 d\xFC\u015F\xFC\u015F g\xF6sterir" },
    { icon: "science", heading: "DNA", text: "Ya\u015F artt\u0131k\xE7a oosit DNA fragmentasyonu art\u0131yor" }
  ] })} </section> <!-- Kadın Yaşı --> <section class="bg-surface-container-low py-24 mb-24"> <div class="max-w-5xl mx-auto px-8"> <h2 class="font-headline text-3xl text-on-surface mb-12">Kadın Yaşının Etkisi</h2> <div class="space-y-6 text-on-surface-variant"> <p>
Kadının yaşı, tüp bebek (IVF) başarısındaki en güçlü bağımsız değişkendir. Bunun nedeni, kadınların doğumda sahip oldukları yumurta (oosit) sayısının yaş ilerledikçe hem sayıca azalması hem de kalitesinin düşmesidir. Bu biyolojik gerçek, hormon tedavisi ile değiştirilemez.
</p> <div class="bg-white border-l-4 border-primary rounded-xl p-6"> <h4 class="font-bold text-on-surface mb-4">Yaşa Göre Doğal Gebelik Oranları:</h4> <ul class="space-y-2 text-sm"> <li>• <strong>20-25 yaş:</strong> Aylık doğal gebelik şansı ~25%</li> <li>• <strong>30-34 yaş:</strong> Aylık doğal gebelik şansı ~15%</li> <li>• <strong>35-39 yaş:</strong> Aylık doğal gebelik şansı ~10%</li> <li>• <strong>40+ yaş:</strong> Aylık doğal gebelik şansı ~3-5%</li> </ul> </div> <p>
IVF başarısı da benzer trend gösterir. <a href="/basari-oranlari" class="text-primary hover:underline">Başarı oranları sayfamız</a>da yaşa göre ayrıntılı veriler bulabilirsiniz. <a href="/kadin-infertilitesi" class="text-primary hover:underline">Kadın infertilitesi</a> hakkında daha fazla bilgi için ilgili sayfamızı ziyaret edin.
</p> </div> </div> </section> <!-- Erkek Yaşı --> <section class="max-w-5xl mx-auto px-8 mb-24"> <h2 class="font-headline text-3xl text-on-surface mb-12">Erkek Yaşının Etkisi</h2> <div class="space-y-6 text-on-surface-variant"> <p>
Erkek yaşı, kadın yaşı kadar kritik değildir, ancak göz ardı edilmemelidir. Yaş ilerledikçe, sperm motilitesi, morfolojisi ve DNA bütünlüğü etkilenebilir. Özellikle 50 yaşından sonra bu etkiler daha belirgin hale gelir.
</p> <div class="bg-white border-l-4 border-primary rounded-xl p-6"> <h4 class="font-bold text-on-surface mb-4">Yaş ve Sperm Parametreleri:</h4> <ul class="space-y-2 text-sm"> <li>• <strong>20-30 yaş:</strong> Optimal sperm parametreleri, düşük DNA fragmentasyonu</li> <li>• <strong>30-40 yaş:</strong> Minimal değişim, genellikle normal parametreler</li> <li>• <strong>40-50 yaş:</strong> DNA fragmentasyonunda hafif artış mümkün</li> <li>• <strong>50+ yaş:</strong> Motilite ve morfoloji bozulması, DNA fragmentasyonunda artış</li> </ul> </div> <p>
Erkek faktörleri hakkında daha fazla bilgi için <a href="/erkek-infertilitesi" class="text-primary hover:underline">erkek infertilitesi rehberimiz</a>i ziyaret edin.
</p> </div> </section> <!-- İlgili Kaynaklar --> ${renderComponent($$result2, "RelatedContent", $$RelatedContent, { "items": [
    { href: "/kadin-infertilitesi", icon: "woman", title: "Kad\u0131n \u0130nfertilitesi", description: "Ya\u015F\u0131n nedenler \xFCzerindeki etkisi" },
    { href: "/erkek-infertilitesi", icon: "man", title: "Erkek \u0130nfertilitesi", description: "Erkek ya\u015F\u0131n\u0131n etkisi" },
    { href: "/basari-oranlari", icon: "trending_up", title: "Ba\u015Far\u0131 Oranlar\u0131", description: "Ya\u015Fa g\xF6re IVF ba\u015Far\u0131 verileri" }
  ] })} <!-- Doktor Onay --> <section class="max-w-3xl mx-auto px-8 mb-16"> <div class="bg-surface-container-low p-8 rounded-2xl border-l-4 border-primary flex flex-col md:flex-row items-center gap-8"> <div class="w-20 h-20 rounded-full overflow-hidden bg-surface-dim shrink-0"> <img class="w-full h-full object-cover" src="/images/senai-aksoy.jpg" alt="Doç. Dr. Senai Aksoy" width="512" height="512" loading="lazy"> </div> <div> <p class="font-headline text-lg text-on-surface mb-1">Doç. Dr. Senai Aksoy</p> <p class="text-sm text-on-surface-variant">
Bu rehber, üreme sağlığı alanında uzman <strong class="text-primary">Doç. Dr. Senai Aksoy</strong> tarafından tıbbi açıdan incelenmiş ve onaylanmıştır.
</p> </div> </div> </section> <!-- Yasal Uyarı --> <section class="max-w-3xl mx-auto px-8"> ${renderComponent($$result2, "DisclaimerBar", $$DisclaimerBar, { "title": "Yasal Uyar\u0131" }, { "default": ($$result3) => renderTemplate`
Bu rehber genel bilgilendirme amaçlıdır. Yaş ve fertilite hakkında kişisel kararlar için lütfen bir üreme sağlığı uzmanına danışınız. tupbebek.com, bu bilgilere dayanılarak alınan kararlardan sorumlu tutulamaz.
` })} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/stitch_tupbebek/src/pages/yas-ve-fertilite.astro", void 0);

const $$file = "D:/stitch_tupbebek/src/pages/yas-ve-fertilite.astro";
const $$url = "/yas-ve-fertilite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$YasVeFertilite,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

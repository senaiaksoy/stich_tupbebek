/* empty css                                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_mvtIGwT5.mjs';
export { renderers } from '../renderers.mjs';

const $$CerezPolitikasi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\xC7erez Politikas\u0131 | tupbebek.com", "description": "Web sitemizde kullan\u0131lan \xE7erezler ve veri toplama politikas\u0131" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="py-24"> <section class="max-w-5xl mx-auto px-8"> <h1 class="font-headline text-4xl text-on-surface mb-8">Çerez Politikası</h1> <p class="text-on-surface-variant">İçerik yakında eklenecek.</p> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/stitch_tupbebek/src/pages/cerez-politikasi.astro", void 0);

const $$file = "D:/stitch_tupbebek/src/pages/cerez-politikasi.astro";
const $$url = "/cerez-politikasi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CerezPolitikasi,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

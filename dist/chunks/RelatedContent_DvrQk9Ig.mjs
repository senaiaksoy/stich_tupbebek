import { c as createComponent, m as maybeRenderHead, a as renderTemplate, d as createAstro, b as addAttribute } from './astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                             */

const $$Astro$1 = createAstro();
const $$StatsStrip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StatsStrip;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-ayriwarr> ${items.map((item) => renderTemplate`<div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-t-2 border-primary-fixed" data-astro-cid-ayriwarr> <span class="material-symbols-outlined text-primary mb-3" data-astro-cid-ayriwarr>${item.icon}</span> <h3 class="font-bold text-sm mb-2" data-astro-cid-ayriwarr>${item.heading}</h3> <p class="text-xs text-on-surface-variant mb-0" data-astro-cid-ayriwarr>${item.text}</p> </div>`)} </div> `;
}, "D:/stitch_tupbebek/src/components/StatsStrip.astro", void 0);

const $$Astro = createAstro();
const $$RelatedContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RelatedContent;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="max-w-5xl mx-auto px-8 mb-16" data-astro-cid-gggrgnyf> <h2 class="font-headline text-2xl text-on-surface mb-6" data-astro-cid-gggrgnyf>Bunları da Okuyun</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-gggrgnyf> ${items.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="border rounded-xl p-6 hover:shadow-lg transition-shadow block" data-astro-cid-gggrgnyf> <span class="material-symbols-outlined text-primary mb-2" data-astro-cid-gggrgnyf>${item.icon}</span> <h3 class="font-bold text-on-surface text-sm" data-astro-cid-gggrgnyf>${item.title}</h3> <p class="text-xs text-on-surface-variant mt-1" data-astro-cid-gggrgnyf>${item.description}</p> </a>`)} </div> </section> `;
}, "D:/stitch_tupbebek/src/components/RelatedContent.astro", void 0);

export { $$StatsStrip as $, $$RelatedContent as a };

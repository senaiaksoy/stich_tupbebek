import { c as createComponent, m as maybeRenderHead, e as renderSlot, a as renderTemplate, d as createAstro } from './astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                             */

const $$Astro = createAstro();
const $$DisclaimerBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DisclaimerBar;
  const { title = "Yasal Uyar\u0131" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-amber-50/50 border border-amber-200/50 rounded-xl p-6 text-sm text-on-surface-variant" data-astro-cid-ljdravqh> <p data-astro-cid-ljdravqh> <strong class="text-on-surface" data-astro-cid-ljdravqh>${title}:</strong> ${renderSlot($$result, $$slots["default"])} </p> </div> `;
}, "D:/stitch_tupbebek/src/components/DisclaimerBar.astro", void 0);

export { $$DisclaimerBar as $ };

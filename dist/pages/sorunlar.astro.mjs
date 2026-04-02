/* empty css                                                     */
import { c as createComponent, d as createAstro } from '../chunks/astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Sorunlar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sorunlar;
  return Astro2.redirect("/kadin-infertilitesi", 301);
}, "D:/stitch_tupbebek/src/pages/sorunlar.astro", void 0);

const $$file = "D:/stitch_tupbebek/src/pages/sorunlar.astro";
const $$url = "/sorunlar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Sorunlar,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

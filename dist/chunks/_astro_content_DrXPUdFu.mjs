import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { i as isCoreRemotePath, V as VALID_INPUT_FORMATS } from './astro/assets-service_lzFWa4op.mjs';
import { A as AstroError, U as UnknownContentCollectionError, c as createComponent, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_CkLXcuG9.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isCoreRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/articles/adet-duzensizligi-pcos.md": () => import('./adet-duzensizligi-pcos_DfF0z-sk.mjs'),"/src/content/articles/adet-gorememe.md": () => import('./adet-gorememe_DF6bYrL9.mjs'),"/src/content/articles/akinti-kasinti-koku.md": () => import('./akinti-kasinti-koku_-xmLP5jZ.mjs'),"/src/content/articles/akraba-evliligi.md": () => import('./akraba-evliligi_Cfj1FfqD.mjs'),"/src/content/articles/alkol-ve-fertilite.md": () => import('./alkol-ve-fertilite_CtSS4gdB.mjs'),"/src/content/articles/asherman-sendromu.md": () => import('./asherman-sendromu_347QlLNo.mjs'),"/src/content/articles/azospermi-mikro-tese.md": () => import('./azospermi-mikro-tese_B7F2S5ID.mjs'),"/src/content/articles/basari-oranlari.md": () => import('./basari-oranlari_CSsqaDf-.mjs'),"/src/content/articles/basarisiz-denemeler.md": () => import('./basarisiz-denemeler_Dv5Hyyi_.mjs'),"/src/content/articles/beta-hcg-testi.md": () => import('./beta-hcg-testi_Bk5KJuuC.mjs'),"/src/content/articles/dondurulmus-embriyo-transferi.md": () => import('./dondurulmus-embriyo-transferi_CPCmpFjX.mjs'),"/src/content/articles/embryoglue-faydalari.md": () => import('./embryoglue-faydalari_CM8BbhSu.mjs'),"/src/content/articles/genetik-testler.md": () => import('./genetik-testler_MUzmFY8n.mjs'),"/src/content/articles/istanbul-tup-bebek-doktoru.md": () => import('./istanbul-tup-bebek-doktoru_BtFgB8L1.mjs'),"/src/content/articles/ivf-oncesi-histeroskopi.md": () => import('./ivf-oncesi-histeroskopi_KlrrnXuV.mjs'),"/src/content/articles/iyi-tup-bebek-merkezi.md": () => import('./iyi-tup-bebek-merkezi_BLYHbTmM.mjs'),"/src/content/articles/izotretinoin-sperm.md": () => import('./izotretinoin-sperm_Mb1u-xBo.mjs'),"/src/content/articles/kanser-ve-fertilite.md": () => import('./kanser-ve-fertilite_CvFPNsFg.mjs'),"/src/content/articles/laboratuvar-raporu-yorumlama.md": () => import('./laboratuvar-raporu-yorumlama_PxbSt_5u.mjs'),"/src/content/articles/yumurta-dondurma-rehberi.md": () => import('./yumurta-dondurma-rehberi_BgLClKCE.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"articles":{"type":"content","entries":{"adet-duzensizligi-pcos":"/src/content/articles/adet-duzensizligi-pcos.md","adet-gorememe":"/src/content/articles/adet-gorememe.md","akraba-evliligi":"/src/content/articles/akraba-evliligi.md","akinti-kasinti-koku":"/src/content/articles/akinti-kasinti-koku.md","azospermi-mikro-tese":"/src/content/articles/azospermi-mikro-tese.md","asherman-sendromu":"/src/content/articles/asherman-sendromu.md","alkol-ve-fertilite":"/src/content/articles/alkol-ve-fertilite.md","basari-oranlari":"/src/content/articles/basari-oranlari.md","basarisiz-denemeler":"/src/content/articles/basarisiz-denemeler.md","beta-hcg-testi":"/src/content/articles/beta-hcg-testi.md","dondurulmus-embriyo-transferi":"/src/content/articles/dondurulmus-embriyo-transferi.md","embryoglue-faydalari":"/src/content/articles/embryoglue-faydalari.md","genetik-testler":"/src/content/articles/genetik-testler.md","istanbul-tup-bebek-doktoru":"/src/content/articles/istanbul-tup-bebek-doktoru.md","ivf-oncesi-histeroskopi":"/src/content/articles/ivf-oncesi-histeroskopi.md","iyi-tup-bebek-merkezi":"/src/content/articles/iyi-tup-bebek-merkezi.md","izotretinoin-sperm":"/src/content/articles/izotretinoin-sperm.md","kanser-ve-fertilite":"/src/content/articles/kanser-ve-fertilite.md","laboratuvar-raporu-yorumlama":"/src/content/articles/laboratuvar-raporu-yorumlama.md","yumurta-dondurma-rehberi":"/src/content/articles/yumurta-dondurma-rehberi.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/articles/adet-duzensizligi-pcos.md": () => import('./adet-duzensizligi-pcos_CQJJFBLH.mjs'),"/src/content/articles/adet-gorememe.md": () => import('./adet-gorememe_dJa3ReyQ.mjs'),"/src/content/articles/akinti-kasinti-koku.md": () => import('./akinti-kasinti-koku_Bjj-yYmV.mjs'),"/src/content/articles/akraba-evliligi.md": () => import('./akraba-evliligi_DdJNQ0Bu.mjs'),"/src/content/articles/alkol-ve-fertilite.md": () => import('./alkol-ve-fertilite_C51brTHK.mjs'),"/src/content/articles/asherman-sendromu.md": () => import('./asherman-sendromu_t6d3fJZQ.mjs'),"/src/content/articles/azospermi-mikro-tese.md": () => import('./azospermi-mikro-tese_26ZsTbMI.mjs'),"/src/content/articles/basari-oranlari.md": () => import('./basari-oranlari_CvSRmDw1.mjs'),"/src/content/articles/basarisiz-denemeler.md": () => import('./basarisiz-denemeler_DhD1WCZA.mjs'),"/src/content/articles/beta-hcg-testi.md": () => import('./beta-hcg-testi_DlOeb5bU.mjs'),"/src/content/articles/dondurulmus-embriyo-transferi.md": () => import('./dondurulmus-embriyo-transferi_CP1EMEGC.mjs'),"/src/content/articles/embryoglue-faydalari.md": () => import('./embryoglue-faydalari_DoJBnyEQ.mjs'),"/src/content/articles/genetik-testler.md": () => import('./genetik-testler_dVlrgP47.mjs'),"/src/content/articles/istanbul-tup-bebek-doktoru.md": () => import('./istanbul-tup-bebek-doktoru_bd6ESpd_.mjs'),"/src/content/articles/ivf-oncesi-histeroskopi.md": () => import('./ivf-oncesi-histeroskopi_vzXC-4eP.mjs'),"/src/content/articles/iyi-tup-bebek-merkezi.md": () => import('./iyi-tup-bebek-merkezi_CttaI_Qe.mjs'),"/src/content/articles/izotretinoin-sperm.md": () => import('./izotretinoin-sperm_CKQOmj_j.mjs'),"/src/content/articles/kanser-ve-fertilite.md": () => import('./kanser-ve-fertilite_COA-Cnp7.mjs'),"/src/content/articles/laboratuvar-raporu-yorumlama.md": () => import('./laboratuvar-raporu-yorumlama_D2t_39Zn.mjs'),"/src/content/articles/yumurta-dondurma-rehberi.md": () => import('./yumurta-dondurma-rehberi_TkULZqYt.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };

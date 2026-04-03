declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"aciklanamayan-infertilite.md": {
	id: "aciklanamayan-infertilite.md";
  slug: "aciklanamayan-infertilite";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"adet-duzensizligi-pcos.md": {
	id: "adet-duzensizligi-pcos.md";
  slug: "adet-duzensizligi-pcos";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"adet-gorememe.md": {
	id: "adet-gorememe.md";
  slug: "adet-gorememe";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"akinti-kasinti-koku.md": {
	id: "akinti-kasinti-koku.md";
  slug: "akinti-kasinti-koku";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"akraba-evliligi.md": {
	id: "akraba-evliligi.md";
  slug: "akraba-evliligi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"alkol-ve-fertilite.md": {
	id: "alkol-ve-fertilite.md";
  slug: "alkol-ve-fertilite";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"asherman-sendromu.md": {
	id: "asherman-sendromu.md";
  slug: "asherman-sendromu";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"azospermi-mikro-tese.md": {
	id: "azospermi-mikro-tese.md";
  slug: "azospermi-mikro-tese";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"basari-oranlari.md": {
	id: "basari-oranlari.md";
  slug: "basari-oranlari";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"basarisiz-denemeler.md": {
	id: "basarisiz-denemeler.md";
  slug: "basarisiz-denemeler";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"beta-hcg-testi.md": {
	id: "beta-hcg-testi.md";
  slug: "beta-hcg-testi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cep-telefonu-sperm-kalitesi.md": {
	id: "cep-telefonu-sperm-kalitesi.md";
  slug: "cep-telefonu-sperm-kalitesi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"dondurulmus-embriyo-transferi.md": {
	id: "dondurulmus-embriyo-transferi.md";
  slug: "dondurulmus-embriyo-transferi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"embriyo-transferi-sonrasi-bakim.md": {
	id: "embriyo-transferi-sonrasi-bakim.md";
  slug: "embriyo-transferi-sonrasi-bakim";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"embryoglue-faydalari.md": {
	id: "embryoglue-faydalari.md";
  slug: "embryoglue-faydalari";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"embryoscope-yapay-zeka.md": {
	id: "embryoscope-yapay-zeka.md";
  slug: "embryoscope-yapay-zeka";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"endometrioma.md": {
	id: "endometrioma.md";
  slug: "endometrioma";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"endometriozis-akilli-stratejiler.md": {
	id: "endometriozis-akilli-stratejiler.md";
  slug: "endometriozis-akilli-stratejiler";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"endometriozis-tup-bebek.md": {
	id: "endometriozis-tup-bebek.md";
  slug: "endometriozis-tup-bebek";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"endoskopik-cerrahi-histeroskopi.md": {
	id: "endoskopik-cerrahi-histeroskopi.md";
  slug: "endoskopik-cerrahi-histeroskopi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"erkek-dogurganlik-besin-takviyeleri.md": {
	id: "erkek-dogurganlik-besin-takviyeleri.md";
  slug: "erkek-dogurganlik-besin-takviyeleri";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"erkek-kisirligi-besin-takviyeleri.md": {
	id: "erkek-kisirligi-besin-takviyeleri.md";
  slug: "erkek-kisirligi-besin-takviyeleri";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"genetik-testler.md": {
	id: "genetik-testler.md";
  slug: "genetik-testler";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hidrosalpinx-ve-kisirlik.md": {
	id: "hidrosalpinx-ve-kisirlik.md";
  slug: "hidrosalpinx-ve-kisirlik";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hiperprolaktinemi-prolaktinom.md": {
	id: "hiperprolaktinemi-prolaktinom.md";
  slug: "hiperprolaktinemi-prolaktinom";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hiperprolaktinemi-ve-kisirlik.md": {
	id: "hiperprolaktinemi-ve-kisirlik.md";
  slug: "hiperprolaktinemi-ve-kisirlik";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hormonal-tedavi-adenomyozis.md": {
	id: "hormonal-tedavi-adenomyozis.md";
  slug: "hormonal-tedavi-adenomyozis";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"istanbul-tup-bebek-doktoru.md": {
	id: "istanbul-tup-bebek-doktoru.md";
  slug: "istanbul-tup-bebek-doktoru";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"iui-nedir.md": {
	id: "iui-nedir.md";
  slug: "iui-nedir";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ivf-oncesi-histeroskopi.md": {
	id: "ivf-oncesi-histeroskopi.md";
  slug: "ivf-oncesi-histeroskopi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ivf-protokolleri.md": {
	id: "ivf-protokolleri.md";
  slug: "ivf-protokolleri";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"iyi-tup-bebek-merkezi.md": {
	id: "iyi-tup-bebek-merkezi.md";
  slug: "iyi-tup-bebek-merkezi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"izotretinoin-sperm.md": {
	id: "izotretinoin-sperm.md";
  slug: "izotretinoin-sperm";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kac-yumurta-gerekir.md": {
	id: "kac-yumurta-gerekir.md";
  slug: "kac-yumurta-gerekir";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kadin-kisirligi-tup-bebek.md": {
	id: "kadin-kisirligi-tup-bebek.md";
  slug: "kadin-kisirligi-tup-bebek";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kanser-ve-fertilite.md": {
	id: "kanser-ve-fertilite.md";
  slug: "kanser-ve-fertilite";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kimyasal-gebelik.md": {
	id: "kimyasal-gebelik.md";
  slug: "kimyasal-gebelik";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"laboratuvar-raporu-yorumlama.md": {
	id: "laboratuvar-raporu-yorumlama.md";
  slug: "laboratuvar-raporu-yorumlama";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"mikroenjeksiyon-icsi-nedir.md": {
	id: "mikroenjeksiyon-icsi-nedir.md";
  slug: "mikroenjeksiyon-icsi-nedir";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"miyom-ameliyati.md": {
	id: "miyom-ameliyati.md";
  slug: "miyom-ameliyati";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"miyomlar-ve-tup-bebek.md": {
	id: "miyomlar-ve-tup-bebek.md";
  slug: "miyomlar-ve-tup-bebek";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"myomlar-ve-kisirlik.md": {
	id: "myomlar-ve-kisirlik.md";
  slug: "myomlar-ve-kisirlik";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"opk-ve-ivf.md": {
	id: "opk-ve-ivf.md";
  slug: "opk-ve-ivf";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"over-prp.md": {
	id: "over-prp.md";
  slug: "over-prp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"pgt-cinsiyet-secimi.md": {
	id: "pgt-cinsiyet-secimi.md";
  slug: "pgt-cinsiyet-secimi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"pgt-m.md": {
	id: "pgt-m.md";
  slug: "pgt-m";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"pkos-ve-tup-bebek.md": {
	id: "pkos-ve-tup-bebek.md";
  slug: "pkos-ve-tup-bebek";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"taze-dondurulmus-transfer.md": {
	id: "taze-dondurulmus-transfer.md";
  slug: "taze-dondurulmus-transfer";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"tup-bebek-nedir.md": {
	id: "tup-bebek-nedir.md";
  slug: "tup-bebek-nedir";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"tup-bebek-sureci-rehber.md": {
	id: "tup-bebek-sureci-rehber.md";
  slug: "tup-bebek-sureci-rehber";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"tup-bebek-yanlis-bilinenler.md": {
	id: "tup-bebek-yanlis-bilinenler.md";
  slug: "tup-bebek-yanlis-bilinenler";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"vajinal-mikrobiyom-fiv.md": {
	id: "vajinal-mikrobiyom-fiv.md";
  slug: "vajinal-mikrobiyom-fiv";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"yumurta-dondurma-rehberi.md": {
	id: "yumurta-dondurma-rehberi.md";
  slug: "yumurta-dondurma-rehberi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"yumurtalik-kistleri-dogurganlik.md": {
	id: "yumurtalik-kistleri-dogurganlik.md";
  slug: "yumurtalik-kistleri-dogurganlik";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"yumurtlama-takibi.md": {
	id: "yumurtlama-takibi.md";
  slug: "yumurtlama-takibi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}

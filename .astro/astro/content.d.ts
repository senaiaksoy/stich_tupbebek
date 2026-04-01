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
"adet-duzensizligi-pcos.md": {
	id: "adet-duzensizligi-pcos.md";
  slug: "adet-duzensizligi-pcos";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"adet-gorememe.md": {
	id: "adet-gorememe.md";
  slug: "adet-gorememe";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"akinti-kasinti-koku.md": {
	id: "akinti-kasinti-koku.md";
  slug: "akinti-kasinti-koku";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"akraba-evliligi.md": {
	id: "akraba-evliligi.md";
  slug: "akraba-evliligi";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"alkol-ve-fertilite.md": {
	id: "alkol-ve-fertilite.md";
  slug: "alkol-ve-fertilite";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"asherman-sendromu.md": {
	id: "asherman-sendromu.md";
  slug: "asherman-sendromu";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"azospermi-mikro-tese.md": {
	id: "azospermi-mikro-tese.md";
  slug: "azospermi-mikro-tese";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"basari-oranlari.md": {
	id: "basari-oranlari.md";
  slug: "basari-oranlari";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"basarisiz-denemeler.md": {
	id: "basarisiz-denemeler.md";
  slug: "basarisiz-denemeler";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"beta-hcg-testi.md": {
	id: "beta-hcg-testi.md";
  slug: "beta-hcg-testi";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"dondurulmus-embriyo-transferi.md": {
	id: "dondurulmus-embriyo-transferi.md";
  slug: "dondurulmus-embriyo-transferi";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"embryoglue-faydalari.md": {
	id: "embryoglue-faydalari.md";
  slug: "embryoglue-faydalari";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"genetik-testler.md": {
	id: "genetik-testler.md";
  slug: "genetik-testler";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"istanbul-tup-bebek-doktoru.md": {
	id: "istanbul-tup-bebek-doktoru.md";
  slug: "istanbul-tup-bebek-doktoru";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"ivf-oncesi-histeroskopi.md": {
	id: "ivf-oncesi-histeroskopi.md";
  slug: "ivf-oncesi-histeroskopi";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"iyi-tup-bebek-merkezi.md": {
	id: "iyi-tup-bebek-merkezi.md";
  slug: "iyi-tup-bebek-merkezi";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"izotretinoin-sperm.md": {
	id: "izotretinoin-sperm.md";
  slug: "izotretinoin-sperm";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"laboratuvar-raporu-yorumlama.md": {
	id: "laboratuvar-raporu-yorumlama.md";
  slug: "laboratuvar-raporu-yorumlama";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}

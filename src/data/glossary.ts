/**
 * Tibbi Sozluk — Tooltip bileseni icin merkezi terim veritabani
 *
 * MedicalTooltip bileseni ile kullanilir:
 *   import { glossary } from '../../data/glossary';
 *   <MedicalTooltip term="PGT" definition={glossary.PGT.definition} href={glossary.PGT.href} />
 */

export interface GlossaryEntry {
  term: string;
  definition: string;
  href?: string;
}

export const glossary: Record<string, GlossaryEntry> = {
  // ── Hormonlar ──
  AMH: {
    term: 'AMH',
    definition: 'Anti-Mullerian Hormon. Over rezervinin (yumurta sayisi) degerlendirilmesinde kullanilan kan testi. Dusuk AMH azalmis rezervi isaret edebilir.',
    href: '/hormon-paneli',
  },
  FSH: {
    term: 'FSH',
    definition: 'Folikul Stimulan Hormon. Yumurtaliklarda folikul buyumesini uyaran hipofiz hormonu. Yuksek FSH azalmis over rezervini gosterebilir.',
    href: '/hormon-paneli',
  },
  LH: {
    term: 'LH',
    definition: 'Luteinizan Hormon. Ovulasyonu tetikleyen hormon. LH dalgasi yumurta serbest birakilmasini baslatir.',
    href: '/hormon-paneli',
  },
  E2: {
    term: 'E2 (Estradiol)',
    definition: 'Ostradiol. Yumurtaliklar tarafindan uretilen ana ostrojen hormonu. Folikul gelisimini izlemede kullanilir.',
    href: '/hormon-paneli',
  },
  Progesteron: {
    term: 'Progesteron',
    definition: 'Rahim ic tabakasini (endometrium) embriyo implantasyonuna hazirlayan hormon. Luteal faz desteginde kritik oneme sahiptir.',
  },

  // ── Tedavi Yontemleri ──
  IVF: {
    term: 'IVF',
    definition: 'In Vitro Fertilizasyon (Tup Bebek). Yumurta ve spermin laboratuvar ortaminda birlestirilerek embriyo olusturulmasi ve rahme transfer edilmesi islemi.',
    href: '/tedavi-yontemleri',
  },
  ICSI: {
    term: 'ICSI',
    definition: 'Intrasitoplazmik Sperm Enjeksiyonu. Tek bir spermin mikro-igne ile dogrudan yumurtanin icine enjekte edildigi ileri duzey dollenme teknigi.',
    href: '/tedavi-yontemleri',
  },
  IUI: {
    term: 'IUI',
    definition: 'Intrauterin Inseminasyon (Asilama). Hazirlanan sperm orneginin ince bir kateter ile dogrudan rahim icine yerlestirildigi tedavi yontemi.',
    href: '/tedavi-yontemleri#iui',
  },

  // ── Genetik Testler ──
  PGT: {
    term: 'PGT',
    definition: 'Preimplantasyon Genetik Test. Embriyo transferi oncesinde kromozom veya gen anomalilerini taramak icin yapilan genetik analiz.',
    href: '/pgt-merkezi',
  },
  'PGT-A': {
    term: 'PGT-A',
    definition: 'Preimplantasyon Genetik Test - Anoploidiler. Embriyolardaki kromozom sayisi anormalliklerini (ornegin Down sendromu) tespit eden tarama.',
    href: '/pgt-merkezi',
  },
  'PGT-M': {
    term: 'PGT-M',
    definition: 'Preimplantasyon Genetik Test - Monogenik. Tek gen hastaliklari (kistik fibrozis, orak hucre anemisi vb.) tasiyiciligini embriyoda saptayan test.',
    href: '/pgt-merkezi',
  },
  Karyotip: {
    term: 'Karyotip',
    definition: 'Bir bireyin tum kromozom yapisini gosteren genetik analiz. Kromozom sayisi ve yapisal anomalilerin tespitinde kullanilir.',
    href: '/genetik-testler',
  },

  // ── Tani Yontemleri ──
  HSG: {
    term: 'HSG',
    definition: 'Histerosalpingografi. Rahmin ve tuplarin acikligini degerlendirmek icin kontrast madde kullanilarak yapilan rontgen goruntulemesi.',
    href: '/tani-sureci',
  },
  Spermiogram: {
    term: 'Spermiogram',
    definition: 'Sperm analizi. Sperm sayisi, hareketliligi (motilite), sekli (morfoloji) ve hacmini degerlendiren laboratuvar testi.',
    href: '/tani-sureci',
  },

  // ── Tibbi Durumlar ──
  Endometriozis: {
    term: 'Endometriozis',
    definition: 'Rahim ic tabakasina benzer dokunun rahim disinda (yumurtaliklar, tupler, periton) buyumesi. Agri ve infertiliteye yol acabilir.',
    href: '/endometriozis-adenomyozis',
  },
  Adenomyozis: {
    term: 'Adenomyozis',
    definition: 'Rahim ic tabakasinin (endometrium) rahim kas tabakasi (myometrium) icine girmesi. Agri, kanamaya ve implantasyon guclugune neden olabilir.',
    href: '/endometriozis-adenomyozis',
  },
  PCOS: {
    term: 'PCOS',
    definition: 'Polikistik Over Sendromu. Hormonal dengesizlik, duzensiz adet ve yumurtaliklarda cok sayida kucuk kist ile karakterize yaygin bir durum.',
    href: '/makaleler/pcos-polikistik-over-sendromu',
  },
  Varikosel: {
    term: 'Varikosel',
    definition: 'Testislerdeki toplardamarlarin genislemesi. Sperm uretimini ve kalitesini olumsuz etkileyebilen erkek infertilitesi nedeni.',
    href: '/erkek-infertilitesi',
  },
  Azospermi: {
    term: 'Azospermi',
    definition: 'Meni sivisi icerisinde sperm bulunmamasi durumu. Obstruktif (tikayici) veya non-obstruktif (uretim bozuklugu) olarak iki tipe ayrilir.',
    href: '/erkek-infertilitesi',
  },

  // ── Embriyoloji ──
  Blastosist: {
    term: 'Blastosist',
    definition: 'Dollenme sonrasi 5-6. gunde ulasilan ileri evre embriyo. Ic hucre kutlesi (bebek olacak kisim) ve trofoblast (plasenta) katmanindan olusur.',
  },
  Vitrifikasyon: {
    term: 'Vitrifikasyon',
    definition: 'Ultra hizli dondurma teknigi. Yumurta veya embriyolarin buz kristali olusumu olmadan cam benzeri bir yapiyla dondurulmasi.',
    href: '/makaleler/yumurta-dondurma',
  },
  Hatching: {
    term: 'Assisted Hatching',
    definition: 'Embriyonun dis zarinin (zona pellucida) lazer veya kimyasal yontemle inceltilmesi. Implantasyonu kolaylastirmak amacli uygulanir.',
  },

  // ── Anatomi ──
  Endometrium: {
    term: 'Endometrium',
    definition: 'Rahim ic tabakasi. Her adet dongusu ile kalinlasir ve dokulur. Embriyo implantasyonu icin yeterli kalinlik (7-14 mm) kritik onem tasir.',
  },
  Folikul: {
    term: 'Folikul',
    definition: 'Yumurtaliklarda yumurta hucresini icerisinde barindiran sivi dolu kese. Her adet dongusu basinda birden fazla folikul gelismeye baslar.',
  },
  'Over Rezervi': {
    term: 'Over Rezervi',
    definition: 'Yumurtaliklarda kalan yumurta sayisi ve kalitesinin genel degerlendirmesi. AMH, FSH ve antral folikul sayisi ile olculur.',
    href: '/yas-ve-fertilite',
  },
};

/** Terim adina gore glossary entry dondurur */
export function getTerm(key: string): GlossaryEntry | undefined {
  return glossary[key];
}

/** Tum terimleri alfabetik sirali dizi olarak dondurur */
export function getAllTerms(): GlossaryEntry[] {
  return Object.values(glossary).sort((a, b) => a.term.localeCompare(b.term, 'tr'));
}

# Fertilite Koruma Sayfasi Tasarim Spesifikasyonu

**Tarih:** 2026-04-01
**Durum:** Onaylandi
**Sayfa URL:** `/fertilite-koruma`
**Dosya:** `src/pages/fertilite-koruma.astro`

---

## 1. Genel Bakis

Yumurta dondurma, sperm dondurma ve embriyo dondurma konularinda kapsamli bir bilgi sayfasi. Oncofertility (onkolojik hastalarda fertilite koruma) ozel bir alt bolum olarak sayfanin sonunda yer alir. Tek sayfa, sticky quick-nav ile bolumler arasi gecis.

**Hedef kitle:** Bireyler/ciftler — fertilitelerini korumak isteyen hastalar (anlasilir dil, karar vermeye yardimci bilgiler)
**Klinik veri yogunlugu:** Yuksek — her bolumde basari oranlari tablolari, yasa gore veriler, WHO referans degerleri
**Destekleyici icerik:** 2 yeni makale

---

## 2. Sayfa Yapisi & Hero

### Hero Section
- **Pattern:** `sorunlar.astro` hero yapisi
- **Breadcrumb:** Ana Sayfa > Fertilite Koruma
- **Baslik:** "Fertilite Koruma: *Geleceginizi* Guvence Altina Alin" (italic primary-color vurgulu)
- **Alt metin:** 2-3 cumle — fertilitenin yasla azalmasi, modern kriyoprezervasyon teknolojisi ile koruma imkani
- **Doktor karti:** Doc. Dr. Senai Aksoy (mevcut pattern)
- **Hero gorsel:** Sag tarafta

### Sticky Quick-Nav
- **Pattern:** `erkek-infertilitesi` spec'indeki sticky nav
- **Bolumler:** Yumurta Dondurma | Sperm Dondurma | Embriyo Dondurma | Oncofertility
- **Teknik:** Intersection Observer ile aktif bolum vurgusu
devam- **Stil:** `sticky top-20 z-40`, `bg-white/90 backdrop-blur-sm`
- **Mobil:** Yatay scroll, no-scrollbar

### Bilimsel Giris — 3 Stat Karti Grid
| Kart | Deger | Aciklama |
|------|-------|---------|
| 1 | %97 | Vitrifikasyon ile cozulme sonrasi oosit sagkalim orani |
| 2 | %40-50 | 35 yas alti dondurulmus yumurta ile gebelik orani |
| 3 | 20+ yil | Kriyoprezerve materyalin guvenli saklama suresi |

---

## 3. Yumurta Dondurma (Oosit Kriyoprezervasyon)

**Anchor:** `#yumurta-dondurma`
**Layout:** `bg-surface-container-low`, gorsel sag tarafta (sorunlar.astro Section 1 patterni)
**Floating data badge:** "Vitrifikasyon: %97 sagkalim"

### Giris Paragrafi
Vitrifikasyon teknolojisinin donum noktasi olmasi, sosyal ve medikal endikasyonlar.

### Klinik Bilgi Kutusu 1 — Yasa Gore Basari Oranlari Tablosu

| Yas Grubu | Oosit Sagkalim | Gebelik/Yumurta | Onerilen Oosit Sayisi |
|-----------|---------------|-----------------|----------------------|
| <30 | %90-97 | %8-10 per oosit | 10-15 |
| 30-34 | %90-95 | %6-8 per oosit | 15-20 |
| 35-37 | %85-90 | %4-6 per oosit | 20-25 |
| 38-40 | %80-85 | %2-4 per oosit | 25-30 |
| >40 | %75-80 | %1-2 per oosit | Bireysel degerlendirme |

### Klinik Bilgi Kutusu 2 — Islem Sureci
- Hormonal stimulasyon: 10-14 gun
- OPU (oosit toplama): ultrason esliginde, ~15-20 dk
- Vitrifikasyon: ultra-hizli dondurma, sivi nitrojen (-196C)
- Saklama suresi: yasal sinir yok (Turkiye'de 5 yil + uzatma)

### Alt Paragraf
Medikal vs. sosyal endikasyonlar ayrimi:
- **Sosyal:** Kariyer planlamasi, partner bulunmamasi
- **Medikal:** Gonadotoksik tedavi oncesi, endometriozis, aile oykusu

### Baglantili Makale
Yeni makale: "Yumurta Dondurma: Surec, Basari Oranlari ve Sik Sorulan Sorular"

---

## 4. Sperm Dondurma (Sperm Kriyoprezervasyon)

**Anchor:** `#sperm-dondurma`
**Layout:** `bg-surface`, gorsel sag tarafta (alternating)
**Floating data badge:** "Ilk basarili sperm dondurma: 1953"

### Giris Paragrafi
En eski ve en yaygin fertilite koruma yontemi, basit ve hizli surec, acil durumlarda bile uygulanabilirlik.

### Klinik Bilgi Kutusu 1 — Yontemler Karsilastirma Tablosu

| Yontem | Aciklama | Sagkalim Orani | Kullanim Alani |
|--------|----------|----------------|----------------|
| Yavas Dondurma | Kademeli sogutma, kriyoprotektan | %40-60 | Klasik yontem |
| Vitrifikasyon | Ultra-hizli dondurma | %60-80 | Dusuk sayili ornekler |
| Mikro-TESE Sperm | Cerrahi elde edilen sperm | %50-70 | Azospermik hastalar |

### Klinik Bilgi Kutusu 2 — Endikasyonlar
- Kanser tedavisi oncesi (kemoterapi, radyoterapi)
- Cerrahi oncesi (orsiektomi, retroperitoneal cerrahiler)
- Progresif oligospermi (kotulesen sperm parametreleri)
- Mikro-TESE ile elde edilen sperm guvencesi
- Meslek riski (toksik madde maruziyeti, radyasyon)

### Alt Paragraf
Sperm dondurma sureci — ornek verme, analiz, kriyoprotektan eklenmesi, dondurma, depolama. Birden fazla ornek saklamanin onemi. Turkiye'de saklama suresi mevzuati.

### Baglantili Makale
Mevcut: `/makaleler/azospermi-mikro-tese`

---

## 5. Embriyo Dondurma (Embriyo Kriyoprezervasyon)

**Anchor:** `#embriyo-dondurma`
**Layout:** `bg-surface-container-low`, gorsel sag tarafta (alternating: ayni yon yumurta dondurma ile)
**Floating data badge:** "Vitrifikasyon sonrasi embriyo sagkalim: %99"

### Giris Paragrafi
En yuksek basari oranina sahip fertilite koruma yontemi, partneri olan ciftler icin altin standart, vitrifikasyon ile devrim.

### Klinik Bilgi Kutusu 1 — Vitrifikasyon vs. Yavas Dondurma

| Parametre | Vitrifikasyon | Yavas Dondurma |
|-----------|--------------|----------------|
| Sagkalim orani | %95-99 | %75-85 |
| Buz kristali olusumu | Yok | Olasi |
| Islem suresi | Dakikalar | Saatler |
| Guncel tercih | Altin standart | Terk edilmekte |

### Klinik Bilgi Kutusu 2 — Embriyo Evrelerine Gore Basari

| Embriyo Evresi | Sagkalim | Gebelik Orani | Avantaj |
|----------------|----------|---------------|---------|
| Blastosist (5. gun) | %95-99 | %50-60 | Yuksek implantasyon, PGT uygulanabilir |
| Klivaj (2-3. gun) | %90-95 | %30-40 | Dusuk embriyo sayisinda tercih |

### Alt Paragraf
Embriyo dondurmanin yumurta dondurma karsisinda avantaji — fertilizasyon belirsizliginin ortadan kalkmasi, daha yuksek gebelik oranlari. Dezavantaj — partner gereksinimi, Turkiye'de yasal olarak evli ciftlere ozel. Bosanma/olum durumunda embriyolarin yasal statusu.

### Klinik Bilgi Kutusu 3 — Dondurulmus Embriyo Transferi (FET) Protokolleri
- Dogal siklus FET
- Modifiye dogal siklus
- Yapay (hormonal) siklus
- Kisa aciklama + mevcut makaleye yonlendirme

### Baglantili Makale
Mevcut: `/makaleler/dondurulmus-embriyo-transferi`

---

## 6. Oncofertility (Onkolojik Hastalarda Fertilite Koruma)

**Anchor:** `#oncofertility`
**Layout:** `bg-surface`
**Ozel gorsel vurgu:** Bolum baslangicinda `border-l-4 border-tertiary` (teal) accent ile aciliyet ve onem vurgusu

### Giris Paragrafi
Kanser tanisi ile fertilite koruma arasindaki zaman baskisi, multidisipliner yaklasim (onkolog + ureme tibbi uzmani), ASCO/ESMO kilavuz onerileri.

### Klinik Bilgi Kutusu 1 — Gonadotoksik Tedavilerin Etkisi Tablosu

| Risk Kategorisi | Tedavi Ajani | Over Yetmezligi Riski | Sperm Hasari Riski |
|----------------|-------------|----------------------|-------------------|
| Yuksek risk | Siklofosfamid, Busulfan, Melfalan, Tum vucut isinlama | >%80 | >%80 |
| Orta risk | Cisplatin, Doksorubisin | %40-60 | %40-60 |
| Dusuk risk | Vincristin, Metotreksat, 5-FU | <%20 | <%20 |
| Bilinmiyor | Yeni hedefe yonelik tedaviler, Immunoterapi | Veri yetersiz | Veri yetersiz |

### Klinik Bilgi Kutusu 2 — Kanser Turune Gore Fertilite Koruma Algoritmasi

| Kanser Turu | Kadin | Erkek | Zaman Penceresi |
|-------------|-------|-------|-----------------|
| Meme kanseri | Oosit/embriyo dondurma + GnRH agonist | — | 2-4 hafta |
| Lenfoma/Losemi | Oosit dondurma (acil protokol) + over doku dondurma | Sperm dondurma | 1-2 hafta (acil) |
| Testis kanseri | — | Sperm dondurma (orsiektomi oncesi) | Cerrahi oncesi |
| Kolorektal | Oosit/embriyo dondurma | Sperm dondurma | 2-4 hafta |
| Cocukluk cagi kanser | Over/testis doku dondurma (deneysel) | Testis doku dondurma (deneysel) | Tedavi oncesi |

### Klinik Bilgi Kutusu 3 — Acil (Random-Start) Stimulasyon Protokolu
- Klasik stimulasyon: adet dongusu beklenir (2-6 hafta)
- Random-start: dongunun herhangi bir gununde baslanir
- Sure: 10-14 gun
- Onkolojik guvenlik: letrozol eklenerek ostrojen baskilanmasi (meme kanseri)
- Kanser tedavisine gecikme: ortalama 2 hafta

### Alt Paragraf — Deneysel Yontemler
- **Over doku kriyoprezervasyon:** Prepubertal kiz cocuklarda tek secenek, reimplantasyon ile dogal gebelik mumkun
- **Testis doku dondurma:** Prepubertal erkek cocuklarda arastirma asamasinda
- **GnRH agonist (over koruma):** Kemoterapi sirasinda overleri "uyutma", tartismali ancak ASCO tarafindan onerilen ek koruma

### Kapanis Notu
"Kanser tanisi alan her ureme cagindaki hastanin tedavi baslamadan once fertilite koruma secenekleri hakkinda bilgilendirilmesi bir hak, bir standart uygulamadir."

### Baglantili Makale
Yeni makale: "Kanser ve Fertilite: Onkolojik Hastalar Icin Rehber"

---

## 7. Sayfa Sonu & Destekleyici Ogeler

### Medikal Onay Karti
- Doc. Dr. Senai Aksoy portre + isim + unvan
- "Bu sayfa tibbi olarak gozden gecirilmistir" notu
- Son guncelleme tarihi

### Yasal Uyari
"Bu sayfadaki bilgiler egitim amaclidir, tibbi tavsiye yerine gecmez..."

---

## 8. Site Geneli Guncellemeler

### Header Mega-Menu — Desktop
Mevcut "Tedaviler" mega-menusundeki link degisikligi:

| Mevcut Link | Yeni Link | Baslik | Alt Metin |
|-------------|-----------|--------|-----------|
| `/tedavi-yontemleri#koruma` | `/fertilite-koruma` | Fertilite Koruma | Yumurta, Sperm & Embriyo Dondurma |

Ek link eklenmeyecek, mevcut link guncellenir (Header.astro satir 127-130).

### Header Mega-Menu — Mobil
Mobil menude "Tedaviler" yalnizca flat bir link (`/tedavi-yontemleri`, satir 298) olarak yer alir, alt-link icermez. Mobil menude degisiklik gerekmez.

### Breadcrumbs.astro
- labelMap'e ekleme: `'fertilite-koruma': 'Fertilite Koruma'`

---

## 9. Yeni Makaleler

### Makale 1: Yumurta Dondurma Rehberi
- **Dosya:** `src/content/articles/yumurta-dondurma-rehberi.md`
- **Baslik:** "Yumurta Dondurma: Surec, Basari Oranlari ve Sik Sorulan Sorular"
- **Aciklama (description):** "Yumurta dondurma (oosit kriyoprezervasyon) sureci nasil isler? Hormonal stimulasyon, OPU, vitrifikasyon adimlari, yasa gore basari oranlari ve sik sorulan sorularin yanitlari."
- **Yazar:** "Doc. Dr. Senai Aksoy"
- **Kategori:** "Tedavi"
- **publishDate:** 2026-04-01
- **image:** "/images/articles/yumurta-dondurma-rehberi.webp"
- **imageAlt:** "yumurta dondurma sureci vitrifikasyon laboratuvari"
- **Icerik:** Adim adim surec, ilac protokolu, OPU deneyimi, riskler, SSS
- **Baglanti:** `/fertilite-koruma#yumurta-dondurma` sayfasindan link

### Makale 2: Kanser ve Fertilite Rehberi
- **Dosya:** `src/content/articles/kanser-ve-fertilite.md`
- **Baslik:** "Kanser ve Fertilite: Onkolojik Hastalar Icin Rehber"
- **Aciklama (description):** "Kanser tanisi sonrasi fertilite koruma secenekleri nelerdir? Onkolojik hastalarda yumurta, sperm ve embriyo dondurma surecleri, acil protokoller ve hasta haklari rehberi."
- **Yazar:** "Doc. Dr. Senai Aksoy"
- **Kategori:** "Tedavi"
- **publishDate:** 2026-04-01
- **image:** "/images/articles/kanser-ve-fertilite.webp"
- **imageAlt:** "onkolojik fertilite koruma oncofertility danismanlik"
- **Icerik:** Kanser tanisi sonrasi yapilmasi gerekenler, hangi doktora basvurulmali, zaman cizelgesi, hasta haklari
- **Baglanti:** `/fertilite-koruma#oncofertility` sayfasindan link

---

## 10. Gorsel Ihtiyaclari

| Gorsel | Konum | Format | Alt Text |
|--------|-------|--------|----------|
| Hero gorseli | `/public/images/fertilite-koruma/hero.jpg` | JPG, aspect-[4/5] | fertilite koruma kriyoprezervasyon laboratuvari |
| Yumurta dondurma | `/public/images/fertilite-koruma/yumurta-dondurma.jpg` | JPG | oosit vitrifikasyon yumurta dondurma sureci |
| Sperm dondurma | `/public/images/fertilite-koruma/sperm-dondurma.jpg` | JPG | sperm kriyoprezervasyon laboratuvar islem |
| Embriyo dondurma | `/public/images/fertilite-koruma/embriyo-dondurma.jpg` | JPG | embriyo vitrifikasyon blastosist dondurma |
| Oncofertility | `/public/images/fertilite-koruma/oncofertility.jpg` | JPG | onkolojik fertilite koruma danismanlik |
| Makale 1 kapak | `/public/images/articles/yumurta-dondurma-rehberi.webp` | WebP | yumurta dondurma sureci vitrifikasyon laboratuvari |
| Makale 2 kapak | `/public/images/articles/kanser-ve-fertilite.webp` | WebP | onkolojik fertilite koruma oncofertility danismanlik |

---

## 11. SEO

- **`<title>`:** "Fertilite Koruma: Yumurta, Sperm ve Embriyo Dondurma | Doc. Dr. Senai Aksoy"
- **`<meta name="description">`:** "Yumurta dondurma, sperm dondurma ve embriyo dondurma hakkinda kapsamli bilgi. Onkolojik hastalarda fertilite koruma (oncofertility) secenekleri, basari oranlari ve guncel klinik veriler."
- **JSON-LD:** BreadcrumbList (mevcut Breadcrumbs.astro patterni)

---

## 12. Teknik Notlar

- **Framework:** Astro 4.15.0 statik sayfa
- **Stil:** Mevcut Tailwind + MD3 renk tokenlari
- **JS:** Vanilla JS — Intersection Observer (sticky nav), scroll listener
- **Erisilebilirlik:** aria-label, semantik etiketler, lazy loading
- **Mevcut pattern referanslari:** `sorunlar.astro` (hero, bolum yapisi), `erkek-infertilitesi` spec (sticky nav, klinik bilgi kutulari)

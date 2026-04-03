# Erkek İnfertilitesi Sayfası — Tasarım Dokümanı

**Tarih:** 2026-04-01
**Durum:** Onaylandı

---

## Özet

Erkek infertilitesi için bağımsız bir ana sayfa (`/erkek-infertilitesi`) oluşturulacak. İnfertilite vakalarının %40-50'sinde erkek faktörü rol oynamasına rağmen site şu an bunu yalnızca makale düzeyinde ele alıyor. Bu sayfa, mevcut `/sorunlar` (kadın infertilitesi) sayfasının tasarım dilini referans alarak, kendine özgü "klinik bilgi kutuları" ile teknik/hasta dostu bir denge kuracak.

---

## Kapsam

### Dahil
- Yeni sayfa: `src/pages/erkek-infertilitesi.astro`
- 6 detaylı içerik bölümü (anchor ID'lerle navigasyon)
- Klinik bilgi kutusu (sayfaya özgü, inline — ayrı bileşen dosyası gerektirmez)
- Header mega menü güncellemesi (desktop + mobil)
- Breadcrumbs `labelMap`'e `'erkek-infertilitesi': 'Erkek İnfertilitesi'` eklenmesi
- SEO meta etiketleri ve breadcrumb JSON-LD

### Hariç
- Yeni makale yazımı (mevcut makalelere link verilecek)
- Görsel üretimi (placeholder kullanılacak, sonra değiştirilir)
- Diğer sayfalardaki değişiklikler (footer, diğer sayfalar)
- `/sorunlar` sayfasındaki eksik anchor ID'ler (mevcut sorun, bu spec kapsamı dışında)

---

## Sayfa Yapısı

```
/erkek-infertilitesi.astro

├── HERO SECTION (sorunlar.astro hero yapısını takip eder)
│   ├── Breadcrumbs bileşeni (labelMap'te 'erkek-infertilitesi' kaydı gerekli)
│   ├── Akademik Makale rozeti (sorunlar.astro'daki ile aynı)
│   ├── H1: "Erkek İnfertilitesi: <span italic primary>Tıbbi Nedenler</span> ve Tedavi"
│   ├── Tıbbi denetçi kartı (Yayın Kurulu, sorunlar.astro'daki ile aynı yapı)
│   └── Hero görseli (sağda, hidden md:block, sorunlar.astro düzeni)
│
├── QUICK-NAV BAR (sticky, sorunlar.astro'da yok — bu sayfaya özgü yeni eleman)
│   ├── Stil: `sticky top-20 z-40 bg-white/90 backdrop-blur-sm border-b border-slate-100 shadow-sm`
│   ├── İçerik: Yatay scroll, her bölüme anchor link
│   ├── Aktif bölüm vurgusu: `text-primary border-b-2 border-primary` (JS intersection observer ile)
│   ├── Mobil: yatay kaydırılabilir, `overflow-x-auto whitespace-nowrap`
│   ├── Azospermi & Oligospermi
│   ├── Varikosel
│   ├── Genetik Faktörler
│   ├── Sperm DNA Fragmentasyonu
│   ├── Yaşam Tarzı
│   └── Mikro-TESE
│
├── BİLİMSEL GİRİŞ
│   ├── Kısa paragraf (erkek infertilitesi nedir, neden önemli)
│   └── 3 istatistik kartı
│       ├── %40-50 — Erkek faktörü oranı
│       ├── %15 — Azospermi görülme sıklığı
│       └── WHO 2021 — Güncel referans değerleri
│
├── DETAY BÖLÜMLERİ (x6)
│   ├── #azospermi — Azospermi ve Oligospermi
│   ├── #varikosel — Varikosel
│   ├── #genetik — Genetik Faktörler (Y mikrodelezyonu, Klinefelter)
│   ├── #dna-fragmentasyonu — Sperm DNA Fragmentasyonu
│   ├── #yasam-tarzi — Yaşam Tarzı ve Erkek Fertilitesi
│   └── #mikro-tese — Mikro-TESE ve Cerrahi Sperm Elde Etme
│
├── DOKTOR ONAY BANDI (hakkimizda.astro ve makaleler/[...slug].astro'daki kalıp)
│   ├── Yayın Kurulu fotoğrafı + isim + unvan
│   ├── "Bu sayfa ... tarafından tıbbi açıdan incelenmiştir."
│   └── Stil: `bg-surface-container-low p-8 rounded-2xl border-l-4 border-primary`
│
└── YASAL UYARI (makaleler/[...slug].astro'daki kalıp)
    ├── "Bu içerik yalnızca bilgilendirme amaçlıdır..."
    └── Stil: `bg-amber-50/50 border border-amber-200/50 rounded-xl p-6 text-sm`
```

---

## Detay Bölümü Yapısı (Her Biri İçin)

Her bölüm şu bileşenlerden oluşur:

1. **Bölüm başlığı** — H2, anchor ID ile
2. **Hasta dostu açıklama** — 2-3 paragraf, sade dil
3. **Klinik bilgi kutusu** — vurgulu kart (aşağıda detaylandırılmış)
4. **Görsel** — sağda veya solda (alternatif düzen)
5. **İlgili makale linki** — varsa ilgili makaleye yönlendirme

---

## Klinik Bilgi Kutusu Tasarımı

Mevcut `/sorunlar` sayfasında olmayan, bu sayfaya özgü bileşen.

### Stil
- Sol kenarlık: `border-l-4 border-primary`
- Arka plan: `bg-surface-container-low` (site genelindeki token sistemine uyumlu; `sorunlar.astro`'daki `bg-surface-container-high` ile paralel)
- Başlık: Mikroskop ikonu + "Klinik Bilgi" etiketi, `text-sm font-semibold uppercase tracking-wide text-primary`
- İçerik: Tablo veya tanım listesi, değerler için `font-mono`
- Kaynak notu: `text-xs text-on-surface-variant`

### Bölüm Bazında İçerik

| Bölüm | Klinik Kutu İçeriği |
|-------|-------------------|
| Azospermi & Oligospermi | WHO semen analizi referans değerleri tablosu (hacim, konsantrasyon, motilite, morfoloji) |
| Varikosel | Grade I-II-III klinik sınıflandırması |
| Genetik Faktörler | Y mikrodelezyonu bölgeleri (AZFa/b/c) ve prognoz, Klinefelter insidansı |
| DNA Fragmentasyonu | DFI eşik değerleri ve klinik anlamı |
| Yaşam Tarzı | Kanıt düzeyi tablosu (alkol, sigara, obezite — etki ve kanıt seviyesi) |
| Mikro-TESE | Sperm elde etme başarı oranları (etiyolojiye göre) |

---

## Header Mega Menü Güncellemesi

Mevcut mega menü flat 3-sütun grid kullanıyor (`grid-cols-3 gap-y-6 gap-x-12`). Bu düzen korunur — alt grup başlıkları eklenmez. Değişiklikler:

### Desktop Mega Menü (col-span-3 grid içindeki linkler)
Mevcut linkleri değiştir:

| Mevcut Link | Yeni Link | Açıklama |
|---|---|---|
| `/sorunlar#kadin` → Kadın Faktörleri | `/sorunlar` → Kadın Faktörleri | Aynı kalır (anchor zaten yok) |
| `/sorunlar#erkek` → Erkek Faktörleri | `/erkek-infertilitesi` → Erkek Faktörleri | **Yeni sayfaya yönlendir** |
| `/sorunlar#aciklanamayan` → Açıklanamayan | Aynı kalır | Kapsam dışı |
| `/sorunlar#yas` → Yaş ve Fertilite | Aynı kalır | Kapsam dışı |
| `/sorunlar#genetik` → Genetik Faktörler | `/erkek-infertilitesi#genetik` → Genetik Faktörler | **Erkek genetik sayfasına yönlendir** |

### Mobil Menü
Mobil accordion'daki ilgili linkler de aynı şekilde güncellenir.

---

## Makale Bağlantıları

| Bölüm | Mevcut Makale |
|-------|--------------|
| Azospermi & Oligospermi | `/makaleler/azospermi-mikro-tese` |
| Genetik Faktörler | `/makaleler/genetik-testler` |
| Yaşam Tarzı | `/makaleler/alkol-ve-fertilite` |
| Varikosel | — (henüz makale yok, link eklenmez) |
| DNA Fragmentasyonu | — (henüz makale yok, link eklenmez) |
| Mikro-TESE | `/makaleler/azospermi-mikro-tese` (aynı makale) |

---

## SEO

- **Title:** "Erkek İnfertilitesi: Nedenleri, Tanısı ve Tedavi Seçenekleri | tupbebek.com"
- **Description:** "Erkek infertilitesinin nedenleri, tanı yöntemleri ve tedavi seçenekleri. Azospermi, varikosel, genetik faktörler ve Mikro-TESE hakkında kanıta dayalı bilgi."
- **Breadcrumb JSON-LD:** Mevcut Breadcrumbs bileşeni otomatik üretecek

---

## Görseller

Dizin: `/public/images/erkek-infertilitesi/`

Şimdilik placeholder görseller kullanılacak. Sonra özel tıbbi illüstrasyonlarla değiştirilecek.

---

## Tasarım Referansı

`/sorunlar` sayfasının tasarım dili temel alınır:
- Aynı Tailwind sınıfları ve grid yapıları
- Aynı renk paleti (primary, tertiary, accent-gold)
- Aynı tipografi (Noto Serif başlıklar, Manrope gövde)
- Aynı doktor onay bandı ve yasal uyarı yapısı
- **Fark:** Klinik bilgi kutuları bu sayfaya özgü ek bileşen

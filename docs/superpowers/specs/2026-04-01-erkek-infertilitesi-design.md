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
- Klinik bilgi kutusu bileşeni (sayfaya özgü, inline)
- Header mega menü güncellemesi (desktop + mobil)
- SEO meta etiketleri ve breadcrumb

### Hariç
- Yeni makale yazımı (mevcut makalelere link verilecek)
- Görsel üretimi (placeholder kullanılacak, sonra değiştirilir)
- Diğer sayfalardaki değişiklikler (footer, diğer sayfalar)

---

## Sayfa Yapısı

```
/erkek-infertilitesi.astro

├── HERO SECTION
│   ├── Breadcrumb (Anasayfa > Erkek İnfertilitesi)
│   ├── Başlık: "Erkek İnfertilitesi"
│   ├── Alt başlık: İstatistiksel vurgu (%40-50 erkek faktörü)
│   └── Tıbbi denetçi rozeti (Dr. Senai Aksoy)
│
├── QUICK-NAV BAR (sticky)
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
├── DOKTOR ONAY BANDI
│   └── Dr. Senai Aksoy — tıbbi denetim bilgisi
│
└── YASAL UYARI
    └── Tıbbi sorumluluk reddi
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
- Arka plan: `bg-blue-50/60`
- Başlık: Mikroskop ikonu + "Klinik Bilgi" etiketi, `text-sm font-semibold uppercase tracking-wide text-primary`
- İçerik: Tablo veya tanım listesi, değerler için `font-mono`
- Kaynak notu: `text-xs text-gray-500`

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

"İnfertilite Rehberi" altındaki mevcut yapı güncellenir:

```
İnfertilite Rehberi
├── Kadın İnfertilitesi (/sorunlar)
│   ├── Ovülasyon Bozuklukları → /sorunlar#ovulasyon
│   ├── Anatomik Faktörler → /sorunlar#anatomik
│   └── Yaş ve Metabolizma → /sorunlar#yas
│
├── Erkek İnfertilitesi (/erkek-infertilitesi)       ← YENİ
│   ├── Azospermi & Oligospermi → /erkek-infertilitesi#azospermi
│   ├── Varikosel → /erkek-infertilitesi#varikosel
│   ├── Genetik Faktörler → /erkek-infertilitesi#genetik
│   └── Mikro-TESE → /erkek-infertilitesi#mikro-tese
│
└── Açıklanamayan İnfertilite → /sorunlar#aciklanamayan
```

Mobil accordion menüde de aynı yapı güncellenecek.

---

## Makale Bağlantıları

| Bölüm | Mevcut Makale |
|-------|--------------|
| Azospermi & Oligospermi | `azospermi-mikro-tese` |
| Genetik Faktörler | `genetik-testler` |
| Yaşam Tarzı | `alkol-ve-fertilite` |
| Varikosel | — (henüz yok) |
| DNA Fragmentasyonu | — (henüz yok) |
| Mikro-TESE | `azospermi-mikro-tese` (aynı makale) |

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

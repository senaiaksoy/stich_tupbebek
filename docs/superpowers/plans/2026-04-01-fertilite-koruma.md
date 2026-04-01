# Fertilite Koruma Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a comprehensive fertility preservation information page at `/fertilite-koruma` covering egg freezing, sperm freezing, embryo freezing, and oncofertility, plus two supporting articles.

**Architecture:** Single Astro page following the established `sorunlar.astro` pattern (hero + stat cards + alternating content sections). Sticky quick-nav with Intersection Observer for section tracking. Two new markdown articles in the existing content collection. Minor updates to Header and Breadcrumbs components.

**Tech Stack:** Astro 4.15.0, Tailwind CSS with MD3 color tokens, vanilla JS (Intersection Observer), Markdown content collection

**Spec:** `docs/superpowers/specs/2026-04-01-fertilite-koruma-design.md`

---

## Chunk 1: Site Integration & Supporting Articles

### Task 1: Update Breadcrumbs labelMap

**Files:**
- Modify: `src/components/Breadcrumbs.astro:6-15`

- [ ] **Step 1: Add labelMap entry**

In `src/components/Breadcrumbs.astro`, add `'fertilite-koruma': 'Fertilite Koruma'` to the `labelMap` object after the `'erkek-infertilitesi'` entry (line 14):

```typescript
const labelMap: Record<string, string> = {
  'sorunlar': 'İnfertilite Rehberi',
  'tedavi-yontemleri': 'Tedavi Yöntemleri',
  'tani-sureci': 'Tanı Süreci',
  'rehberler': 'Tedavi Rehberi',
  'sss': 'Sıkça Sorulan Sorular',
  'makaleler': 'Bilgi Merkezi',
  'hakkimizda': 'Hakkımızda',
  'erkek-infertilitesi': 'Erkek İnfertilitesi',
  'fertilite-koruma': 'Fertilite Koruma'
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Breadcrumbs.astro
git commit -m "feat: add fertilite-koruma to breadcrumb labelMap"
```

---

### Task 2: Update Header mega-menu link

**Files:**
- Modify: `src/components/Header.astro:127-130`

- [ ] **Step 1: Update desktop mega-menu link**

In `src/components/Header.astro`, change the link at lines 127-130 from:

```html
<a href="/tedavi-yontemleri#koruma" class="flex flex-col p-3 hover:bg-slate-50 rounded-xl transition-colors">
    <span class="text-sm font-bold">Fertilite Koruma</span>
    <span class="text-xs text-slate-500 uppercase tracking-tighter">Yumurta & Sperm Dondurma</span>
</a>
```

To:

```html
<a href="/fertilite-koruma" class="flex flex-col p-3 hover:bg-slate-50 rounded-xl transition-colors">
    <span class="text-sm font-bold">Fertilite Koruma</span>
    <span class="text-xs text-slate-500 uppercase tracking-tighter">Yumurta, Sperm & Embriyo Dondurma</span>
</a>
```

**Note:** The mobile menu (line 298) has only a flat `/tedavi-yontemleri` link without sub-items. No mobile change needed — confirmed in spec (Section 8).

- [ ] **Step 2: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: update header mega-menu fertilite koruma link"
```

---

### Task 3: Create Article 1 — Yumurta Dondurma Rehberi

**Files:**
- Create: `src/content/articles/yumurta-dondurma-rehberi.md`

- [ ] **Step 1: Create article file**

Create `src/content/articles/yumurta-dondurma-rehberi.md` with the following frontmatter and content. The article should follow the existing article pattern (see `azospermi-mikro-tese.md` as reference). Content uses Markdown with `##` headings, bold emphasis, and bullet lists.

Frontmatter:
```yaml
---
title: "Yumurta Dondurma: Süreç, Başarı Oranları ve Sık Sorulan Sorular"
description: "Yumurta dondurma (oosit kriyoprezervasyon) süreci nasıl işler? Hormonal stimülasyon, OPU, vitrifikasyon adımları, yaşa göre başarı oranları ve sık sorulan soruların yanıtları."
publishDate: 2026-04-01
author: "Doç. Dr. Senai Aksoy"
category: "Tedavi"
image: "/images/articles/yumurta-dondurma-rehberi.webp"
imageAlt: "yumurta dondurma süreci vitrifikasyon laboratuvarı"
---
```

Article body sections (full Turkish medical content):

1. **Giriş** — Yumurta dondurma nedir, vitrifikasyon devrimi, sosyal ve medikal endikasyonlar
2. **Süreç Adım Adım** — Ön değerlendirme (AMH, AFC), hormonal stimülasyon (gonadotropinler, 10-14 gün), tetikleme (hCG/GnRH agonist), OPU (ultrason eşliğinde oosit toplama, 15-20 dk, sedasyon altında), vitrifikasyon (ultra-hızlı dondurma, -196°C sıvı nitrojen)
3. **İlaç Protokolü** — Antagonist vs. uzun protokol, dozaj bireyselleştirme, OHSS riski ve önleme
4. **Yaşa Göre Başarı Oranları** — Tablo: <30, 30-34, 35-37, 38-40, >40 yaş grupları için oosit sağkalım, gebelik/oosit oranı, önerilen oosit sayısı
5. **Riskler ve Yan Etkiler** — OHSS (hafif-orta-ağır), kanama, enfeksiyon, çoklu gebelik (kullanım aşamasında), psikolojik etki
6. **Saklama Süresi** — Türkiye'de yasal düzenleme (5 yıl + uzatma hakkı), uluslararası karşılaştırma, vitrifikasyonun uzun süreli güvenliği
7. **Sık Sorulan Sorular** — "Kaç yumurta dondurmalıyım?", "Dondurulmuş yumurta ile doğal gebelik farkı var mı?", "İşlem ağrılı mı?", "Kaç kez deneyebilirim?", "Yaş sınırı var mı?"

Write full, medically accurate Turkish content for each section (~1500-2000 words total). Use the same tone as existing articles: professional but accessible, addressing the patient directly.

- [ ] **Step 2: Verify frontmatter passes schema**

Run: `npx astro build 2>&1 | head -20`
Expected: No content collection schema errors

- [ ] **Step 3: Commit**

```bash
git add src/content/articles/yumurta-dondurma-rehberi.md
git commit -m "feat: add yumurta dondurma rehberi article"
```

---

### Task 4: Create Article 2 — Kanser ve Fertilite

**Files:**
- Create: `src/content/articles/kanser-ve-fertilite.md`

- [ ] **Step 1: Create article file**

Create `src/content/articles/kanser-ve-fertilite.md` with the following frontmatter and content.

Frontmatter:
```yaml
---
title: "Kanser ve Fertilite: Onkolojik Hastalar İçin Rehber"
description: "Kanser tanısı sonrası fertilite koruma seçenekleri nelerdir? Onkolojik hastalarda yumurta, sperm ve embriyo dondurma süreçleri, acil protokoller ve hasta hakları rehberi."
publishDate: 2026-04-01
author: "Doç. Dr. Senai Aksoy"
category: "Tedavi"
image: "/images/articles/kanser-ve-fertilite.webp"
imageAlt: "onkolojik fertilite koruma oncofertility danışmanlık"
---
```

Article body sections (full Turkish medical content):

1. **Giriş** — Kanser tanısı ve fertilite: neden acil hareket gerekir, ASCO/ESMO kılavuz önerileri, multidisipliner yaklaşım
2. **Kanser Tedavilerinin Fertiliteye Etkisi** — Kemoterapi (gonadotoksik ajanlar ve risk sınıflandırması), radyoterapi (pelvik/gonadal ışınlamanın etkileri), cerrahi (orşiektomi, ooferektomi)
3. **Kadınlar İçin Seçenekler** — Oosit dondurma, embriyo dondurma, over doku dondurma (deneysel), GnRH agonist ile over koruma, random-start acil stimülasyon protokolü
4. **Erkekler İçin Seçenekler** — Sperm dondurma (orşiektomi/kemoterapi öncesi), testis doku dondurma (prepubertal, deneysel), elektroejekülasyon
5. **Çocukluk Çağı Kanser Hastaları** — Prepubertal hastalar için seçenekler, over/testis doku dondurma, etik ve yasal çerçeve
6. **Zaman Çizelgesi** — Kanser türüne göre fertilite koruma zaman pencereleri tablosu (meme: 2-4 hafta, lenfoma: 1-2 hafta acil, testis: cerrahi öncesi)
7. **Hasta Hakları** — Bilgilendirilme hakkı, ASCO önerisi: "her üreme çağındaki kanser hastası bilgilendirilmelidir", Türkiye'deki yasal çerçeve, SGK kapsamı
8. **İlk Adım: Ne Yapmalı?** — Kanser tanısı aldığınızda fertilite koruma için atılacak adımlar: 1) onkolojunuzla konuşun, 2) üreme tıbbı uzmanına yönlendirme isteyin, 3) zaman kaybetmeyin

Write full, medically accurate Turkish content (~1500-2000 words total). Empathetic tone — reader may have just received a cancer diagnosis. Professional but warm.

- [ ] **Step 2: Verify frontmatter passes schema**

Run: `npx astro build 2>&1 | head -20`
Expected: No content collection schema errors

- [ ] **Step 3: Commit**

```bash
git add src/content/articles/kanser-ve-fertilite.md
git commit -m "feat: add kanser ve fertilite rehber article"
```

---

## Chunk 2: Main Page — Hero, Quick-Nav, Scientific Intro

### Task 5: Create fertilite-koruma.astro — Hero Section

**Files:**
- Create: `src/pages/fertilite-koruma.astro`

- [ ] **Step 1: Create image directory**

```bash
mkdir -p public/images/fertilite-koruma
```

This directory will hold the page images. Actual images need to be provided later.

- [ ] **Step 2: Create the page file with imports and hero**

Create `src/pages/fertilite-koruma.astro`. Follow `sorunlar.astro` exactly for structure.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import Footer from '../components/Footer.astro';
---

<BaseLayout title="Fertilite Koruma: Yumurta, Sperm ve Embriyo Dondurma | Doç. Dr. Senai Aksoy" description="Yumurta dondurma, sperm dondurma ve embriyo dondurma hakkında kapsamlı bilgi. Onkolojik hastalarda fertilite koruma (oncofertility) seçenekleri, başarı oranları ve güncel klinik veriler.">
    <Header />
    <Breadcrumbs />

    <main class="pb-24">
        <!-- Hero Section -->
        <header class="max-w-5xl mx-auto px-8 mb-20">
            <div class="flex flex-col md:flex-row gap-12 items-start">
                <div class="flex-1">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                        <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">verified</span>
                        Akademik Makale
                    </div>
                    <h1 class="font-headline text-5xl md:text-6xl text-on-surface leading-tight mb-8">
                        Fertilite Koruma: <span class="text-primary italic">Geleceğinizi</span> Güvence Altına Alın
                    </h1>
                    <div class="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border-l-4 border-primary">
                        <div class="w-12 h-12 rounded-full overflow-hidden bg-surface-dim">
                            <img class="w-full h-full object-cover" src="/images/senai-aksoy.jpg" alt="Dr. Senai Aksoy" width="512" height="512" loading="eager" fetchpriority="high"/>
                        </div>
                        <div>
                            <p class="font-headline italic text-on-surface text-sm">Tıbbi İnceleme:</p>
                            <p class="font-bold text-primary">Doç. Dr. Senai Aksoy</p>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block w-72 shrink-0 aspect-[4/5] bg-surface-container-highest rounded-2xl overflow-hidden shadow-2xl">
                    <img class="w-full h-full object-cover grayscale opacity-80" src="/images/fertilite-koruma/hero.jpg" alt="fertilite koruma kriyoprezervasyon laboratuvarı" width="512" height="512" loading="eager" fetchpriority="high"/>
                </div>
            </div>
        </header>
```

**Note:** `BaseLayout.astro` already accepts an optional `description` prop — no changes needed there.

- [ ] **Step 3: Verify the page renders**

Run: `npx astro dev` and visit `http://localhost:4321/fertilite-koruma`
Expected: Hero section visible with breadcrumb, title, doctor card, and image placeholder area

- [ ] **Step 4: Commit**

```bash
git add src/pages/fertilite-koruma.astro
git commit -m "feat: add fertilite-koruma page with hero section"
```

---

### Task 6: Add Sticky Quick-Nav

**Files:**
- Modify: `src/pages/fertilite-koruma.astro`

- [ ] **Step 1: Add sticky quick-nav bar after the hero section**

Insert after the `</header>` closing tag, before the scientific intro section. Follow the pattern from `erkek-infertilitesi` spec:

```html
        <!-- Sticky Quick-Nav -->
        <nav id="quick-nav" class="sticky top-20 z-40 bg-white/90 backdrop-blur-sm border-b border-slate-100 shadow-sm mb-16">
            <div class="max-w-5xl mx-auto px-8 flex gap-1 overflow-x-auto" style="scrollbar-width: none;">
                <a href="#yumurta-dondurma" class="quick-nav-link px-4 py-3 text-sm font-semibold text-slate-500 whitespace-nowrap hover:text-primary transition-colors border-b-2 border-transparent">
                    Yumurta Dondurma
                </a>
                <a href="#sperm-dondurma" class="quick-nav-link px-4 py-3 text-sm font-semibold text-slate-500 whitespace-nowrap hover:text-primary transition-colors border-b-2 border-transparent">
                    Sperm Dondurma
                </a>
                <a href="#embriyo-dondurma" class="quick-nav-link px-4 py-3 text-sm font-semibold text-slate-500 whitespace-nowrap hover:text-primary transition-colors border-b-2 border-transparent">
                    Embriyo Dondurma
                </a>
                <a href="#oncofertility" class="quick-nav-link px-4 py-3 text-sm font-semibold text-slate-500 whitespace-nowrap hover:text-primary transition-colors border-b-2 border-transparent">
                    Oncofertility
                </a>
            </div>
        </nav>
```

- [ ] **Step 2: Add Intersection Observer JS**

Add at the bottom of the file, before `</BaseLayout>`:

```html
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.quick-nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('text-primary', 'border-primary');
                        link.classList.add('text-slate-500', 'border-transparent');
                    });
                    const activeLink = document.querySelector(`.quick-nav-link[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('text-primary', 'border-primary');
                        activeLink.classList.remove('text-slate-500', 'border-transparent');
                    }
                }
            });
        }, { rootMargin: '-20% 0px -70% 0px' });

        sections.forEach(section => observer.observe(section));
    });
</script>
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/fertilite-koruma.astro
git commit -m "feat: add sticky quick-nav with intersection observer"
```

---

### Task 7: Add Scientific Intro (Stat Cards)

**Files:**
- Modify: `src/pages/fertilite-koruma.astro`

- [ ] **Step 1: Add scientific intro section after quick-nav**

Insert after the quick-nav `</nav>`, before the content sections. Follow `sorunlar.astro` stat card pattern (lines 39-63):

```html
        <!-- Scientific Introduction -->
        <section class="max-w-3xl mx-auto px-8 mb-24">
            <p class="text-lg md:text-xl text-on-surface-variant leading-relaxed font-body italic mb-12">
                Modern kriyoprezervasyon teknolojisi, üreme hücrelerinin ve embriyoların uzun yıllar boyunca güvenle saklanmasını mümkün kılmaktadır. Fertilite koruma; yaşa bağlı fertilite kaybı, tıbbi tedaviler veya kişisel tercihler nedeniyle üreme potansiyelini geleceğe taşımanın bilimsel yöntemidir.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-t-2 border-primary-fixed">
                    <span class="material-symbols-outlined text-primary mb-3">ac_unit</span>
                    <h3 class="font-headline text-2xl mb-1">%97</h3>
                    <p class="text-xs text-on-surface-variant uppercase tracking-widest">Vitrifikasyon ile oosit sağkalım</p>
                </div>
                <div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-t-2 border-primary-fixed">
                    <span class="material-symbols-outlined text-primary mb-3">pregnancy</span>
                    <h3 class="font-headline text-2xl mb-1">%40-50</h3>
                    <p class="text-xs text-on-surface-variant uppercase tracking-widest">35 yaş altı gebelik oranı</p>
                </div>
                <div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-t-2 border-primary-fixed">
                    <span class="material-symbols-outlined text-primary mb-3">timer</span>
                    <h3 class="font-headline text-2xl mb-1">20+ yıl</h3>
                    <p class="text-xs text-on-surface-variant uppercase tracking-widest">Güvenli saklama süresi</p>
                </div>
            </div>
            <p class="text-on-surface-variant leading-relaxed">
                Vitrifikasyon (ultra-hızlı dondurma) teknolojisinin gelişmesi, fertilite koruma yöntemlerinin başarı oranlarını dramatik biçimde artırmıştır. Günümüzde yumurta, sperm ve embriyo dondurma işlemleri, standart klinik uygulamalar haline gelmiştir.
            </p>
        </section>
```

- [ ] **Step 2: Verify stat cards render correctly**

Run dev server, check layout at desktop and mobile widths.

- [ ] **Step 3: Commit**

```bash
git add src/pages/fertilite-koruma.astro
git commit -m "feat: add scientific intro with stat cards"
```

---

## Chunk 3: Content Sections — Yumurta, Sperm, Embriyo Dondurma

### Task 8: Add Yumurta Dondurma Section

**Files:**
- Modify: `src/pages/fertilite-koruma.astro`

- [ ] **Step 1: Add yumurta dondurma section**

Insert after the scientific intro `</section>`. Follow `sorunlar.astro` Section 1 pattern (lines 66-110) — `bg-surface-container-low`, image on right, content on left:

```html
        <!-- Section 1: Yumurta Dondurma -->
        <section id="yumurta-dondurma" class="bg-surface-container-low py-24 mb-24">
            <div class="max-w-5xl mx-auto px-8">
                <div class="flex flex-col md:flex-row gap-16 items-center">
                    <div class="md:w-1/2">
                        <h2 class="font-headline text-3xl text-on-surface mb-6">Yumurta Dondurma (Oosit Kriyoprezervasyon)</h2>
                        <div class="space-y-6 text-on-surface-variant">
                            <p>Vitrifikasyon teknolojisi, yumurta dondurma alanında bir dönüm noktası olmuştur. Bu ultra-hızlı dondurma yöntemi sayesinde oositlerin %90-97 oranında çözülme sonrası canlılığını koruması mümkün hale gelmiştir. Yumurta dondurma, hem sosyal (kariyer planlaması, partner bulunmaması) hem de medikal (gonadotoksik tedavi öncesi, endometriozis, aile öyküsü) nedenlerle tercih edilmektedir.</p>

                            <!-- Klinik Bilgi Kutusu 1: Yaşa Göre Başarı Oranları -->
                            <div class="border-l-4 border-primary bg-white p-6 rounded-r-xl shadow-sm">
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="material-symbols-outlined text-primary text-sm">biotech</span>
                                    <span class="text-xs font-bold text-primary uppercase tracking-widest">Klinik Bilgi</span>
                                </div>
                                <h4 class="font-bold text-on-surface mb-3">Yaşa Göre Başarı Oranları</h4>
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead>
                                            <tr class="border-b border-slate-200">
                                                <th class="text-left py-2 font-semibold">Yaş</th>
                                                <th class="text-left py-2 font-semibold">Oosit Sağkalım</th>
                                                <th class="text-left py-2 font-semibold">Gebelik/Oosit</th>
                                                <th class="text-left py-2 font-semibold">Önerilen Sayı</th>
                                            </tr>
                                        </thead>
                                        <tbody class="font-mono text-xs">
                                            <tr class="border-b border-slate-100"><td class="py-2">&lt;30</td><td>%90-97</td><td>%8-10</td><td>10-15</td></tr>
                                            <tr class="border-b border-slate-100"><td class="py-2">30-34</td><td>%90-95</td><td>%6-8</td><td>15-20</td></tr>
                                            <tr class="border-b border-slate-100"><td class="py-2">35-37</td><td>%85-90</td><td>%4-6</td><td>20-25</td></tr>
                                            <tr class="border-b border-slate-100"><td class="py-2">38-40</td><td>%80-85</td><td>%2-4</td><td>25-30</td></tr>
                                            <tr><td class="py-2">&gt;40</td><td>%75-80</td><td>%1-2</td><td>Bireysel</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Klinik Bilgi Kutusu 2: İşlem Süreci -->
                            <div class="border-l-4 border-primary bg-white p-6 rounded-r-xl shadow-sm">
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="material-symbols-outlined text-primary text-sm">biotech</span>
                                    <span class="text-xs font-bold text-primary uppercase tracking-widest">Klinik Bilgi</span>
                                </div>
                                <h4 class="font-bold text-on-surface mb-3">İşlem Süreci</h4>
                                <dl class="space-y-2 text-sm">
                                    <div class="flex justify-between border-b border-slate-100 pb-2">
                                        <dt>Hormonal stimülasyon</dt>
                                        <dd class="font-mono font-bold">10-14 gün</dd>
                                    </div>
                                    <div class="flex justify-between border-b border-slate-100 pb-2">
                                        <dt>OPU (oosit toplama)</dt>
                                        <dd class="font-mono font-bold">~15-20 dk</dd>
                                    </div>
                                    <div class="flex justify-between border-b border-slate-100 pb-2">
                                        <dt>Vitrifikasyon</dt>
                                        <dd class="font-mono font-bold">-196°C</dd>
                                    </div>
                                    <div class="flex justify-between">
                                        <dt>Saklama süresi</dt>
                                        <dd class="font-mono font-bold">5 yıl + uzatma</dd>
                                    </div>
                                </dl>
                            </div>

                            <p>Yumurta dondurma, medikal ve sosyal olmak üzere iki ana endikasyona sahiptir. <strong>Sosyal endikasyonlar</strong> arasında kariyer planlaması ve partner bulunmaması yer alırken, <strong>medikal endikasyonlar</strong> gonadotoksik tedavi öncesi koruma, endometriozis ve erken over yetmezliği aile öyküsünü kapsar.</p>

                            <a href="/makaleler/yumurta-dondurma-rehberi" class="inline-flex items-center gap-1 text-primary font-semibold hover:underline text-sm">
                                Detaylı rehber: Yumurta Dondurma Süreci
                                <span class="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <div class="relative group">
                            <img class="rounded-2xl shadow-xl w-full" src="/images/fertilite-koruma/yumurta-dondurma.jpg" alt="oosit vitrifikasyon yumurta dondurma süreci" width="512" height="512" loading="lazy"/>
                            <div class="absolute -bottom-6 -left-6 bg-surface-container-highest p-4 rounded-lg hidden md:block shadow-lg">
                                <p class="text-xs font-bold text-primary tracking-widest uppercase mb-1">Vitrifikasyon</p>
                                <p class="text-2xl font-headline">%97</p>
                                <p class="text-[10px] text-on-surface-variant">Oosit sağkalım oranı</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Verify section renders with correct layout**

Check dev server — alternating layout, table readable, data badge positioned.

- [ ] **Step 3: Commit**

```bash
git add src/pages/fertilite-koruma.astro
git commit -m "feat: add yumurta dondurma section"
```

---

### Task 9: Add Sperm Dondurma Section

**Files:**
- Modify: `src/pages/fertilite-koruma.astro`

- [ ] **Step 1: Add sperm dondurma section**

Insert after yumurta dondurma `</section>`. This section uses `bg-surface` (alternating) with image on left, content on right (reverse flex):

```html
        <!-- Section 2: Sperm Dondurma -->
        <section id="sperm-dondurma" class="max-w-5xl mx-auto px-8 mb-24">
            <div class="flex flex-col md:flex-row-reverse gap-16 items-center">
                <div class="md:w-1/2">
                    <h2 class="font-headline text-3xl text-on-surface mb-6">Sperm Dondurma (Sperm Kriyoprezervasyon)</h2>
                    <div class="space-y-6 text-on-surface-variant">
                        <p>Sperm dondurma, en eski ve en yaygın fertilite koruma yöntemidir. İlk başarılı uygulama 1953 yılına dayanır. Basit ve hızlı bir süreçtir; acil durumlarda bile aynı gün uygulanabilir. Kanser tanısı alan erkek hastalar için tedavi başlamadan önce mutlaka değerlendirilmesi gereken bir seçenektir.</p>

                        <!-- Klinik Bilgi Kutusu 1: Yöntemler -->
                        <div class="border-l-4 border-primary bg-white p-6 rounded-r-xl shadow-sm">
                            <div class="flex items-center gap-2 mb-4">
                                <span class="material-symbols-outlined text-primary text-sm">biotech</span>
                                <span class="text-xs font-bold text-primary uppercase tracking-widest">Klinik Bilgi</span>
                            </div>
                            <h4 class="font-bold text-on-surface mb-3">Dondurma Yöntemleri Karşılaştırması</h4>
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm">
                                    <thead>
                                        <tr class="border-b border-slate-200">
                                            <th class="text-left py-2 font-semibold">Yöntem</th>
                                            <th class="text-left py-2 font-semibold">Sağkalım</th>
                                            <th class="text-left py-2 font-semibold">Kullanım</th>
                                        </tr>
                                    </thead>
                                    <tbody class="font-mono text-xs">
                                        <tr class="border-b border-slate-100"><td class="py-2">Yavaş dondurma</td><td>%40-60</td><td>Klasik yöntem</td></tr>
                                        <tr class="border-b border-slate-100"><td class="py-2">Vitrifikasyon</td><td>%60-80</td><td>Düşük sayılı örnekler</td></tr>
                                        <tr><td class="py-2">Mikro-TESE sperm</td><td>%50-70</td><td>Azospermik hastalar</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Klinik Bilgi Kutusu 2: Endikasyonlar -->
                        <div class="border-l-4 border-primary bg-white p-6 rounded-r-xl shadow-sm">
                            <div class="flex items-center gap-2 mb-4">
                                <span class="material-symbols-outlined text-primary text-sm">biotech</span>
                                <span class="text-xs font-bold text-primary uppercase tracking-widest">Klinik Bilgi</span>
                            </div>
                            <h4 class="font-bold text-on-surface mb-3">Endikasyonlar</h4>
                            <ul class="space-y-2 text-sm">
                                <li class="flex gap-3"><span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>Kanser tedavisi öncesi (kemoterapi, radyoterapi)</li>
                                <li class="flex gap-3"><span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>Cerrahi öncesi (orşiektomi, retroperitoneal cerrahiler)</li>
                                <li class="flex gap-3"><span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>Progresif oligospermi (kötüleşen sperm parametreleri)</li>
                                <li class="flex gap-3"><span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>Mikro-TESE ile elde edilen sperm güvencesi</li>
                                <li class="flex gap-3"><span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>Meslek riski (toksik madde maruziyeti, radyasyon)</li>
                            </ul>
                        </div>

                        <p>Sperm dondurma süreci oldukça basittir: örnek verme, laboratuvar analizi, kriyoprotektan eklenmesi ve dondurma. Birden fazla örnek saklanması önerilir. Türkiye'de saklama süresi yasal düzenleme ile belirlenmektedir.</p>

                        <a href="/makaleler/azospermi-mikro-tese" class="inline-flex items-center gap-1 text-primary font-semibold hover:underline text-sm">
                            İlgili makale: Azospermi ve Mikro-TESE
                            <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <div class="relative group">
                        <img class="rounded-2xl shadow-xl w-full" src="/images/fertilite-koruma/sperm-dondurma.jpg" alt="sperm kriyoprezervasyon laboratuvar işlem" width="512" height="512" loading="lazy"/>
                        <div class="absolute -bottom-6 -right-6 bg-surface-container-highest p-4 rounded-lg hidden md:block shadow-lg">
                            <p class="text-xs font-bold text-primary tracking-widest uppercase mb-1">Tarihçe</p>
                            <p class="text-2xl font-headline">1953</p>
                            <p class="text-[10px] text-on-surface-variant">İlk başarılı sperm dondurma</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Verify alternating layout**

Check dev server — image should be on the left (flex-row-reverse).

- [ ] **Step 3: Commit**

```bash
git add src/pages/fertilite-koruma.astro
git commit -m "feat: add sperm dondurma section"
```

---

### Task 10: Add Embriyo Dondurma Section

**Files:**
- Modify: `src/pages/fertilite-koruma.astro`

- [ ] **Step 1: Add embriyo dondurma section**

Insert after sperm dondurma `</section>`. Uses `bg-surface-container-low` with image on right (same layout as yumurta dondurma):

```html
        <!-- Section 3: Embriyo Dondurma -->
        <section id="embriyo-dondurma" class="bg-surface-container-low py-24 mb-24">
            <div class="max-w-5xl mx-auto px-8">
                <div class="flex flex-col md:flex-row gap-16 items-center">
                    <div class="md:w-1/2">
                        <h2 class="font-headline text-3xl text-on-surface mb-6">Embriyo Dondurma (Embriyo Kriyoprezervasyon)</h2>
                        <div class="space-y-6 text-on-surface-variant">
                            <p>Embriyo dondurma, en yüksek başarı oranına sahip fertilite koruma yöntemidir. Partneri olan çiftler için altın standart olarak kabul edilir. Vitrifikasyon teknolojisi ile embriyo sağkalım oranları %95-99'a ulaşmıştır.</p>

                            <!-- Klinik Bilgi Kutusu 1: Vitrifikasyon vs. Yavaş Dondurma -->
                            <div class="border-l-4 border-primary bg-white p-6 rounded-r-xl shadow-sm">
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="material-symbols-outlined text-primary text-sm">biotech</span>
                                    <span class="text-xs font-bold text-primary uppercase tracking-widest">Klinik Bilgi</span>
                                </div>
                                <h4 class="font-bold text-on-surface mb-3">Vitrifikasyon vs. Yavaş Dondurma</h4>
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead>
                                            <tr class="border-b border-slate-200">
                                                <th class="text-left py-2 font-semibold">Parametre</th>
                                                <th class="text-left py-2 font-semibold">Vitrifikasyon</th>
                                                <th class="text-left py-2 font-semibold">Yavaş Dondurma</th>
                                            </tr>
                                        </thead>
                                        <tbody class="font-mono text-xs">
                                            <tr class="border-b border-slate-100"><td class="py-2">Sağkalım oranı</td><td>%95-99</td><td>%75-85</td></tr>
                                            <tr class="border-b border-slate-100"><td class="py-2">Buz kristali</td><td>Yok</td><td>Olası</td></tr>
                                            <tr class="border-b border-slate-100"><td class="py-2">İşlem süresi</td><td>Dakikalar</td><td>Saatler</td></tr>
                                            <tr><td class="py-2">Güncel tercih</td><td>Altın standart</td><td>Terk edilmekte</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Klinik Bilgi Kutusu 2: Embriyo Evreleri -->
                            <div class="border-l-4 border-primary bg-white p-6 rounded-r-xl shadow-sm">
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="material-symbols-outlined text-primary text-sm">biotech</span>
                                    <span class="text-xs font-bold text-primary uppercase tracking-widest">Klinik Bilgi</span>
                                </div>
                                <h4 class="font-bold text-on-surface mb-3">Embriyo Evrelerine Göre Başarı</h4>
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead>
                                            <tr class="border-b border-slate-200">
                                                <th class="text-left py-2 font-semibold">Evre</th>
                                                <th class="text-left py-2 font-semibold">Sağkalım</th>
                                                <th class="text-left py-2 font-semibold">Gebelik</th>
                                                <th class="text-left py-2 font-semibold">Avantaj</th>
                                            </tr>
                                        </thead>
                                        <tbody class="font-mono text-xs">
                                            <tr class="border-b border-slate-100"><td class="py-2">Blastosist (5. gün)</td><td>%95-99</td><td>%50-60</td><td>PGT uygulanabilir</td></tr>
                                            <tr><td class="py-2">Klivaj (2-3. gün)</td><td>%90-95</td><td>%30-40</td><td>Düşük sayıda tercih</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Klinik Bilgi Kutusu 3: FET Protokolleri -->
                            <div class="border-l-4 border-primary bg-white p-6 rounded-r-xl shadow-sm">
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="material-symbols-outlined text-primary text-sm">biotech</span>
                                    <span class="text-xs font-bold text-primary uppercase tracking-widest">Klinik Bilgi</span>
                                </div>
                                <h4 class="font-bold text-on-surface mb-3">Dondurulmuş Embriyo Transferi (FET) Protokolleri</h4>
                                <ul class="space-y-2 text-sm">
                                    <li class="flex gap-3"><span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span><strong>Doğal siklus FET:</strong> İlaçsız, doğal ovülasyon takibi</li>
                                    <li class="flex gap-3"><span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span><strong>Modifiye doğal siklus:</strong> Minimal ilaç desteği</li>
                                    <li class="flex gap-3"><span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span><strong>Yapay (hormonal) siklus:</strong> Estrojen + progesteron ile endometrium hazırlığı</li>
                                </ul>
                            </div>

                            <p>Embriyo dondurmanın yumurta dondurma karşısındaki en büyük avantajı, fertilizasyon belirsizliğini ortadan kaldırmasıdır. Ancak Türkiye'de <strong>yasal olarak yalnızca evli çiftler</strong> embriyo dondurma işlemi yaptırabilir. Boşanma durumunda embriyoların kullanım hakkı yasal düzenlemeye tabidir.</p>

                            <a href="/makaleler/dondurulmus-embriyo-transferi" class="inline-flex items-center gap-1 text-primary font-semibold hover:underline text-sm">
                                Detaylı makale: FET Protokolleri
                                <span class="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <div class="relative group">
                            <img class="rounded-2xl shadow-xl w-full" src="/images/fertilite-koruma/embriyo-dondurma.jpg" alt="embriyo vitrifikasyon blastosist dondurma" width="512" height="512" loading="lazy"/>
                            <div class="absolute -bottom-6 -left-6 bg-surface-container-highest p-4 rounded-lg hidden md:block shadow-lg">
                                <p class="text-xs font-bold text-primary tracking-widest uppercase mb-1">Embriyo Sağkalım</p>
                                <p class="text-2xl font-headline">%99</p>
                                <p class="text-[10px] text-on-surface-variant">Vitrifikasyon sonrası</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Verify section renders**

Check dev server — three content sections visible with alternating backgrounds and layouts.

- [ ] **Step 3: Commit**

```bash
git add src/pages/fertilite-koruma.astro
git commit -m "feat: add embriyo dondurma section"
```

---

## Chunk 4: Oncofertility Section & Page Footer

### Task 11: Add Oncofertility Section

**Files:**
- Modify: `src/pages/fertilite-koruma.astro`

- [ ] **Step 1: Add oncofertility section**

Insert after embriyo dondurma `</section>`. This section has special visual treatment — `border-l-4 border-tertiary` accent to signal urgency. Uses `bg-surface` background. This is the longest section with 3 clinical info boxes + experimental methods:

```html
        <!-- Section 4: Oncofertility -->
        <section id="oncofertility" class="max-w-5xl mx-auto px-8 mb-24">
            <div class="border-l-4 border-tertiary pl-8 mb-12">
                <h2 class="font-headline text-3xl text-on-surface mb-4">Oncofertility: Kanser Tedavisi ve Fertilite Koruma</h2>
                <p class="text-on-surface-variant text-lg italic">Kanser tanısı alan her üreme çağındaki hastanın, tedavi başlamadan önce fertilite koruma seçenekleri hakkında bilgilendirilmesi bir hak ve standart uygulamadır.</p>
            </div>

            <div class="space-y-8">
                <p class="text-on-surface-variant leading-relaxed">Kanser tanısı ile fertilite koruma arasındaki süre genellikle kısıtlıdır. Multidisipliner yaklaşım — onkolog ve üreme tıbbı uzmanının koordinasyonu — bu süreçte kritik öneme sahiptir. ASCO ve ESMO kılavuzları, üreme çağındaki tüm kanser hastalarının fertilite koruma konusunda bilgilendirilmesini önermektedir.</p>

                <div class="flex flex-col md:flex-row gap-12 items-start">
                    <div class="md:w-3/5 space-y-8">
                        <!-- Klinik Bilgi Kutusu 1: Gonadotoksik Tedaviler -->
                        <div class="border-l-4 border-tertiary bg-white p-6 rounded-r-xl shadow-sm">
                            <div class="flex items-center gap-2 mb-4">
                                <span class="material-symbols-outlined text-tertiary text-sm">warning</span>
                                <span class="text-xs font-bold text-tertiary uppercase tracking-widest">Onkolojik Risk</span>
                            </div>
                            <h4 class="font-bold text-on-surface mb-3">Gonadotoksik Tedavilerin Fertiliteye Etkisi</h4>
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm">
                                    <thead>
                                        <tr class="border-b border-slate-200">
                                            <th class="text-left py-2 font-semibold">Risk</th>
                                            <th class="text-left py-2 font-semibold">Tedavi Ajanı</th>
                                            <th class="text-left py-2 font-semibold">Over Yetmezliği</th>
                                            <th class="text-left py-2 font-semibold">Sperm Hasarı</th>
                                        </tr>
                                    </thead>
                                    <tbody class="font-mono text-xs">
                                        <tr class="border-b border-slate-100"><td class="py-2 font-semibold text-error">Yüksek</td><td>Siklofosfamid, Busulfan, Melfalan, TBI</td><td>&gt;%80</td><td>&gt;%80</td></tr>
                                        <tr class="border-b border-slate-100"><td class="py-2 font-semibold text-orange-600">Orta</td><td>Cisplatin, Doksorubisin</td><td>%40-60</td><td>%40-60</td></tr>
                                        <tr class="border-b border-slate-100"><td class="py-2 font-semibold text-tertiary">Düşük</td><td>Vincristin, Metotreksat, 5-FU</td><td>&lt;%20</td><td>&lt;%20</td></tr>
                                        <tr><td class="py-2 text-slate-400">Bilinmiyor</td><td>Hedefe yönelik tedaviler, İmmünoterapi</td><td>Veri yetersiz</td><td>Veri yetersiz</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Klinik Bilgi Kutusu 2: Kanser Türüne Göre Algoritma -->
                        <div class="border-l-4 border-tertiary bg-white p-6 rounded-r-xl shadow-sm">
                            <div class="flex items-center gap-2 mb-4">
                                <span class="material-symbols-outlined text-tertiary text-sm">account_tree</span>
                                <span class="text-xs font-bold text-tertiary uppercase tracking-widest">Karar Algoritması</span>
                            </div>
                            <h4 class="font-bold text-on-surface mb-3">Kanser Türüne Göre Fertilite Koruma</h4>
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm">
                                    <thead>
                                        <tr class="border-b border-slate-200">
                                            <th class="text-left py-2 font-semibold">Kanser</th>
                                            <th class="text-left py-2 font-semibold">Kadın</th>
                                            <th class="text-left py-2 font-semibold">Erkek</th>
                                            <th class="text-left py-2 font-semibold">Süre</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-xs">
                                        <tr class="border-b border-slate-100"><td class="py-2 font-semibold">Meme</td><td>Oosit/embriyo + GnRH agonist</td><td>—</td><td class="font-mono">2-4 hafta</td></tr>
                                        <tr class="border-b border-slate-100"><td class="py-2 font-semibold">Lenfoma/Lösemi</td><td>Oosit (acil) + over doku</td><td>Sperm dondurma</td><td class="font-mono text-error font-bold">1-2 hafta</td></tr>
                                        <tr class="border-b border-slate-100"><td class="py-2 font-semibold">Testis</td><td>—</td><td>Sperm (cerrahi öncesi)</td><td class="font-mono">Cerrahi öncesi</td></tr>
                                        <tr class="border-b border-slate-100"><td class="py-2 font-semibold">Kolorektal</td><td>Oosit/embriyo dondurma</td><td>Sperm dondurma</td><td class="font-mono">2-4 hafta</td></tr>
                                        <tr><td class="py-2 font-semibold">Çocukluk çağı</td><td>Over doku (deneysel)</td><td>Testis doku (deneysel)</td><td class="font-mono">Tedavi öncesi</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Klinik Bilgi Kutusu 3: Acil Stimülasyon -->
                        <div class="border-l-4 border-tertiary bg-white p-6 rounded-r-xl shadow-sm">
                            <div class="flex items-center gap-2 mb-4">
                                <span class="material-symbols-outlined text-tertiary text-sm">emergency</span>
                                <span class="text-xs font-bold text-tertiary uppercase tracking-widest">Acil Protokol</span>
                            </div>
                            <h4 class="font-bold text-on-surface mb-3">Random-Start Stimülasyon Protokolü</h4>
                            <dl class="space-y-2 text-sm">
                                <div class="flex justify-between border-b border-slate-100 pb-2">
                                    <dt>Klasik stimülasyon</dt>
                                    <dd class="font-mono">Adet beklenir (2-6 hafta)</dd>
                                </div>
                                <div class="flex justify-between border-b border-slate-100 pb-2">
                                    <dt>Random-start</dt>
                                    <dd class="font-mono font-bold text-tertiary">Herhangi bir günde başlanır</dd>
                                </div>
                                <div class="flex justify-between border-b border-slate-100 pb-2">
                                    <dt>Süre</dt>
                                    <dd class="font-mono">10-14 gün</dd>
                                </div>
                                <div class="flex justify-between border-b border-slate-100 pb-2">
                                    <dt>Meme kanseri güvenliği</dt>
                                    <dd class="font-mono">Letrozol ile östrojen baskılama</dd>
                                </div>
                                <div class="flex justify-between">
                                    <dt>Kanser tedavisine gecikme</dt>
                                    <dd class="font-mono">Ortalama 2 hafta</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <div class="md:w-2/5">
                        <div class="relative group mb-8">
                            <img class="rounded-2xl shadow-xl w-full" src="/images/fertilite-koruma/oncofertility.jpg" alt="onkolojik fertilite koruma danışmanlık" width="512" height="512" loading="lazy"/>
                        </div>

                        <!-- Deneysel Yöntemler Kartı -->
                        <div class="bg-surface-container-high p-6 rounded-2xl">
                            <h4 class="font-bold text-on-surface mb-4 flex items-center gap-2">
                                <span class="material-symbols-outlined text-tertiary">science</span>
                                Deneysel Yöntemler
                            </h4>
                            <div class="space-y-4 text-sm text-on-surface-variant">
                                <div>
                                    <p class="font-semibold text-on-surface">Over Doku Kriyoprezervasyon</p>
                                    <p>Prepubertal kız çocuklarda tek seçenek. Reimplantasyon ile doğal gebelik mümkün.</p>
                                </div>
                                <div>
                                    <p class="font-semibold text-on-surface">Testis Doku Dondurma</p>
                                    <p>Prepubertal erkek çocuklarda araştırma aşamasında.</p>
                                </div>
                                <div>
                                    <p class="font-semibold text-on-surface">GnRH Agonist (Over Koruma)</p>
                                    <p>Kemoterapi sırasında overleri "uyutma". Tartışmalı ancak ASCO tarafından önerilen ek koruma.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/makaleler/kanser-ve-fertilite" class="inline-flex items-center gap-1 text-tertiary font-semibold hover:underline text-sm mt-4">
                    Kapsamlı rehber: Kanser ve Fertilite
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
        </section>
```

- [ ] **Step 2: Verify oncofertility section renders**

Check dev server — teal accent, tables, experimental methods sidebar card.

- [ ] **Step 3: Commit**

```bash
git add src/pages/fertilite-koruma.astro
git commit -m "feat: add oncofertility section"
```

---

### Task 12: Add Medical Reviewer Card, Legal Disclaimer & Close Page

**Files:**
- Modify: `src/pages/fertilite-koruma.astro`

- [ ] **Step 1: Add medical reviewer card and legal disclaimer**

Insert after oncofertility `</section>`, before `</main>`. Follow the pattern from `src/pages/makaleler/[...slug].astro` for the reviewer card:

```html
        <!-- Medical Reviewer Card -->
        <section class="max-w-3xl mx-auto px-8 mb-12">
            <div class="flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/20">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-surface-dim shrink-0">
                    <img class="w-full h-full object-cover" src="/images/senai-aksoy.jpg" alt="Doç. Dr. Senai Aksoy" width="512" height="512" loading="lazy"/>
                </div>
                <div>
                    <p class="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Tıbbi İnceleme</p>
                    <p class="font-bold text-on-surface">Doç. Dr. Senai Aksoy</p>
                    <p class="text-sm text-on-surface-variant">Kadın Hastalıkları ve Doğum Uzmanı, Tüp Bebek Tedavisi</p>
                    <p class="text-xs text-on-surface-variant mt-1">Son güncelleme: Nisan 2026</p>
                </div>
            </div>
        </section>

        <!-- Legal Disclaimer -->
        <section class="max-w-3xl mx-auto px-8">
            <p class="text-xs text-on-surface-variant leading-relaxed p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                <strong>Yasal Uyarı:</strong> Bu sayfadaki bilgiler yalnızca eğitim ve bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez. Fertilite koruma kararları, bireysel tıbbi değerlendirme sonucunda uzman hekim tarafından verilmelidir. Tedavi seçenekleri hakkında mutlaka doktorunuza danışınız.
            </p>
        </section>
```

- [ ] **Step 2: Close the page structure**

Ensure the page ends with:

```html
    </main>

    <Footer />
</BaseLayout>
```

And the `<script>` tag for the Intersection Observer is placed before `</BaseLayout>`.

- [ ] **Step 3: Verify full page renders end-to-end**

Run: `npx astro dev`
Visit: `http://localhost:4321/fertilite-koruma`
Check: All 4 sections visible, quick-nav highlights on scroll, tables readable, links clickable, reviewer card and disclaimer at bottom.

- [ ] **Step 4: Commit**

```bash
git add src/pages/fertilite-koruma.astro
git commit -m "feat: add medical reviewer card and legal disclaimer"
```

---

### Task 13: Final Build Verification

**Files:** None (verification only)

- [ ] **Step 1: Run production build**

```bash
npx astro build 2>&1
```

Expected: Build succeeds with no errors. New routes generated:
- `/fertilite-koruma/index.html`
- `/makaleler/yumurta-dondurma-rehberi/index.html`
- `/makaleler/kanser-ve-fertilite/index.html`

- [ ] **Step 2: Verify all internal links**

Check that these links resolve:
- `/fertilite-koruma` — main page
- `/fertilite-koruma#yumurta-dondurma` — anchor
- `/fertilite-koruma#sperm-dondurma` — anchor
- `/fertilite-koruma#embriyo-dondurma` — anchor
- `/fertilite-koruma#oncofertility` — anchor
- `/makaleler/yumurta-dondurma-rehberi` — new article
- `/makaleler/kanser-ve-fertilite` — new article
- `/makaleler/azospermi-mikro-tese` — existing article link
- `/makaleler/dondurulmus-embriyo-transferi` — existing article link

- [ ] **Step 3: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix: resolve build issues for fertilite-koruma page"
```

---

## Notes

**Images:** The plan uses placeholder image paths. Actual images need to be provided by the user and placed in:
- `public/images/fertilite-koruma/` (5 page images, JPG)
- `public/images/articles/` (2 article covers, WebP)

The page will render without images but show broken image indicators until real images are added.


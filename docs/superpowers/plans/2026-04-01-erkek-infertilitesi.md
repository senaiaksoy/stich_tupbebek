# Erkek İnfertilitesi Sayfası Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a standalone male infertility page (`/erkek-infertilitesi`) with 6 detailed medical sections, clinical info boxes, sticky quick-nav, and update the header mega menu links.

**Architecture:** New Astro page following the existing `sorunlar.astro` design language. No new components — clinical info boxes are inline HTML. Header.astro gets link updates for both desktop and mobile menus. Breadcrumbs.astro gets a new labelMap entry.

**Tech Stack:** Astro, Tailwind CSS, vanilla JS (intersection observer for quick-nav)

**Spec:** `docs/superpowers/specs/2026-04-01-erkek-infertilitesi-design.md`

---

## Chunk 1: Infrastructure & Navigation

### Task 1: Update Breadcrumbs labelMap

**Files:**
- Modify: `src/components/Breadcrumbs.astro:6-14`

- [ ] **Step 1: Add erkek-infertilitesi to labelMap**

In `src/components/Breadcrumbs.astro`, add entry to the `labelMap` object:

```astro
const labelMap: Record<string, string> = {
  'sorunlar': 'İnfertilite Rehberi',
  'tedavi-yontemleri': 'Tedavi Yöntemleri',
  'tani-sureci': 'Tanı Süreci',
  'rehberler': 'Tedavi Rehberi',
  'sss': 'Sıkça Sorulan Sorular',
  'makaleler': 'Bilgi Merkezi',
  'hakkimizda': 'Hakkımızda',
  'erkek-infertilitesi': 'Erkek İnfertilitesi'
};
```

- [ ] **Step 2: Verify build succeeds**

Run: `npx astro build`
Expected: Build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Breadcrumbs.astro
git commit -m "feat: add erkek-infertilitesi to breadcrumbs labelMap"
```

---

### Task 2: Update Header mega menu — desktop

**Files:**
- Modify: `src/components/Header.astro:29-48`

- [ ] **Step 1: Change "Erkek Faktörleri" link**

In `src/components/Header.astro`, in the "İnfertilite Rehberi" mega menu panel (line ~33), change:

```html
<!-- OLD -->
<a href="/sorunlar#erkek" class="group/item flex flex-col p-3 hover:bg-slate-50 rounded-xl transition-colors">
    <span class="text-sm font-bold text-slate-900 group-hover/item:text-primary">Erkek Faktörleri</span>
    <span class="text-xs text-slate-500 mt-1 uppercase tracking-tighter">Semen Analizi & Sağlık</span>
</a>
```

to:

```html
<!-- NEW -->
<a href="/erkek-infertilitesi" class="group/item flex flex-col p-3 hover:bg-slate-50 rounded-xl transition-colors">
    <span class="text-sm font-bold text-slate-900 group-hover/item:text-primary">Erkek Faktörleri</span>
    <span class="text-xs text-slate-500 mt-1 uppercase tracking-tighter">Semen Analizi & Sağlık</span>
</a>
```

- [ ] **Step 2: Change "Genetik Faktörler" link**

In the same mega menu panel (line ~45), change:

```html
<!-- OLD -->
<a href="/sorunlar#genetik" class="group/item flex flex-col p-3 hover:bg-slate-50 rounded-xl transition-colors">
    <span class="text-sm font-bold text-slate-900 group-hover/item:text-primary">Genetik Faktörler</span>
    <span class="text-xs text-slate-500 mt-1 uppercase tracking-tighter">Klinik Tarama Analizi</span>
</a>
```

to:

```html
<!-- NEW -->
<a href="/erkek-infertilitesi#genetik" class="group/item flex flex-col p-3 hover:bg-slate-50 rounded-xl transition-colors">
    <span class="text-sm font-bold text-slate-900 group-hover/item:text-primary">Genetik Faktörler</span>
    <span class="text-xs text-slate-500 mt-1 uppercase tracking-tighter">Klinik Tarama Analizi</span>
</a>
```

- [ ] **Step 3: Verify build succeeds**

Run: `npx astro build`
Expected: Build completes without errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: update desktop mega menu links for erkek infertilitesi"
```

---

### Task 3: Update Header mega menu — mobile

**Files:**
- Modify: `src/components/Header.astro:281-286`

- [ ] **Step 1: Update mobile accordion links**

In the mobile accordion for "İnfertilite Rehberi" (line ~281-286), change:

```html
<!-- OLD -->
<div class="hidden py-4 pl-4 space-y-4">
    <a href="/sorunlar#kadin" class="block text-slate-600">Kadın Faktörleri</a>
    <a href="/sorunlar#erkek" class="block text-slate-600">Erkek Faktörleri</a>
    <a href="/sorunlar#aciklanamayan" class="block text-slate-600">Açıklanamayan</a>
    <a href="/sorunlar#yas" class="block text-slate-600">Yaş ve Fertilite</a>
</div>
```

to:

```html
<!-- NEW -->
<div class="hidden py-4 pl-4 space-y-4">
    <a href="/sorunlar#kadin" class="block text-slate-600">Kadın Faktörleri</a>
    <a href="/erkek-infertilitesi" class="block text-slate-600">Erkek Faktörleri</a>
    <a href="/sorunlar#aciklanamayan" class="block text-slate-600">Açıklanamayan</a>
    <a href="/sorunlar#yas" class="block text-slate-600">Yaş ve Fertilite</a>
</div>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npx astro build`
Expected: Build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: update mobile menu links for erkek infertilitesi"
```

---

## Chunk 2: Page — Hero, Quick-Nav, Scientific Introduction

### Task 4: Create page with Hero section

**Files:**
- Create: `src/pages/erkek-infertilitesi.astro`

- [ ] **Step 1: Create the page file with imports, hero, and placeholder main**

Create `src/pages/erkek-infertilitesi.astro` with:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import Footer from '../components/Footer.astro';
---

<BaseLayout title="Erkek İnfertilitesi: Nedenleri, Tanısı ve Tedavi Seçenekleri | tupbebek.com" description="Erkek infertilitesinin nedenleri, tanı yöntemleri ve tedavi seçenekleri. Azospermi, varikosel, genetik faktörler ve Mikro-TESE hakkında kanıta dayalı bilgi.">
    <Header />
    <Breadcrumbs />

    <main class="pb-24">
        <!-- Note: No pt-32 needed because Breadcrumbs component includes mt-24 -->
        <!-- Hero Section -->
        <header class="max-w-5xl mx-auto px-8 mb-20">
            <div class="flex flex-col md:flex-row gap-12 items-start">
                <div class="flex-1">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                        <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">verified</span>
                        Akademik Makale
                    </div>
                    <h1 class="font-headline text-5xl md:text-6xl text-on-surface leading-tight mb-8">
                        Erkek İnfertilitesi: <span class="text-primary italic">Tıbbi Nedenler</span> ve Tedavi
                    </h1>
                    <div class="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border-l-4 border-primary">
                        <div class="w-12 h-12 rounded-full overflow-hidden bg-surface-dim">
                            <img class="w-full h-full object-cover" src="/images/senai-aksoy.jpg" alt="Dr. Senai Aksoy" width="512" height="512" loading="eager" fetchpriority="high"/>
                        </div>
                        <div>
                            <p class="font-headline italic text-on-surface text-sm">Tıbbi İnceleme:</p>
                            <p class="font-bold text-primary">Dr. Senai Aksoy</p>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block w-72 shrink-0 aspect-[4/5] bg-surface-container-highest rounded-2xl overflow-hidden shadow-2xl">
                    <img class="w-full h-full object-cover grayscale opacity-80" src="/images/sorunlar/cell-biology.jpg" alt="Erkek üreme sağlığı" width="512" height="512" loading="eager" fetchpriority="high"/>
                </div>
            </div>
        </header>
    </main>

    <Footer />
</BaseLayout>
```

- [ ] **Step 2: Verify build succeeds and page renders**

Run: `npx astro build`
Expected: Build completes. `/erkek-infertilitesi` route exists in output.

- [ ] **Step 3: Commit**

```bash
git add src/pages/erkek-infertilitesi.astro
git commit -m "feat: create erkek-infertilitesi page with hero section"
```

---

### Task 5: Add Quick-Nav bar

**Files:**
- Modify: `src/pages/erkek-infertilitesi.astro`

- [ ] **Step 1: Add sticky quick-nav after hero, before `</main>`**

Insert after the closing `</header>` tag and before `</main>`:

```html
        <!-- Quick-Nav Bar -->
        <nav id="quick-nav" class="sticky top-20 z-40 bg-white/90 backdrop-blur-sm border-b border-slate-100 shadow-sm mb-16">
            <div class="max-w-5xl mx-auto px-8 overflow-x-auto whitespace-nowrap">
                <div class="flex items-center gap-1 py-3">
                    <a href="#azospermi" class="quick-nav-link px-4 py-2 text-sm font-semibold text-slate-500 hover:text-primary rounded-lg transition-colors shrink-0">Azospermi & Oligospermi</a>
                    <a href="#varikosel" class="quick-nav-link px-4 py-2 text-sm font-semibold text-slate-500 hover:text-primary rounded-lg transition-colors shrink-0">Varikosel</a>
                    <a href="#genetik" class="quick-nav-link px-4 py-2 text-sm font-semibold text-slate-500 hover:text-primary rounded-lg transition-colors shrink-0">Genetik Faktörler</a>
                    <a href="#dna-fragmentasyonu" class="quick-nav-link px-4 py-2 text-sm font-semibold text-slate-500 hover:text-primary rounded-lg transition-colors shrink-0">Sperm DNA Fragmentasyonu</a>
                    <a href="#yasam-tarzi" class="quick-nav-link px-4 py-2 text-sm font-semibold text-slate-500 hover:text-primary rounded-lg transition-colors shrink-0">Yaşam Tarzı</a>
                    <a href="#mikro-tese" class="quick-nav-link px-4 py-2 text-sm font-semibold text-slate-500 hover:text-primary rounded-lg transition-colors shrink-0">Mikro-TESE</a>
                </div>
            </div>
        </nav>
```

- [ ] **Step 2: Add intersection observer script before closing `</BaseLayout>`**

Insert before `</BaseLayout>`:

```html
<script is:inline>
(function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.quick-nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('text-primary', 'border-b-2', 'border-primary');
                    link.classList.add('text-slate-500');
                });
                const activeLink = document.querySelector(`.quick-nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('text-primary', 'border-b-2', 'border-primary');
                    activeLink.classList.remove('text-slate-500');
                }
            }
        });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
})();
</script>
```

- [ ] **Step 3: Verify build succeeds**

Run: `npx astro build`
Expected: Build completes without errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/erkek-infertilitesi.astro
git commit -m "feat: add sticky quick-nav bar with intersection observer"
```

---

### Task 6: Add Scientific Introduction section

**Files:**
- Modify: `src/pages/erkek-infertilitesi.astro`

- [ ] **Step 1: Add scientific intro after quick-nav, before `</main>`**

Insert after the quick-nav `</nav>` closing tag:

```html
        <!-- Scientific Introduction -->
        <section class="max-w-3xl mx-auto px-8 mb-24">
            <p class="text-lg md:text-xl text-on-surface-variant leading-relaxed font-body italic mb-12">
                Erkek infertilitesi, sperm üretimi, taşınması veya fonksiyonundaki bozukluklardan kaynaklanır. Çiftlerdeki infertilite vakalarının yaklaşık yarısında erkek faktörü kısmen veya tamamen rol oynar; bu nedenle erkeğin değerlendirilmesi tedavi planlamasının temel adımıdır.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-t-2 border-primary-fixed">
                    <span class="material-symbols-outlined text-primary mb-3">monitoring</span>
                    <h3 class="font-bold text-sm mb-2">%40–50</h3>
                    <p class="text-xs text-on-surface-variant mb-0">İnfertilite vakalarında erkek faktörünün rolü.</p>
                </div>
                <div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-t-2 border-primary-fixed">
                    <span class="material-symbols-outlined text-primary mb-3">science</span>
                    <h3 class="font-bold text-sm mb-2">%15</h3>
                    <p class="text-xs text-on-surface-variant mb-0">İnfertil erkeklerde azospermi görülme sıklığı.</p>
                </div>
                <div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-t-2 border-primary-fixed">
                    <span class="material-symbols-outlined text-primary mb-3">clinical_notes</span>
                    <h3 class="font-bold text-sm mb-2">WHO 2021</h3>
                    <p class="text-xs text-on-surface-variant mb-0">Güncel semen analizi referans değerleri standardı.</p>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npx astro build`
Expected: Build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/erkek-infertilitesi.astro
git commit -m "feat: add scientific introduction with stat cards"
```

---

## Chunk 3: Detail Sections 1-3 (Azospermi, Varikosel, Genetik)

### Task 7: Add Section 1 — Azospermi ve Oligospermi

**Files:**
- Modify: `src/pages/erkek-infertilitesi.astro`

- [ ] **Step 1: Add azospermi section after scientific intro, before `</main>`**

Insert after the scientific intro `</section>`:

```html
        <!-- Section 1: Azospermi ve Oligospermi -->
        <section id="azospermi" class="bg-surface-container-low py-24 mb-24">
            <div class="max-w-5xl mx-auto px-8">
                <div class="flex flex-col md:flex-row gap-16 items-center">
                    <div class="md:w-1/2">
                        <h2 class="font-headline text-3xl text-on-surface mb-6">1. Azospermi ve Oligospermi</h2>
                        <div class="space-y-6 text-on-surface-variant">
                            <p>
                                Azospermi, semen örneğinde hiç sperm bulunmaması; oligospermi ise sperm konsantrasyonunun normalin altında olmasıdır. Bu iki durum erkek infertilitesinin en ciddi formlarını oluşturur ve infertil erkeklerin yaklaşık %15'inde azospermi saptanır.
                            </p>
                            <p>
                                Azospermi iki ana kategoride değerlendirilir: <strong>obstrüktif azospermi</strong> (sperm üretiliyor ancak taşıma yolları tıkalı) ve <strong>non-obstrüktif azospermi</strong> (testislerde sperm üretimi yetersiz veya yok). Oligospermi ise hafif, orta ve şiddetli olarak derecelendirilir.
                            </p>
                            <p>
                                Tedavi yaklaşımı altta yatan nedene göre değişir. Obstrüktif vakalarda cerrahi düzeltme veya sperm aspirasyonu; non-obstrüktif vakalarda hormonal tedavi veya Mikro-TESE gibi ileri teknikler uygulanabilir.
                            </p>
                            <!-- Clinical Info Box -->
                            <div class="bg-white border-l-4 border-primary rounded-xl p-6">
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="material-symbols-outlined text-primary text-lg">biotech</span>
                                    <span class="text-sm font-semibold uppercase tracking-wide text-primary">Klinik Bilgi</span>
                                </div>
                                <h4 class="font-bold text-on-surface text-sm mb-3">WHO 2021 Semen Analizi Referans Değerleri</h4>
                                <table class="w-full text-sm">
                                    <tbody>
                                        <tr class="border-b border-outline-variant/10">
                                            <td class="py-2 text-on-surface-variant">Hacim</td>
                                            <td class="py-2 font-mono font-bold text-on-surface text-right">&ge; 1.5 mL</td>
                                        </tr>
                                        <tr class="border-b border-outline-variant/10">
                                            <td class="py-2 text-on-surface-variant">Konsantrasyon</td>
                                            <td class="py-2 font-mono font-bold text-on-surface text-right">&ge; 16 milyon/mL</td>
                                        </tr>
                                        <tr class="border-b border-outline-variant/10">
                                            <td class="py-2 text-on-surface-variant">Toplam Motilite</td>
                                            <td class="py-2 font-mono font-bold text-on-surface text-right">&ge; 42%</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 text-on-surface-variant">Normal Morfoloji</td>
                                            <td class="py-2 font-mono font-bold text-on-surface text-right">&ge; 4%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="text-xs text-on-surface-variant mt-3">Kaynak: WHO Laboratory Manual for the Examination of Human Semen, 6th Edition (2021)</p>
                            </div>
                            <a href="/makaleler/azospermi-mikro-tese" class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                                <span class="material-symbols-outlined text-base">arrow_forward</span>
                                Azospermi ve Mikro-TESE hakkında detaylı makale
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <div class="relative group">
                            <img class="rounded-2xl shadow-xl w-full" src="/images/sorunlar/cell-biology.jpg" alt="Sperm hücre biyolojisi" width="512" height="512" loading="lazy"/>
                            <div class="absolute -bottom-6 -right-6 bg-surface-container-highest p-4 rounded-lg hidden md:block">
                                <p class="text-xs font-bold text-primary tracking-widest uppercase mb-1">Klinik Veri</p>
                                <p class="text-2xl font-headline">15%</p>
                                <p class="text-[10px] text-on-surface-variant">İnfertil erkeklerde azospermi oranı</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npx astro build`
Expected: Build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/erkek-infertilitesi.astro
git commit -m "feat: add azospermi & oligospermi section with WHO clinical box"
```

---

### Task 8: Add Section 2 — Varikosel

**Files:**
- Modify: `src/pages/erkek-infertilitesi.astro`

- [ ] **Step 1: Add varikosel section after azospermi section**

Insert after azospermi `</section>`:

```html
        <!-- Section 2: Varikosel -->
        <section id="varikosel" class="max-w-5xl mx-auto px-8 mb-24">
            <div class="flex flex-col md:flex-row-reverse gap-16 items-center">
                <div class="md:w-1/2">
                    <h2 class="font-headline text-3xl text-on-surface mb-6">2. Varikosel</h2>
                    <div class="space-y-6 text-on-surface-variant">
                        <p>
                            Varikosel, testis etrafındaki toplardamarların (pampiniform pleksus) anormal genişlemesidir. Erkek infertilitesinin en yaygın düzeltilebilir nedenlerinden biri olup, infertil erkeklerin yaklaşık %35-40'ında saptanır.
                        </p>
                        <p>
                            Genişlemiş damarlar testis sıcaklığını artırarak sperm üretimini ve kalitesini olumsuz etkiler. Varikosel genellikle sol testiste görülür (%90) ve fizik muayene ile tespit edilebilir. Subklinik vakalarda Doppler ultrasonografi gerekli olabilir.
                        </p>
                        <p>
                            Cerrahi tedavi (varikoselektomi) sonrası hastaların %60-70'inde semen parametrelerinde iyileşme gözlenir. Mikrocerrahi subinguinal yaklaşım, en düşük komplikasyon oranına sahip altın standart tekniktir.
                        </p>
                        <!-- Clinical Info Box -->
                        <div class="bg-surface-container-low border-l-4 border-primary rounded-xl p-6">
                            <div class="flex items-center gap-2 mb-4">
                                <span class="material-symbols-outlined text-primary text-lg">biotech</span>
                                <span class="text-sm font-semibold uppercase tracking-wide text-primary">Klinik Bilgi</span>
                            </div>
                            <h4 class="font-bold text-on-surface text-sm mb-3">Varikosel Klinik Sınıflandırması</h4>
                            <div class="space-y-3 text-sm">
                                <div class="flex items-start gap-3">
                                    <span class="font-mono font-bold text-primary shrink-0">Grade I</span>
                                    <span class="text-on-surface-variant">Yalnızca Valsalva manevrası ile palpe edilebilir (subklinik)</span>
                                </div>
                                <div class="flex items-start gap-3 border-t border-outline-variant/10 pt-3">
                                    <span class="font-mono font-bold text-primary shrink-0">Grade II</span>
                                    <span class="text-on-surface-variant">Ayakta palpe edilebilir, ancak gözle görülmez</span>
                                </div>
                                <div class="flex items-start gap-3 border-t border-outline-variant/10 pt-3">
                                    <span class="font-mono font-bold text-primary shrink-0">Grade III</span>
                                    <span class="text-on-surface-variant">Gözle görülebilir ve kolayca palpe edilebilir</span>
                                </div>
                            </div>
                            <p class="text-xs text-on-surface-variant mt-3">Kaynak: Dubin & Amelar Sınıflandırması</p>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <div class="relative group">
                        <img class="rounded-2xl shadow-xl w-full" src="/images/sorunlar/hormonal-cycles.jpg" alt="Varikosel tanı süreci" width="512" height="512" loading="lazy"/>
                        <div class="absolute -bottom-6 -left-6 bg-surface-container-highest p-4 rounded-lg hidden md:block">
                            <p class="text-xs font-bold text-primary tracking-widest uppercase mb-1">Klinik Veri</p>
                            <p class="text-2xl font-headline">35-40%</p>
                            <p class="text-[10px] text-on-surface-variant">İnfertil erkeklerde varikosel oranı</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npx astro build`
Expected: Build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/erkek-infertilitesi.astro
git commit -m "feat: add varikosel section with clinical grading box"
```

---

### Task 9: Add Section 3 — Genetik Faktörler

**Files:**
- Modify: `src/pages/erkek-infertilitesi.astro`

- [ ] **Step 1: Add genetik section after varikosel section**

Insert after varikosel `</section>`:

```html
        <!-- Section 3: Genetik Faktörler -->
        <section id="genetik" class="bg-surface-container-low py-24 mb-24">
            <div class="max-w-5xl mx-auto px-8">
                <div class="flex flex-col md:flex-row gap-16 items-center">
                    <div class="md:w-1/2">
                        <h2 class="font-headline text-3xl text-on-surface mb-6">3. Genetik Faktörler</h2>
                        <div class="space-y-6 text-on-surface-variant">
                            <p>
                                Erkek infertilitesinin %15-30'unda genetik anormallikler rol oynar. Y kromozomu mikrodelezyonları ve Klinefelter sendromu en sık karşılaşılan genetik nedenler arasındadır.
                            </p>
                            <p>
                                <strong>Y kromozomu mikrodelezyonları</strong>, Y kromozomunun uzun kolundaki AZF (Azospermi Faktörü) bölgelerinde meydana gelir. Bu bölgelerdeki delesyonlar sperm üretimini doğrudan etkiler ve azospermili erkeklerin yaklaşık %10-15'inde saptanır.
                            </p>
                            <p>
                                <strong>Klinefelter sendromu</strong> (47,XXY) ise erkeklerde en yaygın cinsiyet kromozomu anomalisidir ve yaklaşık 600 erkekten birinde görülür. Testislerin küçük olması, azospermi ve düşük testosteron düzeyi ile karakterizedir.
                            </p>
                            <!-- Clinical Info Box -->
                            <div class="bg-white border-l-4 border-primary rounded-xl p-6">
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="material-symbols-outlined text-primary text-lg">biotech</span>
                                    <span class="text-sm font-semibold uppercase tracking-wide text-primary">Klinik Bilgi</span>
                                </div>
                                <h4 class="font-bold text-on-surface text-sm mb-3">Y Mikrodelezyonu Bölgeleri ve Prognoz</h4>
                                <div class="space-y-3 text-sm">
                                    <div class="flex items-start gap-3">
                                        <span class="font-mono font-bold text-primary shrink-0">AZFa</span>
                                        <span class="text-on-surface-variant">Sertoli cell-only sendromu. Sperm elde etme olasılığı çok düşük.</span>
                                    </div>
                                    <div class="flex items-start gap-3 border-t border-outline-variant/10 pt-3">
                                        <span class="font-mono font-bold text-primary shrink-0">AZFb</span>
                                        <span class="text-on-surface-variant">Matürasyon arresti. Sperm elde etme olasılığı çok düşük.</span>
                                    </div>
                                    <div class="flex items-start gap-3 border-t border-outline-variant/10 pt-3">
                                        <span class="font-mono font-bold text-primary shrink-0">AZFc</span>
                                        <span class="text-on-surface-variant">En yaygın delesyon. Mikro-TESE ile %50-60 sperm elde etme şansı.</span>
                                    </div>
                                </div>
                                <p class="text-xs text-on-surface-variant mt-4">Klinefelter sendromu insidansı: ~1/600 erkek. Mikro-TESE ile sperm elde etme oranı: %40-50</p>
                                <p class="text-xs text-on-surface-variant mt-1">Kaynak: EAU Guidelines on Male Infertility, 2024</p>
                            </div>
                            <a href="/makaleler/genetik-testler" class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                                <span class="material-symbols-outlined text-base">arrow_forward</span>
                                Genetik testler hakkında detaylı makale
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <div class="relative group">
                            <img class="rounded-2xl shadow-xl w-full" src="/images/sorunlar/cell-biology.jpg" alt="Genetik analiz" width="512" height="512" loading="lazy"/>
                            <div class="absolute -bottom-6 -right-6 bg-surface-container-highest p-4 rounded-lg hidden md:block">
                                <p class="text-xs font-bold text-primary tracking-widest uppercase mb-1">Klinik Veri</p>
                                <p class="text-2xl font-headline">15-30%</p>
                                <p class="text-[10px] text-on-surface-variant">Genetik kökenli erkek infertilitesi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npx astro build`
Expected: Build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/erkek-infertilitesi.astro
git commit -m "feat: add genetik faktorler section with AZF clinical box"
```

---

## Chunk 4: Detail Sections 4-6 (DNA Frag, Yaşam Tarzı, Mikro-TESE) + Footer Sections

### Task 10: Add Section 4 — Sperm DNA Fragmentasyonu

**Files:**
- Modify: `src/pages/erkek-infertilitesi.astro`

- [ ] **Step 1: Add DNA fragmentasyonu section after genetik section**

Insert after genetik `</section>`:

```html
        <!-- Section 4: Sperm DNA Fragmentasyonu -->
        <section id="dna-fragmentasyonu" class="max-w-5xl mx-auto px-8 mb-24">
            <div class="flex flex-col md:flex-row-reverse gap-16 items-center">
                <div class="md:w-1/2">
                    <h2 class="font-headline text-3xl text-on-surface mb-6">4. Sperm DNA Fragmentasyonu</h2>
                    <div class="space-y-6 text-on-surface-variant">
                        <p>
                            Sperm DNA fragmentasyonu, sperm hücresindeki genetik materyalin hasarlı veya kırılmış olmasıdır. Standart semen analizi normal olsa bile DNA hasar oranı yüksek olabilir — bu durum açıklanamayan infertilite veya tekrarlayan düşüklerin nedenlerinden biri olabilir.
                        </p>
                        <p>
                            DNA hasarı oksidatif stres, enfeksiyon, varikosel, ileri yaş, sigara ve çevresel toksinlerle ilişkilidir. Yüksek DNA fragmentasyonu doğal gebelik şansını azaltır, IVF/ICSI başarı oranlarını düşürür ve düşük riskini artırır.
                        </p>
                        <p>
                            Tanı için TUNEL, SCD (Halo testi) veya Comet assay gibi testler kullanılır. Tedavide yaşam tarzı değişiklikleri, antioksidan desteği, varikosel cerrahisi ve ICSI ile sperm seçimi gibi yaklaşımlar uygulanabilir.
                        </p>
                        <!-- Clinical Info Box -->
                        <div class="bg-surface-container-low border-l-4 border-primary rounded-xl p-6">
                            <div class="flex items-center gap-2 mb-4">
                                <span class="material-symbols-outlined text-primary text-lg">biotech</span>
                                <span class="text-sm font-semibold uppercase tracking-wide text-primary">Klinik Bilgi</span>
                            </div>
                            <h4 class="font-bold text-on-surface text-sm mb-3">DNA Fragmentasyon İndeksi (DFI) Eşik Değerleri</h4>
                            <div class="space-y-3 text-sm">
                                <div class="flex items-start gap-3">
                                    <span class="font-mono font-bold text-green-700 shrink-0">&lt; 15%</span>
                                    <span class="text-on-surface-variant">İyi fertilite potansiyeli</span>
                                </div>
                                <div class="flex items-start gap-3 border-t border-outline-variant/10 pt-3">
                                    <span class="font-mono font-bold text-amber-600 shrink-0">15-30%</span>
                                    <span class="text-on-surface-variant">Orta düzey hasar — doğal gebelik şansı azalmış</span>
                                </div>
                                <div class="flex items-start gap-3 border-t border-outline-variant/10 pt-3">
                                    <span class="font-mono font-bold text-red-600 shrink-0">&gt; 30%</span>
                                    <span class="text-on-surface-variant">Yüksek hasar — ART (IVF/ICSI) önerilir</span>
                                </div>
                            </div>
                            <p class="text-xs text-on-surface-variant mt-3">Kaynak: Agarwal et al., World J Mens Health, 2020</p>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <div class="relative group">
                        <img class="rounded-2xl shadow-xl w-full" src="/images/sorunlar/hormonal-cycles.jpg" alt="DNA fragmentasyon analizi" width="512" height="512" loading="lazy"/>
                    </div>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npx astro build`
Expected: Build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/erkek-infertilitesi.astro
git commit -m "feat: add sperm DNA fragmentasyonu section with DFI thresholds"
```

---

### Task 11: Add Section 5 — Yaşam Tarzı ve Erkek Fertilitesi

**Files:**
- Modify: `src/pages/erkek-infertilitesi.astro`

- [ ] **Step 1: Add yaşam tarzı section after DNA fragmentasyonu section**

Insert after DNA fragmentasyonu `</section>`:

```html
        <!-- Section 5: Yaşam Tarzı -->
        <section id="yasam-tarzi" class="bg-surface-container-low py-24 mb-24">
            <div class="max-w-5xl mx-auto px-8">
                <div class="flex flex-col md:flex-row gap-16 items-center">
                    <div class="md:w-1/2">
                        <h2 class="font-headline text-3xl text-on-surface mb-6">5. Yaşam Tarzı ve Erkek Fertilitesi</h2>
                        <div class="space-y-6 text-on-surface-variant">
                            <p>
                                Yaşam tarzı faktörleri sperm kalitesini doğrudan etkiler. Sigara, alkol, obezite, sedanter yaşam ve çevresel toksinler semen parametrelerinde belirgin bozulmalara yol açabilir. Bu faktörlerin çoğu değiştirilebilir olduğundan, yaşam tarzı düzenlemesi tedavinin ilk adımıdır.
                            </p>
                            <p>
                                Sıcaklık maruziyeti (uzun süreli sıcak banyo, dizüstü bilgisayar kullanımı, sıkı iç çamaşırı) skrotal sıcaklığı artırarak spermatogenezi bozar. Anabolik steroid kullanımı ise hipotalamo-hipofizer aksı baskılayarak ciddi oligospermi veya azospermiye neden olabilir.
                            </p>
                            <p>
                                Antioksidandan zengin beslenme, düzenli fiziksel aktivite, ideal vücut ağırlığının korunması ve toksik maruziyetten kaçınma, sperm parametrelerinde 3-6 ay içinde ölçülebilir iyileşme sağlayabilir.
                            </p>
                            <!-- Clinical Info Box -->
                            <div class="bg-white border-l-4 border-primary rounded-xl p-6">
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="material-symbols-outlined text-primary text-lg">biotech</span>
                                    <span class="text-sm font-semibold uppercase tracking-wide text-primary">Klinik Bilgi</span>
                                </div>
                                <h4 class="font-bold text-on-surface text-sm mb-3">Yaşam Tarzı Faktörleri ve Kanıt Düzeyi</h4>
                                <table class="w-full text-sm">
                                    <thead>
                                        <tr class="border-b border-outline-variant/20">
                                            <th class="py-2 text-left text-on-surface-variant font-semibold">Faktör</th>
                                            <th class="py-2 text-left text-on-surface-variant font-semibold">Etki</th>
                                            <th class="py-2 text-right text-on-surface-variant font-semibold">Kanıt</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-outline-variant/10">
                                            <td class="py-2 text-on-surface">Sigara</td>
                                            <td class="py-2 text-on-surface-variant">Konsantrasyon, motilite, morfoloji &darr;</td>
                                            <td class="py-2 text-right font-mono font-bold text-red-600">Güçlü</td>
                                        </tr>
                                        <tr class="border-b border-outline-variant/10">
                                            <td class="py-2 text-on-surface">Alkol</td>
                                            <td class="py-2 text-on-surface-variant">Testosteron &darr;, semen hacmi &darr;</td>
                                            <td class="py-2 text-right font-mono font-bold text-amber-600">Orta</td>
                                        </tr>
                                        <tr class="border-b border-outline-variant/10">
                                            <td class="py-2 text-on-surface">Obezite (VKİ &gt;30)</td>
                                            <td class="py-2 text-on-surface-variant">Hormonal bozulma, DNA hasarı &uarr;</td>
                                            <td class="py-2 text-right font-mono font-bold text-red-600">Güçlü</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 text-on-surface">Anabolik Steroid</td>
                                            <td class="py-2 text-on-surface-variant">Azospermi (geri dönüşümlü)</td>
                                            <td class="py-2 text-right font-mono font-bold text-red-600">Güçlü</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="text-xs text-on-surface-variant mt-3">Kaynak: Ilacqua et al., Asian J Androl, 2018; Sharma et al., Reprod Biol Endocrinol, 2013</p>
                            </div>
                            <a href="/makaleler/alkol-ve-fertilite" class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                                <span class="material-symbols-outlined text-base">arrow_forward</span>
                                Alkol ve fertilite hakkında detaylı makale
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <div class="relative group">
                            <img class="rounded-2xl shadow-xl w-full" src="/images/sorunlar/cell-biology.jpg" alt="Yaşam tarzı ve fertilite" width="512" height="512" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npx astro build`
Expected: Build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/erkek-infertilitesi.astro
git commit -m "feat: add yasam tarzi section with evidence level table"
```

---

### Task 12: Add Section 6 — Mikro-TESE

**Files:**
- Modify: `src/pages/erkek-infertilitesi.astro`

- [ ] **Step 1: Add mikro-tese section after yaşam tarzı section**

Insert after yaşam tarzı `</section>`:

```html
        <!-- Section 6: Mikro-TESE -->
        <section id="mikro-tese" class="max-w-5xl mx-auto px-8 mb-24">
            <div class="flex flex-col md:flex-row-reverse gap-16 items-center">
                <div class="md:w-1/2">
                    <h2 class="font-headline text-3xl text-on-surface mb-6">6. Mikro-TESE ve Cerrahi Sperm Elde Etme</h2>
                    <div class="space-y-6 text-on-surface-variant">
                        <p>
                            Mikro-TESE (Mikroskopik Testiküler Sperm Ekstraksiyonu), non-obstrüktif azospermili erkeklerde sperm elde etmek için kullanılan ileri bir cerrahi tekniktir. Operasyon mikroskobu altında yapılır ve sperm üretimi olan tübüllerin doğrudan görülerek alınmasını sağlar.
                        </p>
                        <p>
                            Konvansiyonel TESE'ye kıyasla Mikro-TESE'nin avantajları arasında daha yüksek sperm elde etme oranı, daha az doku hasarı ve testosteron düzeylerinde daha az düşüş yer alır. Elde edilen spermler ICSI ile kullanılarak fertilizasyon sağlanır.
                        </p>
                        <p>
                            Diğer cerrahi sperm elde etme yöntemleri arasında TESA (testiküler sperm aspirasyonu), MESA (mikrocerrahi epididimal sperm aspirasyonu) ve PESA (perkütan epididimal sperm aspirasyonu) bulunur. Yöntem seçimi, azosperminin obstrüktif veya non-obstrüktif olmasına göre belirlenir.
                        </p>
                        <!-- Clinical Info Box -->
                        <div class="bg-surface-container-low border-l-4 border-primary rounded-xl p-6">
                            <div class="flex items-center gap-2 mb-4">
                                <span class="material-symbols-outlined text-primary text-lg">biotech</span>
                                <span class="text-sm font-semibold uppercase tracking-wide text-primary">Klinik Bilgi</span>
                            </div>
                            <h4 class="font-bold text-on-surface text-sm mb-3">Mikro-TESE Sperm Elde Etme Başarı Oranları</h4>
                            <table class="w-full text-sm">
                                <thead>
                                    <tr class="border-b border-outline-variant/20">
                                        <th class="py-2 text-left text-on-surface-variant font-semibold">Etiyoloji</th>
                                        <th class="py-2 text-right text-on-surface-variant font-semibold">Başarı Oranı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-outline-variant/10">
                                        <td class="py-2 text-on-surface">Klinefelter sendromu</td>
                                        <td class="py-2 font-mono font-bold text-on-surface text-right">%40-50</td>
                                    </tr>
                                    <tr class="border-b border-outline-variant/10">
                                        <td class="py-2 text-on-surface">Y mikrodelezyonu (AZFc)</td>
                                        <td class="py-2 font-mono font-bold text-on-surface text-right">%50-60</td>
                                    </tr>
                                    <tr class="border-b border-outline-variant/10">
                                        <td class="py-2 text-on-surface">İdiopatik NOA</td>
                                        <td class="py-2 font-mono font-bold text-on-surface text-right">%40-60</td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 text-on-surface">Kemoterapi sonrası</td>
                                        <td class="py-2 font-mono font-bold text-on-surface text-right">%30-50</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="text-xs text-on-surface-variant mt-3">Kaynak: Bernie et al., J Urol, 2015; Dabaja & Schlegel, Asian J Androl, 2013</p>
                        </div>
                        <a href="/makaleler/azospermi-mikro-tese" class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                            <span class="material-symbols-outlined text-base">arrow_forward</span>
                            Azospermi ve Mikro-TESE hakkında detaylı makale
                        </a>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <div class="relative group">
                        <img class="rounded-2xl shadow-xl w-full" src="/images/sorunlar/hormonal-cycles.jpg" alt="Mikro-TESE cerrahi prosedür" width="512" height="512" loading="lazy"/>
                        <div class="absolute -bottom-6 -left-6 bg-surface-container-highest p-4 rounded-lg hidden md:block">
                            <p class="text-xs font-bold text-primary tracking-widest uppercase mb-1">Klinik Veri</p>
                            <p class="text-2xl font-headline">~50%</p>
                            <p class="text-[10px] text-on-surface-variant">Ortalama sperm elde etme oranı</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npx astro build`
Expected: Build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/erkek-infertilitesi.astro
git commit -m "feat: add mikro-tese section with success rates table"
```

---

### Task 13: Add Doktor Onay Bandı and Yasal Uyarı

**Files:**
- Modify: `src/pages/erkek-infertilitesi.astro`

- [ ] **Step 1: Add doktor onay bandı and yasal uyarı before `</main>`**

Insert after the mikro-tese `</section>` and before `</main>`:

```html
        <!-- Doktor Onay Bandı -->
        <section class="max-w-3xl mx-auto px-8 mb-16">
            <div class="bg-surface-container-low p-8 rounded-2xl border-l-4 border-primary flex flex-col md:flex-row items-center gap-8">
                <div class="w-20 h-20 rounded-full overflow-hidden bg-surface-dim shrink-0">
                    <img class="w-full h-full object-cover" src="/images/senai-aksoy.jpg" alt="Doç. Dr. Senai Aksoy" width="512" height="512" loading="lazy"/>
                </div>
                <div>
                    <p class="font-headline text-lg text-on-surface mb-1">Doç. Dr. Senai Aksoy</p>
                    <p class="text-sm text-on-surface-variant">
                        Bu sayfa, üreme sağlığı alanında uzman <strong class="text-primary">Doç. Dr. Senai Aksoy</strong> tarafından tıbbi açıdan incelenmiş ve onaylanmıştır. İçerik, güncel kılavuzlar ve kanıta dayalı tıp ilkeleri doğrultusunda hazırlanmıştır.
                    </p>
                </div>
            </div>
        </section>

        <!-- Yasal Uyarı -->
        <section class="max-w-3xl mx-auto px-8">
            <div class="bg-amber-50/50 border border-amber-200/50 rounded-xl p-6 text-sm text-on-surface-variant">
                <p>
                    <strong class="text-on-surface">Yasal Uyarı:</strong> Bu içerik yalnızca bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz. Herhangi bir sağlık sorunu veya tedavi kararı için mutlaka bir sağlık profesyoneline danışınız. tupbebek.com, bu içeriğe dayanılarak alınan kararlardan sorumlu tutulamaz.
                </p>
            </div>
        </section>
```

- [ ] **Step 2: Verify full build succeeds**

Run: `npx astro build`
Expected: Build completes without errors. All pages render correctly.

- [ ] **Step 3: Commit**

```bash
git add src/pages/erkek-infertilitesi.astro
git commit -m "feat: add doktor onay bandı and yasal uyarı sections"
```

---

### Task 14: Final verification

- [ ] **Step 1: Run dev server and verify page**

Run: `npx astro dev`
Navigate to `http://localhost:4321/erkek-infertilitesi`

Verify:
- Breadcrumbs show "Ana Sayfa > Erkek İnfertilitesi"
- Hero section renders with doctor badge and image
- Quick-nav bar sticks on scroll and highlights active section
- All 6 sections render with clinical info boxes
- Article links work (azospermi-mikro-tese, genetik-testler, alkol-ve-fertilite)
- Doktor onay bandı and yasal uyarı render at bottom
- Header mega menu "Erkek Faktörleri" link goes to /erkek-infertilitesi
- Header mega menu "Genetik Faktörler" link goes to /erkek-infertilitesi#genetik
- Mobile menu "Erkek Faktörleri" link goes to /erkek-infertilitesi

- [ ] **Step 2: Run production build**

Run: `npx astro build`
Expected: Build completes. `dist/erkek-infertilitesi/index.html` exists.

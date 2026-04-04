/**
 * Centralized Navigation Structure
 * Kullanılan: Header.astro, Footer.astro, Mobile Menu
 * Avantaj: Tek kaynak, tutarlı linkler, DRY principle
 */

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  description?: string;
  submenu?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

export interface MegaMenuConfig extends NavigationItem {
  centerContent?: {
    title: string;
    description: string;
    stat?: { value: string; label: string };
  };
  featuredArticle?: {
    title: string;
    description: string;
    href: string;
  };
}

export const navigationMenus: MegaMenuConfig[] = [
  {
    id: 'infertility-guide',
    label: 'İnfertilite Nedenleri',
    href: '/sorunlar',
    icon: 'woman',
    centerContent: {
      title: 'Neden Önemli?',
      description: '"İnfertilite vakalarının 3\'ünde kadın faktörü, 3\'ünde erkek faktörü, 3\'ünde ise birlikte veya açıklanamayan nedenler rol oynar."',
      stat: { value: '~1/6', label: 'çift infertilite ile karşı karşıya' }
    },
    featuredArticle: {
      title: 'Doğru Merkez Seçimi',
      description: 'Tüp bebek merkezi seçerken dikkat etmeniz gereken kriterler.',
      href: '/makaleler/iyi-tup-bebek-merkezi'
    },
    submenu: [
      {
        label: 'Kadın Faktörleri',
        href: '/kadin-infertilitesi',
        description: 'PCOS, tubal, endometriozis'
      },
      {
        label: 'Erkek Faktörleri',
        href: '/erkek-infertilitesi',
        description: 'Azospermi, varikosel'
      },
      {
        label: 'Açıklanamayan',
        href: '/aciklanamayan-infertilite',
        description: 'Stratejik tanı yolları'
      },
      {
        label: 'Yaş ve Fertilite',
        href: '/yas-ve-fertilite',
        description: 'Zamanlama & koruma'
      }
    ]
  },

  {
    id: 'diagnosis-evaluation',
    label: 'Tanı ve Değerlendirme',
    href: '/tani-sureci',
    icon: 'psychology',
    centerContent: {
      title: 'Tanı Neden Kritik?',
      description: '"Doğru tedavi, titiz ve eksiksiz bir tanı süreciyle başlar. Hormon paneli, genetik tarama ve ultrason değerlendirmesi ilk adımdır."',
      stat: { value: '3-6 ay', label: 'tanı süreci ortalama süresi' }
    },
    featuredArticle: {
      title: 'Laboratuvar Raporu Yorumlama',
      description: 'Tahlil sonuçlarınızı nasıl okuyacağınızı öğrenin.',
      href: '/makaleler/laboratuvar-raporu-yorumlama'
    },
    submenu: [
      {
        label: 'Genel Tanı Süreci',
        href: '/tani-sureci',
        description: 'Kadın & erkek değerlendirmesi'
      },
      {
        label: 'Genetik Testler',
        href: '/genetik-testler',
        description: 'Kromozomal tarama'
      },
      {
        label: 'Hormon Paneli',
        href: '/hormon-paneli',
        description: 'AMH, FSH, E2 değerleri'
      },
      {
        label: 'Lab Raporu Yorumlama',
        href: '/makaleler/laboratuvar-raporu-yorumlama',
        description: 'Hormon & semen analizi'
      }
    ]
  },

  {
    id: 'treatment-methods',
    label: 'Tedavi Yöntemleri',
    href: '/tedavi-yontemleri',
    icon: 'lab_profile',
    centerContent: {
      title: 'Tedavi Seçenekleri',
      description: '"Infertilite tedavisi bireysel faktörlere dayanır: yaş, tanı, semen analizi ve önceki tedavi sonuçları."',
      stat: { value: '40-50%', label: 'IVF başarı oranı (yaşa göre değişken)' }
    },
    featuredArticle: {
      title: 'Tüp Bebek Nedir?',
      description: 'IVF sürecinin adım adım açıklaması.',
      href: '/makaleler/tup-bebek-nedir'
    },
    submenu: [
      {
        label: 'Tüp Bebek (IVF)',
        href: '/tedavi-yontemleri',
        description: 'Embriyo transferi süreci'
      },
      {
        label: 'Aşılama (IUI)',
        href: '/tedavi-yontemleri#iui',
        description: 'Intrauterin inseminasyon'
      },
      {
        label: 'Cerrahi Tedaviler',
        href: '/tedavi-yontemleri#cerrahi',
        description: 'Myom, endometriozis'
      },
      {
        label: 'PGT (Genetik Tarama)',
        href: '/pgt-merkezi',
        description: 'Embriyo seçimi ve sağlığı'
      }
    ]
  },

  {
    id: 'guides-resources',
    label: 'Rehberler ve Kaynaklar',
    href: '/rehberler',
    icon: 'menu_book',
    centerContent: {
      title: 'Rehberimizin Amacı',
      description: '"Bilimsel derinlik ve insan merkezli yaklaşım ile infertilite hakkında kapsamlı, güvenilir bilgi sunmak."',
      stat: { value: '60+', label: 'makalemiz var' }
    },
    featuredArticle: {
      title: 'Duygusal Destek ve Psikoloji',
      description: 'İnfertilite yolculuğunun duygusal yönetimi.',
      href: '/duygusal-destek'
    },
    submenu: [
      {
        label: 'Tüm Rehberler',
        href: '/rehberler',
        description: 'Kategorilere göre içerik'
      },
      {
        label: 'Sıkça Sorulan Sorular',
        href: '/sss',
        description: 'Hastalarımızın en çok sorduğu sorular'
      },
      {
        label: 'Tıbbi Sözlük',
        href: '/tbbi-sozluk',
        description: 'IVF ve fertilite terimleri'
      },
      {
        label: 'Duygusal Destek',
        href: '/duygusal-destek',
        description: 'Psikolojik yardım kaynakları'
      }
    ]
  },

  {
    id: 'articles-knowledge',
    label: 'Makaleler',
    href: '/makaleler',
    icon: 'article',
    centerContent: {
      title: 'Bilim Tabanlı İçerik',
      description: '"Tüm makalelerimiz en güncel araştırma ve klinik deneyime dayanır."',
      stat: { value: '60+', label: 'bilimsel makale' }
    },
    featuredArticle: {
      title: 'Başarı Oranları',
      description: 'Yaş ve tedavi yöntemi başarı oranları.',
      href: '/basari-oranlari'
    },
    submenu: [
      {
        label: 'Tüm Makaleler',
        href: '/makaleler',
        description: 'Tamamını gözat'
      },
      {
        label: 'Kadın Faktörleri',
        href: '/makaleler?category=kadin',
        description: 'PCOS, endometriozis, adenomyozis'
      },
      {
        label: 'Erkek Faktörleri',
        href: '/makaleler?category=erkek',
        description: 'Sperm, azospermi, DNA fragmentasyonu'
      },
      {
        label: 'Başarı Oranları',
        href: '/basari-oranlari',
        description: 'Yaş ve tedaviye göre başarı'
      }
    ]
  },

  {
    id: 'about-contact',
    label: 'Hakkımızda',
    href: '/hakkimizda',
    icon: 'info',
    centerContent: {
      title: 'Misyonumuz',
      description: '"1996\'den beri bağımsız, reklamsız, bilimsel bir infertilite rehberi sunuyoruz."',
      stat: { value: '1996', label: 'kuruluş yılı' }
    },
    featuredArticle: {
      title: 'Editöryal Politika',
      description: 'Makalelerimizin bilimsellik standardları.',
      href: '/editoryal-politika'
    },
    submenu: [
      {
        label: 'Hakkımızda',
        href: '/hakkimizda',
        description: 'Misyon, vizyon, değerler'
      },
      {
        label: 'Yayın Kurulu',
        href: '/hakkimizda#board',
        description: 'Danışman doktorlar'
      },
      {
        label: 'Editöryal Politika',
        href: '/editoryal-politika',
        description: 'İçerik standartları'
      },
      {
        label: 'İletişim',
        href: '/hakkimizda#contact',
        description: 'Soru ve öneriler'
      }
    ]
  }
];

/**
 * Footer Links - Kategorilere göre organize
 */
export const footerLinks = [
  {
    category: 'İnfertilite & Tedavi',
    links: [
      { label: 'Kadın İnfertilitesi', href: '/kadin-infertilitesi' },
      { label: 'Erkek İnfertilitesi', href: '/erkek-infertilitesi' },
      { label: 'Tedavi Yöntemleri', href: '/tedavi-yontemleri' },
      { label: 'Başarı Oranları', href: '/basari-oranlari' },
      { label: 'Fertilite Koruma', href: '/fertilite-koruma' }
    ]
  },
  {
    category: 'Rehberler',
    links: [
      { label: 'Tanı Süreci', href: '/tani-sureci' },
      { label: 'Tedavi Seçimi', href: '/tedavi-yontemleri' },
      { label: 'Beslenme & Yaşam', href: '/beslenme-yasam' },
      { label: 'Duygusal Destek', href: '/duygusal-destek' },
      { label: 'Tıbbi Sözlük', href: '/tbbi-sozluk' }
    ]
  },
  {
    category: 'Bilgi Merkezi',
    links: [
      { label: 'Tüm Makaleler', href: '/makaleler' },
      { label: 'Sıkça Sorulan Sorular', href: '/sss' },
      { label: 'Başarı Hikayeleri', href: '/basari-oranlari' }
    ]
  },
  {
    category: 'Kurumsal',
    links: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Editöryal Politika', href: '/editoryal-politika' },
      { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
      { label: 'Kullanım Koşulları', href: '/kullanim-kosullari' }
    ]
  }
];

/**
 * Quick Access Bottom Navigation (Mobile)
 */
export const quickAccessNav = [
  { label: 'Ana Sayfa', href: '/', icon: 'home' },
  { label: 'Rehberler', href: '/rehberler', icon: 'menu_book' },
  { label: 'Makaleler', href: '/makaleler', icon: 'article' },
  { label: 'SSS', href: '/sss', icon: 'help' },
  { label: 'Hakkımızda', href: '/hakkimizda', icon: 'info' }
];

/**
 * Quick Guide Cards (Homepage)
 */
export const quickGuideCategories = [
  {
    id: 'erkek-infertilitesi',
    title: 'Erkek İnfertilitesi',
    description: 'Sperm kalitesi, azospermi, DNA fragmentasyonu',
    icon: 'male',
    href: '/erkek-infertilitesi',
    color: 'blue'
  },
  {
    id: 'kadin-infertilitesi',
    title: 'Kadın İnfertilitesi',
    description: 'PCOS, endometriozis, tubal sorunlar',
    icon: 'female',
    href: '/kadin-infertilitesi',
    color: 'pink'
  },
  {
    id: 'tani-sureci',
    title: 'Tanı Süreci',
    description: 'Hormon paneli, genetik testler, ultrason',
    icon: 'psychology',
    href: '/tani-sureci',
    color: 'purple'
  },
  {
    id: 'tedavi-yontemleri',
    title: 'Tedavi Yöntemleri',
    description: 'IVF, IUI, cerrahi, PGT seçenekleri',
    icon: 'lab_profile',
    href: '/tedavi-yontemleri',
    color: 'green'
  },
  {
    id: 'fertilite-koruma',
    title: 'Fertilite Koruma',
    description: 'Yumurta dondurma, sperm saklama',
    icon: 'favorite',
    href: '/fertilite-koruma',
    color: 'red'
  },
  {
    id: 'psikolojik-destek',
    title: 'Duygusal Destek',
    description: 'Psikolojik yardım ve yaşam rehberi',
    icon: 'volunteer_activism',
    href: '/duygusal-destek',
    color: 'orange'
  }
];

import { getCollection } from 'astro:content';

/**
 * Yayinlanmis makaleleri dondurur.
 * status === 'published' veya status tanimlanmamis (geriye uyumluluk) makaleleri getirir.
 * Draft ve in_review makaleleri filtrelenir.
 */
export async function getPublishedArticles() {
  const articles = await getCollection('articles');
  return articles.filter(entry => {
    const status = entry.data.status;
    return !status || status === 'published';
  });
}

/**
 * Tum makaleleri (draft dahil) dondurur — sadece editoryal panel icin.
 */
export async function getAllArticles() {
  return getCollection('articles');
}

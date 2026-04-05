import type { APIRoute } from 'astro';
import * as fs from 'fs';
import * as path from 'path';
import PDFDocument from 'pdfkit';

// HTML'den basit text çıkart (çok basitleştirilmiş)
function extractTextFromHTML(html: string): string {
  // Script ve style etiketlerini kaldır
  let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // HTML etiketlerini kaldır
  text = text.replace(/<[^>]*>/g, '\n');

  // HTML entities'i çöz
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");

  // Fazla boş satırları kaldır
  text = text.replace(/\n\n\n+/g, '\n\n');

  return text.trim();
}

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // E-kitap HTML dosyasını oku
    const htmlPath = path.join(process.cwd(), 'public', 'e-kitap', 'tup-bebek-beslenme-plani.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    // HTML'den text çıkart
    const textContent = extractTextFromHTML(htmlContent);

    // Geçici dosya oluştur
    const tempDir = path.join(process.cwd(), '.tmp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    const tempPdfPath = path.join(tempDir, `ebook-${Date.now()}.pdf`);

    // PDF'i dosyaya yazılacak şekilde oluştur
    const doc = new PDFDocument({
      bufferPages: true,
      margin: 40,
      size: 'A4'
    });

    // PDF dosyasını aç ve yazma akışı oluştur
    const writeStream = fs.createWriteStream(tempPdfPath);
    doc.pipe(writeStream);

    // İçerik ekle
    doc.fontSize(20).font('Helvetica-Bold').text('30 Günlük Tüp Bebek Beslenme Planı', {
      align: 'center'
    });

    doc.fontSize(12).font('Helvetica').text('Doç. Dr. Senai Aksoy', {
      align: 'center'
    });

    doc.moveDown();
    doc.fontSize(10).font('Helvetica').text(textContent, {
      align: 'left',
      width: 500
    });

    // Dokümenti bitir
    doc.end();

    // Yazma akışının bitmesini bekle
    return new Promise((resolve, reject) => {
      writeStream.on('finish', () => {
        try {
          // Dosyayı oku
          const pdfBuffer = fs.readFileSync(tempPdfPath);

          // Geçici dosyayı sil
          fs.unlinkSync(tempPdfPath);

          // Response olarak döndür
          resolve(new Response(pdfBuffer, {
            status: 200,
            headers: {
              'Content-Type': 'application/pdf',
              'Content-Disposition': 'attachment; filename="Tup-Bebek-Beslenme-Plani-30-Gun.pdf"',
              'Content-Length': pdfBuffer.length.toString()
            }
          }));
        } catch (err) {
          reject(err);
        }
      });

      writeStream.on('error', (err) => {
        reject(err);
      });

      doc.on('error', (err) => {
        reject(err);
      });
    });

  } catch (error) {
    console.error('PDF Generation Error:', error);
    return new Response(
      JSON.stringify({ error: 'PDF oluşturulamadı: ' + (error instanceof Error ? error.message : String(error)) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

import type { APIRoute } from 'astro';

// Email verisini JSON dosyasına kaydet (geliştirme amacıyla)
// Sonrasında Resend API veya başka email servisi ile değiştirilir

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const data = await request.json();
    const { fullname, email, phone, status } = data;

    // Validasyon
    if (!fullname || !email) {
      return new Response(
        JSON.stringify({ error: 'Ad ve email gerekli' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validasyonu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Geçersiz email' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Email servisine gönder (Resend, SMTP, vb.)
    // Şimdilik log olarak kaydedilecek
    console.log('📧 E-Kitap İndir İsteği:', {
      fullname,
      email,
      phone,
      status,
      timestamp: new Date().toISOString()
    });

    // Gelecekte Resend API ile değiştirilecek:
    /*
    import { Resend } from 'resend';

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'noreply@tupbebek.com',
      to: email,
      subject: '30 Günlük Tüp Bebek Beslenme Planı - E-Kitabı İndir',
      html: `
        <h2>Merhaba ${fullname},</h2>
        <p>30 Günlük Tüp Bebek Beslenme Planı e-kitabını indirme isteğiniz alındı.</p>
        <p><a href="https://tupbebek.com/e-kitap/tup-bebek-beslenme-plani.pdf">E-Kitabı İndir</a></p>
        <p>Sağlıklı kalın,<br/>Doç. Dr. Senai Aksoy</p>
      `
    });
    */

    return new Response(
      JSON.stringify({
        success: true,
        message: 'E-kitap indirimi başlatıldı. E-posta kaydedildi.'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Sunucu hatası' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

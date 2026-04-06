import re

FILE = 'D:/1web/stitch_tupbebek/public/e-kitap/tup-bebek-beslenme-plani.backup.html'
OUT = 'D:/1web/stitch_tupbebek/public/e-kitap/tup-bebek-beslenme-plani.html'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

style_end = content.find('</style>')
css_part = content[:style_end + 8]
html_part = content[style_end + 8:]

R = {
    # === TITLE / COVER ===
    '30 Gunluk Tup Bebek Beslenme Plani': '30 Günlük Tüp Bebek Beslenme Planı',
    'Bilimsel Kaynakli Beslenme Rehberi': 'Bilimsel Kaynaklı Beslenme Rehberi',
    'Akdeniz diyetine dayali, klinik kanitlarla desteklenmis, faz bazli beslenme ve yasam tarzi protokolu': 'Akdeniz diyetine dayalı, klinik kanıtlarla desteklenmiş, faz bazlı beslenme ve yaşam tarzı protokolü',
    'GORSEL': 'GÖRSEL',
    'Kapak Gorseli': 'Kapak Görseli',
    'Doc. Dr.': 'Doç. Dr.',
    'Kadin Hastaliklari ve Dogum Uzmani': 'Kadın Hastalıkları ve Doğum Uzmanı',
    'Ureme Tibbi ve Yardimci Ureme Teknikleri': 'Üreme Tıbbı ve Yardımcı Üreme Teknikleri',
    'Tibbi Danisma Kurulu onayli': 'Tıbbi Danışma Kurulu onaylı',
    'Basimi': 'Baskısı',
    'Akdeniz tipi saglikli yiyecek tabagi': 'Akdeniz tipi sağlıklı yiyecek tabağı',
    'renkli sebzeler, somon, zeytinyagi, ceviz': 'renkli sebzeler, somon, zeytinyağı, ceviz',

    # === TABLE OF CONTENTS ===
    'Icindekiler': 'İçindekiler',
    'Rehber Icerigi': 'Rehber İçeriği',
    'Beslenmenin Ureme Sagligi Uzerindeki Temel Rolu': 'Beslenmenin Üreme Sağlığı Üzerindeki Temel Rolü',
    'Beslenmenin Ureme Sagligi Uzerindeki Rolu': 'Beslenmenin Üreme Sağlığı Üzerindeki Rolü',
    'Akdeniz Diyeti: Bilimsel Kanitlar': 'Akdeniz Diyeti: Bilimsel Kanıtlar',
    'Makro Besinlerin Biyokimyasal Optimizasyonu': 'Makro Besinlerin Biyokimyasal Optimizasyonu',
    'Kritik Mikro Besinler ve Kaynaklari': 'Kritik Mikro Besinler ve Kaynakları',
    'Detoksifikasyon ve Hazirlik (1-7. Gun)': 'Detoksifikasyon ve Hazırlık (1-7. Gün)',
    'Ovaryan Stimulasyon (8-14. Gun)': 'Ovaryan Stimülasyon (8-14. Gün)',
    'Endometrial Kalinlasma (15-21. Gun)': 'Endometrial Kalınlaşma (15-21. Gün)',
    'Implantasyon ve Bekleyis (22-30. Gun)': 'İmplantasyon ve Bekleyiş (22-30. Gün)',
    'Kacinilmasi Gereken Gidallar': 'Kaçınılması Gereken Gıdalar',
    'Erkek Faktoru: Paternal Beslenme': 'Erkek Faktörü: Paternal Beslenme',
    'Hidrasyon, Uyku ve Stres Yonetimi': 'Hidrasyon, Uyku ve Stres Yönetimi',
    'Bilimsel Kaynaklar': 'Bilimsel Kaynaklar',

    # === CHAPTER HEADERS ===
    'Bolum 01': 'Bölüm 01', 'Bolum 02': 'Bölüm 02', 'Bolum 03': 'Bölüm 03',
    'Bolum 04': 'Bölüm 04', 'Bolum 09': 'Bölüm 09', 'Bolum 10': 'Bölüm 10', 'Bolum 11': 'Bölüm 11',
    'Hucresel duzeyden baslayarak tupu bebek basarisini etkileyen beslenme mekanizmalari': 'Hücresel düzeyden başlayarak tüp bebek başarısını etkileyen beslenme mekanizmaları',
    'IVF basari oranlarini istatistiksel olarak artirdigi kanitlanmis en guclu diyet modeli': 'IVF başarı oranlarını istatistiksel olarak artırdığı kanıtlanmış en güçlü diyet modeli',
    'Protein, karbonhidrat ve yag seciminin hucresel duzeyde onemi': 'Protein, karbonhidrat ve yağ seçiminin hücresel düzeyde önemi',
    'Hucre ici enzimatik reaksiyonlarin katalizoru olan vitamin ve mineraller': 'Hücre içi enzimatik reaksiyonların katalizörü olan vitamin ve mineraller',
    'Ureme fonksiyonlarini bloke edebilecek veya embriyotoksik potansiyeli olan maddeler': 'Üreme fonksiyonlarını bloke edebilecek veya embriyotoksik potansiyeli olan maddeler',
    'Spermatogenez dongusu 70-100 gun surdugunden, en az 3 aylik beslenme hazirlligi gereklidir': 'Spermatogenez döngüsü 70-100 gün sürdüğünden, en az 3 aylık beslenme hazırlığı gereklidir',
    'Beslenme protokolunun hucresel duzeyde maksimum verimle calisabilmesi icin gereken yasam tarzi optimizasyonu': 'Beslenme protokolünün hücresel düzeyde maksimum verimle çalışabilmesi için gereken yaşam tarzı optimizasyonu',

    # === CHAPTER 1 BODY ===
    'Kuresel olcekte ureme cagindaki ciftlerin yaklasik': 'Küresel ölçekte üreme çağındaki çiftlerin yaklaşık',
    "yuzde 10-15'ini": "yüzde 10-15'ini",
    'etkileyen infertilite, hem medikal hem de psikososyal boyutlari olan karmasik bir klinik sendromdur': 'etkileyen infertilite, hem medikal hem de psikososyal boyutları olan karmaşık bir klinik sendromdur',
    'Gelismekte olan ulkelerde her dort ciftten birini etkileyebilen bu durum, on iki aylik duzenli ve korunmasiz cinsel iliskiye ragmen klinik bir gebeligin elde edilememesi olarak tanimlanmaktadir.': 'Gelişmekte olan ülkelerde her dört çiftten birini etkileyebilen bu durum, on iki aylık düzenli ve korunmasız cinsel ilişkiye rağmen klinik bir gebeliğin elde edilememesi olarak tanımlanmaktadır.',
    'ART dongu basina canli dogum orani': 'ART döngü başına canlı doğum oranı',
    'Beslenme skorundaki artisla artan gebelik sansi': 'Beslenme skorundaki artışla artan gebelik şansı',
    'Akdeniz diyetiyle artan canli dogum orani (35 yas alti)': 'Akdeniz diyetiyle artan canlı doğum oranı (35 yaş altı)',
    'Neden Beslenme Bu Kadar Onemli?': 'Neden Beslenme Bu Kadar Önemli?',
    'Beslenmenin ureme sagligi uzerindeki etkisi, hucresel duzeyde': 'Beslenmenin üreme sağlığı üzerindeki etkisi, hücresel düzeyde',
    'oksidatif stresin': 'oksidatif stresin',
    'sistemik inflamasyonun': 'sistemik inflamasyonun',
    'modulasyonu ile dogrudan baglantilidir. Yanlis beslenme, yumurta hucrelerinin mitokondriyal disfonksiyonuna, sperm DNA\'sinda yapisal hasarlara ve zayif embriyo morfolojisine yol acabilir.': 'modülasyonu ile doğrudan bağlantılıdır. Yanlış beslenme, yumurta hücrelerinin mitokondriyal disfonksiyonuna, sperm DNA\'sında yapısal hasarlara ve zayıf embriyo morfolojisine yol açabilir.',
    'Perikonsepsiyonel donem olarak adlandirilan gebelik oncesi surecte anne ve babanin beslenme durumu, yalnizca dollenme sansini degil, ayni zamanda erken fetal gelisimi ve dogacak cocugun uzun vadeli metabolik sagligini da': 'Perikonsepsiyonel dönem olarak adlandırılan gebelik öncesi süreçte anne ve babanın beslenme durumu, yalnızca döllenme şansını değil, aynı zamanda erken fetal gelişimi ve doğacak çocuğun uzun vadeli metabolik sağlığını da',
    'epigenetik mekanizmalar': 'epigenetik mekanizmalar',
    'araciligiyla etkilemektedir.': 'aracılığıyla etkilemektedir.',
    'Hucresel Beslenme Infografik': 'Hücresel Beslenme İnfografik',
    'Oksidatif stres, antioksidan savunma ve hucre sagligi arasindaki iliski diyagrami': 'Oksidatif stres, antioksidan savunma ve hücre sağlığı arasındaki ilişki diyagramı',

    # === CHAPTER 2 BODY ===
    'Akdeniz Diyeti Tabagi': 'Akdeniz Diyeti Tabağı',
    'Akdeniz diyetinin ana bilesenleri: zeytinyagi, balik, sebze, meyve, tam tahil, baklagil': 'Akdeniz diyetinin ana bileşenleri: zeytinyağı, balık, sebze, meyve, tam tahıl, baklagil',
    'Bilimsel literaturde ART basari oranlarini artirdigi istatistiksel olarak kanitlanmis en guclu diyet modeli': 'Bilimsel literatürde ART başarı oranlarını artırdığı istatistiksel olarak kanıtlanmış en güçlü diyet modeli',
    'Akdeniz Diyetidir': 'Akdeniz Diyetidir',
    'Bu diyetin yuksek duzeyde polidoyamamis yag asitleri (PUFA), tekli doyamamis yag asitleri (MUFA), antioksidanlar, polifenoller ve B kompleks vitaminleri icermesi, ureme dokularinda oksidatif hasari engelleyerek anti-inflamatuar bir kalkan olusturur.': 'Bu diyetin yüksek düzeyde polidoymamış yağ asitleri (PUFA), tekli doymamış yağ asitleri (MUFA), antioksidanlar, polifenoller ve B kompleks vitaminleri içermesi, üreme dokularında oksidatif hasarı engelleyerek anti-inflamatuar bir kalkan oluşturur.',
    'Klinik Arastirma Sonuclari': 'Klinik Araştırma Sonuçları',
    'Arastirma': 'Araştırma',
    'Temel Klinik Bulgular': 'Temel Klinik Bulgular',
    'Akdeniz diyetine yuksek uyumun klinik gebelik olasiligini onemli olcude artirdigi saptanmistir': 'Akdeniz diyetine yüksek uyumun klinik gebelik olasılığını önemli ölçüde artırdığı saptanmıştır',
    'Beslenme skorundaki her bir birimlik artis, devam eden gebelik sansini': 'Beslenme skorundaki her bir birimlik artış, devam eden gebelik şansını',
    'oraninda': 'oranında',
    'artirmistir': 'artırmıştır',
    '35 yas alti kadinlarda canli dogum oranlarini': '35 yaş altı kadınlarda canlı doğum oranlarını',
    'artirdigi bulunmustur': 'artırdığı bulunmuştur',
    'Yuksek beslenme skorlari elde edilebilir toplam embriyo sayisinda anlamli artis saglamistir': 'Yüksek beslenme skorları elde edilebilir toplam embriyo sayısında anlamlı artış sağlamıştır',
    'Dusuk Akdeniz diyet skoru, zayif over yaniti riskini ciddi sekilde artirmistir': 'Düşük Akdeniz diyet skoru, zayıf over yanıtı riskini ciddi şekilde artırmıştır',
    'Diyet Inflamatuar Indeksi (DII)': 'Diyet İnflamatuar İndeksi (DII)',
    'Dusuk DII skoruna sahip anti-inflamatuar diyetler, rahim ici ortami optimize ederek embriyonun tutunmasi icin biyokimyasal acidan toleransli bir doku yaratir. Akdeniz diyeti ayni zamanda insulin duyarliligini artirarak, gonadotropin hormonlarinin hucresel reseptorlere daha saglikli baglanmasini saglar.': 'Düşük DII skoruna sahip anti-inflamatuar diyetler, rahim içi ortamı optimize ederek embriyonun tutunması için biyokimyasal açıdan toleranslı bir doku yaratır. Akdeniz diyeti aynı zamanda insülin duyarlılığını artırarak, gonadotropin hormonlarının hücresel reseptörlere daha sağlıklı bağlanmasını sağlar.',

    # === CHAPTER 3 BODY ===
    'Protein: Hucresel Yapitaslari': 'Protein: Hücresel Yapıtaşları',
    'Proteinler, ureme hormonlarinin (FSH, LH, ostrojen, progesteron) sentezlenmesinde ve gelismekte olan oositler ile embriyolarin hucresel cogalmasinda temel yapi taslari olarak islev gorur. Klinik veriler, yuksek IVF basari oranlari icin gunluk minimum': 'Proteinler, üreme hormonlarının (FSH, LH, östrojen, progesteron) sentezlenmesinde ve gelişmekte olan oositler ile embriyoların hücresel çoğalmasında temel yapı taşları olarak işlev görür. Klinik veriler, yüksek IVF başarı oranları için günlük minimum',
    '60 gram kaliteli protein': '60 gram kaliteli protein',
    'tuketiminin elzem oldugunu vurgulamaktadir.': 'tüketiminin elzem olduğunu vurgulamaktadır.',
    'Karbonhidrat: Glikoz-Insulin Dinamikleri': 'Karbonhidrat: Glikoz-İnsülin Dinamikleri',
    'Glisemik indeksi yuksek olan rafine karbonhidratlar tup bebek basarisinin onundeki en sinsi engellerden biridir. Hiperinsulinemi, yumurtaliklardaki androjen uretimini artirarak yumurta kalitesini bozar ve implantasyon sansini ciddi sekilde zedeler.': 'Glisemik indeksi yüksek olan rafine karbonhidratlar tüp bebek başarısının önündeki en sinsi engellerden biridir. Hiperinsülinemi, yumurtalıklardaki androjen üretimini artırarak yumurta kalitesini bozar ve implantasyon şansını ciddi şekilde zedeler.',
    'Pirinc Pilavi Yerine Bulgur!': 'Pirinç Pilavı Yerine Bulgur!',
    'Pirinc pilavi yerine kesinlikle': 'Pirinç pilavı yerine kesinlikle',
    'bulgur veya karabugday (grecka) pilavi': 'bulgur veya karabuğday (greçka) pilavı',
    'tercih edilmelidir. Bulgur, yuksek lif icerigi ve zengin B vitamini profili ile kan sekerini yavas ve kademeli olarak yukseltir.': 'tercih edilmelidir. Bulgur, yüksek lif içeriği ve zengin B vitamini profili ile kan şekerini yavaş ve kademeli olarak yükseltir.',
    'Saglikli Yaglar ve Hucre Zari Akiskanligi': 'Sağlıklı Yağlar ve Hücre Zarı Akışkanlığı',
    'Omega-3 yag asitleri, hucre zari akiskanligini artirarak embriyonun rahim zarina tutunmasini saglayan molekuler yapistircilarin islevini optimize eder. Bilimsel veriler, disaridan Omega-3 takviyesi alan kadinlarin gebe kalma ihtimalinin': 'Omega-3 yağ asitleri, hücre zarı akışkanlığını artırarak embriyonun rahim zarına tutunmasını sağlayan moleküler yapıştırıcıların işlevini optimize eder. Bilimsel veriler, dışarıdan Omega-3 takviyesi alan kadınların gebe kalma ihtimalinin',
    '%50 daha yuksek': '%50 daha yüksek',
    'oldugunu raporlamaktadir.': 'olduğunu raporlamaktadır.',
    'Saglikli Yaglar': 'Sağlıklı Yağlar',
    'Zeytinyagi, avokado, ceviz, keten tohumu, somon — saglikli yag kaynaklari': 'Zeytinyağı, avokado, ceviz, keten tohumu, somon — sağlıklı yağ kaynakları',
    'Sizma Zeytinyagi': 'Sızma Zeytinyağı',

    # === CHAPTER 4 ===
    'DNA sentezi, metilasyon surecleri ve hucre bolunmesi icin mutlak bir gerekliliktir. Oosit maturasyonunu destekler ve embriyoda noral tup defektlerini onler.': 'DNA sentezi, metilasyon süreçleri ve hücre bölünmesi için mutlak bir gerekliliktir. Oosit matürasyonunu destekler ve embriyoda nöral tüp defektlerini önler.',
    'Ispanak': 'Ispanak',
    'Kuskonmaz': 'Kuşkonmaz',
    'Guclu antioksidanlar olarak folikul sivisindaki serbest radikalleri notralize eder. E vitamini yumurta hucrelerinin yaslanmasini engeller.': 'Güçlü antioksidanlar olarak folikül sıvısındaki serbest radikalleri nötralize eder. E vitamini yumurta hücrelerinin yaşlanmasını engeller.',
    'Findik': 'Fındık',
    'Aycicegi': 'Ayçiçeği',
    'Endometrial reseptivite (rahim ici zarinin embriyoyu kabul yetenegi) ve lokal bagisiklik modulasyonu uzerinde kritik role sahiptir. Eksikligi mutlaka tedavi oncesi tespit edilmelidir.': 'Endometrial reseptivite (rahim içi zarının embriyoyu kabul yeteneği) ve lokal bağışıklık modülasyonu üzerinde kritik role sahiptir. Eksikliği mutlaka tedavi öncesi tespit edilmelidir.',
    'Gunes isigi': 'Güneş ışığı',
    'Yumurta sarisi': 'Yumurta sarısı',
    'Kirmizi pancardaki betalain pigmentleri rahim damarlarindaki kan akisini artirir. Ananasin bromelain enzimi anti-inflamatuar ozelliklere sahiptir. Nar suyu serbest radikalleri temizler.': 'Kırmızı pancardaki betalain pigmentleri rahim damarlarındaki kan akışını artırır. Ananasın bromelain enzimi anti-inflamatuar özelliklere sahiptir. Nar suyu serbest radikalleri temizler.',
    'Bogurtlen': 'Böğürtlen',

    # === PHASE HEADERS ===
    'Detoksifikasyon ve Ovarian Hazirlik': 'Detoksifikasyon ve Ovarian Hazırlık',
    'Vucut pro-inflamatuar toksinlerden arindirilir, hucre zarlari omega-3 ve antioksidanlarla doyurulur': 'Vücut pro-inflamatuar toksinlerden arındırılır, hücre zarları omega-3 ve antioksidanlarla doyurulur',
    '1. - 7. Gunler': '1. - 7. Günler',
    'Ovaryan Stimulasyon ve Folikul Buyumesi': 'Ovaryan Stimülasyon ve Folikül Büyümesi',
    'Hormon enjeksiyonlariyla folikuller hizla buyur. Protein ihtiyaci artar, hidrasyon kritiktir': 'Hormon enjeksiyonlarıyla foliküller hızla büyür. Protein ihtiyacı artar, hidrasyon kritiktir',
    '8. - 14. Gunler': '8. - 14. Günler',
    'Endometrial Kalinlasma ve Vaskularizasyon': 'Endometrial Kalınlaşma ve Vaskülarizasyon',
    'Odak noktasi rahmin ic zari olan endometriumun kalitesidir. Kan akisini destekleyen besinler on plandadir': 'Odak noktası rahmin iç zarı olan endometriumun kalitesidir. Kan akışını destekleyen besinler ön plandadır',
    '15. - 21. Gunler': '15. - 21. Günler',
    'Implantasyon ve Iki Haftalik Bekleyis': 'İmplantasyon ve İki Haftalık Bekleyiş',
    'Embriyo transferi sonrasi: ilik, pisirmis, gaz yapmayan, sindirimi kolay gidallar. Cig sebze ve soguk iceceklerden kesinlikle kacinilir': 'Embriyo transferi sonrası: ılık, pişmiş, gaz yapmayan, sindirimi kolay gıdalar. Çiğ sebze ve soğuk içeceklerden kesinlikle kaçınılır',
    '22. - 30. Gunler': '22. - 30. Günler',

    # === PHASE INFO BOXES ===
    'Bu Fazin Hedefi': 'Bu Fazın Hedefi',
    'Oosit ve sperm hucrelerinin tam maturasyonu yaklasik': 'Oosit ve sperm hücrelerinin tam matürasyonu yaklaşık',
    '100 gun': '100 gün',
    'surdugunden, bu hazirlik donemi hucresel kalitenin temelini atar. Islenmis gidalar, fast food, rafine sekerler, yapay tatlandiricilar, alkol ve asiri kafein diyetten tamamen elimine edilmelidir.': 'sürdüğünden, bu hazırlık dönemi hücresel kalitenin temelini atar. İşlenmiş gıdalar, fast food, rafine şekerler, yapay tatlandırıcılar, alkol ve aşırı kafein diyetten tamamen elimine edilmelidir.',
    'Yumurtaliklarin hacimsel olarak buyumesi ve yuksek ostrojen uretimi, metabolik stresi ve dokularin sivi tutma egilimini artirir. Her ogun': 'Yumurtalıkların hacimsel olarak büyümesi ve yüksek östrojen üretimi, metabolik stresi ve dokuların sıvı tutma eğilimini artırır. Her öğün',
    'yuksek ve kaliteli protein': 'yüksek ve kaliteli protein',
    'icermelidir. Demir acisidan zengin yesil yaprakli sebzeler, C vitamini kaynaklariyla birlikte tuketilmelidir.': 'içermelidir. Demir açısından zengin yeşil yapraklı sebzeler, C vitamini kaynaklarıyla birlikte tüketilmelidir.',
    "Endometriumun embriyoyu oksijen ve besinle besleyebilmesi icin": "Endometriumun embriyoyu oksijen ve besinle besleyebilmesi için",
    'kalinlasmasi, uclu cizgi yapisini olusturmasi ve damarlanmasi': 'kalınlaşması, üçlü çizgi yapısını oluşturması ve damarlanması',
    '(anjiyogenez) sarttir. Nitrik oksit sentezini artiran': '(anjiyogenez) şarttır. Nitrik oksit sentezini artıran',
    'pancar': 'pancar',
    'anti-inflamatuar ozellikleriyle': 'anti-inflamatuar özellikleriyle',
    'nar suyu': 'nar suyu',
    've Omega-3 kaynaklari bu asamada one cikar.': 've Omega-3 kaynakları bu aşamada öne çıkar.',

    # === TCM Box ===
    'TCM Prensipleri: "Rahim Isitma"': 'TCM Prensipleri: "Rahim Isıtma"',
    'Sindirim sistemi, cig salatalari veya buzlu icecekleri sindirmek icin ekstra enerji harcamamalidir; zira bu enerji, kan akisi seklinde': 'Sindirim sistemi, çiğ salataları veya buzlu içecekleri sindirmek için ekstra enerji harcamamalıdır; zira bu enerji, kan akışı şeklinde',
    'pelvik bolgeye ve rahme': 'pelvik bölgeye ve rahme',
    'yonlendirilmelidir. Ilk 5 gun boyunca gunde': 'yönlendirilmelidir. İlk 5 gün boyunca günde',
    '1 dilim cekirdekli ananas': '1 dilim çekirdekli ananas',
    'eklenmiistir.': 'eklenmiştir.',
    'Ananas ve Bromelain': 'Ananas ve Bromelain',
    'Ananasin ortasindaki sert cekirdek kismi,': 'Ananasın ortasındaki sert çekirdek kısmı,',
    'bromelain enzimi': 'bromelain enzimi',
    'acisindan en zengin bolgedir. Transfer gununden itibaren 5 gun boyunca gunde bir dilim ananas (cekirdekiyle birlikte) tuketilmesi potansiyel olarak faydali bir destek kabul edilmektedir. Ancak porsiyon kontrolu hayati onem tasir.': 'açısından en zengin bölgedir. Transfer gününden itibaren 5 gün boyunca günde bir dilim ananas (çekirdeğiyle birlikte) tüketilmesi potansiyel olarak faydalı bir destek kabul edilmektedir. Ancak porsiyon kontrolü hayati önem taşır.',

    # === IMAGE PLACEHOLDERS ===
    'Faz 1 - Detoks Besinleri': 'Faz 1 - Detoks Besinleri',
    'Yesil yaprakli sebzeler, brokoli, narenciye, bogurtlen — detoks ve antioksidan kaynaklari': 'Yeşil yapraklı sebzeler, brokoli, narenciye, böğürtlen — detoks ve antioksidan kaynakları',
    'Faz 2 - Protein Zengin Besinler': 'Faz 2 - Protein Zengin Besinler',
    'Yumurta, balik, tavuk, baklagil, kinoa — yuksek kaliteli protein kaynaklari': 'Yumurta, balık, tavuk, baklagil, kinoa — yüksek kaliteli protein kaynakları',
    'Faz 3 - Kan Akisini Destekleyen Besinler': 'Faz 3 - Kan Akışını Destekleyen Besinler',
    'Pancar, nar, somon, ceviz, kemik suyu — endometrial vaskulorizasyonu destekleyen besinler': 'Pancar, nar, somon, ceviz, kemik suyu — endometrial vaskülarizasyonu destekleyen besinler',
    'Faz 4 - Ilik ve Isitici Yiyecekler': 'Faz 4 - Ilık ve Isıtıcı Yiyecekler',
    'Ilik corba, congee, zencefil cayi, buharda sebzeler, tatli patates puresi': 'Ilık çorba, congee, zencefil çayı, buharda sebzeler, tatlı patates püresi',
    'Kacinilacak Gidalar': 'Kaçınılacak Gıdalar',
    'Islenmis gidalar, alkol, asiri kafein, trans yaglar, cig et/balik — kacinilmasi gerekenler': 'İşlenmiş gıdalar, alkol, aşırı kafein, trans yağlar, çiğ et/balık — kaçınılması gerekenler',
    'Erkek Fertilitesi Icin Besinler': 'Erkek Fertilitesi İçin Besinler',
    'Kabak cekirdegi, domates, ceviz, somon, keciboynuzu, orman meyveleri': 'Kabak çekirdeği, domates, ceviz, somon, keçiboynuzu, orman meyveleri',
    'Yasam Tarzi ve Wellness': 'Yaşam Tarzı ve Wellness',
    'Su icme, uyku, yoga/meditasyon, doga yuruyusu — holistik saglik yakalsimi': 'Su içme, uyku, yoga/meditasyon, doğa yürüyüşü — holistik sağlık yaklaşımı',

    # === AVOID CARDS ===
    'Trans Yaglar & Kizartmalar': 'Trans Yağlar & Kızartmalar',
    'Hucre zari reseptorlerini bozar, dusuk dereceli kronik inflamasyona yol acar': 'Hücre zarı reseptörlerini bozar, düşük dereceli kronik inflamasyona yol açar',
    'Rafine Seker & Tatlilar': 'Rafine Şeker & Tatlılar',
    'Hiperinsulinemi tetikler, yumurtaliklarda androjen uretimini artirir': 'Hiperinsülinemi tetikler, yumurtalıklarda androjen üretimini artırır',
    'Hucresel dehidrasyona ve oksidatif strese yol acar, IVF basari oranlarini dramatik dusurur': 'Hücresel dehidrasyona ve oksidatif strese yol açar, IVF başarı oranlarını dramatik düşürür',
    'Asiri Kafein (>200mg/gun)': 'Aşırı Kafein (>200mg/gün)',
    'Vazokonstriktif etkisi rahim ici kan akisini azaltir. Maks. 1-2 fincan filtre kahve': 'Vazokonstriktif etkisi rahim içi kan akışını azaltır. Maks. 1-2 fincan filtre kahve',
    'Yuksek Civali Baliklar': 'Yüksek Cıvalı Balıklar',
    'Kilicbaligi, kopekbaligi, iri ton — civa fetal norolojik gelisimi bozar': 'Kılıçbalığı, köpekbalığı, iri ton — cıva fetal nörolojik gelişimi bozar',
    'Cig Et, Sushi, Midye': 'Çiğ Et, Sushi, Midye',
    'Salmonella ve listeria enfeksiyonu riski, uterus kasilmalarini tetikler': 'Salmonella ve listeria enfeksiyonu riski, uterus kasılmalarını tetikler',
    'Pastorize Edilmemis Sut': 'Pastörize Edilmemiş Süt',
    'Listeria enfeksiyonu riski, implantasyonu engelleyebilir': 'Listeria enfeksiyonu riski, implantasyonu engelleyebilir',
    'Islenmis Et (Sosis, Salam)': 'İşlenmiş Et (Sosis, Salam)',
    'Ileri glikasyon son urunleri (AGE) icerir, embriyo kalitesini dusurur': 'İleri glikasyon son ürünleri (AGE) içerir, embriyo kalitesini düşürür',
    'Plastik ve BPA Tehlikesi': 'Plastik ve BPA Tehlikesi',
    'Guclu endokrin bozucular olan mikroplastiklerden ve bisfenol-A (BPA) bileiklerinden kacinmak adiyna, icilen su plastik pet siseler yerine mutlaka': 'Güçlü endokrin bozucular olan mikroplastiklerden ve bisfenol-A (BPA) bileşiklerinden kaçınmak adına, içilen su plastik pet şişeler yerine mutlaka',
    'cam siselerde': 'cam şişelerde',
    'muhafaza edilmeli ve tuketilmelidir.': 'muhafaza edilmeli ve tüketilmelidir.',

    # === MALE SECTION ===
    'Yardimci ureme teknolojilerindeki basari, maternal oosit kalitesi kadar paternal sperm parametrelerine de baglidir.': 'Yardımcı üreme teknolojilerindeki başarı, maternal oosit kalitesi kadar paternal sperm parametrelerine de bağlıdır.',
    'Erkek ureme kapasitesinin artirilmasinda yine anti-inflamatuar ozellikli': 'Erkek üreme kapasitesinin artırılmasında yine anti-inflamatuar özellikli',
    'merkeze alinmalidir.': 'merkeze alınmalıdır.',
    'Erkek Fertilitesini Destekleyen Besinler': 'Erkek Fertilitesini Destekleyen Besinler',
    'Kabak Cekirdegi': 'Kabak Çekirdeği',
    'Cinko + selenyum': 'Çinko + selenyum',
    'Keciboynuzu (Harnup)': 'Keçiboynuzu (Harnup)',
    'Geleneksel: sperm hareketliligi': 'Geleneksel: sperm hareketliliği',
    'Erkeklerde Kesinlikle Birakilmasi Gerekenler': 'Erkeklerde Kesinlikle Bırakılması Gerekenler',
    'Tutun urunleri, nargile ve alkol kullanimi sperm DNA zincirlerinde kiriklara yol actigindan bu surecte erkek es tarafindan da': 'Tütün ürünleri, nargile ve alkol kullanımı sperm DNA zincirlerinde kırıklara yol açtığından bu süreçte erkek eş tarafından da',
    'derhal sonlandirilmalidir': 'derhal sonlandırılmalıdır',
    'Margarin, kuyruk yagi, yagli etler ve kizartmalar da diyetten cikarilmalidir.': 'Margarin, kuyruk yağı, yağlı etler ve kızartmalar da diyetten çıkarılmalıdır.',

    # === LIFESTYLE SECTION ===
    'Hidrasyon Formulu': 'Hidrasyon Formülü',
    'Besinlerin dokulara tasinmasi, metabolik atiklarin uzaklastirilmasi ve ideal dolasim dinamigi icin hidrasyon hayati bir oneme sahiptir.': 'Besinlerin dokulara taşınması, metabolik atıkların uzaklaştırılması ve ideal dolaşım dinamiği için hidrasyon hayati bir öneme sahiptir.',
    'Gunluk Su Ihtiyaci Hesaplama': 'Günlük Su İhtiyacı Hesaplama',
    'Vucud Agirligi (kg)': 'Vücut Ağırlığı (kg)',
    'Ornek:': 'Örnek:',
    'bir hasta icin:': 'bir hasta için:',
    'Plastik pet sise yerine mutlaka cam sise kullaniniz!': 'Plastik pet şişe yerine mutlaka cam şişe kullanınız!',
    'Uyku Mimarisi': 'Uyku Mimarisi',
    'Yetersiz uyku veya artan psikolojik stres, stres hormonu olan kortizolun asiri salinimina neden olur. Yuksek kortizol, ureme hormonlarini yoneten HPG aksini baskiar ve rahim ici kan akisini azaltan vazokonstriktif bir ortam yaratir.': 'Yetersiz uyku veya artan psikolojik stres, stres hormonu olan kortizolün aşırı salınımına neden olur. Yüksek kortizol, üreme hormonlarını yöneten HPG aksını baskılar ve rahim içi kan akışını azaltan vazokonstriktif bir ortam yaratır.',
    'Melatonin: En Guclu Endojen Antioksidan': 'Melatonin: En Güçlü Endojen Antioksidan',
    'Oosit ve sperm hucrelerini oksidatif hasardan koruyan melatonin, yalnizca karanlik ortamlarda ve derin uyku fazlarinda maksimum duzeyde salgilanir. Gunde': 'Oosit ve sperm hücrelerini oksidatif hasardan koruyan melatonin, yalnızca karanlık ortamlarda ve derin uyku fazlarında maksimum düzeyde salgılanır. Günde',
    'kesintisiz ve kaliteli gece uykusu mutlak bir zorunluluktur.': 'kesintisiz ve kaliteli gece uykusu mutlak bir zorunluluktur.',
    'Stres Yonetimi': 'Stres Yönetimi',
    'Doga Yuruyusleri:': 'Doğa Yürüyüşleri:',
    'Hafif-orta tempolu yuruyusler parasempatik sinir sistemini aktive ederek kortizol seviyelerini dusurur.': 'Hafif-orta tempolu yürüyüşler parasempatik sinir sistemini aktive ederek kortizol seviyelerini düşürür.',
    'Klinik yoga ve nefes egzersizleri': 'Klinik yoga ve nefes egzersizleri',
    '"dinlen ve sindir" modunu aktiflestirerek hormonal dengeyi destekler.': '"dinlen ve sindir" modunu aktifleştirerek hormonal dengeyi destekler.',
    'Psikolojik Destek:': 'Psikolojik Destek:',
    'Stresi izole yasamamak icin klinik psikolojik destek alinmasi ve sosyal iliskilerin filtreli yonetilmesi onerilir.': 'Stresi izole yaşamamak için klinik psikolojik destek alınması ve sosyal ilişkilerin filtreli yönetilmesi önerilir.',
    'Sirkadiyen Ritim:': 'Sirkadiyen Ritim:',
    'Her gun ayni saatte yatip kalkmak, yatak oncesi mavi isik maruziyetinden kacinmak endokrin sistemi duzenler.': 'Her gün aynı saatte yatıp kalkmak, yatak öncesi mavi ışık maruziyetinden kaçınmak endokrin sistemi düzenler.',

    # === REFERENCES ===
    'Kaynakca': 'Kaynakça',
    'Bilimsel Referanslar': 'Bilimsel Referanslar',
    'Tup Bebek Tedavisinde Beslenme': 'Tüp Bebek Tedavisinde Beslenme',
    'Tup bebek tedavisinde beslenme icin oneriler': 'Tüp bebek tedavisinde beslenme için öneriler',
    'Tup Bebek Tedavisinde 5 Adimda Stresinizi Azaltin': 'Tüp Bebek Tedavisinde 5 Adımda Stresinizi Azaltın',
    'Tup Bebek Tedavisinde Stres ve Psikolojik Faktorler': 'Tüp Bebek Tedavisinde Stres ve Psikolojik Faktörler',

    # === FOOTER ===
    'Hazirlayan:': 'Hazırlayan:',
    'Tibbi Sorumluluk Reddi:': 'Tıbbi Sorumluluk Reddi:',
    'Bu e-kitap yalnizca genel bilgilendirme amaclidir ve tibbi tavsiye niteliginde degildir.': 'Bu e-kitap yalnızca genel bilgilendirme amaçlıdır ve tıbbi tavsiye niteliğinde değildir.',
    'Herhangi bir diyet degisikligi yapmadan once mutlaka doktorunuza danisiniz.': 'Herhangi bir diyet değişikliği yapmadan önce mutlaka doktorunuza danışınız.',
    'Bireysel saglik durumunuza gore farkli beslenme gereksinimleri olabilir.': 'Bireysel sağlık durumunuza göre farklı beslenme gereksinimleri olabilir.',
    'Bu rehber, tibbi tedavinin yerini almaz.': 'Bu rehber, tıbbi tedavinin yerini almaz.',

    # === MEAL TABLE HEADERS ===
    'Kahvalti': 'Kahvaltı',
    'Kusluk': 'Kuşluk',
    'Ogle': 'Öğle',
    'Ikindi': 'İkindi',
    'Aksam': 'Akşam',
    'Gun': 'Gün',
}

for old, new in R.items():
    html_part = html_part.replace(old, new)

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(css_part + html_part)

print('Turkish character fix complete!')
print(f'Total replacements defined: {len(R)}')

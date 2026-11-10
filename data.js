const SITE_DATA = {
  "profile": {
    "name": "Esma Koyun",
    "university": "Isparta Uygulamalı Bilimler Üniversitesi",
    "department": "Bilişim Güvenliği Teknolojisi",
    "year": "1. Sınıf",
    "bio": "Siber güvenlik yolculuğunda bir öğrenci. Sıfırdan başlıyor, adım adım ilerliyorum.",
    "links": [
      { "label": "GitHub", "url": "https://github.com/esmakyn11-sudo" }
    ]
  },
  "items": [
        {
      "id": "don1", "type": "Not", "course": "Bilgisayar Donanımı",
      "title": "Bilgisayarın ana bileşenleri",
      "text": "Bir bilgisayar donanım (fiziksel parçalar) ve yazılımdan oluşur. Başlıca donanım bileşenleri:\n\n- CPU (işlemci): komutları işler, bilgisayarın beyni\n- RAM: çalışan programların geçici ve hızlı belleği\n- Depolama (HDD/SSD): verileri kalıcı saklar\n- Anakart: tüm bileşenleri birbirine bağlar\n- Ekran kartı (GPU): görüntü ve grafik işlemleri\n- Güç kaynağı (PSU): parçalara elektrik dağıtır\n- Soğutma: ısıyı dışarı atar",
      "media": "", "link": "", "tags": ["temel", "vize"]
    },
    {
      "id": "don2", "type": "Not", "course": "Bilgisayar Donanımı",
      "title": "RAM ve depolama farkı",
      "text": "RAM uçucudur: elektrik kesilince içindeki veri silinir. Depolama kalıcıdır.\n\nSSD: flash bellek, hareketli parça yok, hızlı ve sessiz.\nHDD: dönen manyetik plakalar, daha ucuz ve büyük kapasiteli ama yavaş.\n\nBellek hiyerarşisi (hızlıdan yavaşa): yazmaç > önbellek (cache) > RAM > SSD/HDD. Hız arttıkça kapasite azalır ve fiyat artar.",
      "media": "", "link": "", "tags": ["bellek", "depolama"]
    },
    {
      "id": "don3", "type": "Not", "course": "Bilgisayar Donanımı",
      "title": "BIOS/UEFI ve açılış süreci",
      "text": "Bilgisayar açıldığında sırayla şunlar olur:\n\n1. Güç kaynağı elektrik verir\n2. BIOS/UEFI çalışır ve POST ile donanımı test eder\n3. Önyükleme (boot) aygıtı bulunur (SSD/HDD, USB)\n4. İşletim sistemi RAM'e yüklenir\n\nBIOS/UEFI ayarlarından önyükleme sırası, tarih ve saat gibi temel ayarlar değiştirilebilir.",
      "media": "", "link": "", "tags": ["açılış", "vize"]
    },
    {
      "id": "prog1", "type": "Not", "course": "Programlama Temelleri",
      "title": "Değişkenler ve veri tipleri (Python)",
      "text": "Değişken, veriyi saklamak için verilen isimdir. Temel veri tipleri: int (tam sayı), float (ondalıklı), str (metin), bool (True/False).\n\n```\nad = 'Ayşe'\nsayi = 20\nboy = 1.65\nogrenci_mi = True\nprint(type(sayi))  # <class 'int'>\n```",
      "media": "", "link": "", "tags": ["Python", "temel"]
    },
    {
      "id": "prog2", "type": "Not", "course": "Programlama Temelleri",
      "title": "Koşullar ve döngüler",
      "text": "if/elif/else ile karar verilir, for ve while ile tekrar yapılır. while, koşul doğru olduğu sürece döner, sonsuz döngüye dikkat.\n\n```\npuan = 72\nif puan >= 50:\n    print('Geçti')\nelse:\n    print('Kaldı')\n\nfor i in range(1, 6):\n    print(i)\n```",
      "media": "", "link": "", "tags": ["Python", "vize"]
    },
    {
      "id": "prog3", "type": "Not", "course": "Programlama Temelleri",
      "title": "Fonksiyonlar ve listeler",
      "text": "Fonksiyon, tekrar kullanılabilen kod bloğudur. Liste, birden çok değeri tek değişkende tutar. İndeks 0'dan başlar: liste[0] ilk elemandır.\n\n```\ndef ortalama(liste):\n    return sum(liste) / len(liste)\n\nnotlar = [70, 85, 90]\nnotlar.append(100)\nprint(ortalama(notlar))  # 86.25\n```",
      "media": "", "link": "", "tags": ["Python", "fonksiyon"]
    },
    {
      "id": "ag1", "type": "Not", "course": "Ağ Temelleri",
      "title": "TCP/IP modeli (4 katman)",
      "text": "OSI'nin 7 katmanı pratikte TCP/IP modelinde 4 katmana indirilir:\n\n1. Uygulama: HTTP, DNS, SMTP (OSI 5-6-7)\n2. Taşıma: TCP, UDP (OSI 4)\n3. İnternet: IP, yönlendirme (OSI 3)\n4. Ağ erişimi: Ethernet, Wi-Fi (OSI 1-2)\n\nİnternet bu modele göre çalışır.",
      "media": "", "link": "", "tags": ["model", "vize"]
    },
    {
      "id": "ag2", "type": "Not", "course": "Ağ Temelleri",
      "title": "IP adresi, maske ve ağ geçidi",
      "text": "IPv4 adresi 32 bittir ve 4 oktetten oluşur (örn. 192.168.1.10).\n\n- Alt ağ maskesi: adresin ağ ve host kısmını ayırır (/24 = 255.255.255.0)\n- Ağ geçidi (gateway): ağdan dışarı çıkış kapısı, genelde router\n- DHCP: cihazlara otomatik IP dağıtır\n- DNS: alan adını IP adresine çevirir\n\nÖzel (private) IP aralıkları:\n10.0.0.0/8\n172.16.0.0/12\n192.168.0.0/16",
      "media": "", "link": "", "tags": ["adresleme", "vize"]
    },
    {
      "id": "ag3", "type": "Not", "course": "Ağ Temelleri",
      "title": "TCP ve UDP farkı",
      "text": "TCP: bağlantı odaklı, güvenilir, sıralı teslim. Bağlantı üçlü el sıkışma ile kurulur (SYN, SYN-ACK, ACK). Web, e-posta, dosya aktarımında kullanılır.\n\nUDP: bağlantısız, hızlı, teslim garantisi yok. Canlı yayın, oyun ve DNS sorgularında kullanılır.\n\nYaygın portlar: HTTP 80, HTTPS 443, DNS 53, SSH 22, FTP 21, SMTP 25.",
      "media": "", "link": "", "tags": ["protokol", "port"]
    },
    {
      "id": "n1", "type": "Not", "course": "Ağ Temelleri",
      "title": "Ağ Topolojileri ve Katmanlar",
      


    
      "id": "n2", "type": "Not", "course": "VTYS",
      "title": "JOIN ile tabloları birleştirme",
      "text": "INNER JOIN sadece eşleşen satırları getirir.\n\n```\nSELECT o.ad, d.ders_adi\nFROM ogrenci o\nINNER JOIN kayit k ON k.ogrenci_id = o.id\nINNER JOIN ders d ON d.id = k.ders_id;\n```",
      "media": "", "link": "", "tags": ["SQL"]
    },
    {
      "id": "p1", "type": "Proje", "course": "Web Tasarımı",
      "title": "Kişisel portföy sitesi",
      "text": "HTML, CSS ve JavaScript ile yaptığım bu site. Notlarımı, projelerimi, görsellerimi ve videolarımı tek yerde topluyor.",
      "media": "", "link": "https://github.com/esmakyn11-sudo", "tags": ["HTML", "CSS", "JavaScript"]
    }
  ]
};

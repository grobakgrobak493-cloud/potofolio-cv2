/**
 * ============================================================================
 * PORTAL WISATA DAERAH PALEMBANG - SCRIPT INTERAKTIF
 * Tugas Praktik Dasar Pemrograman Web (Semester 1)
 * Fitur: Filter Destinasi, Modal Detail Dinamis, FAQ Accordion,
 *        Sticky Nav, Mobile Drawer, Smooth Scroll, Form Validation, Back to Top
 * ============================================================================
 */

// Data detail komprehensif untuk Modal Pop-up Informasi
const palembangModalData = {
  'ampera': {
    title: 'Jembatan Ampera (Amanat Penderitaan Rakyat)',
    subtitle: 'Ikon Megah Kota Palembang & Lambang Kejayaan Sungai Musi',
    category: 'Ikonik Musi & Arsitektur Bersejarah',
    location: 'Menghubungkan Seberang Ulu dan Seberang Ilir, Kota Palembang',
    rating: '⭐ 4.9 / 5.0 (15.200+ ulasan)',
    image: 'images/Jembatan_Ampera.jpg',
    badge: 'Ikon Utama Kota',
    description: `Jembatan Ampera adalah mahakarya infrastruktur bersejarah yang membentang gagah di atas Sungai Musi sepanjang 1.177 meter dengan lebar 22 meter. Dibangun mulai tahun 1962 atas instruksi langsung Presiden pertama Republik Indonesia, Ir. Soekarno, dan diresmikan pemakaiannya pada tahun 1965. 
    
    Awalnya, jembatan ini dinamakan "Jembatan Bung Karno" sebagai bentuk penghormatan rakyat Sumatera Selatan kepada Presiden Soekarno yang memperjuangkan pembangunannya menggunakan dana pampasan perang Jepang. Namun seiring dinamika politik tahun 1966, namanya diubah menjadi Jembatan Ampera yang merupakan singkatan dari "Amanat Penderitaan Rakyat".
    
    Keunikan utama jembatan ini pada masa awal adalah bagian tengahnya yang dapat diangkat ke atas setinggi 32 meter agar kapal-kapal besar pengangkut komoditas perkebunan dan tambang dapat berlayar melintasi Sungai Musi. Saat ini, mekanisme angkat telah dinonaktifkan demi stabilitas struktur, namun jembatan kini dipasangi tata lampu artistik ribuan LED warna-warni yang memukau setiap malam hari.`,
    highlights: [
      'Titik terbaik menikmati panorama senja (sunset) Sungai Musi dan lalu lintas perahu ketek.',
      'Dilengkapi pedestrian pejalan kaki yang nyaman dan terhubung langsung ke pelataran Benteng Kuto Besak.',
      'Sangat dekat dengan stasiun LRT Ampera (hanya berjarak 100 meter).',
      'Jam Buka: Akses umum 24 jam gratis (waktu terbaik berkunjung: pukul 16.30 - 21.00 WIB).'
    ],
    tips: 'Abadikan foto terbaik dari dermaga ponton Benteng Kuto Besak atau dari restoran terapung di atas Sungai Musi saat lampu jembatan menyala indah di malam hari.'
  },

  'kuto-besak': {
    title: 'Benteng Kuto Besak (BKB)',
    subtitle: 'Saksi Bisu Keperkasaan Kesultanan Palembang Darussalam',
    category: 'Cagar Sejarah & Pertahanan Militer',
    location: 'Jl. Sultan Mahmud Badaruddin II, 19 Ilir, Bukit Kecil, Palembang',
    rating: '⭐ 4.8 / 5.0 (8.900+ ulasan)',
    image: 'images/Benteng_Kuto_Besak_Palembang.jpg',
    badge: 'Cagar Budaya Nasional',
    description: `Benteng Kuto Besak adalah benteng pertahanan keraton megah yang didirikan oleh Sultan Mahmud Badaruddin I (1724–1758) dan diselesaikan oleh putranya, Sultan Muhammad Bahauddin (1776–1803). Berbeda dengan kebanyakan benteng di Nusantara yang dibangun oleh bangsa penjajah Eropa, Benteng Kuto Besak adalah satu-satunya benteng batu bata keraton di Indonesia yang dirancang dan dibangun secara mandiri oleh kesultanan pribumi.
    
    Benteng ini memiliki dinding batu kapur dan putih telur setebal lebih dari 2 meter dan tinggi hampir 10 meter, membentang seluas 288 x 183 meter menghadap langsung ke arah pertemuan Sungai Musi dan Sungai Musi Kecil. Benteng ini menjadi saksi kepahlawanan Sultan Mahmud Badaruddin II saat memukul mundur invasi armada tempur laut Belanda dan Inggris pada Perang Palembang 1819 dan 1821.
    
    Kini pelataran luar Benteng Kuto Besak (Plaza BKB) telah bertransformasi menjadi ruang publik terpopuler di Palembang, menjadi panggung pagelaran seni, festival perahu bidar, serta pusat wisata kuliner malam terapung.`,
    highlights: [
      'Pemandangan luas 180 derajat ke Sungai Musi dan siluet Jembatan Ampera.',
      'Terdapat tugu Ikan Belida raksasa ikon kebanggaan kuliner Palembang.',
      'Dermaga utama penyewaan perahu ketek dan speedboat wisata ke Pulau Kemaro.',
      'Jam Buka: Area plaza terbuka 24 jam (HTM Gratis / Parkir Rp 3.000).'
    ],
    tips: 'Datanglah menjelang sore untuk mencicipi aneka jajanan khas pempek panggang, tekwan, dan es kacang merah sembari menikmati semilir angin Sungai Musi.'
  },

  'pulau-kemaro': {
    title: 'Pulau Kemaro & Pagoda 9 Lantai',
    subtitle: 'Legenda Cinta Abadi Tan Bun An & Siti Fatimah di Delta Musi',
    category: 'Wisata Religi, Budaya & Bahari',
    location: 'Delta Sungai Musi, 1 Ilir, Ilir Timur II, Palembang (± 6 km ke hilir dari Ampera)',
    rating: '⭐ 4.7 / 5.0 (6.400+ ulasan)',
    image: 'images/Pulau_Kemaro.jpg',
    badge: 'Harmoni Tionghoa-Melayu',
    description: `Pulau Kemaro adalah sebuah pulau delta alami seluas sekitar 30 hektar di tengah aliran Sungai Musi. Nama "Kemaro" berasal dari bahasa Palembang yang berarti "kemarau" (tidak pernah basah/kebanjiran), karena pulau ini secara unik tidak pernah tenggelam meskipun debit air Sungai Musi sedang pasang meluap tinggi.
    
    Daya tarik paling mencolok di pulau ini adalah Pagoda Tionghoa megah setinggi 9 lantai yang menjulang indah, Kelenteng Hok Tjing Rio yang dibangun sejak 1962, serta Pohon Cinta (Love Tree). Di balik keindahannya, pulau ini menyimpan legenda cinta sejati yang mengharukan antara Pangeran Tan Bun An asal negeri Tiongkok dengan Putri Siti Fatimah putri Kerajaan Palembang. Ketika guci-guci mas kawin tenggelam di Sungai Musi, sang pangeran dan sang putri melompat ke dalam sungai demi membuktikan kesetiaan cinta mereka.
    
    Setiap perayaan Cap Go Meh (hari ke-15 Tahun Baru Imlek), Pulau Kemaro dipadati oleh puluhan ribu wisatawan domestik dan mancanegara (dari Singapura, Malaysia, Tiongkok, dan Taiwan) dalam festival akbar bertabur lampion merah.`,
    highlights: [
      'Pagoda 9 lantai dengan ukiran arsitektur oriental klasik yang megah.',
      'Makam keramat Tan Bun An dan Siti Fatimah sebagai simbol persatuan budaya.',
      'Akses menggunakan perahu ketek tradisional (± 25 menit) menyusuri Sungai Musi.',
      'Jam Buka: Setiap hari 07.00 - 18.00 WIB (Tiket Masuk Pulau: Gratis).'
    ],
    tips: 'Sewa perahu ketek dari pelataran Benteng Kuto Besak (tarif sewa pulang-pergi sekitar Rp 150.000 - Rp 250.000 per perahu untuk rombongan 5-8 orang).'
  },

  'masjid-agung': {
    title: 'Masjid Agung Sultan Mahmud Badaruddin I Jayo Wikramo',
    subtitle: 'Mahakarya Akulturasi Tiga Peradaban: Melayu, Nusantara, & Tionghoa',
    category: 'Wisata Religi & Arsitektur Bersejarah',
    location: 'Jl. Jenderal Sudirman, 19 Ilir, Bukit Kecil, Palembang (Kawasan Bundaran Air Mancur)',
    rating: '⭐ 4.9 / 5.0 (9.100+ ulasan)',
    image: 'images/Masjid__Agung_Palembang.jpg',
    badge: 'Masjid Bersejarah Tertua',
    description: `Masjid Agung Palembang adalah masjid tertua dan terbesar di Sumatera Selatan, didirikan oleh Sultan Mahmud Badaruddin I Jayo Wikramo pada tanggal 28 Jumadil Awwal 1151 Hijriah (tahun 1738 Masehi) dan diresmikan pemakaiannya pada 26 Mei 1748.
    
    Arsitektur masjid ini sangat istimewa karena memperlihatkan perpaduan harmonis antara tiga kebudayaan besar dunia:
    1. Arsitektur Nusantara / Jawa pada atap tumpang bertingkat tiga yang bermakna Iman, Islam, dan Ihsan.
    2. Arsitektur Tionghoa pada lekukan ujung atap limas yang melengkung ke atas menyerupai bubungan klenteng khas negeri Tiongkok, yang dirancang oleh arsitek Tionghoa muslim kepercayaan sultan.
    3. Arsitektur Eropa-Melayu pada tiang-tiang pilar marmer berornamen kokoh, pintu gerbang melengkung, serta menara utama setinggi puluhan meter.
    
    Saat shalat Idul Fitri dan Idul Adha, pelataran masjid hingga ke atas bentang Jembatan Ampera dipadati puluhan ribu jamaah yang shalat bersama membentuk pemandangan spiritual yang sangat spektakuler.`,
    highlights: [
      'Pusat kegiatan keagamaan akbar Sumatera Selatan sejak era kesultanan abad ke-18.',
      'Koleksi manuskrip kuno kitab suci Al-Qur\'an tulisan tangan para ulama Palembang.',
      'Taman air mancur dan pelataran pedestrian hijau yang asri di jantung kota.',
      'Jam Buka: Terbuka untuk ibadah dan wisata religi setiap hari 24 jam.'
    ],
    tips: 'Bagi wisatawan non-muslim atau peziarah, kenakan pakaian sopan dan tertutup. Waktu paling syahdu berkunjung adalah menjelang kumandang azan Maghrib.'
  },

  'tpks': {
    title: 'Taman Purbakala Kerajaan Sriwijaya (TPKS Karanganyar)',
    subtitle: 'Pusat Riset & Rekonstruksi Ibu Kota Kerajaan Maritim Terbesar',
    category: 'Taman Arkeologi & Cagar Sejarah',
    location: 'Jl. Syakyakirti, Karanganyar, Gandus, Kota Palembang',
    rating: '⭐ 4.6 / 5.0 (2.800+ ulasan)',
    image: 'images/Prasasti__Kedukan_Bukit.jpg',
    badge: 'Situs Warisan Arkeologi',
    description: `Taman Purbakala Kerajaan Sriwijaya (TPKS) yang sebelumnya dikenal dengan nama Situs Karanganyar adalah kawasan cagar budaya seluas 20 hektar yang diidentifikasi oleh para arkeolog nasional dan internasional sebagai pusat pemukiman dan aktivitas maritim kemaharajaan Sriwijaya pada abad ke-7 hingga ke-13 Masehi.
    
    Di kawasan ini ditemukan jaringan kanal buatan kuno, parit pelindung, serta kolam-kolam berstruktur bata merah yang mencerminkan kecanggihan teknik hidrolika bangsa bahari Sriwijaya ribuan tahun silam. Di dalam kompleks taman ini berdiri Museum Sriwijaya yang menyimpan ratusan artefak berharga hasil ekskavasi, termasuk replika Prasasti Kedukan Bukit, arca Buddha Avalokiteshvara berbalut perunggu, keramik Dinasti Tang dan Song, manik-manik kaca, serta sisa perahu kayu kuno.`,
    highlights: [
      'Museum Arkeologi Sriwijaya dengan koleksi artefak maritim terlengkap.',
      'Jaringan kanal buatan abad ke-7 yang masih terawat asri.',
      'Taman terbuka hijau dengan pulau-pulau buatan (Pulau Cempaka dan Nangka).',
      'Jam Buka: Selasa - Minggu 08.00 - 16.00 WIB (HTM: Rp 5.000 / orang).'
    ],
    tips: 'Sangat cocok untuk wisata edukasi keluarga, pelajar, dan pecinta sejarah peradaban Asia Tenggara kuno.'
  },

  'al-munawar': {
    title: 'Kampung Wisata Arab Al-Munawar 13 Ulu',
    subtitle: 'Pesona Harmoni Perkampungan Keturunan Hadramaut di Tepi Musi',
    category: 'Wisata Religi, Budaya & Arsitektur',
    location: 'Lorong Al Munawar No. 13, 13 Ulu, Seberang Ulu II, Palembang',
    rating: '⭐ 4.7 / 5.0 (3.400+ ulasan)',
    image: 'images/Masjid__Agung_Palembang.jpg',
    badge: 'Heritage Village',
    description: `Kampung Arab Al-Munawar adalah perkampungan cagar budaya di pesisir Seberang Ulu Sungai Musi yang dihuni oleh komunitas keturunan Arab Hadramaut (Yaman) sejak abad ke-18. Perkampungan ini didirikan oleh Habib Abdurrahman bin Muhammad Al-Munawar dan hingga kini masih mempertahankan tata ruang, adat istiadat, serta rumah-rumah panggung kayu kuno berusia lebih dari 250 hingga 300 tahun.
    
    Arsitektur rumah-rumah di Al-Munawar merupakan perpaduan langka antara rumah panggung Melayu Palembang dengan sentuhan gaya Neoklasik Eropa dan ornamen geometris Timur Tengah. Di dermaga kampung ini terdapat dermaga kayu tepi Sungai Musi yang syahdu dengan pemandangan perahu lalu-lalang, sembari menikmati sajian kopi rempah jahe kapulaga dan nasi minyak khas Timur Tengah.`,
    highlights: [
      'Deretan 8 rumah pusaka berumur lebih dari 2 abad yang masih kokoh dihuni.',
      'Tradisi keramahan santun khas budaya santri dan para habaib.',
      'Spot foto tepi Sungai Musi dengan nuansa klasik tempo doeloe.',
      'Jam Buka: Setiap hari 08.00 - 17.30 WIB (HTM: Rp 5.000 / orang).'
    ],
    tips: 'Pengunjung diwajibkan berpakaian sopan (menutup aurat). Jangan lewatkan mencicipi sambal nanas dan roti gambus khas Al-Munawar.'
  },

  'songket': {
    title: 'Kain Tenun Songket Palembang (Lepus Benang Emas)',
    subtitle: 'Ratu Segala Kain Nusantara — Simbol Kemewahan Para Raja Sriwijaya',
    category: 'Seni Kriya & Wastra Adiluhung',
    location: 'Sentra Tenun Tradisional Tangga Buntung & Ogan Baru, Palembang',
    rating: '⭐ 4.9 / 5.0 (5.100+ ulasan)',
    image: 'images/Songket Palembang.webp',
    badge: 'Queen of Fabrics',
    description: `Songket Palembang secara internasional dijuluki sebagai "Queen of Fabrics" (Ratu Segala Kain) karena keagungan teknik pembuatannya dan kemewahan bahan yang digunakan. Kain tenun tradisional ini dibuat menggunakan alat tenun bukan mesin yang disebut "Gedogan", di mana helai demi helai benang sutra disungkit dan diselipkan benang emas murni atau perak.
    
    Dahulu pada era kemaharajaan Sriwijaya dan Kesultanan Palembang, benang emas yang digunakan benar-benar ditenun dari emas asli 14 hingga 18 karat yang didatangkan oleh saudagar Tiongkok dan Siam. Motif yang paling prestisius adalah "Songket Lepus" (seluruh permukaan kain tertutup rapat oleh kilauan benang emas), Songket Limar, Songket Bintang Berantai, dan Songket Nampan Perak.
    
    Pembuatan satu lembar kain songket halus dengan motif rumit memerlukan waktu antara 1 hingga 3 bulan pengerjaan manual dengan ketelitian matematis tingkat tinggi.`,
    highlights: [
      'Ditetapkan resmi sebagai Warisan Budaya Takbenda (WBTb) Indonesia oleh Kemendikbud.',
      'Simbol prestise, kehormatan, dan busana wajib upacara pernikahan adat Palembang.',
      'Sentra pengrajin utama dapat dikunjungi langsung di Jalan Ki Gede Ing Suro (Tangga Buntung).',
      'Harga: Mulai dari Rp 800.000 (semi-mesin) hingga puluhan juta rupiah untuk tenun tangan benang emas tua.'
    ],
    tips: 'Saat membeli songket tenun asli, perhatikan kerapatan tenunan benang belakang dan kelembutan jatuh kainnya. Simpan songket dengan cara digulung menggunakan tabung bambu/karton, bukan dilipat.'
  },

  'bidar': {
    title: 'Tradisi Lomba Perahu Bidar Tradisional',
    subtitle: 'Gegap Gempita Atraksi Olahraga Bahari Kolosal di Sungai Musi',
    category: 'Tradisi Budaya Bahari & Pesta Rakyat',
    location: 'Lintasan Sungai Musi (Start: Bekas Dermaga 35 Ilir — Finish: Depan BKB Ampera)',
    rating: '⭐ 4.9 / 5.0 (7.800+ ulasan)',
    image: 'images/Lomba_Perahu_Bidar.jpg',
    badge: 'Pesta Bahari Akbar',
    description: `Lomba Perahu Bidar adalah atraksi olahraga dan perayaan budaya bahari paling spektakuler di Sumatera Selatan. Tradisi ini telah berakar sejak era kemaharajaan maritim Sriwijaya dan masa Kesultanan Palembang sebagai uji ketangkasan dan kesiapsiagaan patroli militer air dalam menjaga kedaulatan perairan Sungai Musi.
    
    Perahu bidar dibuat khusus dari satu batang kayu pohon utuh pilihan (kayu bungur atau rengas) sepanjang 29 meter dengan lebar sekitar 1,5 meter. Setiap perahu diawaki oleh 55 hingga 58 orang pendayung tangguh, 1 orang juru kemudi di buritan, 1 orang juru kuras air, serta 1 orang pemukul gong/tambur di haluan yang bertugas memberi ketukan ritme kayuhan dayung agar selaras membelah arus sungai.
    
    Perlombaan ini rutin diselenggarakan setiap tahun dalam rangka menyemarakkan Hari Jadi Kota Palembang (16 Juni) dan Hari Ulang Tahun Kemerdekaan RI (17 Agustus), ditonton oleh ratusan ribu warga yang memadati tepian Musi dan atas Jembatan Ampera.`,
    highlights: [
      'Perahu kayu tradisional sepanjang 29 meter berhias ukiran ornamen kepala naga/buaya.',
      'Diikuti oleh tim-tim dayung terbaik dari berbagai kabupaten/kota se-Sumatera Selatan.',
      'Disertai parade parade perahu hias berlampu warna-warni yang mempesona.',
      'Waktu Pelaksanaan: Bulan Juni (HUT Palembang) & Bulan Agustus (HUT RI).'
    ],
    tips: 'Datanglah sejak pagi hari (sekitar pukul 08.00 WIB) untuk mendapatkan posisi menonton terbaik di pelataran Benteng Kuto Besak atau sewa perahu motor ketek untuk menonton dari jarak aman di air.'
  },

  'pempek': {
    title: 'Pempek Palembang & Rahasia Kelezatan Cuko Batok',
    subtitle: 'Kuliner Legendaris Berpadu Saus Hitam Asam Gurih Pedas Mantap',
    category: 'Kuliner Khas & Warisan Budaya Takbenda',
    location: 'Sentra Pempek 26 Ilir, Mujahidin, Radial, dan seluruh penjuru Kota Palembang',
    rating: '⭐ 5.0 / 5.0 (25.000+ ulasan)',
    image: 'images/Pempek.jpeg',
    badge: 'Warisan Kuliner Dunia',
    description: `Pempek adalah kuliner pusaka paling ikonik dari Palembang yang memadukan daging ikan air tawar atau ikan laut segar cincang halus dengan tepung sagu berkualitas tinggi. Menurut hikayat rakyat, hidangan ini tercipta pada sekitar abad ke-16 ketika seorang perantau Tionghoa (yang akrab disapa "Apek") berinisiatif mengolah melimpahnya hasil tangkapan ikan di Sungai Musi menjadi penganan kenyal gurih yang tahan lama.
    
    Ragam varian pempek Palembang sangat kaya:
    - **Pempek Kapal Selam**: Varian berukuran besar berbentuk kantung yang diisi telur bebek utuh sebelum direbus.
    - **Pempek Lenjer**: Bentuk silinder memanjang yang empuk dan sangat menonjolkan cita rasa murni ikan.
    - **Pempek Adaan**: Berbentuk bulat bertekstur lembut dengan campuran irisan bawang merah dan santan.
    - **Pempek Kulit**: Dibuat dari kulit ikan tenggiri yang digoreng garing renyah beraroma gurih kuat.
    - **Pempek Keriting, Panggang, Pistel (isi kates/pepaya muda), dan Lenggang**.
    
    Kunci kenikmatan sejati pempek terletak pada **Cuko**, kuah kental hitam pekat berbahan dasar gula aren batok pekat asli Linggau/Curup, bawang putih kating lokal, cabai rawit hijau, asam jawa alami, dan bubuk udang rebon (ebi) sangrai. Cuko Palembang asli tidak menggunakan cuka kimia sintetis sama sekali.`,
    highlights: [
      'Sensasi makan otentik: "Ngirup Cuko" langsung dari cawan kecil.',
      'Ditetapkan sebagai Warisan Budaya Takbenda Nasional Indonesia.',
      'Dapat dikemas vakum beku sebagai oleh-oleh khas yang tahan berhari-hari.',
      'Sentra Pempek paling ramai dan terjangkau: Sentra Pempek 26 Ilir Palembang.'
    ],
    tips: 'Untuk oleh-oleh, mintalah pempek dikemas vakum dengan sagu tabur kering dan cuko kental terpisah tanpa campuran air agar awet hingga berhari-hari di perjalanan.'
  },

  'aesan-gede': {
    title: 'Busana Pengantin Adat Aesan Gede & Pak Sangko',
    subtitle: 'Keanggunan Pakaian Kebesaran Para Raja & Ratu Kerajaan Sriwijaya',
    category: 'Tradisi Budaya & Tata Rias Busana Adat',
    location: 'Upacara Pernikahan Adat Keraton Palembang, Sumatera Selatan',
    rating: '⭐ 4.9 / 5.0 (3.200+ ulasan)',
    image: 'images/Pernikahan Adat Aesan Gede.webp',
    badge: 'Busana Sakral Agung',
    description: `Aesan Gede adalah busana adat pengantin tradisional Palembang yang merepresentasikan kemegahan, martabat agung, dan kemewahan zaman keemasan Kerajaan Sriwijaya (dikenal sebagai "Swarnadwipa" atau Pulau Emas). Kata "Aesan" berarti pakaian, dan "Gede" bermakna agung atau kebesaran.
    
    Busana pengantin wanita terdiri dari lilitan kain Songket Lepus bermotif emas, dihiasi selendang songket, penutup dada Teratai yang bertabur permata keemasan, serta mahkota agung "Karsuhun" atau "Gandik" yang bertingkat megah dengan hiasan kembang goyang cempako emas. Pada lengan dan jemari, kedua mempelai mengenakan gelang palak babi, gelang kano, dan kelat bahu kuningan bersepuh emas.
    
    Sementara itu, varian **Aesan Paksangkoh** memperlihatkan akulturasi budaya yang kuat dengan bangsa Tiongkok, di mana mempelai pria mengenakan jubah beludru merah bersulam emas terinspirasi busana saudagar dinasti Tiongkok kuno berpadu selempang songket Melayu.`,
    highlights: [
      'Simbol keagungan peradaban Sriwijaya sebagai pusat kebudayaan emas Asia Tenggara.',
      'Setiap ornamen perhiasan emas sarat akan filosofi perlindungan moral, kesucian, dan kepemimpinan.',
      'Dipakai pada prosesi sakral pernikahan "Munggah" di hadapan keluarga besar kedua mempelai.',
      'Dapat disaksikan pada pameran museum cagar budaya dan festival kebudayaan tahunan Sriwijaya.'
    ],
    tips: 'Saat berkunjung ke Museum Balaputradeva Palembang, Anda dapat menyewa pakaian adat Aesan Gede untuk sesi foto kenang-kenangan bertema busana keraton Sriwijaya.'
  }
};

/**
 * ============================================================================
 * MODAL DETAIL POP-UP HANDLERS
 * ============================================================================
 */
function openDetailModal(key) {
  const modal = document.getElementById('detailModal');
  const modalBody = document.getElementById('modalDynamicContent');
  if (!modal || !modalBody) return;

  const data = palembangModalData[key];
  if (!data) {
    console.warn(`Data detail untuk "${key}" tidak ditemukan.`);
    return;
  }

  // Generate highlights list HTML
  const highlightsHTML = data.highlights
    .map(item => `<li><span class="hl-bullet">✦</span> ${item}</li>`)
    .join('');

  modalBody.innerHTML = `
    <div class="modal-header-hero">
      <div class="modal-img-container">
        <img src="${data.image}" alt="${data.title}" class="modal-cover-img" onerror="this.src='images/Jembatan_Ampera.jpg'">
        <div class="modal-img-gradient"></div>
        <span class="modal-badge-pill">${data.badge || 'Warisan Budaya'}</span>
      </div>
      <div class="modal-title-box">
        <span class="modal-category-tag">${data.category}</span>
        <h2 class="modal-heading">${data.title}</h2>
        <p class="modal-subheading">${data.subtitle || ''}</p>
        <div class="modal-meta-row">
          <span class="modal-loc">📍 ${data.location}</span>
          <span class="modal-star">${data.rating}</span>
        </div>
      </div>
    </div>

    <div class="modal-content-scroll">
      <div class="modal-section-block">
        <h3 class="modal-block-title">📖 Uraian & Latar Sejarah</h3>
        <div class="modal-description-text">
          ${data.description.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>
      </div>

      <div class="modal-section-block">
        <h3 class="modal-block-title">✨ Daya Tarik Utama & Fakta Menarik</h3>
        <ul class="modal-highlights-list">
          ${highlightsHTML}
        </ul>
      </div>

      ${data.tips ? `
        <div class="modal-tips-box">
          <div class="tips-icon">💡</div>
          <div class="tips-body">
            <strong>Tips Wisatawan Cerdas:</strong>
            <p>${data.tips}</p>
          </div>
        </div>
      ` : ''}

      <div class="modal-action-footer">
        <a href="#kontak" class="btn btn-gold" onclick="closeDetailModal()">
          <span>Rencanakan Kunjungan</span>
          <span>&rarr;</span>
        </a>
        <button type="button" class="btn btn-outline-dark" onclick="closeDetailModal()">Tutup Jendela</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Kunci scroll halaman saat modal aktif
}

function closeDetailModal() {
  const modal = document.getElementById('detailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Event listener keyboard ESC dan klik backdrop luar modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDetailModal();
  }
});

document.addEventListener('click', (e) => {
  const modal = document.getElementById('detailModal');
  if (modal && e.target === modal) {
    closeDetailModal();
  }
});

/**
 * ============================================================================
 * FILTER TAB DESTINASI WISATA
 * ============================================================================
 */
function initDestinationFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.destinasi-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle class active pada tombol filter
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * ============================================================================
 * ACCORDION FAQ (PERTANYAAN UMUM)
 * ============================================================================
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Tutup semua item lain (opsional, accordion eksklusif)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle item saat ini
      if (isOpen) {
        item.classList.remove('active');
        const answer = item.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/**
 * ============================================================================
 * STICKY NAVBAR, SCROLLSPY, & BACK TO TOP BUTTON
 * ============================================================================
 */
function initScrollBehaviors() {
  const navbar = document.getElementById('mainNavbar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sticky shadow navbar
    if (navbar) {
      if (scrollPos > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scrollspy menu link active state
    if (sections.length && navLinks.length) {
      let currentSectionId = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            link.classList.add('active');
          } else if (href.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/**
 * ============================================================================
 * MOBILE NAVIGATION HAMBURGER TOGGLE
 * ============================================================================
 */
function initMobileNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Tutup menu saat salah satu link diklik
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });
}

/**
 * ============================================================================
 * FORMULIR KONTAK & KONSULTASI WISATA
 * ============================================================================
 */
function handleContactSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById('namaLengkap');
  const emailInput = document.getElementById('emailPengunjung');
  const submitBtn = document.getElementById('submitBtn');
  const successBanner = document.getElementById('formSuccessMessage');

  if (!nameInput || !emailInput) return;

  const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Kirim Pesan';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>⏳ Mengirim Data...</span>`;
  }

  // Simulasi proses pengiriman AJAX
  setTimeout(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }

    if (successBanner) {
      successBanner.style.display = 'block';
      successBanner.innerHTML = `
        <div class="success-icon">🎉</div>
        <div class="success-text">
          <strong>Pesan Berhasil Terkirim!</strong>
          <p>Terima kasih Saudara/i <strong>${nameInput.value}</strong>. Tim Layanan Wisata Palembang akan segera menghubungi email Anda (<strong>${emailInput.value}</strong>) untuk panduan perjalanan terbaik ke Bumi Sriwijaya.</p>
        </div>
      `;
      successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Reset formulir
    const form = document.getElementById('tourPlannerForm');
    if (form) form.reset();

    // Sembunyikan pesan sukses setelah 10 detik
    setTimeout(() => {
      if (successBanner) {
        successBanner.style.display = 'none';
      }
    }, 10000);
  }, 900);
}

/**
 * ============================================================================
 * INISIALISASI KETIKA DOM SELESAI DIMUAT
 * ============================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
  initDestinationFilter();
  initFaqAccordion();
  initScrollBehaviors();
  initMobileNavigation();

  // Inisialisasi status awal FAQ accordion (buka item pertama sebagai preview)
  const firstFaq = document.querySelector('.faq-item');
  if (firstFaq) {
    firstFaq.classList.add('active');
    const ans = firstFaq.querySelector('.faq-answer');
    if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
  }
});

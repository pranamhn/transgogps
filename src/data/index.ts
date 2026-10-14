export type Route =
  | "/"
  | "/fitur"
  | "/perangkat"
  | "/solusi"
  | "/harga"
  | "/kontak";

export type NavItem = {
  label: string;
  href: Route;
};

export const BRAND = {
  blue: "#1E75FF",
  cyan: "#00D2FF",
  blueDark: "#0B4599",
  navy: "#0A0F1D",
  navyLight: "#131B2E",
  slate: "#1E293B",
  surface: "#FFFFFF",
  alt: "#F8FAFC",
  line: "#E2E8F0",
  emerald: "#10B981",
  amber: "#F59E0B",
  rose: "#EF4444",
} as const;

export const CONTACT_INFO = {
  phone: "0811-1454-7322",
  phoneRaw: "6281114547322",
  email: "gps@transgogroup.id",
  workshopAddress: "Hotel Kartika Chandra, Jl. Gatot Subroto No.18–20, Karet Semanggi, Setiabudi, Jakarta Selatan 12930",
  operatingHours: "Senin - Sabtu: 08:30 - 18:00 WIB (Server 24/7 Monitoring)",
  webUrl: "https://transgogps.id",
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Fitur Platform", href: "/fitur" },
  { label: "Perangkat GPS", href: "/perangkat" },
  { label: "Solusi Armada", href: "/solusi" },
  { label: "Paket & Harga", href: "/harga" },
  { label: "Kontak", href: "/kontak" },
];

export interface GpsDevice {
  id: string;
  name: string;
  tagline: string;
  category: "Motor / EV" | "Mobil & Rental" | "Truk & Alat Berat" | "Cold-Chain IoT";
  image: string;
  badge: string;
  badgeColor: string;
  specs: {
    network: string;
    accuracy: string;
    voltage: string;
    backupBattery: string;
    features: string[];
  };
  suitableFor: string[];
}

export const GPS_DEVICES: GpsDevice[] = [
  {
    id: "tg-micro-4g",
    name: "Transgo Micro 4G Tracker",
    tagline: "Ultra-kompak untuk motor bensin & motor listrik (EV)",
    category: "Motor / EV",
    image: "/slides/slide-2-ev-2w.jpg",
    badge: "Bestseller Motor",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    specs: {
      network: "4G LTE-M / 2G GSM Fallback",
      accuracy: "< 2.5 meter (GNSS Quad-Band)",
      voltage: "9V - 90V DC (Support Baterai EV)",
      backupBattery: "180 mAh Li-Po Internal (Tahan hingga 4 jam)",
      features: [
        "Remote Engine Cut-Off (Relay Aman)",
        "Waterproof IP65 Housing",
        "Sensor Getar & Alarm Sabotase",
        "Anti-Drain Aki Logic",
      ],
    },
    suitableFor: [
      "Motor Listrik (Polytron, Maka, Smoot, Volta)",
      "Motor Matic & Sport Driver Ojol",
      "Armada Kurir Last-Mile Delivery",
    ],
  },
  {
    id: "tg-obd2-smart",
    name: "Transgo OBD-II Plug & Play",
    tagline: "Instalasi instan 5 detik langsung ke port diagnostik mobil",
    category: "Mobil & Rental",
    image: "/slides/slide-1-fleet-4w.jpg",
    badge: "Rental Favorite",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    specs: {
      network: "4G LTE Cat 1",
      accuracy: "< 2 meter (GPS / Glonass / Galileo)",
      voltage: "12V - 24V DC",
      backupBattery: "140 mAh Rechargeable",
      features: [
        "Pemasangan Tanpa Potong Kabel (Zero Wiring)",
        "Diagnostik Status Mesin (DTC Error Codes)",
        "Notifikasi Pencabutan Soket Seketika",
        "Sensor Pengereman Mendadak & Tabrakan",
      ],
    },
    suitableFor: [
      "Mobil Rental Harian & Bulanan (Avanza, Xpander, Innova)",
      "Armada Taksi Online & Ride-Hailing",
      "Mobil Operasional Perusahaan (Fleet)",
    ],
  },
  {
    id: "tg-heavy-pro",
    name: "Transgo Heavy-Duty Pro",
    tagline: "Telematika tangguh untuk truk kargo, tronton, dan alat berat",
    category: "Truk & Alat Berat",
    image: "/slides/slide-3-workshop-gps.jpg",
    badge: "Industrial Grade",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    specs: {
      network: "4G LTE Global Band + External Dual Antenna",
      accuracy: "< 1.5 meter (High-Gain Antenna)",
      voltage: "9V - 36V Heavy-Duty Regulator",
      backupBattery: "450 mAh High Capacity (Hingga 12 jam)",
      features: [
        "Sensor Bahan Bakar Ultrasonik (Anti-BBM Disedot)",
        "Waterproof & Dustproof IP67",
        "Sensor Suhu & Kelembaban Opsional",
        "Buzzer Over-speeding & Panic Button SOS",
      ],
    },
    suitableFor: [
      "Truk Wingbox, Fuso & Trailer Kontainer",
      "Dump Truck Tambang & Konstruksi",
      "Excavator & Bulldozer Proyek",
    ],
  },
  {
    id: "tg-coldchain-iot",
    name: "Transgo Cold-Chain IoT Pro",
    tagline: "Monitoring posisi armada sekaligus temperatur kargo pendingin",
    category: "Cold-Chain IoT",
    image: "/slides/slide-4-investor.jpg",
    badge: "FMCG & Pharma",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
    specs: {
      network: "4G LTE IoT M2M Dedicated",
      accuracy: "< 2 meter",
      voltage: "12V - 24V DC",
      backupBattery: "600 mAh Industrial Grade",
      features: [
        "Sensor Suhu Presisi Tinggi (-40°C s/d +80°C)",
        "Alert Pintu Terbuka (Door Sensor Magnetik)",
        "Sertifikasi Kepatuhan Standar Farmasi & Makanan",
        "Log Data Offline saat Hilang Sinyal Seluler",
      ],
    },
    suitableFor: [
      "Mobil Box Reefer & Pendingin Frozen Food",
      "Distribusi Farmasi, Vaksin & Medis",
      "Truk Pengantar Es Krim & Produk Segar",
    ],
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  target: string;
  priceDevice: string;
  serverFee: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan-motor",
    name: "Paket Motor & EV",
    target: "Sepeda motor pribadi, ojol, dan motor listrik",
    priceDevice: "Rp 499.000",
    serverFee: "Rp 35.000 / bln",
    features: [
      "Perangkat Transgo Micro 4G Mini",
      "Update lokasi tiap 10 detik",
      "Remote Cut-Off (Matikan mesin via HP)",
      "Gratis kuota internet kartu SIM 6 bulan",
      "Riwayat rute perjalanan 60 hari",
      "Aplikasi Android & iOS",
      "Garansi resmi alat 1 tahun",
    ],
    cta: "Pilih Paket Motor",
  },
  {
    id: "plan-mobil",
    name: "Paket Mobil Bisnis",
    target: "Mobil rental, taksi online, dan mobil pribadi",
    priceDevice: "Rp 799.000",
    serverFee: "Rp 45.000 / bln",
    popular: true,
    features: [
      "Perangkat Transgo OBD-II atau Hardwire Pro",
      "Update lokasi presisi tiap 10 detik",
      "Remote Engine Immobilizer seketika",
      "Gratis kuota kartu SIM M2M 1 tahun",
      "Riwayat rute perjalanan 90 hari",
      "Notifikasi batas kecepatan & geofence WA",
      "Laporan jam kerja mesin & ODO",
      "Garansi tukar unit baru 1 tahun",
      "Gratis pemasangan teknisi area Jabodetabek",
    ],
    cta: "Pilih Paket Mobil (Populer)",
  },
  {
    id: "plan-fleet",
    name: "Paket Fleet Enterprise",
    target: "Ekspedisi logistik, armada truk, dan alat berat",
    priceDevice: "Hubungi Sales",
    serverFee: "Custom Sesuai Jumlah Unit",
    features: [
      "Perangkat Transgo Heavy-Duty Pro IP67",
      "Sensor BBM ultrasonik & integrasi sensor",
      "Playback rute 1 tahun & ekspor Excel / PDF",
      "Multi-user dashboard & hak akses hierarki",
      "Integrasi API / Webhook ke ERP internal",
      "Dedicated Technical Account Manager",
      "SLA Server Uptime 99.98%",
      "Pelatihan operator fleet langsung di kantor Anda",
    ],
    cta: "Konsultasi Paket Fleet",
  },
];

export const FAQS = [
  {
    q: "Apakah pemasangan GPS Transgo akan menghanguskan garansi kelistrikan mobil/motor saya?",
    a: "Tidak. Kami menggunakan teknik instalasi non-destruktif tanpa memotong kabel utama bawaan pabrik (menggunakan soket PnP atau jumper sekering resmi). Untuk mobil, kami juga menyediakan opsi varian Transgo OBD-II yang tinggal dicolokkan ke soket OBD tanpa modifikasi kelistrikan sama sekali.",
  },
  {
    q: "Apakah mesin kendaraan benar-benar bisa dimatikan dari jarak jauh saat mobil sedang berjalan?",
    a: "Bisa, namun sistem Transgo GPS dilengkapi algoritma keselamatan cerdas. Jika kendaraan terindikasi dicuri saat bergerak cepat di atas 20 km/jam, perintah cut-off akan berada dalam status 'siaga aman' dan baru mematikan kelistrikan mesin saat kecepatan kendaraan melambat di bawah 20 km/jam atau saat kendaraan berhenti di lampu merah/parkir. Hal ini untuk mencegah risiko kecelakaan lalu lintas bagi pengguna jalan lain.",
  },
  {
    q: "Bagaimana jika kendaraan dibawa ke area terpencil yang tidak ada sinyal seluler?",
    a: "Perangkat Transgo GPS dibekali memori internal Flash Buffer. Semua titik koordinat, kecepatan, dan waktu tetap direkam secara offline di dalam unit GPS. Begitu kendaraan kembali masuk ke area yang memiliki sinyal operator seluler (Telkomsel/Indosat/XL), semua data riwayat perjalanan akan otomatis disinkronkan ke server dan dapat dilihat di playback aplikasi.",
  },
  {
    q: "Bagaimana jika maling melepas atau memutus kabel aki kendaraan?",
    a: "Perangkat Transgo GPS memiliki baterai cadangan (backup battery) internal yang langsung menyala otomatis. Sistem akan langsung mengirimkan peringatan darurat 'Aki Diputus' ke aplikasi dan WhatsApp pemilik kendaraan, sementara sinyal koordinat GPS tetap terus memancar hingga berjam-jam kemudian.",
  },
  {
    q: "Apakah teknisi Transgo bisa datang memasang langsung di rumah atau kantor saya?",
    a: "Bisa. Kami memiliki layanan Home & Office Installation Service untuk wilayah Jabodetabek dan kota-kota besar di Indonesia. Teknisi bersertifikat kami akan datang langsung ke lokasi kendaraan Anda sesuai jadwal yang Anda tentukan.",
  },
];

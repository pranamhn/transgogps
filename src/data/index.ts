export type Route =
  | "/"
  | "/fitur"
  | "/perangkat"
  | "/solusi"
  | "/harga"
  | "/kontak";

export type NavItem = {
  key: "home" | "features" | "devices" | "solutions" | "pricing" | "contact";
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
  { key: "home", label: "Beranda", href: "/" },
  { key: "features", label: "Fitur Platform", href: "/fitur" },
  { key: "devices", label: "Produk", href: "/perangkat" },
  { key: "solutions", label: "Solusi Armada", href: "/solusi" },
  { key: "pricing", label: "Paket & Harga", href: "/harga" },
  { key: "contact", label: "Kontak", href: "/kontak" },
];

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  badge: string;
  badgeColor: string;
  description: string;
  /** Spec rows shown on the product page; only confirmed facts. */
  specs: { label: string; value: string }[];
  features: string[];
  suitableFor: string[];
  /** External product site; products without one are ordered via WhatsApp. */
  website?: { href: string; label: string };
}

export const PRODUCTS: Product[] = [
  {
    id: "gx-01",
    name: "GPS Tracker Motor GX-01",
    tagline: "Tingkatkan keamanan motor Anda dengan 1 tahun gratis server/aplikasi IOPGPS",
    category: "GPS Tracker Motor",
    image: "/slides/gx01-gps-tracker.jpg",
    badge: "Produk Baru",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    description:
      "GPS Tracker Motor GX-01 adalah solusi keamanan kendaraan modern yang dilengkapi fitur matikan mesin jarak jauh. Perangkat ini telah memiliki izin resmi dari Kemenkominfo, dan dengan protokol GT06 yang andal, tracker ini memberikan perlindungan untuk motor kesayangan Anda.",
    specs: [
      { label: "Kendaraan", value: "Sepeda motor" },
      { label: "Protokol", value: "GT06" },
      { label: "Sertifikasi", value: "Izin resmi Kemenkominfo" },
      { label: "Aplikasi", value: "IOPGPS, gratis server 1 tahun" },
    ],
    features: [
      "Matikan mesin jarak jauh",
      "Pelacakan lokasi lewat aplikasi IOPGPS",
      "Gratis 1 tahun server & aplikasi IOPGPS",
      "Izin resmi Kemenkominfo",
    ],
    suitableFor: ["Motor pribadi", "Motor operasional usaha"],
  },
  {
    id: "seva-fms",
    name: "SEVA Fleet Management System",
    tagline: "Satu platform terpadu untuk operasional armada & mobilitas bisnis Anda",
    category: "Fleet Management System",
    image: "/slides/seva-fleet-platform.jpg",
    badge: "Platform Armada",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description:
      "SEVA FMS adalah dashboard web untuk pemilik armada: pelacakan GPS dan geofencing, penugasan armada dan pengemudi, serta inspeksi dan invoice digital. Pengemudi terhubung lewat aplikasi SEVA Partner untuk menerima order, melakukan inspeksi pra-jalan digital, dan mencairkan saldo harian.",
    specs: [
      { label: "Platform", value: "Dashboard web (SEVA FMS)" },
      { label: "Aplikasi pengemudi", value: "SEVA Partner, Android & iOS" },
      { label: "Biaya awal", value: "Bebas biaya awal untuk pemilik armada" },
      { label: "Situs", value: "sevaqu.com" },
    ],
    features: [
      "Live Tracking GPS & geofencing",
      "Penugasan kendaraan & pengemudi",
      "Inspeksi kendaraan digital",
      "Konfirmasi & laporan pembayaran",
      "Invoicing digital",
    ],
    suitableFor: ["Pemilik armada", "Pengemudi mitra (SEVA Partner)"],
    website: { href: "https://sevaqu.com", label: "Kunjungi sevaqu.com" },
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  target: string;
  priceDevice: string;
  serverFee: string;
  /** Overrides the default "Biaya Perangkat" / "Langganan Server" labels. */
  priceLabel?: string;
  feeLabel?: string;
  popular?: boolean;
  features: string[];
  cta: string;
  /** External link for the CTA; defaults to the contact page. */
  href?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan-motor",
    name: "Paket Motor GX-01",
    target: "Sepeda motor pribadi dan motor operasional",
    priceDevice: "Hubungi kami",
    serverFee: "Gratis 1 tahun (IOPGPS)",
    features: [
      "Perangkat GPS Tracker Motor GX-01",
      "Matikan mesin jarak jauh",
      "Pelacakan lewat aplikasi IOPGPS",
      "Gratis 1 tahun server & aplikasi IOPGPS",
      "Izin resmi Kemenkominfo",
    ],
    cta: "Pesan GX-01",
  },
  {
    id: "plan-mobil",
    name: "Paket Mobil Bisnis",
    target: "Mobil rental, taksi online, dan mobil pribadi",
    priceDevice: "Rp 799.000",
    serverFee: "Rp 45.000 / bln",
    popular: true,
    features: [
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
    id: "plan-seva",
    name: "SEVA Fleet Management",
    target: "Pemilik armada yang mengelola kendaraan, pengemudi, dan pembayaran",
    priceDevice: "Bebas biaya awal",
    serverFee: "Hubungi kami",
    priceLabel: "Biaya Awal",
    feeLabel: "Langganan",
    features: [
      "Dashboard web SEVA FMS",
      "Live Tracking GPS & geofencing",
      "Penugasan kendaraan & pengemudi",
      "Inspeksi kendaraan & invoice digital",
      "Konfirmasi & laporan pembayaran",
      "Aplikasi pengemudi SEVA Partner (Android & iOS)",
    ],
    cta: "Pelajari SEVA",
    href: "https://sevaqu.com",
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

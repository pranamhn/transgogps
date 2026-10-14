import React, { createContext, useContext, useState, useEffect } from "react";

export type Lang = "id" | "en";

export interface Translations {
  nav: {
    home: string;
    features: string;
    devices: string;
    solutions: string;
    pricing: string;
    contact: string;
    demoDashboard: string;
    waConsult: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    facts: { title: string; desc: string }[];
    imageAlt: string;
    imageCaption: string;
  };
  features: {
    label: string;
    title: string;
    sub: string;
  };
  devices: {
    label: string;
    title: string;
    sub: string;
    specsTitle: string;
    suitableTitle: string;
    consultBtn: string;
  };
  solutions: {
    label: string;
    title: string;
    sub: string;
  };
  pricing: {
    label: string;
    title: string;
    sub: string;
    devicePrice: string;
    serverSub: string;
    selectPlan: string;
  };
  howItWorks: {
    label: string;
    title: string;
    sub: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  faq: {
    label: string;
    title: string;
    sub: string;
  };
  cta: {
    title: string;
    desc: string;
    btnBook: string;
    btnWa: string;
  };
  footer: {
    aboutTitle: string;
    aboutDesc: string;
    quickLinks: string;
    contactTitle: string;
    rights: string;
    partOf: string;
  };
}

const ID_TRANSLATIONS: Translations = {
  nav: {
    home: "Beranda",
    features: "Fitur Platform",
    devices: "Produk",
    solutions: "Solusi Armada",
    pricing: "Paket & Harga",
    contact: "Kontak",
    demoDashboard: "Demo Platform",
    waConsult: "Konsultasi WA",
  },
  hero: {
    eyebrow: "GPS Tracker & Manajemen Armada",
    title: "Lacak kendaraan Anda dan matikan mesinnya dari jauh.",
    desc: "Transgo GPS menyediakan GPS Tracker Motor GX-01 untuk keamanan kendaraan, dan SEVA Fleet Management System untuk mengelola armada, pengemudi, dan pembayaran dalam satu dashboard.",
    ctaPrimary: "Konsultasi via WhatsApp",
    ctaSecondary: "Lihat produk",
    facts: [
      { title: "Matikan mesin jarak jauh", desc: "Hentikan motor dari aplikasi bila terjadi pencurian." },
      { title: "Izin resmi Kemenkominfo", desc: "GX-01 memakai protokol GT06." },
      { title: "Gratis 1 tahun server", desc: "Termasuk aplikasi pelacakan IOPGPS." },
    ],
    imageAlt: "Bengkel Armada & Telematika Transgo Group",
    imageCaption: "Bengkel Armada & Telematika Transgo Group",
  },
  features: {
    label: "Fitur",
    title: "Yang bisa Anda lakukan dengan Transgo GPS",
    sub: "Pantau lokasi kendaraan, matikan mesin dari jauh, dan kelola armada dari satu tempat.",
  },
  devices: {
    label: "PRODUK KAMI",
    title: "GPS Tracker Motor & Sistem Manajemen Armada",
    sub: "GPS Tracker Motor GX-01 dengan fitur matikan mesin jarak jauh, dan SEVA Fleet Management System untuk mengelola armada dan pengemudi.",
    specsTitle: "Spesifikasi Teknis:",
    suitableTitle: "Direkomendasikan Untuk:",
    consultBtn: "Konsultasi Pemasangan",
  },
  solutions: {
    label: "SOLUSI SESUAI INDUSTRI",
    title: "Disesuaikan dengan Kebutuhan Spesifik Bisnis Anda",
    sub: "Dari puluhan motor listrik kurir hingga ratusan truk kargo jarak jauh, Transgo GPS siap mengoptimalkan operasional Anda.",
  },
  pricing: {
    label: "TRANSPARAN & TERJANGKAU",
    title: "Paket Berlangganan & Harga Perangkat GPS",
    sub: "Pilih paket yang paling efisien untuk skala armada Anda. Semua paket sudah termasuk kartu SIM M2M kuota aktif dan garansi resmi.",
    devicePrice: "Harga Perangkat",
    serverSub: "Biaya Server & Cloud",
    selectPlan: "Pilih Paket Ini",
  },
  howItWorks: {
    label: "CARA KERJA & PEMASANGAN",
    title: "4 Langkah Cepat Mengamankan Armada Anda",
    sub: "Pemasangan rapi dan tersembunyi oleh teknisi profesional. Tersedia layanan datang ke rumah atau kantor Anda.",
    step1Title: "Pemasangan Cepat & Tersembunyi",
    step1Desc: "Teknisi memasang unit GPS di titik tersembunyi tanpa memotong kabel utama sehingga garansi mobil/motor tetap aman.",
    step2Title: "Aktivasi Kartu SIM IoT M2M",
    step2Desc: "Perangkat langsung terhubung ke jaringan 4G stabil dengan kuota data internet terdedikasi.",
    step3Title: "Konfigurasi Geofence & Parameter",
    step3Desc: "Tentukan batas wilayah aman, batas kecepatan maksimal, serta nomor WhatsApp darurat penerima alert.",
    step4Title: "Monitoring Real-Time 24 Jam",
    step4Desc: "Buka aplikasi Android, iOS, atau web browser desktop. Kendalikan armada dari mana saja kapan saja.",
  },
  faq: {
    label: "PERTANYAAN UMUM (FAQ)",
    title: "Pertanyaan yang Sering Diajukan",
    sub: "Informasi lengkap mengenai kompatibilitas perangkat, garansi kelistrikan, dan operasional Transgo GPS.",
  },
  cta: {
    title: "Siap Melindungi & Mengontrol Penuh Seluruh Armada Anda?",
    desc: "Jadwalkan pemasangan GPS hari ini. Tim teknisi kami siap datang langsung ke lokasi Anda di seluruh Jabodetabek.",
    btnBook: "Jadwalkan Pemasangan GPS",
    btnWa: "Chat WhatsApp Telematika",
  },
  footer: {
    aboutTitle: "Tentang Transgo GPS",
    aboutDesc: "Platform telematika IoT dan monitoring armada kendaraan terdepan di Indonesia, bagian dari ekosistem Transgo Group Mobility.",
    quickLinks: "Tautan Navigasi",
    contactTitle: "Layanan Pelanggan & Workshop",
    rights: "Hak Cipta Dilindungi Undang-Undang.",
    partOf: "Bagian dari ekosistem",
  },
};

const EN_TRANSLATIONS: Translations = {
  nav: {
    home: "Home",
    features: "Features",
    devices: "Products",
    solutions: "Fleet Solutions",
    pricing: "Pricing",
    contact: "Contact",
    demoDashboard: "Live Demo",
    waConsult: "WhatsApp",
  },
  hero: {
    eyebrow: "GPS Trackers & Fleet Management",
    title: "Track your vehicles and cut the engine remotely.",
    desc: "Transgo GPS offers the GX-01 motorcycle GPS tracker for vehicle security, and the SEVA Fleet Management System for managing vehicles, drivers, and payments in one dashboard.",
    ctaPrimary: "Chat on WhatsApp",
    ctaSecondary: "See products",
    facts: [
      { title: "Remote engine cut-off", desc: "Stop the motorcycle from the app if it is stolen." },
      { title: "Kemenkominfo certified", desc: "The GX-01 uses the GT06 protocol." },
      { title: "1 year free server", desc: "Includes the IOPGPS tracking app." },
    ],
    imageAlt: "Transgo Group fleet and telematics workshop",
    imageCaption: "Transgo Group fleet & telematics workshop",
  },
  features: {
    label: "Features",
    title: "What you can do with Transgo GPS",
    sub: "Track vehicle locations, cut the engine remotely, and manage your fleet from one place.",
  },
  devices: {
    label: "OUR PRODUCTS",
    title: "Motorcycle GPS Tracker & Fleet Management System",
    sub: "The GX-01 motorcycle GPS tracker with remote engine cut-off, and the SEVA Fleet Management System for managing vehicles and drivers.",
    specsTitle: "Technical Specs:",
    suitableTitle: "Recommended For:",
    consultBtn: "Book Installation",
  },
  solutions: {
    label: "INDUSTRY-SPECIFIC SOLUTIONS",
    title: "Engineered for Your Specific Fleet Requirements",
    sub: "From electric delivery 2-wheelers to long-haul cargo fleets, Transgo GPS maximizes operational profitability.",
  },
  pricing: {
    label: "TRANSPARENT PRICING",
    title: "Hardware & Cloud Subscription Plans",
    sub: "Choose the package tailored to your fleet size. Includes active M2M SIM cards, warranty, and cloud dashboard access.",
    devicePrice: "Hardware Price",
    serverSub: "Cloud & Data SIM",
    selectPlan: "Select This Plan",
  },
  howItWorks: {
    label: "HOW IT WORKS",
    title: "4 Easy Steps to Secure Your Fleet",
    sub: "Clean and stealth installation by certified technicians. On-site home and office installation services available.",
    step1Title: "Stealth & Safe Installation",
    step1Desc: "Trained technicians install the miniature GPS unit in hidden spots without cutting factory wire harnesses.",
    step2Title: "M2M IoT SIM Activation",
    step2Desc: "Device immediately links to high-speed 4G cellular networks with dedicated pre-provisioned data quotas.",
    step3Title: "Geofence & Alert Configuration",
    step3Desc: "Set up boundary zones, speed limits, and emergency WhatsApp alert recipients within minutes.",
    step4Title: "24/7 Real-Time Fleet Command",
    step4Desc: "Access via Android, iOS, or desktop web browser. Maintain 100% visibility over your fleet anytime, anywhere.",
  },
  faq: {
    label: "FREQUENTLY ASKED QUESTIONS",
    title: "Everything You Need to Know",
    sub: "Comprehensive answers regarding vehicle electrical warranties, remote cut-off safety, and technical specs.",
  },
  cta: {
    title: "Ready to Protect and Command Your Entire Fleet?",
    desc: "Schedule your GPS installation today. Our technician team is ready to come to your location across Greater Jakarta.",
    btnBook: "Schedule GPS Installation",
    btnWa: "Chat on WhatsApp",
  },
  footer: {
    aboutTitle: "About Transgo GPS",
    aboutDesc: "Leading IoT telematics and fleet tracking platform in Indonesia, part of the Transgo Group Mobility ecosystem.",
    quickLinks: "Quick Navigation",
    contactTitle: "Customer Support & Workshop",
    rights: "All Rights Reserved.",
    partOf: "Part of the mobility ecosystem",
  },
};

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "id",
  setLang: () => {},
  t: ID_TRANSLATIONS,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("transgogps_lang");
      return saved === "en" || saved === "id" ? saved : "id";
    } catch {
      return "id";
    }
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem("transgogps_lang", newLang);
      document.documentElement.lang = newLang;
    } catch {}
  };

  const t = lang === "en" ? EN_TRANSLATIONS : ID_TRANSLATIONS;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

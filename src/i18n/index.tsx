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
    pill: string;
    tagline: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    stat4Val: string;
    stat4Label: string;
  };
  telematics: {
    badge: string;
    title: string;
    sub: string;
    vehicleStatus: string;
    speed: string;
    satellites: string;
    battery: string;
    fuel: string;
    geofence: string;
    engineActive: string;
    engineCutOff: string;
    testCutOffBtn: string;
    restoreEngineBtn: string;
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
    devices: "Perangkat GPS",
    solutions: "Solusi Armada",
    pricing: "Paket & Harga",
    contact: "Kontak",
    demoDashboard: "Demo Platform",
    waConsult: "Konsultasi WA",
  },
  hero: {
    pill: "TRANSGO GPS & IOT TELEMATIKA",
    tagline: "Update 10 Detik • Remote Engine Cut-Off • Proteksi Anti-Maling 24/7",
    title1: "Sistem Telematika GPS &",
    titleHighlight: "Monitoring Armada Real-Time",
    title2: "untuk Efisiensi Maksimal",
    desc: "Pantau posisi setiap kendaraan, riwayat rute perjalanan, kecepatan aktual, konsumsi bahan bakar, dan status operasional armada Anda secara presisi dalam satu dashboard terpadu. Lindungi aset berharga dari risiko pencurian dan penyalahgunaan.",
    ctaPrimary: "Coba Demo Dashboard",
    ctaSecondary: "Konsultasi Teknisi (0811-1454-7322)",
    stat1Val: "10 Detik",
    stat1Label: "Update Posisi Satelit Presisi",
    stat2Val: "< 3 Detik",
    stat2Label: "Kecepatan Respon Engine Cut-Off",
    stat3Val: "90 Hari",
    stat3Label: "Penyimpanan Playback Rute",
    stat4Val: "99.98%",
    stat4Label: "Server Cloud Uptime Teruji",
  },
  telematics: {
    badge: "SIMULATOR LIVE TELEMATIKA",
    title: "Uji Coba Kontrol Jarak Jauh Langsung dari Layar Anda",
    sub: "Lihat bagaimana sistem Transgo GPS merespons perintah remote engine cut-off seketika saat terjadi indikasi bahaya.",
    vehicleStatus: "Status Kendaraan",
    speed: "Kecepatan",
    satellites: "Sinyal Satelit",
    battery: "Baterai Unit",
    fuel: "BBM / Daya",
    geofence: "Zona Wilayah",
    engineActive: "Mesin Beroperasi Normal",
    engineCutOff: "MESIN TELAH DIMATIKAN (CUT-OFF AKTIF)",
    testCutOffBtn: "Simulasi Matikan Mesin (Cut-Off)",
    restoreEngineBtn: "Pulihkan Kelistrikan Mesin",
  },
  features: {
    label: "FITUR UNGGULAN TELEMATIKA",
    title: "Segala yang Anda Butuhkan untuk Kendali Penuh Armada",
    sub: "Teknologi IoT canggih yang dirancang spesifik untuk kebutuhan rental mobil, ride-hailing, logistik, dan pemilik kendaraan pribadi.",
  },
  devices: {
    label: "KATALOG PERANGKAT GPS",
    title: "Hardware Bersertifikasi & Teruji Ketahanan Cuaca Ekstrim",
    sub: "Pilihan unit GPS tracker 4G dengan modul satelit GNSS mutakhir, sensor sabotase, dan baterai cadangan internal.",
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
    devices: "GPS Devices",
    solutions: "Fleet Solutions",
    pricing: "Pricing",
    contact: "Contact & Install",
    demoDashboard: "Live Demo",
    waConsult: "WhatsApp",
  },
  hero: {
    pill: "TRANSGO GPS & IOT TELEMATICS",
    tagline: "10-Sec Updates • Remote Engine Cut-Off • 24/7 Anti-Theft Security",
    title1: "Advanced GPS Telematics &",
    titleHighlight: "Real-Time Fleet Monitoring",
    title2: "for Peak Operational Efficiency",
    desc: "Monitor vehicle locations, historic routes, actual speed, fuel telemetry, and operational status in one unified dashboard. Protect your valuable mobility assets against theft, unauthorized route deviations, and misuse.",
    ctaPrimary: "Explore Dashboard Demo",
    ctaSecondary: "Talk to Telematics Engineer",
    stat1Val: "10 Secs",
    stat1Label: "Precision Satellite Refresh Rate",
    stat2Val: "< 3 Secs",
    stat2Label: "Remote Immobilizer Response Time",
    stat3Val: "90 Days",
    stat3Label: "Full Route Playback Storage",
    stat4Val: "99.98%",
    stat4Label: "High-Availability Server Uptime",
  },
  telematics: {
    badge: "LIVE TELEMATICS SIMULATOR",
    title: "Test Remote Vehicle Controls Directly on Your Screen",
    sub: "Witness how Transgo GPS triggers instantaneous engine immobilizer commands when suspicious activities are detected.",
    vehicleStatus: "Vehicle Status",
    speed: "Speed",
    satellites: "GNSS Lock",
    battery: "Unit Battery",
    fuel: "Fuel / Charge",
    geofence: "Geofence Zone",
    engineActive: "Engine Running Normally",
    engineCutOff: "ENGINE IMMOBILIZED (CUT-OFF ACTIVE)",
    testCutOffBtn: "Simulate Remote Engine Cut-Off",
    restoreEngineBtn: "Restore Vehicle Ignition",
  },
  features: {
    label: "CORE TELEMATICS CAPABILITIES",
    title: "Everything You Need for Total Fleet Command",
    sub: "Enterprise-grade IoT telematics tailored for car rentals, ride-hailing drivers, freight logistics, and private vehicle owners.",
  },
  devices: {
    label: "HARDWARE CATALOG",
    title: "Certified 4G GPS Trackers Built for Harsh Environments",
    sub: "High-gain GNSS modules, anti-tampering sensors, and internal backup batteries engineered for automotive excellence.",
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

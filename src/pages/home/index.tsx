import React, { useState } from "react";
import {
  Navigation,
  ArrowRight,
  Phone,
  ShieldCheck,
  Radio,
  Lock,
  Activity,
  Map,
  History,
  Bell,
  BarChart3,
  Smartphone,
  CheckCircle2,
  Cpu,
  ChevronDown,
  Sparkles,
  Zap,
  Truck,
  Car,
  Wrench,
  Layers,
} from "lucide-react";
import { useLang } from "../../i18n";
import { go } from "../../hooks";
import { GPS_DEVICES, PRICING_PLANS, FAQS, CONTACT_INFO } from "../../data";
import { FadeSection, SectionLabel } from "../../components/ui";
import LiveGpsSimulator from "../../components/LiveGpsSimulator";

export default function HomePage() {
  const { t } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const coreFeatures = [
    {
      icon: <Radio size={24} className="text-blue-500" />,
      title: "Pelacakan Satelit Tiap 10 Detik",
      desc: "Menampilkan titik koordinat kendaraan di peta secara real-time dengan akurasi < 2.5 meter berkat modul GNSS multi-konstelasi.",
      badge: "Real-Time 10s",
    },
    {
      icon: <Lock size={24} className="text-rose-500" />,
      title: "Remote Engine Immobilizer",
      desc: "Matikan kelistrikan mesin kendaraan dari jarak jauh via smartphone dalam hitungan detik saat terjadi indikasi pencurian.",
      badge: "Anti Maling",
    },
    {
      icon: <Map size={24} className="text-emerald-500" />,
      title: "Geofencing & Polygon Alert",
      desc: "Tentukan batas zona aman operasional. Dapatkan alert instan ke WhatsApp & notifikasi aplikasi begitu kendaraan keluar koridor.",
      badge: "Zona Aman",
    },
    {
      icon: <History size={24} className="text-cyan-500" />,
      title: "Playback Riwayat Rute 90 Hari",
      desc: "Putar ulang histori perjalanan pengemudi lengkap dengan kecepatan, durasi singgah, kilometer tempuh, dan lokasi parkir.",
      badge: "90 Hari Log",
    },
    {
      icon: <BarChart3 size={24} className="text-amber-500" />,
      title: "Analisis Perilaku Driver (Eco-Driving)",
      desc: "Deteksi pengereman mendadak, akselerasi kasar, dan overspeeding untuk meminimalisir risiko kecelakaan dan boros bahan bakar.",
      badge: "Driver Safety",
    },
    {
      icon: <Smartphone size={24} className="text-purple-500" />,
      title: "Multi-Platform Web & Mobile App",
      desc: "Akses pemantauan armada lewat aplikasi Android & iOS responsif atau portal browser desktop berkecepatan tinggi.",
      badge: "iOS & Android",
    },
  ];

  const industries = [
    {
      title: "Rental Mobil & Taksi Online",
      desc: "Cegah mobil rental dibawa kabur ke luar pulau, pantau jam operasional pengemudi, dan matikan mesin seketika jika telat bayar sewa.",
      icon: <Car size={26} className="text-blue-500" />,
      tag: "Rental & Ride-Hailing",
    },
    {
      title: "Logistik, Truk & Ekspedisi",
      desc: "Monitoring status pengiriman barang, estimasi tiba di tujuan (ETA), rute perjalanan kapal/truk, dan sensor isi BBM anti-pencurian.",
      icon: <Truck size={26} className="text-emerald-500" />,
      tag: "Freight Logistics",
    },
    {
      title: "Motor Listrik (EV) & Kurir",
      desc: "Pemantauan voltase baterai pack EV, estimasi jarak tempuh sisa, serta perlindungan anti-maling untuk armada kurir last-mile.",
      icon: <Zap size={26} className="text-amber-500" />,
      tag: "EV & Delivery",
    },
    {
      title: "Alat Berat & Kontraktor Proyek",
      desc: "Pencatatan jam kerja mesin (Hour Meter) akurat untuk jadwal servis berkala serta geofence perimeter proyek konstruksi.",
      icon: <Wrench size={26} className="text-purple-500" />,
      tag: "Heavy Equipment",
    },
  ];

  return (
    <div className="home-page">
      {/* ── 1. Hero Section ──────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-background-glow" />
        <div className="hero-container">
          <div className="hero-content">
            {/* Pill & Tagline */}
            <div className="hero-badge-row">
              <span className="hero-pill">
                <Navigation size={13} className="text-cyan-400" />
                <span>{t.hero.pill}</span>
              </span>
              <span className="hero-tagline">{t.hero.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-heading">
              {t.hero.title1}{" "}
              <span className="text-gradient-cyan">{t.hero.titleHighlight}</span>{" "}
              {t.hero.title2}
            </h1>

            {/* Subparagraph */}
            <p className="hero-desc">{t.hero.desc}</p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <button
                type="button"
                onClick={() => go("/fitur")}
                className="btn-hero-primary"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                  "Halo Tim Transgo GPS, saya ingin konsultasi teknis pemasangan GPS armada."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-hero-secondary"
              >
                <Phone size={16} />
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="hero-stats-row">
              <div className="hero-stat-card">
                <span className="hero-stat-val text-white">{t.hero.stat1Val}</span>
                <span className="hero-stat-label">{t.hero.stat1Label}</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-val text-cyan-400">{t.hero.stat2Val}</span>
                <span className="hero-stat-label">{t.hero.stat2Label}</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-val text-emerald-400">{t.hero.stat3Val}</span>
                <span className="hero-stat-label">{t.hero.stat3Label}</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-val text-amber-400">{t.hero.stat4Val}</span>
                <span className="hero-stat-label">{t.hero.stat4Label}</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Live Telematics Simulator */}
          <div className="hero-visual-col">
            <LiveGpsSimulator />
          </div>
        </div>
      </section>

      {/* ── 2. Showcase Board Section ─────────────────────────────────────── */}
      <FadeSection className="py-16 bg-white dark:bg-slate-950 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="gps-board-clean">
            <div className="gps-board-media">
              <img
                src="/slides/slide-3-workshop-gps.jpg"
                alt="Transgo GPS Workshop & Control Center"
                className="gps-board-img"
              />
              <div className="gps-board-overlay" />
              <div className="gps-board-badges-top">
                <span className="gps-glass-badge">
                  <Navigation size={13} />
                  <span>Satelit GNSS + 4G LTE M2M</span>
                </span>
                <span className="gps-glass-badge gps-glass-badge--cyan">
                  <span>Akurasi &lt; 2.5 Meter</span>
                </span>
              </div>

              <div className="gps-board-badges-bottom">
                <h4>Remote Engine Cut-Off &amp; Anti-Theft Protection</h4>
                <p>
                  Kemampuan mematikan mesin kendaraan secara instan dari aplikasi smartphone jika kendaraan keluar dari batas rute atau terindikasi dicuri.
                </p>
                <div className="gps-pills-row">
                  <span>Update 10 Detik</span>
                  <span>Sensor Kecepatan &amp; Rem</span>
                  <span>Geofence Alert</span>
                  <span>Riwayat Rute 90 Hari</span>
                  <span>Baterai Backup</span>
                </div>
              </div>
            </div>

            <div className="gps-board-content">
              <SectionLabel icon={<ShieldCheck size={14} />}>
                KEUNGGULAN UTAMA TRANSGO GPS
              </SectionLabel>
              <h2 className="section-title mt-2">
                Kontrol Penuh Seluruh Pergerakan Armada di Ujung Jari
              </h2>
              <p className="section-subtitle">
                Transgo GPS memadukan keamanan fisik aset, penghematan bahan bakar, dan visibilitas operasional tanpa henti untuk menjamin ketenangan bisnis Anda.
              </p>

              <div className="space-y-4 mt-6">
                <div className="feature-check-item">
                  <div className="feature-check-icon">
                    <CheckCircle2 size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Garansi Pabrikan Kendaraan Tetap Aman</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Pemasangan rapi non-destruktif tanpa memotong kabel utama. Tersedia juga varian soket OBD-II Plug &amp; Play.
                    </p>
                  </div>
                </div>

                <div className="feature-check-item">
                  <div className="feature-check-icon">
                    <CheckCircle2 size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Kartu SIM IoT Khusus M2M Telkomsel / Indosat</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Koneksi data prioritas tinggi tanpa khawatir pulsa hangus atau masa aktif terputus di tengah jalan.
                    </p>
                  </div>
                </div>

                <div className="feature-check-item">
                  <div className="feature-check-icon">
                    <CheckCircle2 size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Layanan Teknisi Datang ke Tempat (Home Service)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Teknisi bersertifikasi kami siap datang langsung ke garasi, kantor, atau pool armada Anda se-Jabodetabek.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go("/perangkat")}
                  className="btn-primary"
                >
                  <span>Lihat Pilihan Perangkat</span>
                  <ArrowRight size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => go("/harga")}
                  className="btn-outline"
                >
                  <span>Daftar Harga &amp; Paket</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ── 3. Core Features Grid ─────────────────────────────────────────── */}
      <FadeSection className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel icon={<Sparkles size={14} />}>
              {t.features.label}
            </SectionLabel>
            <h2 className="section-title mt-2">{t.features.title}</h2>
            <p className="section-subtitle">{t.features.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((f) => (
              <div key={f.title} className="feature-box-card">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80">
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => go("/fitur")}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              <span>Pelajari Semua Fitur Platform Telematika</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </FadeSection>

      {/* ── 4. Hardware Lineup Preview ────────────────────────────────────── */}
      <FadeSection className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <SectionLabel icon={<Cpu size={14} />}>{t.devices.label}</SectionLabel>
              <h2 className="section-title mt-2">{t.devices.title}</h2>
              <p className="section-subtitle max-w-xl">{t.devices.sub}</p>
            </div>
            <button
              type="button"
              onClick={() => go("/perangkat")}
              className="btn-outline self-start sm:self-auto shrink-0"
            >
              <span>Semua Perangkat ({GPS_DEVICES.length})</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GPS_DEVICES.map((d) => (
              <div key={d.id} className="device-card group">
                <div className="device-img-wrap">
                  <img src={d.image} alt={d.name} className="device-img" />
                  <span className={`device-badge ${d.badgeColor}`}>{d.badge}</span>
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {d.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                      {d.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {d.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => go("/perangkat")}
                      className="w-full py-2 px-3 rounded-lg bg-slate-50 text-slate-700 text-xs font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Lihat Spesifikasi</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* ── 5. Solusi Industri ────────────────────────────────────────────── */}
      <FadeSection className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel icon={<Layers size={14} />}>{t.solutions.label}</SectionLabel>
            <h2 className="section-title mt-2">{t.solutions.title}</h2>
            <p className="section-subtitle">{t.solutions.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="industry-card">
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center shrink-0">
                  {ind.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
                    {ind.tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1">{ind.title}</h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* ── 6. Cara Kerja / How It Works ──────────────────────────────────── */}
      <FadeSection className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel icon={<Activity size={14} />}>
              {t.howItWorks.label}
            </SectionLabel>
            <h2 className="section-title mt-2">{t.howItWorks.title}</h2>
            <p className="section-subtitle">{t.howItWorks.sub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="step-card">
              <span className="step-num-badge">01</span>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{t.howItWorks.step1Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.howItWorks.step1Desc}</p>
            </div>
            <div className="step-card">
              <span className="step-num-badge">02</span>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{t.howItWorks.step2Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.howItWorks.step2Desc}</p>
            </div>
            <div className="step-card">
              <span className="step-num-badge">03</span>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{t.howItWorks.step3Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.howItWorks.step3Desc}</p>
            </div>
            <div className="step-card">
              <span className="step-num-badge">04</span>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{t.howItWorks.step4Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.howItWorks.step4Desc}</p>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ── 7. Pricing Preview ────────────────────────────────────────────── */}
      <FadeSection className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel icon={<Sparkles size={14} />}>{t.pricing.label}</SectionLabel>
            <h2 className="section-title mt-2">{t.pricing.title}</h2>
            <p className="section-subtitle">{t.pricing.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}
              >
                {plan.popular && (
                  <div className="pricing-badge-popular">
                    <span>PALING BANYAK DIPILIH</span>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{plan.target}</p>
                </div>

                <div className="my-4 py-3 border-y border-slate-100">
                  <div className="text-2xl font-black font-mono text-slate-900">
                    {plan.priceDevice}
                  </div>
                  <div className="text-xs text-blue-600 font-semibold mt-0.5">
                    Server: {plan.serverFee}
                  </div>
                </div>

                <ul className="space-y-2.5 my-4 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => go("/kontak")}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xs"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* ── 8. FAQ Section ────────────────────────────────────────────────── */}
      <FadeSection className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel icon={<ShieldCheck size={14} />}>{t.faq.label}</SectionLabel>
            <h2 className="section-title mt-2">{t.faq.title}</h2>
            <p className="section-subtitle">{t.faq.sub}</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 shrink-0 transition-transform ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </FadeSection>

      {/* ── 9. Final Call to Action ───────────────────────────────────────── */}
      <section className="cta-banner-wrap">
        <div className="cta-banner-card">
          <div className="cta-banner-text">
            <h2>{t.cta.title}</h2>
            <p>{t.cta.desc}</p>
          </div>
          <div className="cta-banner-actions">
            <button
              type="button"
              onClick={() => go("/kontak")}
              className="btn-cta-white"
            >
              <span>{t.cta.btnBook}</span>
              <ArrowRight size={16} />
            </button>
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                "Halo Tim Transgo GPS, saya ingin jadwalkan pemasangan GPS armada."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-cta-whatsapp"
            >
              <Phone size={16} />
              <span>{t.cta.btnWa}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

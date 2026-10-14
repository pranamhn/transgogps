import React from "react";
import {
  Map,
  History,
  ShieldAlert,
  BarChart3,
  Smartphone,
  Cpu,
  Lock,
  Radio,
  CheckCircle2,
  ArrowRight,
  Database,
  Code,
  Zap,
  Activity,
  Layers,
} from "lucide-react";
import { go } from "../../hooks";
import { SectionLabel, FadeSection } from "../../components/ui";
import { CONTACT_INFO } from "../../data";

export default function FeaturesPage() {
  const deepFeatures = [
    {
      id: "live-map",
      icon: <Map size={24} className="text-blue-500" />,
      badge: "Real-Time Tracking",
      title: "Live Interactive Multi-Vehicle Map",
      desc: "Pantau pergerakan puluhan hingga ribuan kendaraan secara serentak dalam satu tampilan antarmuka peta interaktif berkecepatan tinggi tanpa lag.",
      highlights: [
        "Clustering armada otomatis saat zoom out",
        "Pewarnaan status ikon: Hijau (Bergerak), Kuning (Mesin Nyala/Idle), Merah (Mesin Mati), Biru (Cut-Off)",
        "Integrasi Google Maps & OpenStreetMap dengan opsi Street View dan Satelit HD",
        "Filter instan berdasarkan nomor polisi, nama pengemudi, atau pool cabang",
      ],
    },
    {
      id: "playback",
      icon: <History size={24} className="text-cyan-500" />,
      badge: "Historical Analytics",
      title: "Playback Riwayat Rute 90 Hari",
      desc: "Ketahui setiap kilometer yang dilalui kendaraan Anda. Putar ulang perjalanan masa lalu dengan kontrol kecepatan playback (1x s/d 16x).",
      highlights: [
        "Pencatatan titik singgah & lama durasi parkir lengkap dengan alamat akurat",
        "Grafik kecepatan per kilometer untuk evaluasi overspeeding",
        "Perhitungan total jarak tempuh (odometer virtual) dengan tingkat akurasi 99%",
        "Penyimpanan cloud aman hingga 90 hari (tersedia opsi 1 tahun untuk enterprise)",
      ],
    },
    {
      id: "geofence",
      icon: <ShieldAlert size={24} className="text-emerald-500" />,
      badge: "Smart Boundaries",
      title: "Geofencing Pintar & Custom Polygon",
      desc: "Buat zona virtual tak terbatas berbentuk lingkaran atau poligon custom di atas peta. Dapatkan alert otomatis begitu kendaraan melintas.",
      highlights: [
        "Notifikasi instan via WhatsApp dan push notification aplikasi smartphone",
        "Pengaturan jam operasional (misal: larangan keluar zona pada malam hari)",
        "Alert ganda: peringatan saat memasuki zona (entry) dan keluar zona (exit)",
        "Otomatisasi pengiriman laporan saat armada tiba di gudang atau customer (ETA)",
      ],
    },
    {
      id: "immobilizer",
      icon: <Lock size={24} className="text-rose-500" />,
      badge: "Anti-Theft Protocol",
      title: "Remote Engine Immobilizer (Cut-Off Mesin)",
      desc: "Perlindungan aset tertinggi dari ancaman pencurian atau penggelapan mobil rental. Putus kelistrikan kendaraan langsung dari genggaman Anda.",
      highlights: [
        "Algoritma keselamatan: mematikan mesin saat kecepatan di bawah 20 km/jam untuk menghindari kecelakaan",
        "Perintah via aplikasi internet data atau cadangan SMS fallback jika internet lemah",
        "Sensor sabotase kabel: sirene & notifikasi darurat saat aki utama diputus paksa",
        "Baterai cadangan internal yang mempertahankan sinyal GPS hingga berjam-jam",
      ],
    },
    {
      id: "fuel",
      icon: <Activity size={24} className="text-amber-500" />,
      badge: "Cost Efficiency",
      title: "Sensor Bahan Bakar & Konsumsi BBM",
      desc: "Monitoring tangki bahan bakar secara presisi untuk armada truk dan bus. Deteksi dini pencurian bahan bakar (siphoning) dan boros BBM.",
      highlights: [
        "Sensor batang ultrasonik atau kapasitif dengan akurasi hingga mililiter",
        "Grafik penurunan BBM tidak wajar saat kendaraan dalam kondisi parkir",
        "Kalkulasi rasio efisiensi liter per 100 kilometer per pengemudi",
        "Laporan pengisian BBM lengkap dengan waktu dan koordinat SPBU",
      ],
    },
    {
      id: "api",
      icon: <Code size={24} className="text-purple-500" />,
      badge: "Enterprise Integration",
      title: "Open REST API & Webhook Telematika",
      desc: "Hubungkan data koordinat, status pengiriman, dan telemetri kendaraan langsung ke ERP perusahaan Anda (SAP, Odoo, internal TMS).",
      highlights: [
        "REST API terdokumentasi lengkap dengan autentikasi API Key / OAuth2",
        "Real-time Webhook event untuk notifikasi trigger otomatis",
        "Ekspor otomatis ke format Excel, CSV, dan PDF terjadwal via email",
        "Multi-tier permission: Super Admin, Fleet Manager, Dispatcher, dan Viewer",
      ],
    },
  ];

  return (
    <div className="subpage-wrap">
      {/* Page Header */}
      <section className="subpage-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <SectionLabel icon={<Zap size={14} />}>FITUR PLATFORM TELEMATIKA</SectionLabel>
          <h1 className="subpage-title mt-2">
            Platform Monitoring Armada Paling Lengkap &amp; Terintegrasi
          </h1>
          <p className="subpage-subtitle">
            Kombinasi perangkat keras IoT berdaya tahan tinggi dengan sistem cloud cerdas untuk kendali operasional 100% transparan.
          </p>
        </div>
      </section>

      {/* Feature Deep Dive Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {deepFeatures.map((feat, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <FadeSection key={feat.id} className="feature-deep-row">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        {feat.icon}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {feat.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                      {feat.title}
                    </h2>

                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {feat.desc}
                    </p>

                    <div className="space-y-2.5">
                      {feat.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => go("/kontak")}
                        className="btn-primary text-sm"
                      >
                        <span>Jadwalkan Demo Fitur Ini</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="feature-mockup-frame">
                      <div className="mockup-top-bar">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="text-xs font-mono text-slate-400 ml-2">
                          transgogps.id/live-telematics
                        </span>
                      </div>
                      <div className="mockup-body">
                        <div className="p-4 space-y-3">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                            <span className="text-sm font-bold text-slate-800">{feat.title}</span>
                            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                              CONNECTED
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                              <span className="text-xs text-slate-400 block font-semibold">Status Sinyal</span>
                              <span className="font-bold text-slate-800">4G LTE-M (99.8%)</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                              <span className="text-xs text-slate-400 block font-semibold">Interval Update</span>
                              <span className="font-bold text-slate-800">Tiap 10 Detik</span>
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 italic">
                            *Fitur ini aktif otomatis pada seluruh varian perangkat Transgo GPS tanpa biaya setup tambahan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeSection>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Ingin Menguji Coba Seluruh Fitur Ini untuk Armada Anda?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl mx-auto">
            Dapatkan akun demo gratis dan konsultasi paket GPS yang sesuai dengan jumlah unit kendaraan Anda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button type="button" onClick={() => go("/kontak")} className="btn-primary">
              <span>Konsultasi Demo Gratis</span>
              <ArrowRight size={15} />
            </button>
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                "Halo Tim Transgo GPS, saya ingin meminta akses demo fitur platform telematika."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <span>Chat WhatsApp (+62 821-1549-384)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

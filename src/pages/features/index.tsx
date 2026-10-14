import React from "react";
import {
  Map,
  History,
  ShieldAlert,
  Zap,
  Lock,
  Activity,
  Code,
  ArrowRight,
} from "lucide-react";
import { go } from "../../hooks";
import { PageHero } from "../../components/ui";
import { CONTACT_INFO } from "../../data";
import { FeatureRow, DeepFeatureItem } from "./components/FeatureRow";

export default function FeaturesPage() {
  const deepFeatures: DeepFeatureItem[] = [
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
      <PageHero
        icon={<Zap size={14} />}
        label="FITUR PLATFORM TELEMATIKA"
        title="Platform Monitoring Armada Paling Lengkap &amp; Terintegrasi"
        subtitle="Kombinasi perangkat keras IoT berdaya tahan tinggi dengan sistem cloud cerdas untuk kendali operasional 100% transparan."
      />

      {/* Feature Deep Dive Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {deepFeatures.map((feat, idx) => (
            <FeatureRow key={feat.id} feat={feat} isReversed={idx % 2 === 1} />
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Ingin Menguji Coba Seluruh Fitur Ini untuk Armada Anda?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl mx-auto">
            Dapatkan akun demo gratis dan konsultasi paket GPS yang sesuai dengan jumlah unit kendaraan Anda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go("/kontak")}
              className="btn-primary"
            >
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
              <span>Chat WhatsApp ({CONTACT_INFO.phone})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import {
  Sparkles,
  ArrowRight,
  Radio,
  Lock,
  Map,
  History,
  BarChart3,
  Smartphone,
} from "lucide-react";
import { useLang } from "../../../i18n";
import { go } from "../../../hooks";
import { FadeSection, SectionHeader, Badge } from "../../../components/ui";

export default function CoreFeaturesSection() {
  const { t } = useLang();

  const coreFeatures = [
    {
      icon: <Radio size={24} className="text-blue-500" />,
      title: "Pelacakan Satelit Tiap 10 Detik",
      desc: "Menampilkan titik koordinat kendaraan di peta secara real-time dengan akurasi < 2.5 meter berkat modul GNSS multi-konstelasi.",
      badge: "Real-Time 10s",
      badgeVariant: "blue" as const,
    },
    {
      icon: <Lock size={24} className="text-rose-500" />,
      title: "Remote Engine Immobilizer",
      desc: "Matikan kelistrikan mesin kendaraan dari jarak jauh via smartphone dalam hitungan detik saat terjadi indikasi pencurian.",
      badge: "Anti Maling",
      badgeVariant: "rose" as const,
    },
    {
      icon: <Map size={24} className="text-emerald-500" />,
      title: "Geofencing & Polygon Alert",
      desc: "Tentukan batas zona aman operasional. Dapatkan alert instan ke WhatsApp & notifikasi aplikasi begitu kendaraan keluar koridor.",
      badge: "Zona Aman",
      badgeVariant: "emerald" as const,
    },
    {
      icon: <History size={24} className="text-cyan-500" />,
      title: "Playback Riwayat Rute 90 Hari",
      desc: "Putar ulang histori perjalanan pengemudi lengkap dengan kecepatan, durasi singgah, kilometer tempuh, dan lokasi parkir.",
      badge: "90 Hari Log",
      badgeVariant: "cyan" as const,
    },
    {
      icon: <BarChart3 size={24} className="text-amber-500" />,
      title: "Analisis Perilaku Driver (Eco-Driving)",
      desc: "Deteksi pengereman mendadak, akselerasi kasar, dan overspeeding untuk meminimalisir risiko kecelakaan dan boros bahan bakar.",
      badge: "Driver Safety",
      badgeVariant: "amber" as const,
    },
    {
      icon: <Smartphone size={24} className="text-purple-500" />,
      title: "Multi-Platform Web & Mobile App",
      desc: "Akses pemantauan armada lewat aplikasi Android & iOS responsif atau portal browser desktop berkecepatan tinggi.",
      badge: "iOS & Android",
      badgeVariant: "purple" as const,
    },
  ];

  return (
    <FadeSection className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={<Sparkles size={14} />}
          label={t.features.label}
          title={t.features.title}
          subtitle={t.features.sub}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((f) => (
            <div key={f.title} className="feature-box-card">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                  {f.icon}
                </div>
                <Badge variant={f.badgeVariant}>{f.badge}</Badge>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            type="button"
            onClick={() => go("/fitur")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>Pelajari Semua Fitur Platform Telematika</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </FadeSection>
  );
}

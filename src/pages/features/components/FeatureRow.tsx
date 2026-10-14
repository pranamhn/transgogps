import React from "react";
import {
  CheckCircle2,
  Navigation,
  History,
  ShieldAlert,
  Lock,
  Fuel,
  Code2,
  Wifi,
  Radio,
  Clock,
  AlertTriangle,
  Send,
  Zap,
} from "lucide-react";
import { FadeSection } from "../../../components/ui";

export interface DeepFeatureItem {
  id: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  desc: string;
  highlights: string[];
}

function FeatureMockup({ id, title }: { id: string; title: string }) {
  switch (id) {
    case "live-map":
      return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-slate-300 ml-2">LIVE GNSS TELEMETRY</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              REFRESH 10s
            </span>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Unit Aktif</span>
                <span className="text-base font-bold text-slate-900">Toyota Avanza (B 1892 TGM)</span>
                <p className="text-xs text-slate-500 mt-0.5">Jl. Gatot Subroto No.18, Jakarta Selatan</p>
              </div>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                54 km/jam • Bergerak
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold mb-0.5">Koordinat Presisi</span>
                <span className="font-mono font-bold text-slate-800">-6.230412, 106.816982</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold mb-0.5">Satelit Terkunci</span>
                <span className="font-bold text-slate-800 flex items-center gap-1 text-emerald-600">
                  <Radio size={13} /> 18 GNSS (±2.1m)
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold mb-0.5">Jaringan Kartu SIM</span>
                <span className="font-bold text-slate-800 flex items-center gap-1">
                  <Wifi size={13} className="text-blue-500" /> Telkomsel M2M 4G
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold mb-0.5">Arah Kendaraan</span>
                <span className="font-bold text-slate-800">Barat Daya (215°)</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              *Koordinat diperbarui otomatis tiap 10 detik tanpa delay melalui transmisi data cloud berkecepatan tinggi.
            </div>
          </div>
        </div>
      );

    case "playback":
      return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-slate-300 ml-2">ROUTE PLAYBACK ARCHIVE</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              90 HARI CLOUD
            </span>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Riwayat Perjalanan</span>
                <span className="text-base font-bold text-slate-900">Pool Jakarta Selatan → Kawasan Cikarang</span>
                <p className="text-xs text-slate-500 mt-0.5">12 Oktober 2026 • 08:15 WIB s/d 11:57 WIB</p>
              </div>
              <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                Speed 4x
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 font-semibold block text-[11px]">Total Jarak</span>
                <span className="font-mono font-bold text-slate-900 text-sm mt-0.5 block">142.8 km</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 font-semibold block text-[11px]">Waktu Tempuh</span>
                <span className="font-mono font-bold text-slate-900 text-sm mt-0.5 block">3j 42m</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 font-semibold block text-[11px]">Maks Kecepatan</span>
                <span className="font-mono font-bold text-rose-600 text-sm mt-0.5 block">82 km/jam</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1 font-semibold">
                  <Clock size={12} className="text-blue-500" /> Titik Singgah / Parkir:
                </span>
                <span className="font-bold text-slate-800">3 Titik (Total 45 Menit)</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full w-3/4 rounded-full" />
              </div>
            </div>

            <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              *Data rute historis tersimpan aman selama 90 hari dan dapat diekspor ke format Excel atau PDF kapan saja.
            </div>
          </div>
        </div>
      );

    case "geofence":
      return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-slate-300 ml-2">SMART GEOFENCE RADAR</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              ARMED 24/7
            </span>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Zona Poligon</span>
                <span className="text-base font-bold text-slate-900">Perimeter Gudang Cakung Timur</span>
                <p className="text-xs text-slate-500 mt-0.5">Area Operasional Resmi (Radius 2.4 km²)</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                Active Zone
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
                <AlertTriangle size={14} className="text-amber-600" />
                Alert Keluar Batas Zona (Exit Event)
              </div>
              <p className="text-xs text-amber-700">
                Unit <strong>B 9481 TGL</strong> melintasi batas zona terlarang pada <strong>14:32 WIB</strong>.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Send size={14} className="text-emerald-600" />
                <div>
                  <span className="font-bold text-slate-800 block">Notifikasi WhatsApp Otomatis</span>
                  <span className="text-slate-500">Terkirim ke +62811-1454-7322 (Status: Terkirim)</span>
                </div>
              </div>
              <span className="font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">DELIVERED</span>
            </div>

            <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              *Tentukan zona tanpa batas berbentuk lingkaran atau poligon custom sesuai kebutuhan rute bisnis Anda.
            </div>
          </div>
        </div>
      );

    case "immobilizer":
      return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-slate-300 ml-2">ENGINE IMMOBILIZER PROTOCOL</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
              INTERLOCK ARMED
            </span>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Status Kelistrikan</span>
                <span className="text-base font-bold text-slate-900">Relay Pemutus Arus Mesin</span>
                <p className="text-xs text-slate-500 mt-0.5">Terkoneksi ke ignition switch dan pompa bahan bakar</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                Engine Running
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold mb-0.5">Ambang Kecepatan Aman</span>
                <span className="font-bold text-slate-800">&lt; 20 km/jam (Anti-Kecelakaan)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold mb-0.5">Jalur Perintah Eksekusi</span>
                <span className="font-bold text-slate-800">Internet App + SMS Backup</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-rose-600" />
                <div>
                  <span className="text-xs font-bold text-rose-800 block">Perintah Matikan Mesin Siaga</span>
                  <span className="text-[11px] text-rose-600">Tekan tombol cut-off untuk mematikan mesin jarak jauh</span>
                </div>
              </div>
              <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-md border border-rose-200">
                READY
              </span>
            </div>

            <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              *Algoritma keselamatan mencegah mesin mati mendadak di jalan tol; eksekusi aktif saat kendaraan melambat atau parkir.
            </div>
          </div>
        </div>
      );

    case "fuel":
      return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-slate-300 ml-2">ULTRASONIC FUEL TELEMETRY</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              AKURASI 99%
            </span>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Kapasitas Tangki Solar</span>
                <span className="text-base font-bold text-slate-900">88.5 Liter / 120 Liter</span>
                <p className="text-xs text-slate-500 mt-0.5">Truk Hino 500 Wingbox (B 9481 TGL)</p>
              </div>
              <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
                73.7% Sisa BBM
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-600">
                <span>Level BBM Aktual</span>
                <span>Normal Consumption</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-[73.7%] rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold mb-0.5">Rasio Rata-rata</span>
                <span className="font-bold text-slate-800">1 Liter : 7.8 km</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold mb-0.5">Deteksi Siphoning</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 size={13} /> Aman (No Sudden Drop)
                </span>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              *Sensor ultrasonik dipasang di bawah tangki tanpa mengebor dan tanpa kontak langsung dengan bahan bakar.
            </div>
          </div>
        </div>
      );

    case "api":
      return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-slate-300 ml-2">ENTERPRISE REST API &amp; WEBHOOK</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              v1 STABLE
            </span>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                  POST
                </span>
                <span className="text-xs font-mono font-bold text-slate-800">
                  /api/v1/telemetry/stream
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500">24ms • 200 OK</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 text-slate-200 font-mono text-[11px] space-y-1 overflow-x-auto leading-relaxed">
              <div className="text-slate-400">// Webhook Event Payload</div>
              <div>&#123;</div>
              <div className="pl-4 text-cyan-300">"event": <span className="text-amber-300">"vehicle.ignition_on"</span>,</div>
              <div className="pl-4 text-cyan-300">"plate": <span className="text-emerald-300">"B 1892 TGM"</span>,</div>
              <div className="pl-4 text-cyan-300">"coords": &#123; "lat": -6.23041, "lng": 106.81698 &#125;,</div>
              <div className="pl-4 text-cyan-300">"speed_kmh": <span className="text-amber-300">54</span>,</div>
              <div className="pl-4 text-cyan-300">"engine_cutoff": <span className="text-rose-400">false</span></div>
              <div>&#125;</div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold mb-0.5">Autentikasi</span>
                <span className="font-bold text-slate-800">Bearer Token / OAuth2</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold mb-0.5">Integrasi Kompatibel</span>
                <span className="font-bold text-slate-800">SAP, Odoo, TMS, ERP</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              *Tersedia SDK dan dokumentasi Swagger/OpenAPI lengkap untuk integrasi otomatis ke database perusahaan.
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export function FeatureRow({
  feat,
  isReversed,
}: {
  feat: DeepFeatureItem;
  isReversed: boolean;
}) {
  return (
    <FadeSection key={feat.id} className="feature-deep-row">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
              {feat.icon}
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {feat.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            {feat.title}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">{feat.desc}</p>

          <ul className="space-y-2.5">
            {feat.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
              >
                <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Contextual Mockup Card */}
        <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
          <FeatureMockup id={feat.id} title={feat.title} />
        </div>
      </div>
    </FadeSection>
  );
}

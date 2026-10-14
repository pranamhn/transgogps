import React from "react";
import {
  Car,
  Truck,
  Zap,
  Wrench,
  Snowflake,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Building2,
} from "lucide-react";
import { go } from "../../hooks";
import { SectionLabel, FadeSection } from "../../components/ui";
import { CONTACT_INFO } from "../../data";

export default function SolutionsPage() {
  const industrySolutions = [
    {
      id: "rental",
      title: "Rental Mobil & Taksi Online",
      subtitle: "Proteksi Maksimal dari Risiko Penggelapan & Sewa Macet",
      icon: <Car size={26} className="text-blue-500" />,
      tag: "Rental & Ride-Hailing",
      problem: "Mobil rental dibawa kabur ke luar pulau, digadaikan pihak ketiga, atau pembayaran sewa macet berhari-hari.",
      solution: "Transgo GPS menyediakan geofence lintas pulau, alarm aki dicabut, serta saklar remote immobilizer untuk mematikan mesin seketika jika penyewa melanggar perjanjian sewa.",
      benefits: [
        "Pemasangan OBD-II atau kabel tersembunyi tanpa merusak garansi mobil",
        "Geofence batas kota (misal: alarm saat unit mendekati pelabuhan penyeberangan)",
        "Playback rute 90 hari untuk bukti riwayat penggunaan",
        "Aplikasi multi-user untuk staf operasional dan pemilik rental",
      ],
      recommendedDevice: "Transgo OBD-II Plug & Play atau Micro 4G Pro",
    },
    {
      id: "logistics",
      title: "Ekspedisi, Truk Kargo & Logistik",
      subtitle: "Visibilitas Pengiriman Real-Time & Efisiensi Bahan Bakar",
      icon: <Truck size={26} className="text-emerald-500" />,
      tag: "Freight & Logistics",
      problem: "Supir melenceng dari rute resmi, overspeeding berbahaya, waktu bongkar muat molor, dan maraknya siphoning (pencurian solar BBM).",
      solution: "Monitoring posisi truk secara akurat per 10 detik, sensor bahan bakar ultrasonik anti-sedot, serta laporan otomatis jam jalan vs jam istirahat pengemudi.",
      benefits: [
        "Sensor tangki solar dengan akurasi grafik penurunan BBM mencurigakan",
        "Perhitungan estimasi kedatangan (ETA) otomatis yang dapat dibagikan ke klien",
        "Alarm batas kecepatan maksimal untuk menjaga keselamatan kargo",
        "Ekspor laporan jam operasional dan odometer perjalanan ke Excel",
      ],
      recommendedDevice: "Transgo Heavy-Duty Pro IP67 + Ultrasonic Fuel Sensor",
    },
    {
      id: "ev",
      title: "Armada Motor Listrik (EV) & Kurir",
      subtitle: "Optimasi Jarak Tempuh & Keamanan Baterai Pack",
      icon: <Zap size={26} className="text-amber-500" />,
      tag: "EV & Delivery Fleet",
      problem: "Motor kurir rawan pencurian saat parkir di lokasi pengantaran, baterai drop di tengah jalan, dan kesulitan melacak puluhan rider kurir.",
      solution: "Transgo Micro 4G dirancang khusus dengan rentang tegangan lebar hingga 90V DC sehingga dapat membaca langsung daya baterai motor listrik tanpa merusak sistem kelistrikan BMS.",
      benefits: [
        "Tegangan aman 9V - 90V DC untuk Polytron, Maka, Smoot, Volta, dll.",
        "Sensor getar pintar: sirene berbunyi saat motor digeser paksa saat parkir",
        "Pemberitahuan sisa daya baterai dan peringatan low-battery",
        "Dukungan multi-kendaraan dalam satu peta monitoring operasional kurir",
      ],
      recommendedDevice: "Transgo Micro 4G Tracker High-Voltage",
    },
    {
      id: "heavy",
      title: "Alat Berat, Tambang & Konstruksi",
      subtitle: "Pengawasan Jam Kerja Mesin (Hour Meter) & Perimeter Proyek",
      icon: <Wrench size={26} className="text-purple-500" />,
      tag: "Heavy Equipment",
      problem: "Klaim sewa alat berat tidak sesuai jam operasional riil, unit dibawa keluar dari batas IUP tambang, dan kondisi lingkungan berdebu/ekstrim.",
      solution: "Hardware IP67 tahan debu, air, dan getaran ekstrem. Pencatatan jam kerja mesin akurat untuk jadwal preventive maintenance berkala.",
      benefits: [
        "Pencatatan Hour Meter mesin menyala vs diam untuk audit invoice sewa",
        "Geofence batas perimeter konsesi proyek / IUP tambang",
        "Housing tahan banting bersertifikasi IP67 Waterproof & Dustproof",
        "Dual external antenna untuk daya tangkap sinyal di pelosok daerah",
      ],
      recommendedDevice: "Transgo Heavy-Duty Pro Industrial IP67",
    },
    {
      id: "coldchain",
      title: "Distribusi Cold-Chain & Farmasi",
      subtitle: "Jaminan Kualitas Suhu Kargo Makanan Segar & Vaksin",
      icon: <Snowflake size={26} className="text-cyan-500" />,
      tag: "Cold-Chain & Pharma",
      problem: "Mesin pendingin reefer mati tanpa diketahui supir, menyebabkan ribuan produk beku, daging, atau obat-obatan rusak membusuk sebelum sampai tujuan.",
      solution: "Transgo Cold-Chain IoT memadukan pelacak lokasi GPS dengan sensor temperatur berakurasi tinggi yang memicu alert seketika jika suhu keluar dari ambang batas aman.",
      benefits: [
        "Sensor suhu digital rentang -40°C hingga +80°C",
        "Alarm seketika via WhatsApp jika suhu naik melewati batas toleransi",
        "Sensor magnetik buka-tutup pintu belakang box pendingin",
        "Laporan audit kurva suhu lengkap untuk kepatuhan BPOM / HACCP",
      ],
      recommendedDevice: "Transgo Cold-Chain IoT Pro + Temperature Probe",
    },
  ];

  return (
    <div className="subpage-wrap">
      {/* Page Header */}
      <section className="subpage-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <SectionLabel icon={<Building2 size={14} />}>SOLUSI SESUAI INDUSTRI</SectionLabel>
          <h1 className="subpage-title mt-2">
            Solusi Telematika yang Disesuaikan dengan Karakter Bisnis Anda
          </h1>
          <p className="subpage-subtitle">
            Dari puluhan motor listrik kurir hingga ratusan truk logistik dan alat berat, Transgo GPS siap meningkatkan efisiensi dan melindungi seluruh aset bergerak Anda.
          </p>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {industrySolutions.map((sol) => (
            <FadeSection key={sol.id} className="industry-solution-card">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  {sol.icon}
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block">
                      {sol.tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                      {sol.title}
                    </h2>
                    <p className="text-sm text-slate-500 font-medium mt-1">
                      {sol.subtitle}
                    </p>
                  </div>

                  {/* Problem & Solution Callout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div>
                      <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-1">
                        Tantangan Utama
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {sol.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                        Solusi Transgo GPS
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {sol.solution}
                      </p>
                    </div>
                  </div>

                  {/* Benefit Points */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-2">Manfaat Nyata untuk Operasional:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sol.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended device & CTA */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-slate-500">
                      Rekomendasi Alat: <strong className="text-slate-800">{sol.recommendedDevice}</strong>
                    </span>

                    <button
                      type="button"
                      onClick={() => go("/kontak")}
                      className="btn-primary text-xs"
                    >
                      <span>Konsultasi Solusi Ini</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ROI Banner */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-3">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Investasi GPS yang Membayar Dirinya Sendiri dalam 30 Hari
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
            Penghematan konsumsi bahan bakar 15-20%, penghapusan risiko kehilangan kendaraan, dan disiplin rute pengemudi menghasilkan ROI (Return on Investment) instan bagi bisnis armada Anda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button type="button" onClick={() => go("/harga")} className="btn-primary">
              <span>Bandingkan Paket &amp; Harga</span>
              <ArrowRight size={15} />
            </button>
            <button type="button" onClick={() => go("/kontak")} className="btn-outline">
              <span>Hitung Estimasi Penghematan</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import {
  Car,
  Truck,
  Zap,
  Wrench,
  Snowflake,
  ArrowRight,
  TrendingUp,
  Building2,
} from "lucide-react";
import { go } from "../../hooks";
import { PageHero } from "../../components/ui";
import {
  IndustrySolutionCard,
  IndustrySolutionItem,
} from "./components/IndustrySolutionCard";

export default function SolutionsPage() {
  const industrySolutions: IndustrySolutionItem[] = [
    {
      id: "rental",
      title: "Rental Mobil & Taksi Online",
      subtitle: "Proteksi Maksimal dari Risiko Penggelapan & Sewa Macet",
      icon: <Car size={26} className="text-blue-500" />,
      tag: "Rental & Ride-Hailing",
      problem:
        "Mobil rental dibawa kabur ke luar pulau, digadaikan pihak ketiga, atau pembayaran sewa macet berhari-hari.",
      solution:
        "Transgo GPS menyediakan geofence lintas pulau, alarm aki dicabut, serta saklar remote immobilizer untuk mematikan mesin seketika jika penyewa melanggar perjanjian sewa.",
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
      problem:
        "Supir melenceng dari rute resmi, overspeeding berbahaya, waktu bongkar muat molor, dan maraknya siphoning (pencurian solar BBM).",
      solution:
        "Monitoring posisi truk secara akurat per 10 detik, sensor bahan bakar ultrasonik anti-sedot, serta laporan otomatis jam jalan vs jam istirahat pengemudi.",
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
      problem:
        "Motor kurir rawan pencurian saat parkir di lokasi pengantaran, baterai drop di tengah jalan, dan kesulitan melacak puluhan rider kurir.",
      solution:
        "Transgo Micro 4G dirancang khusus dengan rentang tegangan lebar hingga 90V DC sehingga dapat membaca langsung daya baterai motor listrik tanpa merusak sistem kelistrikan BMS.",
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
      problem:
        "Klaim sewa alat berat tidak sesuai jam operasional riil, unit dibawa keluar dari batas IUP tambang, dan kondisi lingkungan berdebu/ekstrim.",
      solution:
        "Hardware IP67 tahan debu, air, dan getaran ekstrem. Pencatatan jam kerja mesin akurat untuk jadwal preventive maintenance berkala.",
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
      problem:
        "Mesin pendingin reefer mati tanpa diketahui supir, menyebabkan ribuan produk beku, daging, atau obat-obatan rusak membusuk sebelum sampai tujuan.",
      solution:
        "Transgo Cold-Chain IoT memadukan pelacak lokasi GPS dengan sensor temperatur berakurasi tinggi yang memicu alert seketika jika suhu keluar dari ambang batas aman.",
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
      <PageHero
        icon={<Building2 size={14} />}
        label="SOLUSI SESUAI INDUSTRI"
        title="Solusi Telematika yang Disesuaikan dengan Karakter Bisnis Anda"
        subtitle="Dari puluhan motor listrik kurir hingga ratusan truk logistik dan alat berat, Transgo GPS siap meningkatkan efisiensi dan melindungi seluruh aset bergerak Anda."
      />

      {/* Solutions Detail */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industrySolutions.map((sol) => (
            <IndustrySolutionCard key={sol.id} sol={sol} />
          ))}
        </div>
      </section>

      {/* ROI Banner */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            <button
              type="button"
              onClick={() => go("/harga")}
              className="btn-primary"
            >
              <span>Bandingkan Paket &amp; Harga</span>
              <ArrowRight size={15} />
            </button>
            <button
              type="button"
              onClick={() => go("/kontak")}
              className="btn-outline"
            >
              <span>Hitung Estimasi Penghematan</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

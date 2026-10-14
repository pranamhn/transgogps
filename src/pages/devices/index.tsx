import React from "react";
import { Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import { go } from "../../hooks";
import { PageHero } from "../../components/ui";
import { GPS_DEVICES } from "../../data";
import { DeviceDetailCard } from "./components/DeviceDetailCard";
import { SpecsComparisonTable } from "./components/SpecsComparisonTable";

export default function DevicesPage() {
  return (
    <div className="subpage-wrap">
      {/* Page Header */}
      <PageHero
        icon={<Cpu size={14} />}
        label="KATALOG PERANGKAT GPS &amp; HARDWARE"
        title="Perangkat Keras IoT 4G Bersertifikasi Resmi Kominfo"
        subtitle="Hardware telematika tangguh berstandar otomotif internasional dengan modul GNSS multi-satelit dan sensor proteksi sabotase aki."
      />

      {/* Hardware Detail Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {GPS_DEVICES.map((dev) => (
            <DeviceDetailCard key={dev.id} dev={dev} />
          ))}
        </div>
      </section>

      {/* Comparison Specs Matrix Table */}
      <SpecsComparisonTable />

      {/* Warranty & Installation Service */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 mb-4">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Garansi Resmi 1 Tahun &amp; Layanan Teknisi Panggilan
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
            Setiap unit GPS Transgo dijamin garansi penggantian unit baru jika terjadi kerusakan teknis. Teknisi kami siap melayani pemasangan di rumah, kantor, atau pool armada Anda se-Jabodetabek.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go("/kontak")}
              className="btn-primary"
            >
              <span>Jadwalkan Teknisi Sekarang</span>
              <ArrowRight size={15} />
            </button>
            <button
              type="button"
              onClick={() => go("/harga")}
              className="btn-outline"
            >
              <span>Lihat Paket Berlangganan</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

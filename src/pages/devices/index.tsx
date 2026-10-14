import React from "react";
import {
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BatteryCharging,
  Zap,
  Activity,
  Radio,
  FileCheck,
  Wrench,
} from "lucide-react";
import { go } from "../../hooks";
import { SectionLabel, FadeSection } from "../../components/ui";
import { GPS_DEVICES, CONTACT_INFO } from "../../data";

export default function DevicesPage() {
  return (
    <div className="subpage-wrap">
      {/* Page Header */}
      <section className="subpage-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <SectionLabel icon={<Cpu size={14} />}>KATALOG PERANGKAT GPS &amp; HARDWARE</SectionLabel>
          <h1 className="subpage-title mt-2">
            Perangkat Keras IoT 4G Bersertifikasi Resmi Kominfo
          </h1>
          <p className="subpage-subtitle">
            Hardware telematika tangguh berstandar otomotif internasional dengan modul GNSS multi-satelit dan sensor proteksi sabotase aki.
          </p>
        </div>
      </section>

      {/* Hardware Detail Cards */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          {GPS_DEVICES.map((dev) => (
            <FadeSection key={dev.id} className="device-detail-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Photo Col */}
                <div className="lg:col-span-5">
                  <div className="device-detail-img-wrap">
                    <img src={dev.image} alt={dev.name} className="device-detail-img" />
                    <span className={`device-detail-badge ${dev.badgeColor}`}>
                      {dev.badge}
                    </span>
                  </div>
                </div>

                {/* Specs Col */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block">
                      {dev.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                      {dev.name}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      {dev.tagline}
                    </p>
                  </div>

                  {/* Tech Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-slate-100">
                    <div className="text-sm">
                      <span className="text-slate-400 block text-xs uppercase font-semibold">Jaringan Seluler</span>
                      <span className="font-bold text-slate-800">{dev.specs.network}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-slate-400 block text-xs uppercase font-semibold">Akurasi Satelit</span>
                      <span className="font-bold text-slate-800">{dev.specs.accuracy}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-slate-400 block text-xs uppercase font-semibold">Rentang Tegangan</span>
                      <span className="font-bold text-slate-800">{dev.specs.voltage}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-slate-400 block text-xs uppercase font-semibold">Baterai Cadangan Internal</span>
                      <span className="font-bold text-slate-800">{dev.specs.backupBattery}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-2">Fitur Sensor &amp; Proteksi:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dev.specs.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suitable For */}
                  <div className="pt-2">
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5">Sangat Cocok Untuk:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dev.suitableFor.map((app) => (
                        <span key={app} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/60">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center gap-3">
                    <a
                      href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                        `Halo Tim Transgo GPS, saya tertarik untuk konsultasi dan pemesanan perangkat ${dev.name}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary text-xs"
                    >
                      <span>Pesan Unit / Jadwalkan Pasang</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* Comparison Specs Matrix Table */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <SectionLabel icon={<FileCheck size={14} />}>PERBANDINGAN SPESIFIKASI</SectionLabel>
            <h2 className="section-title mt-2">Pilih Perangkat yang Tepat Sesuai Kebutuhan</h2>
            <p className="section-subtitle">
              Tabel komparasi teknis lengkap jajaran produk GPS telematika Transgo
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 font-bold uppercase tracking-wider text-slate-600">
                    <th className="py-3.5 px-4">Fitur Teknis</th>
                    <th className="py-3.5 px-4 text-center">Transgo Micro 4G</th>
                    <th className="py-3.5 px-4 text-center">Transgo OBD-II</th>
                    <th className="py-3.5 px-4 text-center">Transgo Heavy-Duty</th>
                    <th className="py-3.5 px-4 text-center">Cold-Chain IoT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Peruntukan Utama</td>
                    <td className="py-3 px-4 text-center">Motor &amp; EV</td>
                    <td className="py-3 px-4 text-center">Mobil &amp; Rental</td>
                    <td className="py-3 px-4 text-center">Truk &amp; Alat Berat</td>
                    <td className="py-3 px-4 text-center">Reefer &amp; Frozen</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Jaringan</td>
                    <td className="py-3 px-4 text-center">4G LTE-M / 2G</td>
                    <td className="py-3 px-4 text-center">4G LTE Cat 1</td>
                    <td className="py-3 px-4 text-center">4G LTE Global Band</td>
                    <td className="py-3 px-4 text-center">4G LTE M2M</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Instalasi Non-Destruktif</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">Ya (Soket Aman)</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">100% Plug &amp; Play</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">Ya (Relay Box)</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">Ya (Dual Sensor)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Remote Cut-Off Mesin</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">Tersedia</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">Tersedia</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">Tersedia</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">Tersedia</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Waterproof Rating</td>
                    <td className="py-3 px-4 text-center">IP65</td>
                    <td className="py-3 px-4 text-center">Standard Cabin</td>
                    <td className="py-3 px-4 text-center text-blue-600 font-bold">IP67 Waterproof</td>
                    <td className="py-3 px-4 text-center text-blue-600 font-bold">IP67 Waterproof</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Sensor Suhu Pendingin</td>
                    <td className="py-3 px-4 text-center text-slate-400">—</td>
                    <td className="py-3 px-4 text-center text-slate-400">—</td>
                    <td className="py-3 px-4 text-center text-slate-400">Opsional</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">Built-in Probe (-40°C)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Garansi Tukar Baru</td>
                    <td className="py-3 px-4 text-center">1 Tahun Resmi</td>
                    <td className="py-3 px-4 text-center">1 Tahun Resmi</td>
                    <td className="py-3 px-4 text-center">1 Tahun Resmi</td>
                    <td className="py-3 px-4 text-center">1 Tahun Resmi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty & Installation Service */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
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
            <button type="button" onClick={() => go("/kontak")} className="btn-primary">
              <span>Jadwalkan Teknisi Sekarang</span>
              <ArrowRight size={15} />
            </button>
            <button type="button" onClick={() => go("/harga")} className="btn-outline">
              <span>Lihat Paket Berlangganan</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

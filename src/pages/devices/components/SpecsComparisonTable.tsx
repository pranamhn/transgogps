import React from "react";
import { FileCheck } from "lucide-react";
import { SectionLabel } from "../../../components/ui";

export function SpecsComparisonTable() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="site-container">
        <div className="text-center mb-10">
          <SectionLabel icon={<FileCheck size={14} />}>
            PERBANDINGAN SPESIFIKASI
          </SectionLabel>
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
  );
}

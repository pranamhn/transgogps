import React, { useState } from "react";
import { Calculator } from "lucide-react";
import { SectionLabel } from "../../../components/ui";

export default function RoiCalculator() {
  const [fleetSize, setFleetSize] = useState<number>(10);
  const [vehicleType, setVehicleType] = useState<"mobil" | "motor" | "truk">("mobil");

  const estFuelSavingsPerUnit =
    vehicleType === "truk" ? 1800000 : vehicleType === "mobil" ? 650000 : 150000;
  const totalMonthlySavings = fleetSize * estFuelSavingsPerUnit;
  const serverCostPerUnit =
    vehicleType === "truk" ? 65000 : vehicleType === "mobil" ? 45000 : 35000;
  const totalMonthlyCost = fleetSize * serverCostPerUnit;
  const netMonthlyProfit = totalMonthlySavings - totalMonthlyCost;

  function formatIDR(val: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  }

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <SectionLabel icon={<Calculator size={14} />}>
            KALKULATOR PENGHEMATAN ARMADA
          </SectionLabel>
          <h2 className="section-title mt-2">Hitung Estimasi Penghematan Bisnis Anda</h2>
          <p className="section-subtitle">
            Ketahui proyeksi efisiensi bahan bakar dan penghematan biaya operasional dengan sistem Transgo GPS.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Fleet Type Selector */}
            <div>
              <label className="text-sm font-bold text-slate-800 block mb-2">
                Tipe Kendaraan Armada:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["mobil", "truk", "motor"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setVehicleType(t)}
                    className={`py-2 px-3 rounded-xl border text-sm font-bold uppercase transition-all ${
                      vehicleType === t
                        ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Fleet Size Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-800">
                  Jumlah Kendaraan:
                </label>
                <span className="font-mono text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  {fleetSize} Unit
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1.5 font-medium">
                <span>1 Unit</span>
                <span>50 Unit</span>
                <span>100 Unit</span>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-500 font-semibold block">
                Estimasi Hemat BBM Bulanan
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-slate-900 mt-1 block">
                {formatIDR(totalMonthlySavings)}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-500 font-semibold block">
                Total Biaya Server / Bulan
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-slate-600 mt-1 block">
                {formatIDR(totalMonthlyCost)}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
              <span className="text-xs font-bold uppercase tracking-wider block text-emerald-600">
                Estimasi Surplus Bersih
              </span>
              <span className="text-2xl sm:text-3xl font-black font-mono mt-1 block text-emerald-700">
                +{formatIDR(netMonthlyProfit)}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-500 text-center leading-relaxed">
            *Kalkulasi didasarkan pada data rata-rata pemangkasan rute melenceng 15%, penurunan over-idling, dan pencegahan kehilangan kendaraan dari ribuan unit armada klien Transgo.
          </p>
        </div>
      </div>
    </section>
  );
}

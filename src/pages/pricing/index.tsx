import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calculator,
  HelpCircle,
  Phone,
  Layers,
  Zap,
} from "lucide-react";
import { go } from "../../hooks";
import { SectionLabel, FadeSection } from "../../components/ui";
import { PRICING_PLANS, CONTACT_INFO } from "../../data";

export default function PricingPage() {
  const [fleetSize, setFleetSize] = useState<number>(10);
  const [vehicleType, setVehicleType] = useState<"mobil" | "motor" | "truk">("mobil");

  // Interactive ROI calculation
  const estFuelSavingsPerUnit = vehicleType === "truk" ? 1800000 : vehicleType === "mobil" ? 650000 : 150000;
  const totalMonthlySavings = fleetSize * estFuelSavingsPerUnit;
  const serverCostPerUnit = vehicleType === "truk" ? 65000 : vehicleType === "mobil" ? 45000 : 35000;
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
    <div className="subpage-wrap">
      {/* Page Header */}
      <section className="subpage-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <SectionLabel icon={<Sparkles size={14} />}>PAKET &amp; HARGA TRANSPARAN</SectionLabel>
          <h1 className="subpage-title mt-2">
            Investasi Terjangkau untuk Kendali Penuh Seluruh Armada
          </h1>
          <p className="subpage-subtitle">
            Tanpa biaya tersembunyi. Seluruh paket sudah termasuk perangkat bergaransi resmi, kartu SIM M2M berkuota, dan akses cloud dashboard 24/7.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}
              >
                {plan.popular && (
                  <div className="pricing-badge-popular">
                    <span>REKOMENDASI TERBAIK</span>
                  </div>
                )}

                <div className="mb-4">
                  <h2 className="text-xl font-bold text-slate-900">{plan.name}</h2>
                  <p className="text-xs text-slate-500 mt-1">{plan.target}</p>
                </div>

                <div className="my-5 py-4 border-y border-slate-100">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
                    Biaya Perangkat
                  </span>
                  <div className="text-3xl font-black font-mono text-slate-900 mt-1">
                    {plan.priceDevice}
                  </div>
                  <div className="text-xs text-blue-600 font-semibold mt-1">
                    Langganan Server: {plan.serverFee}
                  </div>
                </div>

                <ul className="space-y-3 my-4 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => go("/kontak")}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all mt-4 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xs"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <SectionLabel icon={<Calculator size={14} />}>KALKULATOR PENGHEMATAN ARMADA</SectionLabel>
            <h2 className="section-title mt-2">Hitung Estimasi Penghematan Bisnis Anda</h2>
            <p className="section-subtitle">
              Ketahui proyeksi efisiensi bahan bakar dan penghematan biaya operasional dengan sistem Transgo GPS.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Fleet Type Selector */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-2">
                  Tipe Kendaraan Armada:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["mobil", "truk", "motor"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setVehicleType(t)}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold uppercase transition-all ${
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
                  <label className="text-xs font-bold text-slate-800">
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
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 Unit</span>
                  <span>50 Unit</span>
                  <span>100 Unit</span>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium block">
                  Estimasi Hemat BBM Bulanan
                </span>
                <span className="text-lg sm:text-xl font-bold font-mono text-slate-900 mt-1 block">
                  {formatIDR(totalMonthlySavings)}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium block">
                  Total Biaya Server / Bulan
                </span>
                <span className="text-lg sm:text-xl font-bold font-mono text-slate-600 mt-1 block">
                  {formatIDR(totalMonthlyCost)}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                <span className="text-[11px] font-bold uppercase tracking-wider block text-emerald-600">
                  Estimasi Surplus Bersih
                </span>
                <span className="text-xl sm:text-2xl font-black font-mono mt-1 block">
                  +{formatIDR(netMonthlyProfit)}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
              *Kalkulasi didasarkan pada data rata-rata pemangkasan rute melenceng 15%, penurunan over-idling, dan pencegahan kehilangan kendaraan dari ribuan unit armada klien Transgo.
            </p>
          </div>
        </div>
      </section>

      {/* Included Standards */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-slate-900">
              Standar Layanan yang Termasuk di Seluruh Paket
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
              <ShieldCheck size={22} className="text-blue-600 mx-auto mb-2" />
              <h4 className="text-xs font-bold text-slate-900">Garansi 1 Tahun</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Tukar unit baru langsung</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
              <Zap size={22} className="text-emerald-600 mx-auto mb-2" />
              <h4 className="text-xs font-bold text-slate-900">SIM Card M2M</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Kuota aktif tanpa isi pulsa</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
              <Layers size={22} className="text-purple-600 mx-auto mb-2" />
              <h4 className="text-xs font-bold text-slate-900">Multi-User Dashboard</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Akses tim tanpa batas</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
              <Phone size={22} className="text-amber-600 mx-auto mb-2" />
              <h4 className="text-xs font-bold text-slate-900">Support 24/7</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Bantuan darurat tim teknis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

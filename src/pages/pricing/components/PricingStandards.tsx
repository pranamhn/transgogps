import React from "react";
import { ShieldCheck, Zap, Layers, Phone } from "lucide-react";

export default function PricingStandards() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-slate-900">
            Standar Layanan yang Termasuk di Seluruh Paket
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
            <ShieldCheck size={24} className="text-blue-600 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-900">Garansi 1 Tahun</h4>
            <p className="text-xs text-slate-500 mt-1">Tukar unit baru langsung</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
            <Zap size={24} className="text-emerald-600 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-900">SIM Card M2M</h4>
            <p className="text-xs text-slate-500 mt-1">Kuota aktif tanpa isi pulsa</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
            <Layers size={24} className="text-purple-600 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-900">Multi-User Dashboard</h4>
            <p className="text-xs text-slate-500 mt-1">Akses tim tanpa batas</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
            <Phone size={24} className="text-amber-600 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-900">Support 24/7</h4>
            <p className="text-xs text-slate-500 mt-1">Bantuan darurat tim teknis</p>
          </div>
        </div>
      </div>
    </section>
  );
}

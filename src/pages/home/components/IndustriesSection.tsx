import React from "react";
import { Layers, Car, Truck, Zap, Wrench } from "lucide-react";
import { useLang } from "../../../i18n";
import { FadeSection, SectionHeader } from "../../../components/ui";

export default function IndustriesSection() {
  const { t } = useLang();

  const industries = [
    {
      title: "Rental Mobil & Taksi Online",
      desc: "Cegah mobil rental dibawa kabur ke luar pulau, pantau jam operasional pengemudi, dan matikan mesin seketika jika telat bayar sewa.",
      icon: <Car size={26} className="text-blue-500" />,
      tag: "Rental & Ride-Hailing",
    },
    {
      title: "Logistik, Truk & Ekspedisi",
      desc: "Monitoring status pengiriman barang, estimasi tiba di tujuan (ETA), rute perjalanan kapal/truk, dan sensor isi BBM anti-pencurian.",
      icon: <Truck size={26} className="text-emerald-500" />,
      tag: "Freight Logistics",
    },
    {
      title: "Motor Listrik (EV) & Kurir",
      desc: "Pemantauan voltase baterai pack EV, estimasi jarak tempuh sisa, serta perlindungan anti-maling untuk armada kurir last-mile.",
      icon: <Zap size={26} className="text-amber-500" />,
      tag: "EV & Delivery",
    },
    {
      title: "Alat Berat & Kontraktor Proyek",
      desc: "Pencatatan jam kerja mesin (Hour Meter) akurat untuk jadwal servis berkala serta geofence perimeter proyek konstruksi.",
      icon: <Wrench size={26} className="text-purple-500" />,
      tag: "Heavy Equipment",
    },
  ];

  return (
    <FadeSection className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="site-container">
        <SectionHeader
          icon={<Layers size={14} />}
          label={t.solutions.label}
          title={t.solutions.title}
          subtitle={t.solutions.sub}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind) => (
            <div key={ind.title} className="industry-card">
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center shrink-0">
                {ind.icon}
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">
                  {ind.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{ind.title}</h3>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}

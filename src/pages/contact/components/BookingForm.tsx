import React, { useState } from "react";
import { Calendar, CheckCircle2, Send, ShieldCheck } from "lucide-react";
import { useLang } from "../../../i18n";
import { CONTACT_INFO } from "../../../data";
import {
  FormInput,
  FormSelect,
  FormTextarea,
  FormRow,
} from "../../../components/ui";

export default function BookingForm() {
  const { lang } = useLang();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    vehicleType: "Mobil / Sedan / SUV",
    vehicleCount: "1 unit (Personal / Tester)",
    serviceType: "home_service",
    preferredDate: "",
    city: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const msg = encodeURIComponent(
      `Halo Transgo GPS, saya ${formData.name}${
        formData.company ? ` dari ${formData.company}` : ""
      }.\n` +
        `Saya ingin konsultasi/booking pemasangan GPS Tracker:\n` +
        `• No Telp/WA: ${formData.phone}\n` +
        `• Jenis Kendaraan: ${formData.vehicleType}\n` +
        `• Jumlah Armada: ${formData.vehicleCount}\n` +
        `• Layanan: ${
          formData.serviceType === "home_service"
            ? "Teknisi Datang ke Lokasi (Home/Office Service)"
            : "Instalasi di Workshop Transgo"
        }\n` +
        `• Kota/Lokasi: ${formData.city || "-"}\n` +
        `• Rencana Tanggal: ${formData.preferredDate || "Secepatnya"}\n` +
        `• Catatan: ${formData.notes || "-"}`
    );

    window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="contact-card form-card">
      <div className="form-header">
        <div className="form-icon-wrap">
          <Calendar size={22} className="text-cyan" />
        </div>
        <div>
          <h3 className="form-title">
            {lang === "id"
              ? "Formulir Jadwal Pasang & Penawaran"
              : "Booking & Quote Request"}
          </h3>
          <p className="form-subtitle">
            {lang === "id"
              ? "Isi data berikut, teknisi kami akan mengonfirmasi jadwal dalam 15 menit."
              : "Fill in the details, our engineers will confirm your slot within 15 minutes."}
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="form-success-alert">
          <CheckCircle2 size={36} className="text-emerald" />
          <h4>
            {lang === "id"
              ? "Permintaan Terkirim ke WhatsApp"
              : "Request Sent to WhatsApp"}
          </h4>
          <p>
            {lang === "id"
              ? "Tim teknis Transgo GPS segera memproses pesanan dan mengonfirmasi ketersediaan slot teknisi ke nomor Anda."
              : "Transgo GPS engineering team is verifying your appointment and will message your WhatsApp shortly."}
          </p>
          <button
            type="button"
            className="btn btn-secondary mt-3"
            onClick={() => setSubmitted(false)}
          >
            {lang === "id" ? "Kirim Jadwal Lain" : "Submit Another Request"}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <FormRow>
            <FormInput
              label={lang === "id" ? "Nama Lengkap" : "Full Name"}
              requiredMarker
              placeholder="Bpk. Hendra Pratama"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <FormInput
              label={lang === "id" ? "Nomor WhatsApp" : "WhatsApp Number"}
              requiredMarker
              type="tel"
              placeholder="0812-XXXX-XXXX"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </FormRow>

          <FormRow>
            <FormInput
              label={lang === "id" ? "Email Kantor / Pribadi" : "Work / Personal Email"}
              type="email"
              placeholder="fleet@perusahaan.co.id"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <FormInput
              label={lang === "id" ? "Nama Perusahaan / Bisnis" : "Company Name (Optional)"}
              placeholder="PT Logistik Jaya Express"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </FormRow>

          <FormRow>
            <FormSelect
              label={lang === "id" ? "Tipe Kendaraan" : "Vehicle Type"}
              value={formData.vehicleType}
              onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
              options={[
                { value: "Mobil / Sedan / SUV", label: "Mobil Penumpang / Rental / Operasional" },
                { value: "Truk / Box / Tronton", label: "Truk Ekspedisi / Box / Wingbox" },
                { value: "Motor / Sepeda Listrik EV", label: "Sepeda Motor / Motor Listrik EV" },
                { value: "Alat Berat / Excavator", label: "Alat Berat / Konstruksi / Genset" },
                { value: "Cold Storage / Reefer", label: "Truk Pendingin (Cold Chain)" },
              ]}
            />
            <FormSelect
              label={lang === "id" ? "Estimasi Jumlah Unit" : "Estimated Unit Count"}
              value={formData.vehicleCount}
              onChange={(e) => setFormData({ ...formData, vehicleCount: e.target.value })}
              options={[
                { value: "1 unit (Personal / Tester)", label: "1 Unit (Tester / Pribadi)" },
                { value: "2 - 5 unit", label: "2 - 5 Unit (Armada Kecil)" },
                { value: "6 - 20 unit", label: "6 - 20 Unit (Armada Menengah)" },
                { value: "21 - 50 unit", label: "21 - 50 Unit (Commercial Fleet)" },
                { value: "> 50 unit", label: "> 50 Unit (Enterprise / Corporate)" },
              ]}
            />
          </FormRow>

          <FormRow>
            <FormSelect
              label={lang === "id" ? "Metode Instalasi" : "Installation Method"}
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              options={[
                { value: "home_service", label: "Teknisi Datang ke Garasi (Home/Office Service)" },
                { value: "workshop", label: "Datang ke Workshop Resmi Transgo" },
              ]}
            />
            <FormInput
              label={lang === "id" ? "Kota / Wilayah Armada" : "City / Location"}
              placeholder="Jakarta Selatan, Tangerang, Bandung, dll"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </FormRow>

          <FormInput
            label={lang === "id" ? "Rencana Tanggal Pemasangan" : "Preferred Date"}
            type="date"
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
          />

          <FormTextarea
            label={lang === "id" ? "Kebutuhan Spesifik / Catatan Tambahan" : "Specific Requirements"}
            rows={3}
            placeholder={
              lang === "id"
                ? "Contoh: Perlu cut-off mesin jarak jauh, sensor bahan bakar magnetik, dan akses API ERP..."
                : "e.g. Need remote cut-off, fuel telemetry, and ERP webhook integration..."
            }
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />

          <button type="submit" className="btn btn-primary btn-block btn-lg">
            <Send size={18} />
            <span>{lang === "id" ? "Kirim & Hubungkan ke Teknisi Transgo" : "Submit & Connect with Engineer"}</span>
          </button>

          <p className="form-disclaimer">
            <ShieldCheck size={14} className="text-cyan inline mr-1" />
            <span>
              {lang === "id"
                ? "Pemasangan rapi tanpa potong kabel garansi utama kendaraan. Garansi alat ganti baru 1 tahun."
                : "Non-invasive wire-tap installation. 1-Year full replacement hardware warranty."}
            </span>
          </p>
        </form>
      )}
    </div>
  );
}

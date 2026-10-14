import React, { useState } from 'react';
import { useLang } from '../../i18n';
import { SectionLabel, FadeSection } from '../../components/ui';
import { CONTACT_INFO } from '../../data';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Wrench,
  Send,
  CheckCircle2,
  Calendar,
  Truck,
  MessageSquare,
} from 'lucide-react';

export default function ContactPage() {
  const { lang } = useLang();

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    vehicleType: 'Mobil / Sedan / SUV',
    vehicleCount: '1 unit (Personal / Tester)',
    serviceType: 'home_service',
    preferredDate: '',
    city: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Direct to WhatsApp with pre-filled message
    const msg = encodeURIComponent(
      `Halo Transgo GPS, saya ${formData.name}${formData.company ? ` dari ${formData.company}` : ''}.\n` +
      `Saya ingin konsultasi/booking pemasangan GPS Tracker:\n` +
      `• No Telp/WA: ${formData.phone}\n` +
      `• Jenis Kendaraan: ${formData.vehicleType}\n` +
      `• Jumlah Armada: ${formData.vehicleCount}\n` +
      `• Layanan: ${formData.serviceType === 'home_service' ? 'Teknisi Datang ke Lokasi (Home/Office Service)' : 'Instalasi di Workshop Transgo'}\n` +
      `• Kota/Lokasi: ${formData.city || '-'}\n` +
      `• Rencana Tanggal: ${formData.preferredDate || 'Secepatnya'}\n` +
      `• Catatan: ${formData.notes || '-'}`
    );

    window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="page-contact">
      {/* Hero Header */}
      <section className="page-hero">
        <div className="container">
          <SectionLabel>
            {lang === 'id' ? 'Konsultasi & Instalasi' : 'Consultation & Booking'}
          </SectionLabel>
          <h1 className="page-hero-title">
            {lang === 'id' ? (
              <>Jadwalkan <span className="gradient-text">Pemasangan GPS</span> & Demo Gratis</>
            ) : (
              <>Schedule <span className="gradient-text">GPS Installation</span> & Free Demo</>
            )}
          </h1>
          <p className="page-hero-desc">
            {lang === 'id'
              ? 'Layanan teknisi bersertifikat siap datang langsung ke garasi armada Anda (Home/Office Service) atau kunjungi workshop resmi Transgo GPS.'
              : 'Our certified mobile technicians come directly to your fleet depot, or visit the official Transgo GPS workshop.'}
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Contact Info */}
      <FadeSection className="section-contact-body">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Interactive Booking Form */}
            <div className="contact-card form-card">
              <div className="form-header">
                <div className="form-icon-wrap">
                  <Calendar size={22} className="text-cyan" />
                </div>
                <div>
                  <h3 className="form-title">
                    {lang === 'id' ? 'Formulir Jadwal Pasang & Penawaran' : 'Booking & Quote Request'}
                  </h3>
                  <p className="form-subtitle">
                    {lang === 'id'
                      ? 'Isi data berikut, teknisi kami akan mengonfirmasi jadwal dalam 15 menit.'
                      : 'Fill in the details, our engineers will confirm your slot within 15 minutes.'}
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="form-success-alert">
                  <CheckCircle2 size={36} className="text-emerald" />
                  <h4>{lang === 'id' ? 'Permintaan Terkirim ke WhatsApp' : 'Request Sent to WhatsApp'}</h4>
                  <p>
                    {lang === 'id'
                      ? 'Tim teknis Transgo GPS segera memproses pesanan dan mengonfirmasi ketersediaan slot teknisi ke nomor Anda.'
                      : 'Transgo GPS engineering team is verifying your appointment and will message your WhatsApp shortly.'}
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary mt-3"
                    onClick={() => setSubmitted(false)}
                  >
                    {lang === 'id' ? 'Kirim Jadwal Lain' : 'Submit Another Request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">{lang === 'id' ? 'Nama Lengkap *' : 'Full Name *'}</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Bpk. Hendra Pratama"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{lang === 'id' ? 'Nomor WhatsApp *' : 'WhatsApp Number *'}</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="0812-XXXX-XXXX"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">{lang === 'id' ? 'Email Kantor / Pribadi' : 'Work / Personal Email'}</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="fleet@perusahaan.co.id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{lang === 'id' ? 'Nama Perusahaan / Bisnis' : 'Company Name (Optional)'}</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="PT Logistik Jaya Express"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">{lang === 'id' ? 'Tipe Kendaraan' : 'Vehicle Type'}</label>
                      <select
                        className="form-select"
                        value={formData.vehicleType}
                        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      >
                        <option value="Mobil / Sedan / SUV">Mobil Penumpang / Rental / Operasional</option>
                        <option value="Truk / Box / Tronton">Truk Ekspedisi / Box / Wingbox</option>
                        <option value="Motor / Sepeda Listrik EV">Sepeda Motor / Motor Listrik EV</option>
                        <option value="Alat Berat / Excavator">Alat Berat / Konstruksi / Genset</option>
                        <option value="Cold Storage / Reefer">Truk Pendingin (Cold Chain)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">{lang === 'id' ? 'Estimasi Jumlah Unit' : 'Estimated Unit Count'}</label>
                      <select
                        className="form-select"
                        value={formData.vehicleCount}
                        onChange={(e) => setFormData({ ...formData, vehicleCount: e.target.value })}
                      >
                        <option value="1 unit (Personal / Tester)">1 Unit (Tester / Pribadi)</option>
                        <option value="2 - 5 unit">2 - 5 Unit (Armada Kecil)</option>
                        <option value="6 - 20 unit">6 - 20 Unit (Armada Menengah)</option>
                        <option value="21 - 50 unit">21 - 50 Unit (Commercial Fleet)</option>
                        <option value="> 50 unit">&gt; 50 Unit (Enterprise / Corporate)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">{lang === 'id' ? 'Metode Instalasi' : 'Installation Method'}</label>
                      <select
                        className="form-select"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      >
                        <option value="home_service">Teknisi Datang ke Garasi (Home/Office Service)</option>
                        <option value="workshop">Datang ke Workshop Resmi Transgo</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">{lang === 'id' ? 'Kota / Wilayah Armada' : 'City / Location'}</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Jakarta Selatan, Tangerang, Bandung, dll"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">{lang === 'id' ? 'Rencana Tanggal Pemasangan' : 'Preferred Date'}</label>
                    <input
                      type="date"
                      className="form-input"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{lang === 'id' ? 'Kebutuhan Spesifik / Catatan Tambahan' : 'Specific Requirements'}</label>
                    <textarea
                      className="form-textarea"
                      rows={3}
                      placeholder={lang === 'id' ? 'Contoh: Perlu cut-off mesin jarak jauh, sensor bahan bakar magnetik, dan akses API ERP...' : 'e.g. Need remote cut-off, fuel telemetry, and ERP webhook integration...'}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    <Send size={18} />
                    {lang === 'id' ? 'Kirim & Hubungkan ke Teknisi Transgo' : 'Submit & Connect with Engineer'}
                  </button>

                  <p className="form-disclaimer">
                    <ShieldCheck size={14} className="text-cyan inline mr-1" />
                    {lang === 'id'
                      ? 'Pemasangan rapi tanpa potong kabel garansi utama kendaraan. Garansi alat ganti baru 1 tahun.'
                      : 'Non-invasive wire-tap installation. 1-Year full replacement hardware warranty.'}
                  </p>
                </form>
              )}
            </div>

            {/* Right: Contact Hub, Workshop Map, & SLA Badges */}
            <div className="contact-sidebar">
              {/* Quick Contact Card */}
              <div className="sidebar-card hotline-card">
                <h4 className="sidebar-card-title">{lang === 'id' ? 'Hotline & Konsultasi Langsung' : 'Direct Hotlines'}</h4>
                <p className="sidebar-card-desc">
                  {lang === 'id'
                    ? 'Butuh konsultasi cepat untuk kebutuhan fleet mendesak? Hubungi kami langsung melalui:'
                    : 'Need immediate telematics deployment advice? Contact us directly:'}
                </p>

                <div className="hotline-list">
                  <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} target="_blank" rel="noreferrer" className="hotline-item">
                    <div className="hotline-icon whatsapp-bg">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <div className="hotline-label">WhatsApp Quick Response</div>
                      <div className="hotline-value">{CONTACT_INFO.phone} (24/7 Fast Response)</div>
                    </div>
                  </a>

                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hotline-item">
                    <div className="hotline-icon phone-bg">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="hotline-label">{lang === 'id' ? 'Telepon Kantor' : 'Office Phone'}</div>
                      <div className="hotline-value">{CONTACT_INFO.phone}</div>
                    </div>
                  </a>

                  <a href={`mailto:${CONTACT_INFO.email}`} className="hotline-item">
                    <div className="hotline-icon mail-bg">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="hotline-label">{lang === 'id' ? 'Email Enterprise & Tender' : 'Corporate Inquiries'}</div>
                      <div className="hotline-value">{CONTACT_INFO.email}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Workshop Location Card */}
              <div className="sidebar-card location-card">
                <div className="location-header">
                  <div className="location-icon">
                    <MapPin size={20} className="text-cyan" />
                  </div>
                  <div>
                    <h4 className="sidebar-card-title">{lang === 'id' ? 'Workshop & Service Center' : 'Workshop & Service Center'}</h4>
                    <p className="location-address">{CONTACT_INFO.workshopAddress}</p>
                  </div>
                </div>

                <div className="location-hours">
                  <Clock size={16} className="text-muted" />
                  <span>{CONTACT_INFO.operatingHours}</span>
                </div>

                <div className="location-features">
                  <div className="badge-pill">
                    <Wrench size={13} />
                    <span>{lang === 'id' ? 'Teknisi Tersertifikasi' : 'Certified Techs'}</span>
                  </div>
                  <div className="badge-pill">
                    <ShieldCheck size={13} />
                    <span>{lang === 'id' ? 'Instalasi Aman & Rapih' : 'Safe Wiring'}</span>
                  </div>
                  <div className="badge-pill">
                    <Truck size={13} />
                    <span>{lang === 'id' ? 'Area Parkir Truk & Bus' : 'Truck Bay Available'}</span>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.workshopAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-block mt-3"
                >
                  <MapPin size={16} />
                  {lang === 'id' ? 'Petunjuk Arah Google Maps' : 'Open in Google Maps'}
                </a>
              </div>

              {/* Service Coverage Guarantee */}
              <div className="sidebar-card coverage-card">
                <h4 className="sidebar-card-title">{lang === 'id' ? 'Cakupan Layanan Teknisi' : 'Technician Coverage'}</h4>
                <p className="sidebar-card-desc">
                  {lang === 'id'
                    ? 'Layanan instalasi home & depot service tersedia di Jabodetabek, Bandung, Surabaya, Semarang, Medan, Makassar, Bali, dan kota-kota besar seluruh Indonesia.'
                    : 'On-site installation available nationwide across Greater Jakarta, Bandung, Surabaya, Semarang, Medan, Makassar, Bali, and 30+ tier-1 cities.'}
                </p>
                <div className="coverage-stats">
                  <div>
                    <span className="coverage-num">45+</span>
                    <span className="coverage-label">{lang === 'id' ? 'Kota Terjangkau' : 'Cities Covered'}</span>
                  </div>
                  <div>
                    <span className="coverage-num">45 Min</span>
                    <span className="coverage-label">{lang === 'id' ? 'Rata-rata Pasang' : 'Avg Install Time'}</span>
                  </div>
                  <div>
                    <span className="coverage-num">100%</span>
                    <span className="coverage-label">{lang === 'id' ? 'Garansi Unit' : 'Hardware Guarantee'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeSection>
    </div>
  );
}

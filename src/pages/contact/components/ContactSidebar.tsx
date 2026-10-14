import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Wrench,
  Truck,
  MessageSquare,
} from "lucide-react";
import { useLang } from "../../../i18n";
import { CONTACT_INFO } from "../../../data";

export default function ContactSidebar() {
  const { lang } = useLang();

  return (
    <div className="contact-sidebar">
      {/* Quick Contact Card */}
      <div className="sidebar-card hotline-card">
        <h4 className="sidebar-card-title">
          {lang === "id" ? "Hotline & Konsultasi Langsung" : "Direct Hotlines"}
        </h4>
        <p className="sidebar-card-desc">
          {lang === "id"
            ? "Butuh konsultasi cepat untuk kebutuhan fleet mendesak? Hubungi kami langsung melalui:"
            : "Need immediate telematics deployment advice? Contact us directly:"}
        </p>

        <div className="hotline-list">
          <a
            href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
            target="_blank"
            rel="noreferrer"
            className="hotline-item"
          >
            <div className="hotline-icon whatsapp-bg">
              <MessageSquare size={18} />
            </div>
            <div>
              <div className="hotline-label">WhatsApp Quick Response</div>
              <div className="hotline-value">
                {CONTACT_INFO.phone} (24/7 Fast Response)
              </div>
            </div>
          </a>

          <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hotline-item">
            <div className="hotline-icon phone-bg">
              <Phone size={18} />
            </div>
            <div>
              <div className="hotline-label">
                {lang === "id" ? "Telepon Kantor" : "Office Phone"}
              </div>
              <div className="hotline-value">{CONTACT_INFO.phone}</div>
            </div>
          </a>

          <a href={`mailto:${CONTACT_INFO.email}`} className="hotline-item">
            <div className="hotline-icon mail-bg">
              <Mail size={18} />
            </div>
            <div>
              <div className="hotline-label">
                {lang === "id" ? "Email Enterprise & Tender" : "Corporate Inquiries"}
              </div>
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
            <h4 className="sidebar-card-title">
              {lang === "id" ? "Workshop & Service Center" : "Workshop & Service Center"}
            </h4>
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
            <span>{lang === "id" ? "Teknisi Tersertifikasi" : "Certified Techs"}</span>
          </div>
          <div className="badge-pill">
            <ShieldCheck size={13} />
            <span>{lang === "id" ? "Instalasi Aman & Rapih" : "Safe Wiring"}</span>
          </div>
          <div className="badge-pill">
            <Truck size={13} />
            <span>{lang === "id" ? "Area Parkir Truk & Bus" : "Truck Bay Available"}</span>
          </div>
        </div>

        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            CONTACT_INFO.workshopAddress
          )}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-block mt-3"
        >
          <MapPin size={16} />
          <span>{lang === "id" ? "Petunjuk Arah Google Maps" : "Open in Google Maps"}</span>
        </a>
      </div>

      {/* Service Coverage Guarantee */}
      <div className="sidebar-card coverage-card">
        <h4 className="sidebar-card-title">
          {lang === "id" ? "Cakupan Layanan Teknisi" : "Technician Coverage"}
        </h4>
        <p className="sidebar-card-desc">
          {lang === "id"
            ? "Layanan instalasi home & depot service tersedia di Jabodetabek, Bandung, Surabaya, Semarang, Medan, Makassar, Bali, dan kota-kota besar seluruh Indonesia."
            : "On-site installation available nationwide across Greater Jakarta, Bandung, Surabaya, Semarang, Medan, Makassar, Bali, and 30+ tier-1 cities."}
        </p>
        <div className="coverage-stats">
          <div>
            <span className="coverage-num">45+</span>
            <span className="coverage-label">
              {lang === "id" ? "Kota Terjangkau" : "Cities Covered"}
            </span>
          </div>
          <div>
            <span className="coverage-num">45 Min</span>
            <span className="coverage-label">
              {lang === "id" ? "Rata-rata Pasang" : "Avg Install Time"}
            </span>
          </div>
          <div>
            <span className="coverage-num">100%</span>
            <span className="coverage-label">
              {lang === "id" ? "Garansi Unit" : "Hardware Guarantee"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

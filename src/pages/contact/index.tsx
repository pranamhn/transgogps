import React from "react";
import { useLang } from "../../i18n";
import { PageHero, FadeSection } from "../../components/ui";
import BookingForm from "./components/BookingForm";
import ContactSidebar from "./components/ContactSidebar";

export default function ContactPage() {
  const { lang } = useLang();

  return (
    <div className="page-contact">
      {/* Hero Header */}
      <PageHero
        variant="page"
        label={lang === "id" ? "Konsultasi & Instalasi" : "Consultation & Booking"}
        title={
          lang === "id" ? (
            <>
              Jadwalkan <span className="gradient-text">Pemasangan GPS</span> & Demo Gratis
            </>
          ) : (
            <>
              Schedule <span className="gradient-text">GPS Installation</span> & Free Demo
            </>
          )
        }
        subtitle={
          lang === "id"
            ? "Layanan teknisi bersertifikat siap datang langsung ke garasi armada Anda (Home/Office Service) atau kunjungi workshop resmi Transgo GPS."
            : "Our certified mobile technicians come directly to your fleet depot, or visit the official Transgo GPS workshop."
        }
      />

      {/* Main Grid: Form & Contact Info */}
      <FadeSection className="section-contact-body">
        <div className="container">
          <div className="contact-grid">
            <BookingForm />
            <ContactSidebar />
          </div>
        </div>
      </FadeSection>
    </div>
  );
}

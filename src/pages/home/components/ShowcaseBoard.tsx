import React from "react";
import { Navigation, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { go } from "../../../hooks";
import { FadeSection, SectionLabel } from "../../../components/ui";

export default function ShowcaseBoard() {
  return (
    <FadeSection className="py-16 bg-white border-b border-slate-100">
      <div className="site-container">
        <div className="gps-board-clean">
          <div className="gps-board-media">
            <img
              src="/slides/seva-fleet-platform.jpg"
              alt="SEVA Fleet Management Platform & Telematics Dashboard"
              className="gps-board-img"
            />
            <div className="gps-board-overlay" />
            <div className="gps-board-badges-top">
              <span className="gps-glass-badge">
                <Navigation size={13} />
                <span>Satelit GNSS + 4G LTE M2M</span>
              </span>
              <span className="gps-glass-badge gps-glass-badge--cyan">
                <span>Akurasi &lt; 2.5 Meter</span>
              </span>
            </div>

            <div className="gps-board-badges-bottom">
              <h4>Remote Engine Cut-Off &amp; Anti-Theft Protection</h4>
              <p>
                Kemampuan mematikan mesin kendaraan secara instan dari aplikasi smartphone jika kendaraan keluar dari batas rute atau terindikasi dicuri.
              </p>
              <div className="gps-pills-row">
                <span>Update 10 Detik</span>
                <span>Sensor Kecepatan &amp; Rem</span>
                <span>Geofence Alert</span>
                <span>Riwayat Rute 90 Hari</span>
                <span>Baterai Backup</span>
              </div>
            </div>
          </div>

          <div className="gps-board-content">
            <SectionLabel icon={<ShieldCheck size={14} />}>
              KEUNGGULAN UTAMA TRANSGO GPS
            </SectionLabel>
            <h2 className="section-title mt-2">
              Kontrol Penuh Seluruh Pergerakan Armada di Ujung Jari
            </h2>
            <p className="section-subtitle">
              Transgo GPS memadukan keamanan fisik aset, penghematan bahan bakar, dan visibilitas operasional tanpa henti untuk menjamin ketenangan bisnis Anda.
            </p>

            <div className="space-y-4 mt-6">
              <div className="feature-check-item">
                <div className="feature-check-icon">
                  <CheckCircle2 size={18} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Garansi Pabrikan Kendaraan Tetap Aman</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Pemasangan rapi non-destruktif tanpa memotong kabel utama. Tersedia juga varian soket OBD-II Plug &amp; Play.
                  </p>
                </div>
              </div>

              <div className="feature-check-item">
                <div className="feature-check-icon">
                  <CheckCircle2 size={18} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Kartu SIM IoT Khusus M2M Telkomsel / Indosat</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Koneksi data prioritas tinggi tanpa khawatir pulsa hangus atau masa aktif terputus di tengah jalan.
                  </p>
                </div>
              </div>

              <div className="feature-check-item">
                <div className="feature-check-icon">
                  <CheckCircle2 size={18} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Layanan Teknisi Datang ke Tempat (Home Service)</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Teknisi bersertifikasi kami siap datang langsung ke garasi, kantor, atau pool armada Anda se-Jabodetabek.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go("/perangkat")}
                className="btn-primary"
              >
                <span>Lihat Pilihan Perangkat</span>
                <ArrowRight size={15} />
              </button>
              <button
                type="button"
                onClick={() => go("/harga")}
                className="btn-outline"
              >
                <span>Daftar Harga &amp; Paket</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}

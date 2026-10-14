import React, { useState, useEffect } from "react";
import {
  Navigation,
  Lock,
  Unlock,
  Radio,
  Activity,
  BatteryCharging,
  Gauge,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Zap,
  Compass,
  Car,
  Truck,
  Bike,
  Wrench,
} from "lucide-react";
import { useLang } from "../i18n";

interface Vehicle {
  id: string;
  name: string;
  plate: string;
  type: string;
  icon: typeof Car;
  voltage: string;
  batteryLevel: string;
  fuelOrSoc: string;
  defaultSpeed: number;
}

const FLEET_VEHICLES: Vehicle[] = [
  {
    id: "avanza",
    name: "Toyota All New Avanza",
    plate: "B 1892 TGM",
    type: "Rental & Fleet",
    icon: Car,
    voltage: "13.8V",
    batteryLevel: "100%",
    fuelOrSoc: "78% BBM",
    defaultSpeed: 54,
  },
  {
    id: "hino",
    name: "Hino 500 Wingbox Kargo",
    plate: "B 9481 TGL",
    type: "Logistik Kargo",
    icon: Truck,
    voltage: "27.4V",
    batteryLevel: "100%",
    fuelOrSoc: "85% Solar",
    defaultSpeed: 62,
  },
  {
    id: "polytron",
    name: "Polytron Fox 350 EV",
    plate: "B 3820 TGE",
    type: "Motor Listrik EV",
    icon: Bike,
    voltage: "72.4V",
    batteryLevel: "94%",
    fuelOrSoc: "92% SOC",
    defaultSpeed: 42,
  },
  {
    id: "komatsu",
    name: "Komatsu PC200 Heavy",
    plate: "TG-EXC-04",
    type: "Alat Berat Tambang",
    icon: Wrench,
    voltage: "24.2V",
    batteryLevel: "100%",
    fuelOrSoc: "185 Liter",
    defaultSpeed: 18,
  },
];

export default function LiveGpsSimulator() {
  const { t } = useLang();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(FLEET_VEHICLES[0]);
  const [engineCutOff, setEngineCutOff] = useState(false);
  const [speed, setSpeed] = useState(selectedVehicle.defaultSpeed);
  const [satellites, setSatellites] = useState(14);
  const [routeStep, setRouteStep] = useState(0);
  const [isAlerting, setIsAlerting] = useState(false);

  // Simulated vehicle coordinates along Gatot Subroto - Sudirman corridor
  const routePoints = [
    { name: "Jl. Gatot Subroto (Depan Hotel Kartika Chandra)", lat: "-6.230412", lng: "106.816982" },
    { name: "Simpang Susun Semanggi Hub", lat: "-6.219842", lng: "106.812340" },
    { name: "Jl. Jenderal Sudirman (SCBD Entrance)", lat: "-6.224110", lng: "106.809820" },
    { name: "Kawasan Niaga Terpadu Sudirman", lat: "-6.227840", lng: "106.807410" },
  ];

  // Periodic movement
  useEffect(() => {
    if (engineCutOff) {
      setSpeed(0);
      return;
    }
    const timer = setInterval(() => {
      setRouteStep((prev) => (prev + 1) % routePoints.length);
      setSpeed(Math.floor(selectedVehicle.defaultSpeed - 5 + Math.random() * 12));
      setSatellites(13 + Math.floor(Math.random() * 3));
    }, 4500);

    return () => clearInterval(timer);
  }, [engineCutOff, selectedVehicle.defaultSpeed, routePoints.length]);

  const handleSelectVehicle = (v: Vehicle) => {
    setSelectedVehicle(v);
    setEngineCutOff(false);
    setSpeed(v.defaultSpeed);
  };

  const handleToggleCutOff = () => {
    if (!engineCutOff) {
      setIsAlerting(true);
      setTimeout(() => {
        setEngineCutOff(true);
        setSpeed(0);
        setIsAlerting(false);
      }, 600);
    } else {
      setEngineCutOff(false);
      setSpeed(selectedVehicle.defaultSpeed);
    }
  };

  const currentPoint = routePoints[routeStep];

  return (
    <div className="telematics-cockpit-card">
      {/* Cockpit Top Bar */}
      <div className="telematics-header">
        <div className="telematics-brand-badge">
          <div className="radar-ping-dot" />
          <span className="font-mono text-xs font-semibold tracking-wider text-slate-200">
            TRANSGO TELEMATICS ENGINE v4.2
          </span>
          <span className="telematics-status-pill">
            <Radio size={12} className="animate-pulse text-cyan-400" />
            <span>4G LTE-M LIVE</span>
          </span>
        </div>

        <div className="telematics-sat-info">
          <Compass size={14} className="text-cyan-400" />
          <span className="font-mono text-xs text-slate-300">GNSS: {satellites} SAT</span>
        </div>
      </div>

      {/* Vehicle Selector Tabs */}
      <div className="px-4 py-2.5 bg-slate-950/60 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
          PILIH ARMADA:
        </span>
        {FLEET_VEHICLES.map((v) => {
          const isActive = selectedVehicle.id === v.id;
          const Icon = v.icon;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => handleSelectVehicle(v)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                  : "bg-slate-900/50 text-slate-400 border border-slate-800 hover:text-slate-200"
              }`}
            >
              <Icon size={12} />
              <span>{v.plate}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Map & Controls */}
      <div className="telematics-grid">
        {/* Left: Map Radar View */}
        <div className="telematics-map-screen">
          <div className="telematics-map-grid-overlay" />

          {/* Active Geofence Area Polygon */}
          <div className="geofence-polygon">
            <span className="geofence-label font-mono">
              <ShieldCheck size={12} />
              GEOFENCE: KORIDOR JABODETABEK (SAFE ZONE)
            </span>
          </div>

          {/* Vehicle Marker */}
          <div className={`vehicle-live-marker ${engineCutOff ? "marker-cut-off" : ""}`}>
            <div className="marker-beacon-wave" />
            <div className="marker-icon-wrapper">
              <Navigation size={18} className="transform rotate-45" />
            </div>
            <div className="marker-tooltip">
              <span className="font-bold text-white">{selectedVehicle.plate} ({selectedVehicle.name})</span>
              <span className="font-mono text-[10px] text-slate-300">
                {engineCutOff ? "IGNITION CUT-OFF" : `${speed} km/h • Bergerak`}
              </span>
            </div>
          </div>

          {/* Bottom GPS Coordinates readout */}
          <div className="telematics-map-footer">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-cyan-400 shrink-0" />
              <span className="text-xs truncate font-medium text-slate-200">
                {currentPoint.name}
              </span>
            </div>
            <div className="font-mono text-[11px] text-cyan-300 mt-1">
              LAT: {currentPoint.lat} | LNG: {currentPoint.lng}
            </div>
          </div>
        </div>

        {/* Right: Live Telemetry Gauges & Remote Control Panel */}
        <div className="telematics-controls-panel">
          {/* Status Display Card */}
          <div className={`telematics-status-box ${engineCutOff ? "status-cut-off" : "status-active"}`}>
            <div className="flex items-center gap-2.5">
              {engineCutOff ? (
                <ShieldAlert size={22} className="text-rose-500 animate-bounce" />
              ) : (
                <ShieldCheck size={22} className="text-emerald-400" />
              )}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75 text-slate-300">
                  {t.telematics.vehicleStatus}
                </span>
                <span className="text-xs font-bold font-mono text-white">
                  {engineCutOff ? t.telematics.engineCutOff : t.telematics.engineActive}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-slate-400 block">Kelistrikan Mesin</span>
              <span className={`text-xs font-mono font-bold ${engineCutOff ? "text-rose-400" : "text-emerald-400"}`}>
                {engineCutOff ? "DISCONNECTED" : "ACC ON"}
              </span>
            </div>
          </div>

          {/* Sensor Tiles Grid */}
          <div className="grid grid-cols-2 gap-2.5 my-3">
            <div className="metric-sensor-tile">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <Gauge size={13} className="text-cyan-400" />
                <span>Kecepatan</span>
              </div>
              <div className="metric-sensor-val font-mono">
                {speed} <span className="text-xs font-sans text-slate-400 font-normal">km/h</span>
              </div>
            </div>

            <div className="metric-sensor-tile">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <Activity size={13} className="text-blue-400" />
                <span>Tegangan Aki</span>
              </div>
              <div className="metric-sensor-val font-mono">
                {selectedVehicle.voltage}
              </div>
            </div>

            <div className="metric-sensor-tile">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <BatteryCharging size={13} className="text-emerald-400" />
                <span>Baterai Cadangan</span>
              </div>
              <div className="metric-sensor-val font-mono text-emerald-400">
                {selectedVehicle.batteryLevel}
              </div>
            </div>

            <div className="metric-sensor-tile">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <Zap size={13} className="text-amber-400" />
                <span>Level BBM / Daya</span>
              </div>
              <div className="metric-sensor-val font-mono text-blue-400">
                {selectedVehicle.fuelOrSoc}
              </div>
            </div>
          </div>

          {/* Remote Cut-Off Trigger Button */}
          <div className="mt-auto pt-2">
            <div className="text-[11px] text-slate-400 mb-2 leading-tight">
              {engineCutOff
                ? "Mesin kendaraan saat ini dalam status terkunci. Klik tombol untuk mengaktifkan kembali."
                : "Simulasi pemutusan arus mesin instan via relay cloud anti-maling Transgo."}
            </div>

            <button
              type="button"
              disabled={isAlerting}
              onClick={handleToggleCutOff}
              className={`telematics-engine-btn ${
                engineCutOff ? "btn-engine-danger" : "btn-engine-normal"
              } ${isAlerting ? "btn-engine-disabled" : ""}`}
            >
              {isAlerting ? (
                <>
                  <Activity size={16} className="animate-spin" />
                  <span>Mengirim Sinyal IoT...</span>
                </>
              ) : engineCutOff ? (
                <>
                  <Unlock size={16} />
                  <span>{t.telematics.restoreEngineBtn}</span>
                </>
              ) : (
                <>
                  <Lock size={16} />
                  <span>{t.telematics.testCutOffBtn}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import type { Route } from "../data";

export function normalizeRoute(p: string): Route {
  const c = p.replace(/\/$/, "") || "/";

  if (c === "/fitur" || c === "/features") return "/fitur";
  if (c === "/perangkat" || c === "/devices" || c === "/produk") return "/perangkat";
  if (c === "/solusi" || c === "/solutions") return "/solusi";
  if (c === "/harga" || c === "/pricing" || c === "/paket") return "/harga";
  if (c === "/kontak" || c === "/contact" || c === "/pasang") return "/kontak";

  const validRoutes: Route[] = ["/", "/fitur", "/perangkat", "/solusi", "/harga", "/kontak"];
  return validRoutes.includes(c as Route) ? (c as Route) : "/";
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => normalizeRoute(window.location.pathname));

  useEffect(() => {
    const handlePop = () => setRoute(normalizeRoute(window.location.pathname));
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  return route;
}

export function go(href: Route) {
  if (window.location.pathname === href) return;
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);

  return scrolled;
}

export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

"use client";

import { useEffect, useSyncExternalStore } from "react";

const CONSENT_KEY = "toolbox-ad-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getConsentSnapshot(): string {
  return localStorage.getItem(CONSENT_KEY) ?? "unset";
}

function getServerSnapshot(): string {
  return "loading";
}

function writeConsent(value: "granted" | "denied") {
  localStorage.setItem(CONSENT_KEY, value);
  listeners.forEach((notify) => notify());
}

function updateConsent(value: "granted" | "denied") {
  window.gtag?.("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

export default function ConsentBanner() {
  const consent = useSyncExternalStore(subscribe, getConsentSnapshot, getServerSnapshot);

  useEffect(() => {
    if (getConsentSnapshot() === "granted") {
      updateConsent("granted");
    }
  }, []);

  if (consent !== "unset") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1">
          We use advertising cookies served by Google AdSense to show ads and
          personalize content. Choose whether to allow them, or read our{" "}
          <a href="/privacy" className="text-primary underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => writeConsent("denied")}
            className="px-4 py-2 text-sm rounded-md border hover:bg-muted transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => writeConsent("granted")}
            className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

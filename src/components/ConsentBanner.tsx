"use client";

import { useEffect, useSyncExternalStore } from "react";
import {
  subscribeConsent,
  getConsentSnapshot,
  getConsentServerSnapshot,
  writeConsent,
} from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function grantConsent() {
  window.gtag?.("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
}

export default function ConsentBanner() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot
  );

  useEffect(() => {
    if (getConsentSnapshot() === "granted") {
      grantConsent();
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

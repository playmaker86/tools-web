export const CONSENT_KEY = "toolbox-ad-consent";

export type ConsentValue = "granted" | "denied" | "unset";

const listeners = new Set<() => void>();

export function subscribeConsent(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

export function getConsentSnapshot(): ConsentValue {
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === "granted" || stored === "denied") return stored;
  return "unset";
}

export function getConsentServerSnapshot(): ConsentValue {
  return "unset";
}

export function writeConsent(value: "granted" | "denied") {
  localStorage.setItem(CONSENT_KEY, value);
  listeners.forEach((notify) => notify());
}

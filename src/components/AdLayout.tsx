import type { ReactNode } from "react";
import AdSense from "@/components/AdSense";

interface AdLayoutProps {
  children: ReactNode;
  bottomSlot?: string;
}

export default function AdLayout({ children, bottomSlot }: AdLayoutProps) {
  return (
    <div>
      <div>{children}</div>
      {bottomSlot && (
        <div className="mt-6">
          <AdSense adSlot={bottomSlot} adFormat="horizontal" />
        </div>
      )}
    </div>
  );
}

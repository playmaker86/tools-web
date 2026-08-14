import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy - Toolbox",
  description: "Privacy policy for Toolbox - how we handle your data and use cookies.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <Card>
          <CardHeader>
            <CardTitle>1. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Toolbox does not collect, store, or transmit any personal information. All tools run entirely in your browser and no data is sent to our servers.</p>
            <p>We do not require registration, login, or any form of personal identification to use our tools.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Cookies and Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Google AdSense, a third-party advertising service, may use cookies to serve ads on this website. Google&apos;s use of the DART cookie enables it to serve ads based on your visit to this site and other sites on the Internet.</p>
            <p>You may opt out of the DART cookie by visiting the Google ad and content network privacy policy at <a href="https://policies.google.com/technologies/ads" className="text-primary underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p><strong>Google AdSense:</strong> We display advertisements served by Google AdSense. Google may use cookies and web beacons to collect information from your browser for ad personalization. This information is governed by Google&apos;s Privacy Policy.</p>
            <p>This site does not use analytics or tracking services beyond AdSense.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Data Security</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>Since all tool processing happens locally in your browser, your data never leaves your device. We do not have access to any content you type, paste, or upload into our tools.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Cookie Consent (GDPR / ePrivacy)</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, advertising cookies are only set after you give your explicit consent via the consent banner shown on your first visit.</p>
            <p>You can change or withdraw your consent at any time by clearing your cookies or adjusting your browser&apos;s cookie settings. Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Your Rights (GDPR &amp; CCPA)</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p><strong>Under GDPR (EEA/UK residents):</strong> You have the right to access, rectify, or erase personal data we hold about you, the right to data portability, and the right to object to or restrict processing. Because we do not collect personal data, these rights are already honored by design. To exercise any right, contact us through the <a href="/contact" className="text-primary underline">Contact page</a>.</p>
            <p><strong>Under CCPA (California residents):</strong> You have the right to know what personal information is collected, the right to delete it, and the right to opt out of the sale or sharing of personal information. We do not sell or share personal information. If you have questions, please contact us.</p>
            <p><strong>Do Not Track (DNT):</strong> We honor browser &ldquo;Do Not Track&rdquo; signals where technically feasible.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Advertising</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>We display advertisements served by Google AdSense to help cover the cost of running this website. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.</p>
            <p>Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visits to this site and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google&apos;s Ads Settings</a>.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>If you have any questions about this privacy policy, please visit our <a href="/contact" className="text-primary underline">Contact page</a>.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

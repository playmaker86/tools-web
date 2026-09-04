import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Service - Toolbox",
  description:
    "Terms of service for Toolbox - the rules for using our free online tools.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground">
          By accessing or using Toolbox, you agree to these Terms of Service.
          Please read them carefully.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>1. Description of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>
              Toolbox provides free, browser-based utility tools including a
              calculator, JSON formatter, Base64 encoder/decoder, Unix timestamp
              converter, and URL encoder/decoder. All processing happens locally
              in your browser; we do not store the content you process.
            </p>
            <p>
              The service is provided free of charge and does not require
              registration.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Acceptable Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Use the tools for any unlawful purpose or to process illegal content.</li>
              <li>Attempt to disrupt, overload, or interfere with the operation of the website.</li>
              <li>Scrape, reverse-engineer, or resell the service as your own.</li>
              <li>Use automated systems to access the site in a way that sends more requests than a human could reasonably produce.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. No Warranty</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>
              The tools are provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, express or
              implied, including but not limited to accuracy, reliability, or
              fitness for a particular purpose. Always verify important results
              independently before relying on them.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>
              To the maximum extent permitted by law, Toolbox and its operators
              shall not be liable for any direct, indirect, incidental,
              consequential, or punitive damages arising from your use of, or
              inability to use, the service, including any data loss resulting
              from tool output.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Advertising and Third-Party Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>
              This website displays advertisements served by Google AdSense.
              Your use of Google&apos;s advertising services is subject to
              Google&apos;s own terms and policies. The site may also contain
              links to third-party websites; we are not responsible for their
              content or practices.
            </p>
            <p>
              For details on cookies and advertising, see our{" "}
              <Link href="/privacy" className="text-primary underline">
                Privacy Policy
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              The website design, text, and code are the property of Toolbox.
              You may use the output of the tools freely; we claim no ownership
              of the content you process with them.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Changes to These Terms</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              We may update these terms from time to time. Continued use of the
              service after changes are posted constitutes acceptance of the
              revised terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Contact</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              Questions about these terms? Visit our{" "}
              <Link href="/contact" className="text-primary underline">
                Contact page
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

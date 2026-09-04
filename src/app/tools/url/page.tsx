import type { Metadata } from "next";
import UrlTool from "@/components/tools/UrlTool";
import JsonLd from "@/components/JsonLd";
import { toolJsonLd } from "@/lib/site";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AdLayout from "@/components/AdLayout";

export const metadata: Metadata = {
  title: "URL Encoder / Decoder - Toolbox",
  description:
    "Free online URL encoding and decoding tool. Encode special characters for safe URL usage or decode percent-encoded URLs back to plain text.",
  alternates: { canonical: "/tools/url" },
};

const jsonLd = toolJsonLd({
  name: "URL Encoder / Decoder",
  path: "/tools/url",
  description:
    "Free online URL encoding and decoding tool. Encode special characters for safe URL usage or decode percent-encoded URLs back to plain text.",
  faqs: [
    {
      q: "What is the difference between encodeURIComponent and encodeURI?",
      a: "encodeURIComponent escapes almost everything, including /, ?, and &, making it the right choice for query parameter values. encodeURI leaves structural characters intact and is meant for full URLs.",
    },
    {
      q: "Why does a space encode to %20 instead of +?",
      a: "In query strings, + is a legacy way to represent a space (used by form submissions). Standard URL encoding uses %20 for a space everywhere.",
    },
    {
      q: "Do I need to encode non-ASCII characters?",
      a: "Modern browsers often handle Unicode directly, but many APIs and legacy systems expect percent-encoded UTF-8. Encoding is always the safe choice for maximum compatibility.",
    },
    {
      q: "Can URL encoding be reversed automatically?",
      a: "Yes. Decoding turns %XX sequences back into their original characters, so you can round-trip encoded URLs back to plain text for debugging.",
    },
    {
      q: "Is my URL sent to a server?",
      a: "No. Both encoding and decoding happen entirely in your browser, so you can safely process sensitive URLs and tokens without them leaving your device.",
    },
  ],
});

export default function UrlPage() {
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <JsonLd data={jsonLd} />
      <AdLayout bottomSlot={bottomSlot}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">URL Encoder / Decoder</h1>
            <p className="text-muted-foreground">
              Encode or decode URL components. Convert special characters,
              spaces, and Unicode into percent-encoded format (and back).
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>What is URL Encoding?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                URL encoding (also called percent-encoding) converts characters
                that are not allowed in URLs into a format that can be
                transmitted over the Internet. For example, spaces become{" "}
                <code>%20</code> and Chinese characters like &ldquo;你好&rdquo;
                become <code>%E4%BD%A0%E5%A5%BD</code>.
              </p>
              <p>
                This is essential when you need to include special characters,
                non-ASCII text, or reserved characters (like <code>&amp;</code>,{" "}
                <code>?</code>, <code>=</code>) in a URL query string.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When to Use</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Constructing API URLs with query parameters containing special
                  characters
                </li>
                <li>
                  Decoding obfuscated or encoded URLs for debugging
                </li>
                <li>
                  Encoding search queries that contain non-English characters
                </li>
                <li>
                  Working with redirect URLs that contain dynamic parameters
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Encoding Reference</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>Common characters and their percent-encoded forms:</p>
              <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                {`Space      ->  %20
&          ->  %26
?          ->  %3F
=          ->  %3D
/          ->  %2F
#          ->  %23
%          ->  %25
你好       ->  %E4%BD%A0%E5%A5%BD`}
              </pre>
              <p>
                <strong className="text-foreground">Example.</strong> The search
                query <code>Hello world &amp; friends</code> encoded becomes{" "}
                <code>Hello%20world%20%26%20friends</code>.
              </p>
            </CardContent>
          </Card>

          <UrlTool />

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <div>
                <p className="font-medium text-foreground">
                  What is the difference between encodeURIComponent and encodeURI?
                </p>
                <p>
                  <code>encodeURIComponent</code> escapes almost everything,
                  including <code>/</code>, <code>?</code>, and <code>&amp;</code>,
                  making it the right choice for query parameter values.{" "}
                  <code>encodeURI</code> leaves structural characters intact and
                  is meant for full URLs.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Why does a space encode to <code>%20</code> instead of <code>+</code>?
                </p>
                <p>
                  In query strings, <code>+</code> is a legacy way to represent
                  a space (used by form submissions). Standard URL encoding uses{" "}
                  <code>%20</code> for a space everywhere.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Do I need to encode non-ASCII characters?
                </p>
                <p>
                  Modern browsers often handle Unicode directly, but many APIs
                  and legacy systems expect percent-encoded UTF-8. Encoding is
                  always the safe choice for maximum compatibility.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Can URL encoding be reversed automatically?
                </p>
                <p>
                  Yes. Decoding turns <code>%XX</code> sequences back into their
                  original characters, so you can round-trip encoded URLs back
                  to plain text for debugging.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Is my URL sent to a server?
                </p>
                <p>
                  No. Both encoding and decoding happen entirely in your
                  browser, so you can safely process sensitive URLs and tokens
                  without them leaving your device.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Mistakes</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Encoding an entire URL instead of just the query values &mdash;
                  this breaks the <code>://</code> and <code>/</code> structure.
                </li>
                <li>
                  Using <code>+</code> for spaces in non-form contexts.
                </li>
                <li>
                  Double-encoding &mdash; encoding text that is already
                  percent-encoded turns <code>%</code> into <code>%25</code>.
                </li>
                <li>
                  Decoding user input before validation, which can expose or
                  mask unexpected characters.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AdLayout>
    </div>
  );
}

import type { Metadata } from "next";
import Base64Tool from "@/components/tools/Base64Tool";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AdLayout from "@/components/AdLayout";

export const metadata: Metadata = {
  title: "Base64 Encoder / Decoder - Toolbox",
  description:
    "Free online Base64 encoding and decoding tool with full UTF-8 support. Encode text to Base64 or decode Base64 back to readable text.",
};

export default function Base64Page() {
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <AdLayout bottomSlot={bottomSlot}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Base64 Encoder / Decoder</h1>
            <p className="text-muted-foreground">
              Encode any text to Base64 or decode Base64 strings back to
              readable text. Supports all Unicode characters including Chinese,
              Japanese, and emoji.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>What is Base64?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                Base64 is a binary-to-text encoding scheme that represents
                binary data in an ASCII string format. It&apos;s commonly used
                for:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Embedding images directly in HTML or CSS (data URIs)</li>
                <li>Encoding email attachments (MIME)</li>
                <li>Storing binary data in JSON or XML</li>
                <li>Basic authentication headers in HTTP requests</li>
              </ul>
              <p className="mt-2">
                The name comes from the 64-character alphabet used: A-Z, a-z,
                0-9, <code>+</code>, and <code>/</code>. Padding with{" "}
                <code>=</code> signs ensures the output length is always a
                multiple of 4.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How This Tool Works</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                Our encoder uses the modern <strong>TextEncoder</strong> API to
                properly handle UTF-8 characters, avoiding the legacy issues
                with special characters that older Base64 tools suffer from.
              </p>
              <p>
                The decoder uses <strong>TextDecoder</strong> to accurately
                reconstruct the original text, ensuring Chinese characters,
                emojis, and other Unicode content are preserved.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Examples</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                <strong className="text-foreground">Example 1 &mdash; Simple text.</strong>
              </p>
              <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                {`Input:  Hello, Toolbox!
Output: SGVsbG8sIFRvb2xib3gh`}
              </pre>
              <p>
                <strong className="text-foreground">Example 2 &mdash; Chinese characters.</strong>{" "}
                UTF-8 support means non-ASCII text works correctly:
              </p>
              <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                {`Input:  你好，世界
Output: 5L2g5aW977yM5LiW55WM`}
              </pre>
              <p>
                <strong className="text-foreground">Example 3 &mdash; Emoji.</strong>{" "}
                Emoji are multi-byte in UTF-8 and still encode cleanly:
              </p>
              <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                {`Input:  👋
Output: 8J+Riw==`}
              </pre>
            </CardContent>
          </Card>

          <Base64Tool />

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <div>
                <p className="font-medium text-foreground">
                  Why does my Chinese text get garbled on other sites?
                </p>
                <p>
                  Many legacy tools encode each character as a single byte using
                  the Latin-1 charset, which corrupts Chinese, Japanese, Korean,
                  and emoji. This tool uses proper UTF-8 encoding, so Unicode
                  text round-trips correctly.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Is Base64 encryption?
                </p>
                <p>
                  No. Base64 is encoding, not encryption. Anyone can decode a
                  Base64 string, so never use it to protect sensitive data. It
                  exists to make binary data safe to transmit over text-only
                  channels.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  What about URL-safe Base64?
                </p>
                <p>
                  Standard Base64 uses <code>+</code> and <code>/</code>, which
                  have special meaning in URLs. URL-safe Base64 replaces them
                  with <code>-</code> and <code>_</code>. This tool outputs
                  standard Base64; replace those two characters if you need the
                  URL-safe variant.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Why does my decoded output contain strange symbols?
                </p>
                <p>
                  It usually means the input was not valid Base64 to begin
                  with, or it encoded binary data (like an image) rather than
                  text. This tool interprets the decoded bytes as UTF-8 text.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Can I encode files or images?
                </p>
                <p>
                  Not directly &mdash; this tool works on text. For images,
                  tools usually read the file as bytes first. The same Base64
                  principles apply once the bytes are converted to a string.
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
                  Pasting Base64 that contains newlines (common when copying
                  certificates or keys) &mdash; whitespace is usually fine but
                  stray characters will break decoding.
                </li>
                <li>
                  Adding spaces into the encoded string &mdash; Base64 has no
                  spaces, so keep the output intact.
                </li>
                <li>
                  Expecting <code>+</code> and <code>/</code> to survive a URL
                  unmodified &mdash; use URL-safe variants when embedding in
                  URLs.
                </li>
                <li>
                  Assuming Base64 provides security &mdash; it does not.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AdLayout>
    </div>
  );
}

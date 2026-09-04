import type { Metadata } from "next";
import TimestampConverter from "@/components/tools/TimestampConverter";
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
  title: "Timestamp Converter - Toolbox",
  description:
    "Free Unix timestamp to date converter. Convert between Unix timestamps (seconds/milliseconds) and human-readable dates instantly.",
  alternates: { canonical: "/tools/timestamp" },
};

const jsonLd = toolJsonLd({
  name: "Timestamp Converter",
  path: "/tools/timestamp",
  description:
    "Free Unix timestamp to date converter. Convert between Unix timestamps (seconds or milliseconds) and human-readable dates instantly.",
  faqs: [
    {
      q: "How do I know if my timestamp is in seconds or milliseconds?",
      a: "As a rule of thumb, timestamps before roughly 2001 have 10 digits (seconds) or 13 digits (milliseconds). Values around 1 billion are seconds; values around 1 trillion are milliseconds. This tool detects both automatically.",
    },
    {
      q: "Why is the displayed time different from my local time?",
      a: "Unix timestamps are timezone-independent. The converter shows the date in UTC by default. Local conversion is a display choice — the underlying instant is the same everywhere on Earth.",
    },
    {
      q: "What happens to dates before 1970?",
      a: "Negative timestamps represent dates before the epoch. This tool handles them correctly, so values like -86400 resolve to 1969-12-31.",
    },
    {
      q: "What is the maximum representable timestamp?",
      a: "In many systems, 64-bit timestamps cover dates up to the year 292 billion. JavaScript's number type safely represents milliseconds up to about the year 275,760, which is far beyond any practical use.",
    },
    {
      q: "Why do some APIs return milliseconds and others seconds?",
      a: "It depends on the language. JavaScript, C# (ticks aside), and Java use milliseconds, while PHP, Ruby, and most SQL databases use seconds. Always check your API's documentation.",
    },
  ],
});

export default function TimestampPage() {
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <JsonLd data={jsonLd} />
      <AdLayout bottomSlot={bottomSlot}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Timestamp Converter</h1>
            <p className="text-muted-foreground">
              Convert Unix timestamps to human-readable dates and vice versa.
              Supports both second-level and millisecond-level timestamps.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>What is a Unix Timestamp?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                A Unix timestamp (also known as Epoch time) is the number of
                seconds that have elapsed since January 1, 1970 (midnight
                UTC/GMT). It is widely used in programming, databases, and APIs
                because it provides a simple, timezone-independent way to
                represent a point in time.
              </p>
              <p>
                Some systems and programming languages (such as JavaScript) use
                milliseconds instead of seconds. This tool automatically
                detects which format your input uses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Use Cases</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Debugging API responses that return timestamps</li>
                <li>Converting log file timestamps to readable dates</li>
                <li>Checking when a database record was created or modified</li>
                <li>Generating a timestamp for the current time for testing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Examples</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                <strong className="text-foreground">Example 1 &mdash; Current time.</strong>
              </p>
              <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                {`Input:  1699999999 (seconds)
Output: 2023-11-15 03:33:19 UTC`}
              </pre>
              <p>
                <strong className="text-foreground">Example 2 &mdash; JavaScript output.</strong>{" "}
                JavaScript&apos;s <code>Date.now()</code> returns milliseconds,
                which is roughly a thousand times larger:
              </p>
              <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                {`Input:  1699999999000 (milliseconds)
Output: 2023-11-15 03:33:19 UTC`}
              </pre>
              <p>
                <strong className="text-foreground">Example 3 &mdash; A known date.</strong>{" "}
                The start of the Unix epoch itself is timestamp <code>0</code>:
              </p>
              <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                {`Input:  0
Output: 1970-01-01 00:00:00 UTC`}
              </pre>
            </CardContent>
          </Card>

          <TimestampConverter />

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <div>
                <p className="font-medium text-foreground">
                  How do I know if my timestamp is in seconds or milliseconds?
                </p>
                <p>
                  As a rule of thumb, timestamps before roughly 2001 have 10
                  digits (seconds) or 13 digits (milliseconds). Values around 1
                  billion are seconds; values around 1 trillion are
                  milliseconds. This tool detects both automatically.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Why is the displayed time different from my local time?
                </p>
                <p>
                  Unix timestamps are timezone-independent. The converter shows
                  the date in UTC by default. Local conversion is a display
                  choice &mdash; the underlying instant is the same everywhere
                  on Earth.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  What happens to dates before 1970?
                </p>
                <p>
                  Negative timestamps represent dates before the epoch. This
                  tool handles them correctly, so values like{" "}
                  <code>-86400</code> resolve to 1969-12-31.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  What is the maximum representable timestamp?
                </p>
                <p>
                  In many systems, 64-bit timestamps cover dates up to the year
                  292 billion. JavaScript&apos;s number type safely represents
                  milliseconds up to about the year 275,760, which is far beyond
                  any practical use.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Why do some APIs return milliseconds and others seconds?
                </p>
                <p>
                  It depends on the language. JavaScript, C# (ticks aside), and
                  Java use milliseconds, while PHP, Ruby, and most SQL databases
                  use seconds. Always check your API&apos;s documentation.
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
                  Feeding a millisecond timestamp to a tool that expects seconds
                  (or vice versa) &mdash; you can end up in 1970 or 5138.
                </li>
                <li>
                  Forgetting that timestamps are UTC &mdash; comparing a UTC
                  timestamp directly with a local date string will be off by
                  your timezone offset.
                </li>
                <li>
                  Assuming <code>0</code> means &ldquo;no date&rdquo; &mdash; it
                  actually means 1970-01-01.
                </li>
                <li>
                  Rounding instead of truncating when converting to seconds
                  &mdash; milliseconds values should be divided by 1000 and
                  truncated, not rounded.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AdLayout>
    </div>
  );
}

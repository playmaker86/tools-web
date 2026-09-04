import type { Metadata } from "next";
import JsonFormatter from "@/components/tools/JsonFormatter";
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
  title: "JSON Formatter - Toolbox",
  description:
    "Free JSON formatter, validator, and minifier. Format messy JSON into readable, properly indented output instantly, right in your browser.",
  alternates: { canonical: "/tools/json-formatter" },
};

const jsonLd = toolJsonLd({
  name: "JSON Formatter",
  path: "/tools/json-formatter",
  description:
    "Free online JSON formatter, validator, and minifier. Format messy JSON into readable, properly indented output instantly, right in your browser.",
  faqs: [
    {
      q: "Why is my JSON rejected as invalid?",
      a: "The most common causes are trailing commas after the last item, single quotes instead of double quotes, unquoted keys, and comments. JSON strictly requires double-quoted strings and does not allow trailing commas or // comments.",
    },
    {
      q: "Does it handle large or nested JSON?",
      a: "Yes. Deeply nested objects and large arrays are supported. Formatting is performed in your browser, so very large documents are processed locally without uploading anything.",
    },
    {
      q: "What is the difference between format and minify?",
      a: "Format adds indentation and line breaks so the structure is easy to read. Minify removes all unnecessary whitespace and newlines to produce the smallest possible string for storage or transmission.",
    },
    {
      q: "Can it format non-JSON like YAML or SQL?",
      a: "No. This tool validates and formats JSON only. If your input is not valid JSON, it will be reported as an error rather than silently producing misleading output.",
    },
    {
      q: "Is my data uploaded anywhere?",
      a: "No. Everything is processed locally in your browser. You can safely paste confidential API responses or configuration files without worrying about them leaving your device.",
    },
  ],
});

export default function JsonFormatterPage() {
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <JsonLd data={jsonLd} />
      <AdLayout bottomSlot={bottomSlot}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">JSON Formatter</h1>
            <p className="text-muted-foreground">
              Format, validate, and minify JSON data directly in your browser.
              Paste any JSON string and make it readable in one click.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>What is JSON?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                JSON (JavaScript Object Notation) is a lightweight
                data-interchange format used extensively in web APIs,
                configuration files, and data storage. It&apos;s human-readable
                but can become difficult to parse when minified into a single
                line.
              </p>
              <p>
                JSON documents are built from just a few building blocks:
                objects (curly braces <code>{`{ }`}</code>), arrays (square
                brackets <code>[ ]</code>), strings, numbers, booleans, and{" "}
                <code>null</code>. Getting the syntax right is essential, which
                is why a validator that pinpoints errors is so useful.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                <strong>Format:</strong> Transforms minified or
                poorly-formatted JSON into a clean, 2-space indented structure
                for easy reading and debugging.
              </p>
              <p>
                <strong>Minify:</strong> Compresses formatted JSON into a
                single line &mdash; ideal for reducing file size in production
                environments.
              </p>
              <p>
                <strong>Validation:</strong> Automatically detects and reports
                syntax errors in your JSON, with detailed error messages that
                point to the exact problem.
              </p>
              <p>
                Pro tip: Press <strong>Cmd+Enter</strong> (Mac) or{" "}
                <strong>Ctrl+Enter</strong> (Windows) to format instantly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Before and After</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                <strong className="text-foreground">Before (minified):</strong>
              </p>
              <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                {`{"name":"Toolbox","tools":[{"name":"JSON Formatter","free":true},{"name":"Calculator","free":true}],"maintainer":"Community"}`}
              </pre>
              <p>
                <strong className="text-foreground">After (formatted):</strong>
              </p>
              <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                {`{
  "name": "Toolbox",
  "tools": [
    {
      "name": "JSON Formatter",
      "free": true
    },
    {
      "name": "Calculator",
      "free": true
    }
  ],
  "maintainer": "Community"
}`}
              </pre>
            </CardContent>
          </Card>

          <JsonFormatter />

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <div>
                <p className="font-medium text-foreground">
                  Why is my JSON rejected as invalid?
                </p>
                <p>
                  The most common causes are trailing commas after the last
                  item, single quotes instead of double quotes, unquoted keys,
                  and comments. JSON strictly requires double-quoted strings and
                  does not allow trailing commas or <code>{"//"}</code> comments.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Does it handle large or nested JSON?
                </p>
                <p>
                  Yes. Deeply nested objects and large arrays are supported.
                  Formatting is performed in your browser, so very large
                  documents are processed locally without uploading anything.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  What is the difference between format and minify?
                </p>
                <p>
                  Format adds indentation and line breaks so the structure is
                  easy to read. Minify removes all unnecessary whitespace and
                  newlines to produce the smallest possible string for storage
                  or transmission.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Can it format non-JSON like YAML or SQL?
                </p>
                <p>
                  No. This tool validates and formats JSON only. If your input
                  is not valid JSON, it will be reported as an error rather than
                  silently producing misleading output.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Is my data uploaded anywhere?
                </p>
                <p>
                  No. Everything is processed locally in your browser. You can
                  safely paste confidential API responses or configuration
                  files without worrying about them leaving your device.
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
                  Leaving a trailing comma before the closing brace or bracket
                  &mdash; remove it.
                </li>
                <li>
                  Using single quotes for strings &mdash; JSON requires double
                  quotes.
                </li>
                <li>
                  Including JavaScript comments like{" "}
                  <code>{"// note"}</code> or <code>{"/* note */"}</code>.
                </li>
                <li>
                  Forgetting to escape quotes inside a string with{" "}
                  <code>{"\\\""}</code>.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AdLayout>
    </div>
  );
}

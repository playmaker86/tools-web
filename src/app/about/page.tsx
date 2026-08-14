import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calculator, Braces, Link2, Clock, Binary } from "lucide-react";

export const metadata: Metadata = {
  title: "About - Toolbox",
  description:
    "Learn about Toolbox, a collection of free online developer tools that run entirely in your browser. No registration, no data collection, no ads on results.",
};

const toolLinks = [
  { icon: Calculator, title: "Calculator", href: "/tools/calculator", description: "Fast browser-based arithmetic calculator." },
  { icon: Braces, title: "JSON Formatter", href: "/tools/json-formatter", description: "Format, validate, and minify JSON data." },
  { icon: Binary, title: "Base64 Encoder / Decoder", href: "/tools/base64", description: "Encode and decode Base64 with full Unicode support." },
  { icon: Clock, title: "Timestamp Converter", href: "/tools/timestamp", description: "Convert between Unix timestamps and readable dates." },
  { icon: Link2, title: "URL Encoder / Decoder", href: "/tools/url", description: "Encode and decode URL components and query strings." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">About Toolbox</h1>
          <p className="text-muted-foreground">
            Toolbox is a collection of free, fast, and privacy-friendly online tools built for developers, students, and anyone who needs a quick utility without installing anything.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Why We Built This</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Most online tools are cluttered with pop-ups, force you to create an account, or upload your data to a third-party server. We wanted something different: tools that are simple, honest, and respect your privacy.
            </p>
            <p>
              Every tool on this site runs entirely in your browser. Whatever you paste, type, or upload never leaves your device. There is no account system, no tracking of your input, and nothing is stored on our servers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-4 text-muted-foreground">
              {toolLinks.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href} className="group flex items-start gap-3">
                    <span className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <tool.icon className="size-5" />
                    </span>
                    <span>
                      <span className="font-medium text-foreground">{tool.title}</span>
                      <span className="block text-sm">{tool.description}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Commitments</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">Free forever.</strong> All tools are and will remain free to use for everyone.
            </p>
            <p>
              <strong className="text-foreground">Private by design.</strong> All processing happens locally in your browser. We cannot see your data because it never reaches a server.
            </p>
            <p>
              <strong className="text-foreground">No account, no lock-in.</strong> Open a tool and start using it immediately. No sign-up, no email verification, no unnecessary friction.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              We are constantly looking for ways to improve. If you have a suggestion, found a bug, or want to request a new tool, we would love to hear from you.
            </p>
            <p>
              <Link href="/contact" className="text-primary underline font-medium">
                Visit our Contact page
              </Link>{" "}
              or review how we handle your data on our{" "}
              <Link href="/privacy" className="text-primary underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

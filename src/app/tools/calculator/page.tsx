import type { Metadata } from "next";
import Calculator from "@/components/tools/Calculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AdLayout from "@/components/AdLayout";

export const metadata: Metadata = {
  title: "Calculator - Toolbox",
  description:
    "Free online calculator with basic arithmetic functions. Simple, fast, and runs directly in your browser. No downloads, no registration.",
};

export default function CalculatorPage() {
  const bottomSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <AdLayout bottomSlot={bottomSlot}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Online Calculator</h1>
            <p className="text-muted-foreground">
              A free, browser-based calculator for quick arithmetic. No
              downloads, no registration &mdash; just open and start
              calculating.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                Click the number buttons to enter digits, then press an
                operator (<code>+</code>, <code>-</code>, <code>&times;</code>,{" "}
                <code>&divide;</code>) followed by the next number. Press{" "}
                <strong>=</strong> to see the result.
              </p>
              <p>
                Use the <strong>C</strong> button to clear the display and
                start a new calculation.
              </p>
              <p>
                You can enter decimal numbers by pressing the <strong>.</strong>{" "}
                button. The calculator supports both mouse clicks and your
                keyboard, so you can type digits and operators directly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Worked Examples</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                <strong className="text-foreground">Example 1 &mdash; Budget math.</strong>{" "}
                Calculate a monthly total: <code>1200 + 350 + 89.99</code>. Enter
                1200, press <code>+</code>, type 350, press <code>+</code>, type
                89.99, then press <code>=</code> to get 1639.99.
              </p>
              <p>
                <strong className="text-foreground">Example 2 &mdash; Splitting a bill.</strong>{" "}
                If a dinner costs <code>84.50</code> for three people, compute{" "}
                <code>84.5 &divide; 3</code> by entering 84.5, pressing{" "}
                <code>&divide;</code>, typing 3, and pressing <code>=</code>. The
                result is 28.1666&hellip;, which you can round to $28.17.
              </p>
              <p>
                <strong className="text-foreground">Example 3 &mdash; Percentage.</strong>{" "}
                To find 15% of 200, multiply: <code>200 &times; 0.15</code>. Enter
                200, press <code>&times;</code>, type 0.15, press <code>=</code>{" "}
                to get 30.
              </p>
            </CardContent>
          </Card>

          <Calculator />

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <div>
                <p className="font-medium text-foreground">Can I use my keyboard?</p>
                <p>
                  Yes. The calculator accepts input from your keyboard: digits,
                  operators (<code>+</code>, <code>-</code>, <code>*</code>,{" "}
                  <code>/</code>), <code>Enter</code> for equals, and{" "}
                  <code>Escape</code> or <code>Backspace</code> to clear.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">What happens if I divide by zero?</p>
                <p>
                  Dividing by zero is mathematically undefined. The calculator
                  will not return a result and keeps your input so you can
                  correct it instead of showing a confusing error value.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Does it handle decimal numbers?</p>
                <p>
                  Yes. Press the <strong>.</strong> button to enter decimals such
                  as 3.14 or 0.5. Results may show long decimal expansions; use
                  rounding to the precision you need.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Is my calculation saved anywhere?</p>
                <p>
                  No. Everything stays in your browser tab. Closing or
                  refreshing the page discards your input, and nothing is sent
                  to any server.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Can I chain multiple operations?</p>
                <p>
                  Yes, you can keep pressing operators after a result to chain
                  further calculations, for example{" "}
                  <code>10 + 5 = 15 &times; 2 = 30</code>.
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
                  Pressing <code>=</code> after entering an operator instead of
                  the second number &mdash; always type both operands first.
                </li>
                <li>
                  Forgetting to clear before a new calculation &mdash; use the{" "}
                  <strong>C</strong> button to avoid accidentally including the
                  previous result.
                </li>
                <li>
                  Confusing <code>.</code> (decimal point) with a thousands
                  separator &mdash; enter 1000 as <code>1000</code>, not{" "}
                  <code>1.000</code>.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AdLayout>
    </div>
  );
}

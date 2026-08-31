"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  Home,
  LineChart,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const turnstileSiteKey = "0x4AAAAAAEf0IbTnvduq82kh";

type TurnstileInstance = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action?: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    }
  ) => string;
  getResponse: (widgetId?: string) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileInstance;
  }
}

export default function HomeValuePage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (
      !turnstileReady ||
      !turnstileContainerRef.current ||
      !window.turnstile ||
      turnstileWidgetIdRef.current
    ) {
      return;
    }

    turnstileWidgetIdRef.current = window.turnstile.render(
      turnstileContainerRef.current,
      {
        sitekey: turnstileSiteKey,
        action: "home_value",
        callback: (token) => {
          setTurnstileToken(token);
          setError("");
        },
        "expired-callback": () => {
          setTurnstileToken("");
        },
        "error-callback": () => {
          setTurnstileToken("");
          setError(
            "The security check could not be loaded. Please refresh the page and try again."
          );
        },
      }
    );

    return () => {
      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, [turnstileReady]);

  function validate() {
    const newErrors = {
      name: "",
      email: "",
      address: "",
    };

    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!form.address.trim()) {
      newErrors.address = "Please enter the property address.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!validate()) {
      return;
    }

    const currentTurnstileToken =
      turnstileWidgetIdRef.current && window.turnstile
        ? window.turnstile.getResponse(turnstileWidgetIdRef.current)
        : turnstileToken;

    if (!currentTurnstileToken) {
      setError("Please complete the security check and try again.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/home-value", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          turnstileToken: currentTurnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send request.");
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        comments: "",
      });
      setErrors({ name: "", email: "", address: "" });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Sorry, something went wrong while submitting your request. Please try again or contact me directly."
      );
    } finally {
      setLoading(false);
      setTurnstileToken("");

      if (window.turnstile && turnstileWidgetIdRef.current) {
        window.turnstile.reset(turnstileWidgetIdRef.current);
      }
    }
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={() => setTurnstileReady(true)}
        onError={() => {
          setError(
            "The security check could not be loaded. Please refresh the page and try again."
          );
        }}
      />

      <main className="bg-background">
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              FREE HOME VALUE
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
              What&apos;s Your Home Worth?
            </h1>
            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Receive a complimentary Comparative Market Analysis prepared
              specifically for your home. There is no obligation, no pressure,
              and no automated estimate—just a professional opinion based on
              current market conditions.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
          {[
            { icon: Home, title: "Comparable Sales", text: "Recently sold homes similar to yours." },
            { icon: LineChart, title: "Market Trends", text: "Current inventory and pricing conditions." },
            { icon: Calculator, title: "Estimated Value", text: "A realistic value based on today's market." },
            { icon: ShieldCheck, title: "Protect Your Equity", text: "Advice designed to help you maximize your proceeds." },
          ].map((item) => (
            <Card key={item.title} className="rounded-3xl">
              <CardContent className="p-8 text-center">
                <item.icon className="mx-auto h-12 w-12 text-orange-500" />
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-6 py-24">
          <Card className="rounded-[2rem] shadow-xl">
            <CardContent className="p-10">
              <h2 className="text-3xl font-bold">Request Your Complimentary Home Valuation</h2>
              <p className="mt-4 text-muted-foreground">
                Complete the information below and I&apos;ll prepare a personalized market analysis for your property.
              </p>

              {submitted && (
                <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
                  <h3 className="text-2xl font-bold text-green-700">Thank You!</h3>
                  <p className="mt-3 leading-7 text-green-700">
                    Your request has been received successfully. I&apos;ll personally prepare your complimentary
                    Comparative Market Analysis and contact you soon.
                  </p>
                </div>
              )}

              {error && (
                <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" value={form.name} disabled={loading} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={form.email} disabled={loading} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={form.phone} disabled={loading} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>

                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" value={form.city} disabled={loading} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Property Address *</Label>
                  <Input id="address" value={form.address} disabled={loading} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                  {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address}</p>}
                </div>

                <div>
                  <Label htmlFor="comments">Additional Information</Label>
                  <Textarea
                    id="comments"
                    rows={5}
                    disabled={loading}
                    placeholder="Tell me anything that would help prepare a more accurate valuation (upgrades, pool, remodeled kitchen, etc.)"
                    value={form.comments}
                    onChange={(e) => setForm({ ...form, comments: e.target.value })}
                  />
                </div>

                <div ref={turnstileContainerRef} className="min-h-[65px]" aria-label="Security verification" />

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="px-10"
                >
                  {loading ? "Sending Request..." : "Request My Free Home Value"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section className="bg-stone-50 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold">Why Request A Home Value From Me?</h2>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Online estimates can be useful as a starting point, but they often miss the unique features,
              upgrades, location, and condition that influence a home&apos;s true market value.
            </p>
            <div className="mt-12 space-y-5 text-left md:text-center">
              {[
                "Professional Comparative Market Analysis",
                "Current local market expertise",
                "No automated estimates",
                "No obligation",
                "No high-pressure sales tactics",
                "Honest advice from a local REALTOR®",
              ].map((item) => (
                <div key={item} className="flex items-center justify-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-orange-500" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-14 inline-block">
              <Button size="lg" variant="outline">Have Questions? Contact Me</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

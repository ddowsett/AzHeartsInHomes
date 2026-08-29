"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const turnstileSiteKey = "0x4AAAAAAEf0IbTnvduq82kh";

type TurnstileInstance = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
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

type FormData = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (
      !turnstileReady ||
      !turnstileContainerRef.current ||
      !window.turnstile
    ) {
      return;
    }

    if (turnstileWidgetIdRef.current) {
      return;
    }

    turnstileWidgetIdRef.current = window.turnstile.render(
      turnstileContainerRef.current,
      {
        sitekey: turnstileSiteKey,
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

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
    setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess(false);

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!form.message.trim()) {
      setError("Please enter a message.");
      return;
    }

    // Read the token directly from the Turnstile widget at submission time.
    // React state is only a convenience indicator and should not control
    // whether the form's submit event can fire.
    const currentTurnstileToken =
      turnstileWidgetIdRef.current && window.turnstile
        ? window.turnstile.getResponse(turnstileWidgetIdRef.current)
        : turnstileToken;

    if (!currentTurnstileToken) {
      setError("Please complete the security check and try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
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
        throw new Error(data.message || "Unable to send your message.");
      }

      setSuccess(true);
      setForm(initialForm);
      setTurnstileToken("");
    } catch (err) {
      console.error("Contact form error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);

      if (turnstileWidgetIdRef.current && window.turnstile) {
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
              LET&apos;S TALK
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
              How Can I Help?
            </h1>
            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Whether you&apos;re thinking about buying, preparing to sell, or
              simply have a real estate question, I&apos;m happy to talk through
              your options with you.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                GET IN TOUCH
              </p>
              <h2 className="mt-4 text-4xl font-bold">
                Start With A Conversation.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Real estate decisions are personal and often involve
                significant financial considerations. My goal is to understand
                what matters to you before recommending a strategy.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a
                      href="tel:+1480773213"
                      className="mt-1 block text-muted-foreground transition hover:text-orange-600"
                    >
                      (480) 773-3213
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:phxrealtordarek@gmail.com"
                      className="mt-1 block text-muted-foreground transition hover:text-orange-600"
                    >
                      phxrealtordarek@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
                  <div>
                    <h3 className="font-semibold">Service Area</h3>
                    <p className="mt-1 text-muted-foreground">
                      Greater Phoenix Metropolitan Area
                      <br />
                      Arizona
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <h3 className="text-xl font-bold">Looking for something specific?</h3>
                <div className="mt-6 space-y-3">
                  <Link
                    href="/buyers"
                    className="flex items-center gap-3 text-muted-foreground transition hover:text-orange-600"
                  >
                    <CheckCircle2 className="h-5 w-5 text-orange-500" />
                    I&apos;m looking to buy a home
                  </Link>
                  <Link
                    href="/sellers"
                    className="flex items-center gap-3 text-muted-foreground transition hover:text-orange-600"
                  >
                    <CheckCircle2 className="h-5 w-5 text-orange-500" />
                    I&apos;m thinking about selling
                  </Link>
                  <Link
                    href="/home-value"
                    className="flex items-center gap-3 text-muted-foreground transition hover:text-orange-600"
                  >
                    <CheckCircle2 className="h-5 w-5 text-orange-500" />
                    I&apos;d like to know what my home is worth
                  </Link>
                </div>
              </div>
            </div>

            <Card className="rounded-[2rem] shadow-xl">
              <CardContent className="p-8 md:p-10">
                {success ? (
                  <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                    <CheckCircle2 className="h-16 w-16 text-orange-500" />
                    <h2 className="mt-6 text-3xl font-bold">Message Received!</h2>
                    <p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
                      Thank you for reaching out to AZ Hearts In Homes. I&apos;ve
                      received your message and will get back to you as soon as
                      possible.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      I appreciate the opportunity to help with your real estate
                      needs.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="mt-10"
                      onClick={() => setSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold">Send Me A Message</h2>
                    <p className="mt-4 text-muted-foreground">
                      Complete the form below and I&apos;ll get back to you as
                      soon as possible.
                    </p>

                    {error && (
                      <div
                        role="alert"
                        className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700"
                      >
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-10 space-y-7">
                      <div className="grid gap-7 md:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="text-sm font-medium">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={(event) =>
                              updateField("name", event.target.value)
                            }
                            disabled={isSubmitting}
                            required
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="text-sm font-medium">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={(event) =>
                              updateField("email", event.target.value)
                            }
                            disabled={isSubmitting}
                            required
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(event) =>
                              updateField("phone", event.target.value)
                            }
                            disabled={isSubmitting}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <label htmlFor="interest" className="text-sm font-medium">
                            I&apos;m Interested In
                          </label>
                          <select
                            id="interest"
                            name="interest"
                            value={form.interest}
                            onChange={(event) =>
                              updateField("interest", event.target.value)
                            }
                            disabled={isSubmitting}
                            className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Select an option</option>
                            <option value="buying">Buying a Home</option>
                            <option value="selling">Selling a Home</option>
                            <option value="buying-and-selling">Buying &amp; Selling</option>
                            <option value="home-value">Home Value</option>
                            <option value="general">General Question</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="text-sm font-medium">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={(event) =>
                            updateField("message", event.target.value)
                          }
                          disabled={isSubmitting}
                          required
                          rows={7}
                          className="mt-2"
                          placeholder="Tell me a little about what you&apos;re looking for..."
                        />
                      </div>

                      <div
                        ref={turnstileContainerRef}
                        className="min-h-[65px]"
                        aria-label="Security verification"
                      />

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="px-10"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-stone-50 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              WHAT YOU CAN EXPECT
            </p>
            <h2 className="mt-4 text-4xl font-bold">Honest Guidance. No Pressure.</h2>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Your first conversation doesn&apos;t have to be a commitment.
              We&apos;ll simply talk about your situation, your goals, and what
              options may make sense for you.
            </p>

            <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
              <div className="rounded-3xl bg-background p-7">
                <CheckCircle2 className="h-8 w-8 text-orange-500" />
                <h3 className="mt-5 text-xl font-bold">Listen First</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  I&apos;ll take the time to understand your situation before
                  recommending a strategy.
                </p>
              </div>
              <div className="rounded-3xl bg-background p-7">
                <CheckCircle2 className="h-8 w-8 text-orange-500" />
                <h3 className="mt-5 text-xl font-bold">Clear Communication</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  You&apos;ll know what is happening, what comes next, and what
                  decisions may need your attention.
                </p>
              </div>
              <div className="rounded-3xl bg-background p-7">
                <CheckCircle2 className="h-8 w-8 text-orange-500" />
                <h3 className="mt-5 text-xl font-bold">No Pressure</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  My job is to provide honest guidance so you can make the
                  decision that is right for you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

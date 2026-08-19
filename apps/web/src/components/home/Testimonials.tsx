"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Harold",
    location: "Gold Canyon, Arizona",
    review:
      "Working with Darek on the sale of our house was a pleasant experience. He was highly professional. We were well informed of every step in the process. We knew we could count on him.",
  },

  {
    name: "Future Client",
    location: "Phoenix, Arizona",
    review:
      "Your testimonial could appear here. As additional reviews are received, they can easily be added without changing the design.",
  },

  {
    name: "Future Client",
    location: "Scottsdale, Arizona",
    review:
      "Additional testimonials can be rotated automatically to keep the homepage fresh while maintaining a clean, elegant appearance.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const previous = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
            Kind Words From My Clients
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Relationships Matter
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">
            Building lasting relationships is more important to me than simply
            closing another transaction. Here's what a few of my clients have
            shared about their experience.
          </p>
        </div>

        <div className="relative mt-20">
          <button
            onClick={previous}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-card p-3 shadow-lg transition hover:scale-110 md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-card p-3 shadow-lg transition hover:scale-110 md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-orange-200 bg-card px-10 py-14 shadow-2xl transition-all duration-500">
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-6 w-6 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            <p className="mt-10 text-center text-xl leading-10 text-muted-foreground md:text-2xl">
              "{testimonial.review}"
            </p>

            <div className="mt-12 flex flex-col items-center">
              <Heart
                className="h-8 w-8 fill-red-400 text-red-400"
                strokeWidth={1.5}
              />

              <h3 className="mt-4 text-2xl font-semibold text-foreground">
                {testimonial.name}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {testimonial.location}
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition ${
                  current === index
                    ? "bg-orange-500"
                    : "bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground">
            Ready To Make Your Next Move?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Whether you're buying your first home, selling your current one,
            or simply exploring your options, I'd love the opportunity to earn
            your trust and help you achieve your real estate goals.
          </p>

          <Button
            size="lg"
            className="mt-10 px-10"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
}
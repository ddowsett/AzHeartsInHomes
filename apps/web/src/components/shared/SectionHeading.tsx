import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-14",
        centered ? "text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#234E70]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600">
          {description}
        </p>
      )}

      <div
        className={clsx(
          "mt-8 h-1 w-24 rounded-full bg-[#C9973E]",
          centered ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
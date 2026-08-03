import { ReactNode } from "react";
import clsx from "clsx";

import { design } from "@/lib/design";

interface PageSectionProps {
  children: ReactNode;
  className?: string;

  /**
   * Uses the light blue section background.
   * Default = ivory background.
   */
  blue?: boolean;

  /**
   * Removes the default vertical padding.
   */
  noPadding?: boolean;

  /**
   * Removes the default max-width container.
   * Useful for full-width Hero sections.
   */
  fullWidth?: boolean;
}

export function PageSection({
  children,
  className,
  blue = false,
  noPadding = false,
  fullWidth = false,
}: PageSectionProps) {
  return (
    <section
      className={clsx(
        blue
          ? design.colors.blue
          : design.colors.background,

        !noPadding && design.layout.section,

        className
      )}
    >
      {fullWidth ? (
        children
      ) : (
        <div className={design.layout.container}>
          {children}
        </div>
      )}
    </section>
  );
}
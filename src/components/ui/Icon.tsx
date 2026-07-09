import type { CSSProperties } from "react";

type IconProps = {
  name: string;
  className?: string;
  style?: CSSProperties;
};

/** Renders a reference to a symbol in the global icon sprite (#i-<name>). */
export default function Icon({ name, className, style }: IconProps) {
  return (
    <svg className={className} style={style} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---------- אייקוני פעולה ---------- */

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 3h3l1.5 4.5L8 9.5a12 12 0 0 0 6.5 6.5l2-2 4.5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.9c0 1.76.46 3.45 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.76c0 4.52-3.68 8.2-8.2 8.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.13 8.13 0 0 1-1.25-4.35c0-4.52 3.68-8.2 8.2-8.2Zm-3.06 4.3c-.15 0-.39.06-.6.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.57 2.4 3.8 3.36.53.23.94.37 1.27.47.53.17 1.02.14 1.4.09.43-.06 1.32-.54 1.5-1.06.19-.52.19-.97.13-1.06-.06-.09-.2-.15-.43-.26-.22-.11-1.32-.65-1.53-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.17-.48.06-.22-.11-.94-.35-1.79-1.1-.66-.59-1.1-1.32-1.23-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38l-.42-.01Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.6" r="2.4" />
    </svg>
  );
}

export function FaxIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 8V4h10v4" />
      <rect x="3" y="8" width="18" height="9" rx="2" />
      <path d="M7 13h10v6H7z" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 5-5" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.8 7 9 4.1-1.2 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/* ---------- אייקוני שירותים ---------- */

function Concrete(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9.5h18M3 14.5h18M9 4v5.5M15 9.5v5M7 14.5V20M14 14.5V20" />
      <path d="M11.5 4.2l1 2-1.4 1.4 1 1.9" />
    </svg>
  );
}

function Reinforce(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 21V8l6-4 6 4v13" />
      <path d="M6 21h12" />
      <path d="M9.5 21v-5h5v5" />
      <path d="M12 4v4M9 11h6" />
    </svg>
  );
}

function Facade(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M19.5 5.5l1 1M3.5 5.5l-1 1" />
    </svg>
  );
}

function Plaster(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 16.5 14 5.5l3.5 3.5L6.5 20H3v-3.5Z" />
      <path d="m13 6.5 3.5 3.5" />
      <path d="M16 4.5 19.5 8" />
    </svg>
  );
}

function Danger(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 21.5 20H2.5L12 3.5Z" />
      <path d="M12 10v4.5" />
      <path d="M12 17.5h.01" />
    </svg>
  );
}

function Preserve(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9 12 4l9 5" />
      <path d="M5 9.5V19M19 9.5V19M9.5 9.5V19M14.5 9.5V19" />
      <path d="M3.5 19h17" />
    </svg>
  );
}

function Authority(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9 12 4l9 5" />
      <path d="M5 9.5V18M19 9.5V18M9.5 9.5V18M14.5 9.5V18" />
      <path d="M3.5 21h17" />
      <path d="m9.5 14.5 1.5 1.5 3-3" />
    </svg>
  );
}

function Occupied(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V8l5-4 5 4v13" />
      <path d="M14 21V11h6v10" />
      <path d="M4 21h17" />
      <path d="M7.5 12h3M7.5 16h3M16.5 15h1M16.5 18h1" />
    </svg>
  );
}

const SERVICE_ICONS = {
  concrete: Concrete,
  reinforce: Reinforce,
  facade: Facade,
  plaster: Plaster,
  danger: Danger,
  preserve: Preserve,
  authority: Authority,
  occupied: Occupied,
} as const;

export type ServiceIconName = keyof typeof SERVICE_ICONS;

export function ServiceIcon({
  name,
  ...props
}: { name: ServiceIconName } & IconProps) {
  const Cmp = SERVICE_ICONS[name];
  return <Cmp {...props} />;
}

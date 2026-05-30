import { ServiceIcon, type ServiceIconName } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const ITEMS: { icon: ServiceIconName; label: string }[] = [
  { icon: "reinforce", label: "ניסיון בפרויקטים מורכבים" },
  { icon: "authority", label: "עבודה מול רשויות וחברות עירוניות" },
  { icon: "occupied", label: "טיפול במבנים מאוכלסים" },
  { icon: "danger", label: "התמחות בהסרת צווי מבנה מסוכן" },
];

/** פס אמון קצר מתחת ל-Hero - מורם מעט כדי לחבר ויזואלית בין המקטעים */
export function TrustBar() {
  return (
    <div className="relative z-20 -mt-8 lg:-mt-12">
      <div className="container-px">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-100 bg-navy-100 shadow-card lg:grid-cols-4">
            {ITEMS.map((it) => (
              <div
                key={it.label}
                className="flex items-center gap-3 bg-white p-4 lg:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 text-teal-600 ring-1 ring-teal-100">
                  <ServiceIcon name={it.icon} className="h-6 w-6" />
                </span>
                <span className="text-sm font-bold leading-tight text-navy-800">
                  {it.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

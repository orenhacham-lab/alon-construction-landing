import { WhatsappLink, PhoneLink } from "@/components/CtaButtons";
import { PhoneIcon, WhatsappIcon } from "@/components/icons";

/**
 * כפתורי פעולה צפים:
 * - מובייל: בר תחתון קבוע עם וואטסאפ + חיוג (CTA תמיד נגיש).
 * - דסקטופ: בועת וואטסאפ צפה עם אפקט פעימה.
 */
export function FloatingButtons() {
  return (
    <>
      {/* בר תחתון - מובייל */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-navy-100 bg-white shadow-[0_-4px_20px_-6px_rgba(15,42,71,0.18)] lg:hidden">
        <WhatsappLink
          location="mobile_bar"
          withIcon={false}
          className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 font-bold text-white"
        >
          <WhatsappIcon className="h-5 w-5" />
          וואטסאפ
        </WhatsappLink>
        <PhoneLink
          location="mobile_bar"
          withIcon={false}
          className="flex items-center justify-center gap-2 bg-navy-800 py-3.5 font-bold text-white"
        >
          <PhoneIcon className="h-5 w-5" />
          התקשרו
        </PhoneLink>
      </div>

      {/* בועת וואטסאפ צפה - דסקטופ */}
      <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulse-ring" />
        <WhatsappLink
          location="float_bubble"
          withIcon={false}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
        >
          <WhatsappIcon className="h-8 w-8" />
        </WhatsappLink>
      </div>
    </>
  );
}

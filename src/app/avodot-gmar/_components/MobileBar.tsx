"use client";

import { useEffect, useState } from "react";
import { WhatsappLink, PhoneLink } from "@/components/CtaButtons";
import { PhoneIcon, WhatsappIcon } from "@/components/icons";

/** בר פעולה תחתון במובייל: מופיע רק אחרי שכפתורי הפתיח יצאו מהמסך */
export function MobileBar({ whatsappHref, watchId }: { whatsappHref: string; watchId: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(watchId);
    if (!target) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    io.observe(target);
    return () => io.disconnect();
  }, [watchId]);

  return (
    <div
      className={`gm-ease fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy-100 bg-white shadow-[0_-4px_20px_-6px_rgba(15,42,71,0.18)] transition-[transform,visibility] duration-300 lg:hidden ${
        visible ? "visible translate-y-0" : "invisible translate-y-full"
      }`}
    >
      <WhatsappLink
        location="gmar_mobile_bar"
        href={whatsappHref}
        withIcon={false}
        className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 font-bold text-white"
      >
        <WhatsappIcon className="h-5 w-5" />
        וואטסאפ
      </WhatsappLink>
      <PhoneLink
        location="gmar_mobile_bar"
        withIcon={false}
        className="flex items-center justify-center gap-2 bg-navy-800 py-3.5 font-bold text-white"
      >
        <PhoneIcon className="h-5 w-5" />
        התקשרו
      </PhoneLink>
    </div>
  );
}

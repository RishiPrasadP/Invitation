'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollManager() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const anchor = document.getElementById(hash.slice(1));
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    if (previousPathname.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      previousPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}

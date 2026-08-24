'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { nav, brand } from '@/content/site';
import { cn } from '@/lib/utils';

/** Nav fixa e minimalista. Fundo em glass surge ao rolar. */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled ? 'glass' : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[var(--container-content)] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-baseline gap-2" aria-label="OMM — início">
          <span className="font-display text-lg font-bold tracking-tight text-pure">OMM</span>
          <span className="hidden text-[0.7rem] uppercase tracking-eyebrow text-faint sm:inline">
            Estratégia
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-pure"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={nav.cta.href}
          className="hidden rounded-full border border-[var(--omm-line-strong)] px-5 py-2 text-sm text-text transition-colors duration-500 hover:border-accent hover:text-pure lg:inline-flex"
        >
          {nav.cta.label}
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                'absolute left-0 top-0 h-px w-full bg-pure transition-transform duration-300',
                open && 'translate-y-[6px] rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute bottom-0 left-0 h-px w-full bg-pure transition-transform duration-300',
                open && '-translate-y-[6px] -rotate-45',
              )}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="glass overflow-hidden border-t border-[var(--omm-line)] lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {nav.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg text-text transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={nav.cta.href}
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex justify-center rounded-full bg-pure px-6 py-3 text-sm font-medium text-void"
              >
                {nav.cta.label}
              </a>
              <span className="mt-6 text-xs uppercase tracking-eyebrow text-faint">
                {brand.region}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

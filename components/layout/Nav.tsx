'use client';

import { useState } from 'react';
import { nav } from '@/content/site';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/** Nav fixa, sólida (sem blur) e sem animação de entrada. */
export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--omm-line)] bg-void/95">
      <nav className="mx-auto flex h-16 w-full max-w-[var(--container-content)] items-center justify-between px-6 md:px-10">
        <a href="#top" className="text-base font-semibold tracking-tight text-pure" aria-label="OMM.PRD — início">
          OMM.PRD
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-pure"
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'primary', tone: 'escuro' }), 'px-5 py-2')}
          >
            {nav.cta.label}
          </a>
        </div>

        <button
          type="button"
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

      {open && (
        <div className="border-t border-[var(--omm-line)] bg-void lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-6">
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg text-text"
              >
                {l.label}
              </a>
            ))}
            <a
              href={nav.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: 'primary', tone: 'escuro' }), 'mt-4')}
            >
              {nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

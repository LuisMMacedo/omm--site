import Container from '@/components/primitives/Container';
import { footer, brand } from '@/content/site';

/** Rodapé minimalista com links e contato. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--omm-line)] py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold tracking-tight text-pure">OMM</span>
              <span className="text-xs uppercase tracking-eyebrow text-faint">{brand.full}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{footer.tagline}</p>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-eyebrow text-faint">{col.title}</span>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm text-muted transition-colors duration-300 hover:text-pure"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-[var(--omm-line)] pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} OMM · {brand.region}
          </span>
          <span>{brand.instagram}</span>
        </div>
      </Container>
    </footer>
  );
}

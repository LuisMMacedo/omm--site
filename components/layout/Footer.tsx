import Container from '@/components/primitives/Container';
import { brand, footer } from '@/content/site';

/** Rodapé minimalista: nome, Instagram, WhatsApp. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--omm-line)] py-14">
      <Container>
        <div className="flex flex-col gap-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <span className="text-text">{footer.linha}</span>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-pure"
            >
              Instagram: {brand.instagram}
            </a>
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-pure"
            >
              WhatsApp: {brand.whatsappLabel}
            </a>
          </div>
          <span className="text-faint">© {year}</span>
        </div>
      </Container>
    </footer>
  );
}

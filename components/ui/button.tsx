import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Botões do site. Sem JS de animação: só transição de cor em CSS.
 * - primary: o botão principal (WhatsApp)
 * - ghost: o secundário (diagnóstico, ver trabalhos)
 * `tone="bege"` adapta as cores para seções claras.
 */
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-300',
  {
    variants: {
      variant: {
        primary: '',
        ghost: 'border',
      },
      tone: {
        escuro: '',
        bege: '',
      },
      size: {
        default: 'px-7 py-3.5',
        lg: 'px-9 py-4 text-base',
      },
    },
    compoundVariants: [
      { variant: 'primary', tone: 'escuro', className: 'bg-bege text-ink hover:bg-pure' },
      { variant: 'primary', tone: 'bege', className: 'bg-ink text-bege hover:bg-vinho' },
      {
        variant: 'ghost',
        tone: 'escuro',
        className: 'border-[var(--omm-line-strong)] text-text hover:border-bege hover:text-pure',
      },
      {
        variant: 'ghost',
        tone: 'bege',
        className: 'border-ink/30 text-ink hover:border-ink',
      },
    ],
    defaultVariants: { variant: 'primary', tone: 'escuro', size: 'default' },
  },
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function Button({ children, href, variant, tone, size, className }: ButtonProps) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(buttonVariants({ variant, tone, size }), className)}
    >
      {children}
    </a>
  );
}

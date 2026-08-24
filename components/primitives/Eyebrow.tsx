import { cn } from '@/lib/utils';

/** Micro-label numerado das seções. Detalhe em laranja. */
export default function Eyebrow({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-xs font-medium uppercase tracking-eyebrow text-muted',
        className,
      )}
    >
      <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
      {children}
    </span>
  );
}

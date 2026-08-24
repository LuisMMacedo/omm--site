'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { track } from '@vercel/analytics';
import { triagem, brand } from '@/content/site';
import { cn } from '@/lib/utils';
import { EASE_OMM } from '@/ds/motion';

type Step = 1 | 2 | 'result';

interface FormData {
  nome: string;
  empresa: string;
  whatsapp: string;
  email: string;
  segmento: string;
  objetivo: string;
  situacao: string;
  desafio: string;
}

const EMPTY: FormData = {
  nome: '',
  empresa: '',
  whatsapp: '',
  email: '',
  segmento: '',
  objetivo: '',
  situacao: '',
  desafio: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  'w-full rounded-xl border border-[var(--omm-line)] bg-white/[0.02] px-4 py-3 text-text placeholder:text-faint outline-none transition-colors duration-300 focus:border-accent';

function buildWhatsappUrl(d: FormData, diagnostico: string): string {
  const msg = [
    'Olá, Miguel! Fiz o diagnóstico no site da OMM.',
    '',
    `👤 Nome: ${d.nome}`,
    `🏢 Empresa: ${d.empresa}`,
    `📱 WhatsApp: ${d.whatsapp}`,
    `✉️ E-mail: ${d.email}`,
    '',
    `Segmento: ${d.segmento}`,
    `Objetivo: ${d.objetivo}`,
    `Presença hoje: ${d.situacao}`,
    d.desafio ? `Desafio: ${d.desafio}` : '',
    '',
    '— Diagnóstico gerado —',
    diagnostico,
  ]
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/** Chip de opção (radio premium). */
function OptionChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full border px-4 py-2.5 text-left text-sm transition-colors duration-300',
        active
          ? 'border-accent bg-accent/10 text-pure'
          : 'border-[var(--omm-line)] text-muted hover:border-[var(--omm-line-strong)] hover:text-text',
      )}
    >
      {children}
    </button>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.7rem] uppercase tracking-eyebrow text-faint">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400/90">{error}</span>}
    </label>
  );
}

export default function Triagem() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [diagnostico, setDiagnostico] = useState('');

  const set = (k: keyof FormData, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validateStep1 = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.nome.trim()) e.nome = 'Informe seu nome.';
    if (!data.empresa.trim()) e.empresa = 'Informe a empresa.';
    if (data.whatsapp.replace(/\D/g, '').length < 10) e.whatsapp = 'WhatsApp inválido.';
    if (!EMAIL_RE.test(data.email)) e.email = 'E-mail inválido.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.segmento.trim()) e.segmento = 'Informe o segmento.';
    if (!data.objetivo) e.objetivo = 'Escolha um objetivo.';
    if (!data.situacao) e.situacao = 'Escolha uma opção.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const gerar = async () => {
    if (!validateStep2()) return;
    setLoading(true);
    setApiError('');
    try {
      const res = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('bad response');
      const json = (await res.json()) as { diagnostico?: string };
      if (!json.diagnostico) throw new Error('empty');
      setDiagnostico(json.diagnostico);
      track('diagnostico_gerado', { segmento: data.segmento, objetivo: data.objetivo });
      setStep('result');
    } catch {
      track('diagnostico_erro');
      setApiError(triagem.erro);
    } finally {
      setLoading(false);
    }
  };

  const refazer = () => {
    setStep(1);
    setDiagnostico('');
    setApiError('');
  };

  return (
    <div className="mx-auto mt-14 w-full max-w-2xl text-left">
      {/* progresso */}
      {step !== 'result' && (
        <div className="mb-8 flex items-center gap-3">
          {triagem.steps.map((s) => (
            <div key={s.n} className="flex flex-1 items-center gap-3">
              <span
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-full border text-xs transition-colors duration-500',
                  (step === s.n || (step === 2 && s.n === 1))
                    ? 'border-accent text-accent'
                    : 'border-[var(--omm-line)] text-faint',
                )}
              >
                {s.n}
              </span>
              <span
                className={cn(
                  'text-xs uppercase tracking-eyebrow transition-colors duration-500',
                  step === s.n ? 'text-text' : 'text-faint',
                )}
              >
                {s.label}
              </span>
              {s.n === 1 && <span className="h-px flex-1 bg-[var(--omm-line)]" />}
            </div>
          ))}
        </div>
      )}

      <div className="glass rounded-3xl p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {/* ——— PASSO 1 ——— */}
          {step === 1 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.4, ease: EASE_OMM }}
            >
              <h3 className="font-display text-2xl font-medium text-pure">
                {triagem.passo1.title}
              </h3>
              <p className="mt-2 text-sm text-grade">{triagem.passo1.subtitle}</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label={triagem.passo1.fields.nome.label} error={errors.nome}>
                  <input
                    className={inputClass}
                    placeholder={triagem.passo1.fields.nome.placeholder}
                    value={data.nome}
                    onChange={(e) => set('nome', e.target.value)}
                  />
                </Field>
                <Field label={triagem.passo1.fields.empresa.label} error={errors.empresa}>
                  <input
                    className={inputClass}
                    placeholder={triagem.passo1.fields.empresa.placeholder}
                    value={data.empresa}
                    onChange={(e) => set('empresa', e.target.value)}
                  />
                </Field>
                <Field label={triagem.passo1.fields.whatsapp.label} error={errors.whatsapp}>
                  <input
                    className={inputClass}
                    inputMode="tel"
                    placeholder={triagem.passo1.fields.whatsapp.placeholder}
                    value={data.whatsapp}
                    onChange={(e) => set('whatsapp', e.target.value)}
                  />
                </Field>
                <Field label={triagem.passo1.fields.email.label} error={errors.email}>
                  <input
                    className={inputClass}
                    inputMode="email"
                    placeholder={triagem.passo1.fields.email.placeholder}
                    value={data.email}
                    onChange={(e) => set('email', e.target.value)}
                  />
                </Field>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (!validateStep1()) return;
                    track('diagnostico_passo1');
                    setStep(2);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-pure px-7 py-3.5 text-sm font-medium text-void transition-colors duration-500 hover:bg-accent"
                >
                  {triagem.cta.proximo}
                  <span aria-hidden>→</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* ——— PASSO 2 ——— */}
          {step === 2 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.4, ease: EASE_OMM }}
            >
              <h3 className="font-display text-2xl font-medium text-pure">
                {triagem.passo2.title}
              </h3>
              <p className="mt-2 text-sm text-grade">{triagem.passo2.subtitle}</p>

              <div className="mt-8 space-y-7">
                <Field label={triagem.passo2.segmento.label} error={errors.segmento}>
                  <input
                    className={inputClass}
                    placeholder={triagem.passo2.segmento.placeholder}
                    value={data.segmento}
                    onChange={(e) => set('segmento', e.target.value)}
                  />
                </Field>

                <Field label={triagem.passo2.objetivo.label} error={errors.objetivo}>
                  <div className="flex flex-wrap gap-2.5">
                    {triagem.passo2.objetivo.options.map((o) => (
                      <OptionChip key={o} active={data.objetivo === o} onClick={() => set('objetivo', o)}>
                        {o}
                      </OptionChip>
                    ))}
                  </div>
                </Field>

                <Field label={triagem.passo2.situacao.label} error={errors.situacao}>
                  <div className="flex flex-wrap gap-2.5">
                    {triagem.passo2.situacao.options.map((o) => (
                      <OptionChip key={o} active={data.situacao === o} onClick={() => set('situacao', o)}>
                        {o}
                      </OptionChip>
                    ))}
                  </div>
                </Field>

                <Field label={triagem.passo2.desafio.label}>
                  <textarea
                    className={cn(inputClass, 'min-h-[84px] resize-none')}
                    placeholder={triagem.passo2.desafio.placeholder}
                    value={data.desafio}
                    onChange={(e) => set('desafio', e.target.value)}
                  />
                </Field>
              </div>

              {apiError && <p className="mt-6 text-sm text-red-400/90">{apiError}</p>}

              <div className="mt-8 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-muted transition-colors duration-300 hover:text-pure"
                >
                  ← {triagem.cta.voltar}
                </button>
                <button
                  type="button"
                  onClick={gerar}
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full bg-pure px-7 py-3.5 text-sm font-medium text-void transition-colors duration-500 hover:bg-accent disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border border-void/40 border-t-void" />
                      {triagem.cta.gerando}
                    </>
                  ) : (
                    <>
                      {triagem.cta.gerar}
                      <span aria-hidden>→</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* ——— RESULTADO ——— */}
          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: EASE_OMM }}
            >
              <span className="text-[0.7rem] uppercase tracking-eyebrow text-accent">
                {triagem.resultado.eyebrow}
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium text-pure">
                {triagem.resultado.heading}
              </h3>

              <div className="mt-6 space-y-4">
                {diagnostico.split(/\n{2,}/).map((p, i) => (
                  <p key={i} className="leading-relaxed text-text">
                    {p}
                  </p>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-faint">{triagem.resultado.note}</p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={buildWhatsappUrl(data, diagnostico)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('lead_enviado_whatsapp')}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-void transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {triagem.cta.enviar}
                  <span aria-hidden>→</span>
                </a>
                <button
                  type="button"
                  onClick={refazer}
                  className="text-sm text-muted transition-colors duration-300 hover:text-pure"
                >
                  {triagem.cta.refazer}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

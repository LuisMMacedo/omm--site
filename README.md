# OMM — Site institucional (omm-web)

Site da OMM (Organização · Método · Movimento). Consultoria de **posicionamento e
comunicação estratégica** que utiliza audiovisual como ferramenta — a estratégia é o
produto, o vídeo é consequência.

Projeto **standalone**, independente do CRM.
**Next.js 15 (App Router) · React 19 · TypeScript · Tailwind v4 · shadcn/ui (cva) · Motion (Framer Motion 12) · Lenis.**

## Rodar

```bash
npm install
npm run dev        # http://localhost:3002
npm run build      # build de produção (prerender estático)
npm run start      # serve o build
npm run typecheck  # tsc --noEmit
```

## Onde editar

| O quê | Arquivo |
|---|---|
| **Todo o texto do site** | `content/site.ts` |
| **Design System** (cor, tipografia, ritmo) | `app/globals.css` (`@theme`) |
| **Presets de animação** | `ds/motion.ts` |
| **Seções** | `components/sections/*.tsx` (uma por seção) |
| **Vídeo do Hero (Vimeo)** | `content/site.ts` → `brand.vimeoId` |
| **SEO / metadata / JSON-LD** | `app/layout.tsx` |

O vídeo do Vimeo já está ligado: `brand.vimeoId = '1176647278'` (vertical, ao lado do texto).

## Estrutura (10 seções)

01 Hero · 02 O Problema · 03 O Método OMM (timeline 7 etapas) ·
04 Como Trabalhamos · 05 Planos (Plano Presença) · 06 Soluções Estratégicas ·
07 Projetos Estratégicos · 08 Sobre · 09 Manifesto · 10 CTA Final.

## Arquitetura

- `components/primitives/` — átomos reutilizáveis (Container, Section, Eyebrow, Reveal, TextReveal, GlassCard, Cursor).
- `components/ui/` — padrão shadcn (`button.tsx` com `cva`), `lib/utils.ts` (`cn`).
- `components/providers/SmoothScroll.tsx` — Lenis (respeita `prefers-reduced-motion`).
- `components/layout/` — Nav (glass ao rolar) e Footer.
- `components/sections/` — as 10 seções.
- `content/site.ts` — copy centralizada. `ds/` — tokens e motion.

Página única: o scroll é o argumento de venda. Home pré-renderizada como
estática (SEO + Open Graph + JSON-LD em `app/layout.tsx`).

> Nota: `omm-site/` (Vite) foi o protótipo v1. O site atual e canônico é este, `omm-web/`.

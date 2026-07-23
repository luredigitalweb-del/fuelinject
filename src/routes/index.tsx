import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import InstagramCTA from "@/components/InstagramCTA";
import {
  Wrench,
  ShieldCheck,
  Truck,
  Gauge,
  Package,
  Cog,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  ArrowRight,
  Clock,
  Award,
  Zap,
  Building2,
  Users,
  CheckCircle2,
} from "lucide-react";
import logo from "@/assets/fuel-inject-logo.png";
import hero from "@/assets/fuel-inject-facade.png";

import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WHATS = "https://wa.me/5551981045754?text=Ol%C3%A1%2C%20vim%20pelo%20site";

function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <Marquee />
      <Reveal><Differentials /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Fleet /></Reveal>
      <Reveal><Process /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><InstagramCTA /></Reveal>
      <Reveal><LocationSection /></Reveal>
      <Footer />
      <FloatingWhats />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = React.useState(false);
  const links = [
    { href: "#diferenciais", label: "Por que a Fuel Inject" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#processo", label: "Estrutura" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#localizacao", label: "Localização" },
  ];

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-4 pt-3 sm:pt-5">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between gap-2 sm:gap-4 rounded-full border border-white/10 bg-black/80 pl-4 sm:pl-5 pr-2 py-2 backdrop-blur-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
          <a href="#top" className="flex items-center gap-2 min-w-0 shrink-0">
            <img src={logo} alt="Fuel Inject" className="h-10 sm:h-11 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-primary transition">{l.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shimmer inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-primary px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-6px_rgba(250,204,21,0.55)] hover:brightness-110 transition"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden xs:inline sm:inline">Falar agora</span>
              <span className="xs:hidden sm:hidden">WhatsApp</span>
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white active:scale-95 transition"
            >
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-black border-l border-white/10 p-6 flex flex-col gap-6 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <img src={logo} alt="Fuel Inject" className="h-10 w-auto" />
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-white/85 hover:bg-white/5 hover:text-primary transition"
                style={{ animation: open ? `hero-in-up 0.5s ${i * 60}ms both cubic-bezier(0.22,1,0.36,1)` : undefined }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="cta-shimmer mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground"
          >
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] md:min-h-screen items-center overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 text-white bg-black">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Fachada da oficina Fuel Inject"
          width={1600}
          height={1104}
          className="hero-bg-zoom h-full w-full object-cover"
        />
        {/* strong left → transparent right, matching reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-40% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 lg:px-6">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
          <span className="hero-in animate-soft-float inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 sm:px-5 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-primary" style={{ animationDelay: "0.05s" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Injeção Diesel · Linha Pesada &amp; Amarela
          </span>

          <h1 className="hero-in mt-5 sm:mt-6 font-display text-[2.5rem] xs:text-[2.75rem] sm:text-[3rem] md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight" style={{ animationDelay: "0.15s" }}>
            Máquina parada
            <br />
            <span className="text-primary">volta a rodar.</span>
          </h1>

          <div className="hero-underline mt-5 sm:mt-6 h-[3px] rounded-full bg-primary" style={{ width: "10rem" }} />

          <p className="hero-in mt-5 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/80 leading-relaxed" style={{ animationDelay: "0.35s" }}>
            Diagnóstico de precisão, reforma de bombas e bicos injetores com teste de bancada. Serviço completo no RS e envio de peças com garantia para todo o Brasil.
          </p>

          <div className="hero-in mt-6 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3" style={{ animationDelay: "0.5s" }}>
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shimmer group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm md:text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-10px_rgba(250,204,21,0.55)] hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Falar com um especialista
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-6 py-3.5 text-sm md:text-base font-semibold text-white hover:bg-black/60 hover:scale-[1.02] transition"
            >
              Ver serviços
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="hero-in mt-10 md:mt-12 grid grid-cols-3 sm:flex sm:flex-wrap sm:items-start gap-x-4 sm:gap-x-12 gap-y-6" style={{ animationDelay: "0.7s" }}>
            <HeroStat kpi="+10" suffix="anos" label="de experiência" />
            <HeroStat kpi="100%" label="peças testadas" />
            <HeroStat kpi="RS" suffix="& Brasil" label="serviço + envio" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ kpi, suffix, label }: { kpi: string; suffix?: string; label: string }) {
  return (
    <div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-2xl md:text-4xl text-primary font-bold leading-none">{kpi}</span>
        {suffix && <span className="text-sm font-semibold text-white/80">{suffix}</span>}
      </div>
      <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/60">{label}</div>
    </div>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl md:text-4xl text-primary font-bold">{kpi}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}

const SERVICES = [
  {
    icon: Wrench,
    tag: "Serviço completo · RS",
    title: "Chave na mão no RS",
    desc: "Remoção e instalação do sistema, higienização de linha e tanque, troca de filtros e teste de bancada em um único atendimento.",
  },
  {
    icon: Gauge,
    tag: "Reforma técnica",
    title: "Bombas & bicos injetores",
    desc: "Diagnóstico de precisão e recondicionamento completo para caminhões pesados e máquinas linha amarela.",
  },
  {
    icon: Cog,
    tag: "Especialidade CAT",
    title: "Linha Caterpillar C7 / C9",
    desc: "Unidades injetoras e bombas de acionamento testadas sob rigorosos padrões de pressão e vazão.",
  },
  {
    icon: Cog,
    tag: "Especialidade CAT",
    title: "Linha Caterpillar C4 / C6",
    desc: "Bombas de acionamento remanufaturadas, testadas em bancada e prontas para voltar a rodar.",
  },
  {
    icon: Package,
    tag: "Envio nacional",
    title: "Venda de peças · Brasil",
    desc: "Envio ágil de componentes e unidades testadas para todo o país, com rastreio e garantia inclusos.",
  },
  {
    icon: ShieldCheck,
    tag: "Confiança",
    title: "Garantia real de performance",
    desc: "Todo serviço e peça sai da oficina com laudo técnico e cobertura de garantia formalizada.",
  },
];

function Services() {
  return (
    <section id="servicos" className="relative py-16 md:py-28 px-4 bg-black text-white overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.22), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[-10%] h-[420px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.15), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            O que fazemos
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold leading-tight text-white">
            Tudo para o seu sistema <span className="text-primary italic">de injeção diesel</span>
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Do diagnóstico à instalação — trabalhamos em cada componente com rigor técnico, bancada calibrada
            e padrão de montadora.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
            >
              {/* big faded number */}
              <span className="pointer-events-none absolute right-6 top-5 font-display text-6xl font-semibold text-white/[0.06] group-hover:text-primary/20 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* icon in outlined rounded square */}
              <div className="relative inline-grid h-14 w-14 place-items-center rounded-xl border border-primary/40 bg-primary/[0.06] text-primary shadow-[inset_0_0_20px_-8px_hsl(var(--primary)/0.4)]">
                <s.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-8 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">{s.desc}</p>

              <a
                href={WHATS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
              >
                Saber mais
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ABOUT_POINTS = [
  {
    icon: Building2,
    title: "Estrutura física completa no RS",
    desc: "Oficina equipada com bancada de testes, ferramentaria e estoque de peças rotativas para atender caminhões e máquinas pesadas.",
  },
  {
    icon: ShieldCheck,
    title: "Especialistas em proteção do motor",
    desc: "Higienização de linha e tanque, troca de filtros e testes de bancada que evitam danos secundários ao motor diesel.",
  },
  {
    icon: Gauge,
    title: "Do diagnóstico à instalação",
    desc: "Avaliação técnica direta, orçamento transparente e execução completa — sem terceirizar etapas críticas do serviço.",
  },
  {
    icon: Award,
    title: "Mais de 10 anos de experiência",
    desc: "Histórico consolidado em bombas e bicos injetores de linha pesada, com base de clientes que volta e indica.",
  },
];

function About() {
  return (
    <section id="sobre" className="relative py-16 md:py-28 px-4 bg-white text-black overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Sobre nós
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold leading-tight">
            Um centro de injeção diesel. <span className="text-primary">Não uma oficina comum.</span>
          </h2>
          <p className="mt-4 text-black/60 leading-relaxed">
            Há mais de 10 anos resolvendo paradas de caminhões e máquinas no Rio Grande do Sul, com técnica atualizada,
            bancada calibrada e atenção técnica a cada componente.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* image column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]">
              <img
                src={hero}
                alt="Fachada da Fuel Inject"
                width={1200}
                height={900}
                className="h-[320px] md:h-[520px] w-full object-cover"
              />
            </div>
            <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Oficina no RS
            </span>
          </div>

          {/* content column */}
          <div className="flex flex-col gap-6">
            {ABOUT_POINTS.map((p) => (
              <div key={p.title} className="flex items-start gap-4 group">
                <div className="relative shrink-0 grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-primary/10 text-black transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-black leading-snug">{p.title}</h3>
                  <p className="mt-1 text-sm text-black/60 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}

            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-4 rounded-2xl bg-black p-5 md:p-6 text-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.3)] hover:brightness-110 transition"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shrink-0">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Atendimento todo mês</span>
                <span className="mt-0.5 block font-semibold leading-snug">Junte-se aos clientes que confiam na Fuel Inject</span>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-[1.75rem] md:text-5xl font-bold uppercase leading-tight">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>}
    </div>
  );
}

const DIFFERENTIALS = [
  { icon: Gauge, title: "Bancada de última geração", desc: "Testes de pressão, vazão e retorno em bancada calibrada, equivalente aos padrões de montadoras." },
  { icon: Award, title: "Equipe técnica especializada", desc: "Bombistas experientes em linha pesada CAT, Cummins, MWM, Scania, Volvo, MB e mais." },
  { icon: ShieldCheck, title: "Garantia formal em tudo", desc: "Todo serviço e peça acompanhado de laudo técnico e cobertura de garantia por escrito." },
  { icon: Zap, title: "Agilidade que reduz o tempo parado", desc: "Processos otimizados para devolver seu ativo à operação no menor tempo possível." },
];

function Differentials() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [live, setLive] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setLive(false);
            // restart animation on re-entry
            requestAnimationFrame(() => setLive(true));
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="diferenciais" className="relative py-10 md:py-16 px-4 bg-white text-black overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-5xl font-bold leading-[1.05]">
            Por que a <span className="text-primary">Fuel Inject</span> é diferente.
          </h2>
          <p className="mt-4 text-sm md:text-base text-black/60 leading-relaxed">
            Quatro pilares que separam a nossa operação de uma oficina comum e fazem frotistas voltarem safra após safra.
          </p>
        </div>

        <div ref={ref} className={`bolt-stage relative mt-10 md:mt-14 ${live ? "is-live" : ""}`}>
          {/* base connector line through icon centers */}
          <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-[32px] md:top-[40px] h-px bg-primary/20" />

          {/* energized line: yellow trail drawn by the bolt */}
          <div className="hidden lg:block bolt-trail absolute left-[12.5%] right-[12.5%] top-[31px] md:top-[39px] h-[3px] rounded-full" />

          {/* the lightning bolt traveling along the line */}
          <div className="hidden lg:block bolt-runner absolute top-[32px] md:top-[40px] left-[12.5%] right-[12.5%] pointer-events-none">
            <span className="bolt-head" />
            <svg className="bolt-bolt" width="28" height="38" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M13 2 L4 14 h6 l-2 8 L20 10 h-6 l1 -8 z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-14 gap-x-6">
            {DIFFERENTIALS.map((d, i) => {
              const delay = (i * 2.8) / 3; // hits each node evenly over the run
              return (
              <div key={d.title} className="relative flex flex-col items-center text-center px-2">
                {/* icon + big faded number wrapper */}
                <div className="relative h-[90px] md:h-[110px] w-full flex items-start justify-center">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] font-display text-[70px] md:text-[100px] leading-none font-bold text-primary/10 select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="bolt-node relative z-10 grid h-16 w-16 md:h-20 md:w-20 place-items-center rounded-full bg-black border-2 border-primary text-primary shadow-[0_0_0_6px_white,0_14px_30px_-8px_rgba(0,0,0,0.15)]"
                    style={{ ["--bolt-delay" as any]: `${delay}s` }}
                  >
                    <d.icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
                    <span className="bolt-shock" />
                  </span>
                </div>

                <span
                  className="bolt-reveal mt-5 inline-flex items-center rounded-full border border-primary px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary bg-white"
                  style={{ ["--bolt-delay" as any]: `${delay + 0.15}s` }}
                >
                  Diferencial {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="bolt-reveal mt-3 text-base md:text-lg font-semibold text-black" style={{ ["--bolt-delay" as any]: `${delay + 0.25}s` }}>{d.title}</h3>
                <p className="bolt-reveal mt-2 text-sm text-black/60 leading-relaxed" style={{ ["--bolt-delay" as any]: `${delay + 0.35}s` }}>{d.desc}</p>
              </div>
            );})}
          </div>
        </div>
      </div>
    </section>
  );
}

const FLEET_BENEFITS = [
  "Atendimento prioritário em regime de urgência",
  "Cronograma preventivo por veículo/máquina",
  "Relatórios técnicos e histórico de manutenção",
  "Estoque rotativo de bombas e bicos remanufaturados",
  "Condições comerciais para volume e contrato",
];

function Fleet() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [live, setLive] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setLive(false);
            requestAnimationFrame(() => setLive(true));
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="frotas" className="relative py-14 md:py-24 px-4 bg-black">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`fleet-stage relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-black p-8 md:p-12 lg:p-16 ${live ? "is-live" : ""}`}
        >
          {/* soft glow accents */}
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/15 blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* left column */}
            <div className="fleet-left">
              <span className="fleet-badge inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/70 backdrop-blur-sm px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                <Building2 className="h-3.5 w-3.5" />
                Gestores de frota · B2B
              </span>

              <h2 className="fleet-title mt-6 font-display text-[2rem] md:text-[3.25rem] font-bold uppercase leading-[1.05] tracking-tight text-white">
                Reduza os custos e o tempo parado da sua operação
              </h2>

              <p className="fleet-body mt-5 text-white/70 leading-relaxed">
                Planos e atendimento prioritário para{" "}
                <strong className="text-white">
                  frotistas, mineradoras, construtoras, empresas de terraplanagem, pavimentação e prefeituras
                </strong>
                . Diagnóstico técnico direto no seu pátio, cronograma preventivo e estoque de peças rotativas.
              </p>

              <div className="fleet-actions mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Falar com consultor B2B
                </a>
                <a
                  href={WHATS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white hover:border-primary/40 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  Agendar revisão de frota
                </a>
              </div>
            </div>

            {/* right column - benefit cards */}
            <ul className="fleet-list space-y-3">
              {FLEET_BENEFITS.map((t, i) => (
                <li
                  key={t}
                  className="fleet-card flex items-start gap-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm p-4 md:p-5 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.3)] hover:border-primary/40 hover:shadow-[0_12px_40px_-16px_rgba(250,204,21,0.22)] hover:-translate-y-0.5 transition-all duration-300"
                  style={{ ["--fc-delay" as any]: `${i * 0.12}s` }}
                >
                  <span className="fleet-check relative shrink-0 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_0_0_3px_hsl(var(--primary)/0.25)]">
                    <CheckCircle2 className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm md:text-base font-medium text-white pt-1">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", icon: Zap, title: "Contato & diagnóstico inicial", desc: "Você fala com nosso especialista pelo WhatsApp e recebe uma orientação técnica direta." },
  { n: "02", icon: Package, title: "Envio ou remoção do componente", desc: "Componente enviado à oficina ou veículo/máquina recebido no RS." },
  { n: "03", icon: Gauge, title: "Bancada, higienização e calibração", desc: "Teste em bancada, limpeza de linha e calibração dentro de norma técnica." },
  { n: "04", icon: ShieldCheck, title: "Teste final, instalação ou envio", desc: "Instalação no RS ou envio para todo o Brasil, com laudo e garantia." },
];

function Process() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [live, setLive] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setLive(false);
            requestAnimationFrame(() => setLive(true));
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="processo" className="relative py-16 md:py-28 px-4 bg-white text-black overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[900px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.18), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-black">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Processo de atendimento
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold leading-tight text-black">
            Do contato ao <span className="text-primary italic">retorno à operação</span>
          </h2>
          <p className="mt-4 text-black/60 leading-relaxed">
            Quatro etapas objetivas, sem enrolação, para tirar sua máquina do prejuízo e devolver ela rodando.
          </p>
        </div>

        <div ref={ref} className={`process-stage relative mt-14 md:mt-20 ${live ? "is-live" : ""}`}>
          {/* base dashed line desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-10 h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, hsl(var(--primary) / 0.35) 0 8px, transparent 8px 16px)",
            }}
          />
          {/* animated progress line */}
          <div
            aria-hidden
            className="process-progress hidden lg:block absolute left-[12.5%] top-10 h-[3px] rounded-full"
            style={{
              width: "75%",
              background:
                "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.9) 100%)",
              boxShadow: "0 0 12px hsl(var(--primary) / 0.7)",
            }}
          />

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => {
              const delay = (i * 1.6) / (STEPS.length - 1);
              return (
                <li key={s.n} className="group relative">
                  <div
                    className="process-node relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-primary bg-black text-primary shadow-[0_0_0_6px_white,0_0_30px_-4px_hsl(var(--primary)/0.45)]"
                    style={{ ["--p-delay" as any]: `${delay}s` }}
                  >
                    <s.icon className="h-7 w-7" strokeWidth={1.75} />
                    <span className="absolute -bottom-2 right-0 translate-x-1/3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                      {s.n}
                    </span>
                    <span className="process-pulse" />
                  </div>

                  <div
                    className="process-reveal mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)]"
                    style={{ ["--p-delay" as any]: `${delay + 0.15}s` }}
                  >
                    <h3 className="text-base md:text-lg font-semibold text-black leading-snug">{s.title}</h3>
                    <p className="mt-2 text-sm text-black/60 leading-relaxed">{s.desc}</p>
                  </div>

                  {i < STEPS.length - 1 && (
                    <ArrowRight
                      className="process-arrow hidden lg:block absolute top-7 -right-3 h-6 w-6 text-primary"
                      style={{ ["--p-delay" as any]: `${delay + 0.05}s` }}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}


const TESTIS = [
  {
    quote: "Recuperaram os bicos injetores do nosso C9 em tempo recorde. Máquina voltou pro pátio da obra rodando redondo. Serviço sério.",
    name: "Marcelo Alves Fonseca",
    initials: "MA",
    meta: "11 avaliações · 2 fotos",
    color: "#7c3aed",
  },
  {
    quote: "Comprei bomba remanufaturada pra um caminhão em SP, chegou testada com laudo. Instalei e não deu dor de cabeça. Recomendo.",
    name: "Ricardo Tavares",
    initials: "RT",
    meta: "Local Guide · 30 avaliações",
    color: "#059669",
  },
  {
    quote: "Trabalho como bombista há 20 anos e a bancada deles entrega leitura confiável. Parceria fixa pra linha CAT.",
    name: "Jonas Pereira",
    initials: "JP",
    meta: "6 avaliações",
    color: "#dc2626",
  },
  {
    quote: "Atendimento receptivo, vários tipos de serviços de injeção diesel, trabalho de muita qualidade, são excepcionais. Recomendo.",
    name: "Breno Augusto",
    initials: "BA",
    meta: "4 avaliações · 3 fotos",
    color: "#ea580c",
  },
  {
    quote: "Profissionais super competentes e dedicados para deixar sua máquina impecável usando os melhores produtos do mercado. Ótimo atendimento.",
    name: "Janaína Giani",
    initials: "JG",
    meta: "Local Guide · 5 avaliações",
    color: "#4f46e5",
  },
];

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg className={`h-4 w-4 ${filled ? "text-amber-400" : "text-muted"}`} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TestimonialCard({ t }: { t: typeof TESTIS[0] }) {
  return (
    <figure className="testi-card shrink-0 w-[85vw] md:w-[380px] rounded-2xl border border-black/10 bg-black/[0.02] p-6 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white"
            style={{ backgroundColor: t.color }}
          >
            {t.initials}
          </span>
          <div>
            <div className="text-sm font-semibold text-black leading-tight">{t.name}</div>
            <div className="text-xs text-black/55 mt-0.5">{t.meta}</div>
          </div>
        </div>
        <GoogleLogo className="h-5 w-5 shrink-0" />
      </div>

      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled />
        ))}
      </div>

      <blockquote className="mt-4 text-sm md:text-[15px] text-black/85 leading-relaxed">
        “{t.quote}”
      </blockquote>
    </figure>
  );
}

function Testimonials() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [live, setLive] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setLive(false);
            requestAnimationFrame(() => setLive(true));
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const trackItems = [...TESTIS, ...TESTIS, ...TESTIS];

  return (
    <section id="depoimentos" ref={ref} className="relative py-14 md:py-24 bg-white text-black overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Depoimentos
        </span>

        <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          O que dizem nossos <span className="text-primary">clientes.</span>
        </h2>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 shadow-sm">
          <GoogleLogo className="h-5 w-5" />
          <span className="text-lg font-bold text-black">5,0</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled />
            ))}
          </div>
          <span className="text-sm text-black/60">no Google</span>
        </div>
      </div>

      <div className="testi-marquee relative mx-auto max-w-7xl mt-10 md:mt-14">
        <div className="testi-fade-left" aria-hidden />
        <div className="testi-fade-right" aria-hidden />
        <div className={`testi-track flex gap-5 ${live ? "is-live" : ""}`}>
          {trackItems.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const address = "Fuel Inject - Soluções em Sistemas de Injeção Diesel";
  const mapsUrl = "https://www.google.com/maps/place/Fuel+Inject+-+Solu%C3%A7%C3%B5es+em+Sistemas+de+Inje%C3%A7%C3%A3o+Diesel/@-29.9936671,-51.1209707,17z";
  const embed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.5!2d-51.1209707!3d-29.9936671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519754d3337420d%3A0xcc5cf6f6e1174dae!2sFuel%20Inject%20-%20Solu%C3%A7%C3%B5es%20em%20Sistemas%20de%20Inje%C3%A7%C3%A3o%20Diesel!5e0!3m2!1spt-BR!2sbr!4v1721424000000!5m2!1spt-BR!2sbr";
  return (
    <section id="localizacao" className="relative py-14 md:py-24 px-4 bg-white text-black border-y border-black/10">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Localização
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Venha nos visitar <span className="text-primary">no RS.</span>
          </h2>
          <p className="mt-4 text-black/60 leading-relaxed max-w-lg">
            Estrutura completa para atender caminhões e máquinas linha amarela.
            Atendimento presencial no Rio Grande do Sul e envio de peças para todo o Brasil.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shrink-0">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-black/50 font-semibold">Endereço</div>
                <div className="mt-0.5 font-semibold">{address}</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shrink-0">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-black/50 font-semibold">Telefone / WhatsApp</div>
                <div className="mt-0.5 font-semibold">(51) 98104-5754</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shrink-0">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-black/50 font-semibold">Horário</div>
                <div className="mt-0.5 font-semibold">Seg à Sex · Emergência sob consulta</div>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:brightness-125 transition"
            >
              <MapPin className="h-4 w-4" /> Traçar rota
            </a>
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
            >
              <MessageCircle className="h-4 w-4" /> Confirmar visita
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)] aspect-[4/3] lg:aspect-auto lg:h-[520px]">
          <iframe
            title="Localização Fuel Inject"
            src={embed}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-black border-t border-white/10">
      <div className="mx-auto max-w-6xl grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Fuel Inject" className="h-14 w-auto" />
          <p className="mt-4 text-sm text-white/60 max-w-sm leading-relaxed">
            Tudo para o seu sistema de injeção diesel. Serviço completo no RS e envio de peças remanufaturadas com garantia para todo o Brasil.
          </p>
          <a
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition"
          >
            <MessageCircle className="h-4 w-4" /> Falar com especialista
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> (51) 98104-5754</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Rio Grande do Sul · Brasil</li>
            <li className="flex items-start gap-2"><Instagram className="h-4 w-4 mt-0.5 text-primary" /> @fuelinjectbr</li>
            <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary" /> Seg à Sex · Emergência sob consulta</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Navegação</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li><a href="#servicos" className="hover:text-white transition">Serviços</a></li>
            <li><a href="#diferenciais" className="hover:text-white transition">Diferenciais</a></li>
            <li><a href="#frotas" className="hover:text-white transition">Gestores de frota</a></li>
            <li><a href="#processo" className="hover:text-white transition">Processo</a></li>
            <li><a href="#localizacao" className="hover:text-white transition">Localização</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
        <div>© {new Date().getFullYear()} Fuel Inject · Todos os direitos reservados</div>
        <div>Política de privacidade · CNPJ sob consulta</div>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATS}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="wa-fab fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

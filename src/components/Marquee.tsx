import * as React from "react";

const ITEMS_TOP = [
  "Injeção Diesel de Precisão",
  "Bombas & Bicos Injetores",
  "Linha Pesada · Caminhões",
  "Linha Amarela · Máquinas",
  "Teste de Bancada Calibrada",
  "Especialistas Caterpillar",
  "Cummins · Scania · Volvo",
  "MWM · Mercedes-Benz",
  "Garantia Formal em Tudo",
];

const ITEMS_BOTTOM = [
  "Atendimento no RS",
  "Envio para todo Brasil",
  "Diagnóstico Técnico Rápido",
  "Reduza o Tempo Parado da Frota",
  "Laudo Técnico Incluso",
  "Peças Remanufaturadas Testadas",
  "Atendimento B2B & Frotas",
  "+10 Anos de Experiência",
  "WhatsApp Direto com Especialista",
];

function Row({ items, className, dotClass }: { items: string[]; className: string; dotClass: string }) {
  const loop = [...items, ...items, ...items];
  return (
    <div className={`marquee-stripe ${className}`}>
      <div className="marquee-scroller">
        {loop.map((t, i) => (
          <div key={i} className="marquee-item">
            <span>{t}</span>
            <span className={`marquee-dot ${dotClass}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-hidden className="marquee-section relative w-full bg-black">
      <div className="marquee-glow" />
      <Row items={ITEMS_TOP} className="marquee-gold" dotClass="bg-black/70" />
      <Row items={ITEMS_BOTTOM} className="marquee-dark" dotClass="bg-primary/70" />
    </section>
  );
}

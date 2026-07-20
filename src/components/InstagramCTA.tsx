import { Instagram } from "lucide-react";
import instaProfile from "@/assets/insta-profile.png.asset.json";

export function Iphone16Pro({
  width = 260,
  height = 520,
  src,
  className = "",
  ...props
}: {
  width?: number;
  height?: number;
  src?: string;
  className?: string;
} & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-2xl ${className}`}
      {...props}
    >
      <path
        fill="#303333"
        d="M196.11,128.09c0-.25-.2-.45-.45-.45-.11.04-.37.03-.69,0V36.69c0-17.84-14.46-32.31-32.31-32.31H37.48C19.63,4.39,5.17,18.85,5.17,36.69v48.99c-.3.02-.55.03-.66-.02-.25,0-.45.2-.45.45,0,0,0,17.29,0,17.29-.03.41.5.49,1.11.48v13.63c-.61,0-1.14.08-1.11.48,0,0,0,28.54,0,28.54-.03.42.5.49,1.11.48v7.95c-.61,0-1.14.08-1.11.48,0,0,0,28.54,0,28.54-.03.42.5.49,1.11.48v178.86c0,17.84,14.46,32.31,32.31,32.31h125.2c17.84,0,32.31-14.46,32.31-32.31v-188.87c.32-.02.58-.03.69.04,1.26.1.03-45.94.45-46.38ZM186.07,362.63c0,13.56-10.99,24.56-24.56,24.56H38.64c-13.56,0-24.56-10.99-24.56-24.56V37.37c0-13.56,10.99-24.56,24.56-24.56h122.87c13.56,0,24.56,10.99,24.56,24.56v325.26Z"
      />
      <path
        fill="#000000"
        d="M161.38,7.29H38.78c-16.54,0-29.95,13.41-29.95,29.95v325.52c0,16.54,13.41,29.95,29.95,29.95h122.6c16.54,0,29.95-13.41,29.95-29.95V37.24c0-16.54-13.41-29.95-29.95-29.95ZM186.07,362.57c0,13.6-11.02,24.62-24.62,24.62H38.7c-13.6,0-24.62-11.02-24.62-24.62V37.43c0-13.6,11.02-24.62,24.62-24.62h122.75c13.6,0,24.62,11.02,24.62,24.62v325.14Z"
      />
      <rect fill="#111" x="14.08" y="12.81" width="171.98" height="374.37" rx="24.62" ry="24.62" />
      {src && (
        <image
          href={src}
          x="14.08"
          y="12.81"
          width="171.98"
          height="374.37"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedCorners)"
        />
      )}
      <path
        fill="#000000"
        d="M119.61,33.86h-38.93c-10.48-.18-10.5-15.78,0-15.96,0,0,38.93,0,38.93,0,4.41,0,7.98,3.57,7.98,7.98,0,4.41-3.57,7.98-7.98,7.98Z"
      />
      <defs>
        <clipPath id="roundedCorners">
          <rect x="14.08" y="12.81" width="171.98" height="374.37" rx="24.62" ry="24.62" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function InstagramCTA() {
  return (
    <section id="instagram" className="bg-black text-white py-20 md:py-28 px-4 border-t border-white/10">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/30 px-3 py-1 text-xs uppercase tracking-widest text-primary font-semibold">
            <Instagram className="w-3.5 h-3.5" /> @fuelinjectbr
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-[0.95] uppercase">
            Acompanhe nossos <span className="text-primary">bastidores</span> e cases reais.
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg max-w-lg">
            Diagnósticos ao vivo, testes em bancada, atendimento em campo e dicas técnicas
            sobre injeção diesel para linha pesada e amarela. Siga e não fique fora da manutenção certa.
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <div>
              <div className="font-display text-3xl text-primary font-bold">4.5K+</div>
              <div className="text-white/60 uppercase tracking-wider text-xs">Seguidores</div>
            </div>
            <div>
              <div className="font-display text-3xl text-primary font-bold">248+</div>
              <div className="text-white/60 uppercase tracking-wider text-xs">Publicações</div>
            </div>
            <div>
              <div className="font-display text-3xl text-primary font-bold">Diário</div>
              <div className="text-white/60 uppercase tracking-wider text-xs">Conteúdo técnico</div>
            </div>
          </div>

          <a
            href="https://instagram.com/fuelinjectbr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-7 py-3.5 hover:brightness-110 transition shadow-[0_10px_30px_-10px_rgba(234,179,8,0.6)]"
          >
            <Instagram className="w-5 h-5" /> Seguir no Instagram
          </a>
        </div>

        {/* Phone */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative">
            <Iphone16Pro
              src={instaProfile.url}
              width={280}
              height={560}
            />
            <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-[75%] flex justify-between px-4 text-white/80 pointer-events-none">
              <span className="text-[10px] font-bold">15:01</span>
              <div className="flex gap-1 items-center">
                <div className="w-3 h-2 border border-white/50 rounded-sm relative">
                  <div className="absolute top-0.5 -right-1 w-0.5 h-1 bg-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

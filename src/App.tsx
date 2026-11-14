import { useState } from "react";

const LOGO = "/logo-031-promos.png";
const CHANNEL = "https://whatsapp.com/channel/0029VbEArNdAzNc1lxYqK32j";

const Fridge = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="12" y="4" width="24" height="40" rx="3" /><path d="M12 18h24M17 10v4M17 23v7" />
  </svg>
);
const Dumbbell = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 24h16" /><rect x="9" y="14" width="7" height="20" rx="2" /><rect x="32" y="14" width="7" height="20" rx="2" /><path d="M4 20v8M44 20v8" />
  </svg>
);
const Gamepad = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 14h20a9 9 0 0 1 9 9l1 9a5 5 0 0 1-9 3l-4-5H17l-4 5a5 5 0 0 1-9-3l1-9a9 9 0 0 1 9-9z" /><path d="M15 20v8M11 24h8" /><circle cx="32" cy="21" r="1.5" /><circle cx="36" cy="26" r="1.5" />
  </svg>
);
const Magnifier = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="20" cy="20" r="13" /><path d="M30 30l13 13" />
  </svg>
);
const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const WhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.43 9.43 0 1 1 7.99 4.42zm8.02-17.45A11.33 11.33 0 0 0 1.8 17.7L.2 23.5l5.94-1.56a11.3 11.3 0 0 0 5.9 1.5h.01A11.34 11.34 0 0 0 20.06 4.05z" />
  </svg>
);

const groups = [
  { label: "ELETRO", href: "https://chat.whatsapp.com/JcuNFZLd1RW0C8QiOx0MNM", Icon: Fridge },
  { label: "FIT", href: "https://chat.whatsapp.com/CGg8qI8H5plAF8sCLmgo76", Icon: Dumbbell },
  { label: "TECH", href: "https://chat.whatsapp.com/IB73SPg5S7k06SU8WxnE8w", Icon: Gamepad },
  { label: "ACHADINHOS", href: "https://chat.whatsapp.com/IqOPjIREYRpJjC0bRVRaKv", Icon: Magnifier },
];

export default function App() {
  const [pop, setPop] = useState(false);
  return (
    <main className="brand-bg relative flex h-dvh flex-col items-center overflow-hidden px-5 py-[4dvh] text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <span className="bg-blob left-[-15%] top-[10%] h-64 w-64 bg-accent" />
        <span className="bg-blob right-[-20%] top-[45%] h-72 w-72 bg-primary [animation-delay:-4s]" />
        <span className="bg-blob bottom-[-10%] left-[20%] h-60 w-60 bg-accent [animation-delay:-8s]" />
        {["10%", "28%", "50%", "68%", "85%"].map((l, i) => (
          <span key={l} className="bg-spark" style={{ left: l, animationDelay: `${-i * 1.7}s` }} />
        ))}
      </div>
      <img src={LOGO} alt="031 Promos" className="relative h-[min(22dvh,11rem)] w-[min(22dvh,11rem)] shrink-0 rounded-full object-cover" />
      <p className="relative mt-3 text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-muted-foreground">CUPONS | OFERTAS | NOVIDADES</p>

      <div className="flex w-full max-w-sm relative min-h-0 flex-1 flex-col items-center justify-center gap-[5dvh]">
        <a
          href={CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => { setPop(false); requestAnimationFrame(() => setPop(true)); }}
          onAnimationEnd={() => setPop(false)}
          className={`btn-whatsapp flex w-full items-center justify-center gap-3 rounded-full px-8 py-5 text-lg font-extrabold uppercase tracking-wide ${pop ? "animate-tap" : ""}`}
        >
          <WhatsApp /> Entrar no canal
        </a>
        <a href="https://www.instagram.com/031promos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da 031 Promos"
          className="rounded-full p-3 text-foreground transition hover:scale-110 hover:text-accent">
          <Instagram />
        </a>
      </div>

      <div className="relative grid w-full max-w-md shrink-0 grid-cols-4 gap-3">
        {groups.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-3 transition hover:-translate-y-1 hover:border-accent active:scale-95">
            <span className="h-10 w-10 text-accent"><Icon /></span>
            <span className="text-[10px] font-bold tracking-wide sm:text-xs">{label}</span>
          </a>
        ))}
      </div>
    </main>
  );
}

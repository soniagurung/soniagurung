import { createFileRoute } from "@tanstack/react-router";
import photo from "@/assets/sonia-gurung.jpg.asset.json";

const TITLE = "Sonia Gurung — Developer & QA Engineer";
const DESC =
  "Sonia Gurung is a web, app and backend developer and QA engineer from Bhutan, based in Nepal. React, Next, Node, Nest, Flutter, Supabase, AWS, Jest & Cypress.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Sonia Gurung, developer Nepal, QA engineer, React developer, Flutter developer, Bhutan developer, full stack" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sonia Gurung",
          jobTitle: "Software Developer & QA Engineer",
          email: "mailto:ccvyvy40@gmail.com",
          nationality: "Bhutan",
          address: { "@type": "PostalAddress", addressCountry: "NP" },
          worksFor: [
            { "@type": "Organization", name: "Jaamun Tech Pvt Ltd" },
            { "@type": "Organization", name: "Neto Group LLC" },
          ],
          knowsAbout: ["React", "Next.js", "Node.js", "NestJS", "Flutter", "Supabase", "AWS", "QA testing", "Cypress", "Jest"],
        }),
      },
    ],
  }),
  component: Index,
});

const skillGroups = [
  { title: "frontend & app", bg: "bg-secondary", items: ["React", "Next.js", "TypeScript", "Flutter", "Dart"] },
  { title: "backend & cloud", bg: "bg-accent", items: ["Node.js", "NestJS", "Firebase", "Supabase", "AWS", "VPS"] },
  { title: "testing & quality", bg: "bg-butter", items: ["Jest", "Cypress", "ESLint", "Manual QA", "Git"] },
  { title: "ai toolbox", bg: "bg-sky", items: ["Claude", "Codex", "Lovable", "AI workflows"] },
];

const projects = [
  { name: "MetLife Upwise", url: "https://play.google.com/store/apps/details?id=com.metlife.upwise", role: ["QA", "Full-stack dev"], kind: "Mobile app · Play Store", bg: "bg-secondary", rot: "-rotate-1", emoji: "📱" },
  { name: "Archery Garage", url: "https://archerygarage.com/", role: ["QA", "Frontend dev"], kind: "E-commerce website", bg: "bg-accent", rot: "rotate-1", emoji: "🏹" },
  { name: "Neto Group", url: "https://netogroup.ai/", role: ["QA"], kind: "AI company website", bg: "bg-sky", rot: "rotate-1", emoji: "🤖" },
  { name: "Redstone Herbs", url: "https://www.redstoneherbs.com/", role: ["QA"], kind: "Herbal products store", bg: "bg-butter", rot: "-rotate-1", emoji: "🌿" },
];

const timeline = [
  { when: "now", what: "QA Engineer", where: "Jaamun Tech Pvt Ltd", note: "Testing web & mobile products end-to-end, writing Jest & Cypress suites." },
  { when: "now", what: "QA Engineer", where: "Neto Group LLC", note: "Keeping AI-powered products bug-free and release-ready." },
  { when: "~1 yr ago", what: "Freelance developer & QA", where: "Self-employed", note: "Where it all started — building and testing sites and apps for clients." },
  { when: "before", what: "Class 12 & self-taught coding", where: "Bhutan 🇧🇹", note: "Finished school in Bhutan, then learned to code on my own, one bug at a time." },
];

function Nav() {
  const links = ["about", "skills", "work", "journey", "contact"];
  return (
    <header className="sticky top-4 z-50 mx-auto flex w-[min(92%,64rem)] items-center justify-between rounded-full border-2 border-foreground bg-card px-5 py-2 shadow-sticker">
      <a href="#top" className="font-hand text-2xl font-bold text-primary">sonia ✿</a>
      <nav className="hidden gap-5 text-sm font-medium sm:flex">
        {links.map((l) => (
          <a key={l} href={`#${l}`} className="hover:text-primary">{l}</a>
        ))}
      </nav>
      <a href="mailto:ccvyvy40@gmail.com" className="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">say hi</a>
    </header>
  );
}

function Index() {
  return (
    <div id="top" className="overflow-x-hidden pb-10">
      <Nav />

      {/* Hero */}
      <section className="mx-auto grid w-[min(92%,64rem)] items-center gap-12 pt-16 pb-20 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-hand text-3xl text-primary">hii, i'm</p>
          <h1 className="mt-1 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Sonia <span className="italic font-medium text-primary">Gurung</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            A developer who also breaks things for a living 🐞 — I build web & mobile apps and make sure they
            actually work before they reach real people.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm font-medium">
            <span className="sticker bg-secondary px-3 py-1">💻 web + app dev</span>
            <span className="sticker bg-accent px-3 py-1">🧪 QA engineer</span>
            <span className="sticker bg-butter px-3 py-1">📍 Bhutan → Nepal</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="sticker sticker-hover bg-primary px-6 py-3 font-bold text-primary-foreground">see my work →</a>
            <a href="#contact" className="sticker sticker-hover bg-card px-6 py-3 font-bold">get in touch</a>
          </div>
        </div>

        <div className="relative mx-auto w-64 sm:w-72">
          <div className="sticker relative rotate-3 bg-card p-3 pb-14">
            <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" />
            <img src={photo.url} alt="Portrait of Sonia Gurung" className="aspect-[4/5] w-full rounded-lg object-cover" width={800} height={963} />
            <p className="absolute bottom-3 left-0 right-0 text-center font-hand text-2xl">that's me :)</p>
          </div>
          <span className="wiggle absolute -left-8 top-10 text-4xl">🌸</span>
          <span className="wiggle absolute -right-6 bottom-20 text-3xl [animation-delay:1s]">✨</span>
          <span className="sticker absolute -bottom-4 -left-10 -rotate-6 bg-sky px-3 py-1 font-hand text-xl">1+ yr of shipping</span>
        </div>
      </section>

      {/* Marquee */}
      <div className="-rotate-1 border-y-2 border-foreground bg-primary py-3 text-primary-foreground">
        <div className="marquee flex w-max gap-8 whitespace-nowrap font-display text-2xl italic">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["React", "Next", "Node", "Nest", "Flutter", "Supabase", "AWS", "Cypress", "Jest", "Claude", "Lovable"].map((t) => (
              <span key={`${i}-${t}`}>{t} ✿</span>
            )),
          )}
        </div>
      </div>

      {/* About */}
      <section id="about" className="mx-auto w-[min(92%,64rem)] scroll-mt-24 py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-5xl font-bold">a little <span className="squiggle italic text-primary">about</span> me</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              I grew up in <b>Bhutan</b>, finished class 12 there, and then taught myself to code — no bootcamp,
              just curiosity, docs and a lot of late nights. Now I live in <b>Nepal</b>.
            </p>
            <p>
              My career started about a year ago with freelance projects, where I built and tested real client
              products. Today I work as a <b>QA engineer at Jaamun Tech</b> and <b>Neto Group LLC</b>, while still
              writing code across the stack.
            </p>
            <p className="font-hand text-2xl text-primary">→ i like clean code, cozy UIs, and zero bugs in prod.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto w-[min(92%,64rem)] scroll-mt-24 py-12">
        <h2 className="text-5xl font-bold">things i'm <span className="italic text-primary">good at</span></h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <div key={g.title} className={`sticker sticker-hover ${g.bg} p-6 ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
              <h3 className="font-hand text-3xl font-bold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-full border-2 border-foreground bg-card px-3 py-1 text-sm font-medium">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto w-[min(92%,64rem)] scroll-mt-24 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-5xl font-bold">selected <span className="italic text-primary">work</span></h2>
          <p className="font-hand text-2xl text-muted-foreground">built it, tested it, shipped it ✓</p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={`sticker sticker-hover group block bg-card ${p.rot}`}>
              <div className={`${p.bg} flex h-40 items-center justify-center rounded-t-[calc(var(--radius)-2px)] border-b-2 border-foreground text-6xl`}>
                <span className="transition-transform group-hover:scale-125 group-hover:rotate-12">{p.emoji}</span>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{p.kind}</p>
                <h3 className="mt-1 text-3xl font-bold">{p.name} <span className="text-primary">↗</span></h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.role.map((r) => (
                    <span key={r} className="rounded-full bg-foreground px-3 py-1 text-xs font-bold text-background">{r}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="mx-auto w-[min(92%,48rem)] scroll-mt-24 py-12">
        <h2 className="text-5xl font-bold">my <span className="italic text-primary">journey</span> so far</h2>
        <ol className="mt-10 space-y-6 border-l-2 border-dashed border-foreground pl-8">
          {timeline.map((t, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[2.6rem] top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 border-foreground bg-secondary" />
              <div className="sticker bg-card p-5">
                <p className="font-hand text-xl text-primary">{t.when}</p>
                <h3 className="text-2xl font-bold">{t.what}</h3>
                <p className="font-medium text-muted-foreground">{t.where}</p>
                <p className="mt-2">{t.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-[min(92%,64rem)] scroll-mt-24 py-24">
        <div className="sticker relative bg-secondary p-10 text-center sm:p-16">
          <span className="tape -top-3 left-10 -rotate-6" />
          <span className="tape -top-3 right-10 rotate-6" />
          <p className="font-hand text-3xl text-primary">let's make something lovely</p>
          <h2 className="mt-2 text-5xl font-bold sm:text-6xl">say hello 👋</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="mailto:ccvyvy40@gmail.com" className="sticker sticker-hover bg-card px-6 py-3 font-bold">✉ ccvyvy40@gmail.com</a>
            <a href="tel:+9779824317734" className="sticker sticker-hover bg-card px-6 py-3 font-bold">☎ 9824317734</a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">📍 Based in Nepal · originally from Bhutan</p>
        </div>
      </section>

      <footer className="text-center font-hand text-xl text-muted-foreground">
        made with ♡ & lots of chai by Sonia Gurung · {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export type Locale = "es" | "en";

type Link = {
  label: string;
  href: string;
};

type NavGroup = {
  label: string;
  children: Link[];
};

type NavItem = Link | NavGroup;

type LocaleContent = {
  locale: Locale;
  htmlLang: string;
  title: string;
  description: string;
  name: string;
  subtitle: string;
  nav: NavItem[];
  socials: Link[];
  agentLabel: string;
  copyLabel: string;
  copiedLabel: string;
  copyPrompt: string;
  tooltip: string;
};

const socials: Link[] = [
  { label: "gh", href: "https://github.com/Microck" },
  { label: "x", href: "https://x.com/JustMicrock" },
  { label: "yt", href: "https://www.youtube.com/@Microck" },
];

const englishCopyPrompt =
  "Fetch https://micr.dev/en/llms.txt and follow its instructions exactly.";

const spanishCopyPrompt =
  "Obtén https://micr.dev/es/llms.txt y sigue sus instrucciones exactamente.";

export const content: Record<Locale, LocaleContent> = {
  es: {
    locale: "es",
    htmlLang: "es",
    title: "Microck",
    description: "creando herramientas para agentes de IA y desarrolladores.",
    name: "Microck",
    subtitle: "creando herramientas para agentes de IA y desarrolladores.",
    nav: [
      { label: "proyectos", href: "https://proyectos.micr.dev" },
      { label: "skills", href: "https://wip.micr.dev" },
      { label: "ia", href: "https://ai.micr.dev" },
      { label: "blog", href: "https://blog.micr.dev" },
      { label: "sobre mi", href: "https://about.micr.dev" },
      { label: "teclados", href: "https://microkeebs.micr.dev" },
      {
        label: "ocs",
        children: [
          { label: "quarzite", href: "https://quarzite.micr.dev" },
          { label: "thinko", href: "https://thinko.micr.dev" },
        ],
      },
      { label: "espacio", href: "https://room.micr.dev" },
    ],
    socials,
    agentLabel: "preguntale a tu agente de IA sobre mi",
    copyLabel: "copiar prompt",
    copiedLabel: "copiado",
    copyPrompt: spanishCopyPrompt,
    tooltip:
      "Pégalo en Claude Code, Codex, Cursor, OpenClaw u otro agente con acceso web",
  },
  en: {
    locale: "en",
    htmlLang: "en",
    title: "Microck",
    description: "building tools for AI agents and developers.",
    name: "Microck",
    subtitle: "building tools for AI agents and developers.",
    nav: [
      { label: "projects", href: "https://projects.micr.dev" },
      { label: "skills", href: "https://wip.micr.dev" },
      { label: "ai", href: "https://ai.micr.dev" },
      { label: "blog", href: "https://blog.micr.dev" },
      { label: "about", href: "https://about.micr.dev" },
      { label: "keebs", href: "https://microkeebs.micr.dev" },
      {
        label: "ocs",
        children: [
          { label: "quarzite", href: "https://quarzite.micr.dev" },
          { label: "thinko", href: "https://thinko.micr.dev" },
        ],
      },
      { label: "room", href: "https://room.micr.dev" },
    ],
    socials,
    agentLabel: "ask your AI agent about me",
    copyLabel: "copy prompt",
    copiedLabel: "copied",
    copyPrompt: englishCopyPrompt,
    tooltip:
      "paste into Claude Code, Codex, Cursor, OpenClaw, or another agent with web access",
  },
};

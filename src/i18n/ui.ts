export type Locale = 'en' | 'fr';

export const ui = {
  en: {
    'nav.neotest': 'Neotest',
    'nav.cv': 'CV (PDF)',
    'nav.contact': 'Contact',
    'nav.switch': 'FR',
    'nav.home': 'Chedy Sleimi — home',
    'footer.availability':
      'Available from September 2026 · Tunis → Spain (relocating; visa sponsorship required) · English-speaking teams',
    'footer.built': 'Built with Astro, hand-written CSS, zero client JS.',
    'footer.source': 'Source on GitHub',
    'skip': 'Skip to content',
  },
  fr: {
    'nav.neotest': 'Neotest',
    'nav.cv': 'CV (PDF)',
    'nav.contact': 'Contact',
    'nav.switch': 'EN',
    'nav.home': 'Chedy Sleimi — accueil',
    'footer.availability':
      'Disponible à partir de septembre 2026 · Tunis → Espagne (mobilité ; sponsoring de visa requis) · équipes anglophones',
    'footer.built': 'Réalisé avec Astro, CSS écrit à la main, zéro JavaScript côté client.',
    'footer.source': 'Code source sur GitHub',
    'skip': 'Aller au contenu',
  },
} as const;

export function t(locale: Locale, key: keyof (typeof ui)['en']): string {
  return ui[locale][key];
}

const SHORTCUT_KEY = 'glasstab_shortcuts_v1';
const WIDGETS_KEY = 'glasstab_widgets_v1';
const ENGINE_KEY = 'glasstab_engines_v1';
const GAPPS_KEY = 'glasstab_google_apps_v1';

const MAX_TITLE_LEN = 20;

const defaultShortcuts = [
  { id: 'gh-default', title: 'GitHub', url: 'https://github.com/', customIcon: '' }
];

const GOOGLE_SVGS = {
  account: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#1976D2"/><circle cx="24" cy="18" r="7" fill="#fff"/><path fill="#fff" d="M12 36c0-6 5.4-10 12-10s12 4 12 10H12z"/></svg>`,
  drive: `<svg viewBox="0 0 48 48"><path fill="#FFC107" d="M17 6l14 24h14L31 6z"/><path fill="#1976D2" d="M3 30l7 12h28l-7-12z"/><path fill="#4CAF50" d="M17 6L3 30l7 12 14-24z"/></svg>`,
  gmail: `<svg viewBox="0 0 48 48"><path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z"/><path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z"/><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/><path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859C9.132 8.301 8.228 8 7.298 8 4.924 8 3 9.924 3 12.298z"/><path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341C38.868 8.301 39.772 8 40.702 8 43.076 8 45 9.924 45 12.298z"/></svg>`,
  youtube: `<svg viewBox="0 0 48 48"><path fill="#FF3D00" d="M43.2 33.9c-.4 2.1-2.1 3.7-4.2 4-3.3.5-8.8 1.1-15 1.1-6.1 0-11.6-.6-15-1.1-2.1-.3-3.8-1.9-4.2-4-.4-2.3-.8-5.7-.8-9.9s.4-7.6.8-9.9c.4-2.1 2.1-3.7 4.2-4C12.3 9.6 17.8 9 24 9c6.2 0 11.6.6 15 1.1 2.1.3 3.8 1.9 4.2 4 .4 2.3.9 5.7.9 9.9-.1 4.2-.5 7.6-.9 9.9z"/><path fill="#FFF" d="M20 31V17l12 7z"/></svg>`,
  gemini: `<svg viewBox="0 0 48 48"><defs><linearGradient id="gem" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4facfe"/><stop offset="50%" stop-color="#a18cd1"/><stop offset="100%" stop-color="#fbc2eb"/></linearGradient></defs><path fill="url(#gem)" d="M24 4c0 11-9 20-20 20 11 0 20 9 20 20 0-11 9-20 20-20-11 0-20-9-20-20z"/></svg>`,
  maps: `<svg viewBox="0 0 48 48"><path fill="#4285F4" d="M24 4C15.2 4 8 11.2 8 20c0 3.2 1 6.2 2.7 8.7L24 14V4z"/><path fill="#EA4335" d="M24 4v10l13.3 14.7C39 26.2 40 23.2 40 20c0-8.8-7.2-16-16-16z"/><path fill="#FBBC04" d="M10.7 28.7c3.1 4.6 8.3 10.6 13.3 15.3V26L10.7 28.7z"/><path fill="#34A853" d="M24 26v18c5-4.7 10.2-10.7 13.3-15.3L24 26z"/><circle cx="24" cy="20" r="6" fill="#070b12"/></svg>`,
  search: `<svg viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.2-2.6-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.2-2.6-.4-3.9z"/></svg>`,
  calendar: `<svg viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="6" fill="#1976D2"/><path d="M8 16h32v24a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V16z" fill="#4285F4"/><text x="24" y="34" font-size="17" font-family="sans-serif" font-weight="bold" fill="#fff" text-anchor="middle">31</text></svg>`,
  news: `<svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="28" rx="4" fill="#0D47A1"/><rect x="8" y="12" width="32" height="24" rx="3" fill="#1976D2"/><text x="16" y="29" font-size="13" font-family="sans-serif" font-weight="bold" fill="#fff">G</text><rect x="27" y="18" width="9" height="2.5" fill="#fff"/><rect x="27" y="23" width="9" height="2.5" fill="#fff"/><rect x="27" y="28" width="6" height="2.5" fill="#fff"/></svg>`,
  photos: `<svg viewBox="0 0 48 48"><path fill="#FFC107" d="M24 24H10a7 7 0 0 1 7-7h7v7z"/><path fill="#FF3D00" d="M24 24V10a7 7 0 0 1 7 7v7h-7z"/><path fill="#1976D2" d="M24 24h14a7 7 0 0 1-7 7h-7v-7z"/><path fill="#4CAF50" d="M24 24v14a7 7 0 0 1-7-7v-7h7z"/></svg>`,
  meet: `<svg viewBox="0 0 48 48"><rect x="6" y="12" width="26" height="24" rx="5" fill="#FFC107"/><path fill="#4CAF50" d="M32 20l10-6v20l-10-6z"/><circle cx="19" cy="24" r="4" fill="#fff"/></svg>`,
  translate: `<svg viewBox="0 0 48 48"><rect x="6" y="8" width="24" height="24" rx="4" fill="#1976D2"/><rect x="18" y="16" width="24" height="24" rx="4" fill="#ECEFF1"/><text x="18" y="25" font-size="13" font-family="sans-serif" font-weight="bold" fill="#fff" text-anchor="middle">G</text><text x="30" y="33" font-size="12" font-family="sans-serif" font-weight="bold" fill="#37474F" text-anchor="middle">文</text></svg>`,
  vids: `<svg viewBox="0 0 48 48"><rect x="8" y="10" width="32" height="28" rx="7" fill="#7C4DFF"/><polygon points="21,18 21,30 31,24" fill="#fff"/></svg>`,
  sheets: `<svg viewBox="0 0 48 48"><rect x="10" y="6" width="28" height="36" rx="4" fill="#0F9D58"/><path d="M16 20h16M16 26h16M16 32h16M24 16v20" stroke="#fff" stroke-width="2.5"/></svg>`,
  docs: `<svg viewBox="0 0 48 48"><rect x="10" y="6" width="28" height="36" rx="4" fill="#4285F4"/><path d="M16 18h16M16 24h16M16 30h10" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  slides: `<svg viewBox="0 0 48 48"><rect x="10" y="6" width="28" height="36" rx="4" fill="#F4B400"/><rect x="15" y="17" width="18" height="14" rx="2" fill="#fff"/></svg>`,
  shopping: `<svg viewBox="0 0 48 48"><path fill="#4285F4" d="M24 6L8 18v22h32V18z"/><circle cx="24" cy="18" r="4" fill="#fff"/><path fill="#EA4335" d="M8 18l16-12 16 12H8z"/></svg>`,
  play: `<svg viewBox="0 0 48 48"><path fill="#4db6ac" d="M10 6v36l20-18z"/><path fill="#dce775" d="M10 6l25 13-5 5z"/><path fill="#ff8a65" d="M10 42l25-13-5-5z"/><path fill="#4fc3f7" d="M30 24l5-5 6 3.2c1.5.8 1.5 2.8 0 3.6L35 29z"/></svg>`,
  finance: `<svg viewBox="0 0 48 48"><rect x="8" y="26" width="6" height="14" rx="2" fill="#EA4335"/><rect x="18" y="18" width="6" height="22" rx="2" fill="#FBBC04"/><rect x="28" y="22" width="6" height="18" rx="2" fill="#4285F4"/><path d="M8 20l12-10 8 6 12-10" fill="none" stroke="#34A853" stroke-width="4" stroke-linecap="round"/></svg>`,
  arts: `<svg viewBox="0 0 48 48"><path fill="#4285F4" d="M6 18h36L24 6z"/><rect x="8" y="36" width="32" height="5" rx="1" fill="#1976D2"/><rect x="12" y="20" width="4" height="14" fill="#90CAF9"/><rect x="22" y="20" width="4" height="14" fill="#90CAF9"/><rect x="32" y="20" width="4" height="14" fill="#90CAF9"/></svg>`,
  ads: `<svg viewBox="0 0 48 48"><path fill="#FBBC04" d="M10 36L22 10l8 4-12 26z"/><path fill="#4285F4" d="M22 10l16 26-8 4L14 14z"/><circle cx="14" cy="36" r="5" fill="#34A853"/></svg>`,
  merchant: `<svg viewBox="0 0 48 48"><path fill="#1976D2" d="M8 14h32v26a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V14z"/><path fill="#4285F4" d="M6 10h36l-3 8H9z"/><circle cx="24" cy="28" r="5" fill="#fff"/></svg>`,
  contacts: `<svg viewBox="0 0 48 48"><circle cx="24" cy="16" r="8" fill="#4285F4"/><path fill="#1976D2" d="M10 38c0-7 6-12 14-12s14 5 14 12v2H10v-2z"/></svg>`,
  travel: `<svg viewBox="0 0 48 48"><rect x="10" y="14" width="28" height="26" rx="5" fill="#4285F4"/><path d="M18 14V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5" fill="none" stroke="#90CAF9" stroke-width="3"/><rect x="15" y="20" width="18" height="6" rx="2" fill="#FBBC04"/><circle cx="24" cy="33" r="3" fill="#EA4335"/></svg>`,
  forms: `<svg viewBox="0 0 48 48"><rect x="10" y="6" width="28" height="36" rx="4" fill="#7E57C2"/><circle cx="16" cy="18" r="2" fill="#fff"/><circle cx="16" cy="25" r="2" fill="#fff"/><circle cx="16" cy="32" r="2" fill="#fff"/><path d="M21 18h11M21 25h11M21 32h8" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  books: `<svg viewBox="0 0 48 48"><rect x="10" y="6" width="28" height="36" rx="3" fill="#0288D1"/><path fill="#B3E5FC" d="M26 6h8v14l-4-3-4 3z"/></svg>`,
  webstore: `<svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="28" rx="4" fill="#ECEFF1"/><path fill="#EA4335" d="M6 10h36v8H6z"/><circle cx="24" cy="27" r="7" fill="#4285F4"/><circle cx="24" cy="27" r="3" fill="#FBBC04"/></svg>`,
  passwords: `<svg viewBox="0 0 48 48"><circle cx="16" cy="24" r="9" fill="none" stroke="#4285F4" stroke-width="5"/><path d="M25 24h17M34 24v6M40 24v6" stroke="#34A853" stroke-width="4" stroke-linecap="round"/><path d="M25 24h8" stroke="#FBBC04" stroke-width="4"/></svg>`,
  analytics: `<svg viewBox="0 0 48 48"><rect x="10" y="28" width="7" height="12" rx="3.5" fill="#F9AB00"/><rect x="21" y="19" width="7" height="21" rx="3.5" fill="#F9AB00"/><rect x="32" y="8" width="7" height="32" rx="3.5" fill="#E37400"/></svg>`,
  blogger: `<svg viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="8" fill="#FF5722"/><path d="M18 16h8a5 5 0 0 1 5 5v1a3 3 0 0 0 3 3v3a5 5 0 0 1-5 5H18a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z" fill="#fff"/><path d="M19 21h7M19 27h9" stroke="#FF5722" stroke-width="3" stroke-linecap="round"/></svg>`,
  ytmusic: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19" fill="#FF0000"/><circle cx="24" cy="24" r="10" fill="none" stroke="#fff" stroke-width="2"/><polygon points="21,19 21,29 30,24" fill="#fff"/></svg>`,
  wallet: `<svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="24" rx="5" fill="#EA4335"/><rect x="6" y="15" width="36" height="22" rx="5" fill="#FBBC04"/><rect x="6" y="20" width="36" height="20" rx="5" fill="#34A853"/><path fill="#4285F4" d="M6 25h36v10a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V25z"/></svg>`,
  notebooklm: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19" fill="#fff"/><path d="M13 30c0-7 5-12 11-12s11 5 11 12" fill="none" stroke="#1976D2" stroke-width="3.5" stroke-linecap="round"/><path d="M17 30c0-4 3-7 7-7s7 3 7 7" fill="none" stroke="#4285F4" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  tasks: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19" fill="#4285F4"/><path d="M16 24l6 6 11-12" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  keep: `<svg viewBox="0 0 48 48"><rect x="10" y="6" width="28" height="36" rx="4" fill="#FBBC04"/><path d="M24 15a6 6 0 0 0-4 10.5V29h8v-3.5A6 6 0 0 0 24 15z" fill="#fff"/></svg>`,
  earth: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19" fill="#1976D2"/><path d="M8 18c8-4 20 4 32-2M6 28c10-6 22 6 36-2M12 37c8-4 16 2 24-3" fill="none" stroke="#81D4FA" stroke-width="4" stroke-linecap="round"/></svg>`,
  colab: `<svg viewBox="0 0 48 48"><circle cx="16" cy="24" r="9" fill="none" stroke="#F9AB00" stroke-width="5"/><circle cx="32" cy="24" r="9" fill="none" stroke="#E37400" stroke-width="5"/></svg>`,
  cloud: `<svg viewBox="0 0 48 48"><path fill="#4285F4" d="M34 20a10 10 0 0 0-19-3A8 8 0 0 0 14 33h20a7 7 0 0 0 0-13z"/></svg>`,
  classroom: `<svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="28" rx="4" fill="#0F9D58"/><rect x="9" y="13" width="30" height="22" fill="#2E7D32"/><circle cx="24" cy="22" r="4" fill="#fff"/><path fill="#fff" d="M16 32c0-4 4-6 8-6s8 2 8 6H16z"/></svg>`,
  scholar: `<svg viewBox="0 0 48 48"><path fill="#4285F4" d="M24 8L4 20l20 12 16-9.6V32h4V20L24 8z"/><path fill="#1976D2" d="M12 27v8c0 4 5.4 7 12 7s12-3 12-7v-8L24 34l-12-7z"/></svg>`,
  one: `<svg viewBox="0 0 48 48"><path d="M20 14h6v22" fill="none" stroke="#4285F4" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 18l4-4" fill="none" stroke="#EA4335" stroke-width="6" stroke-linecap="round"/></svg>`,
  podcasts: `<svg viewBox="0 0 48 48"><path d="M24 8v6M24 34v6M24 19v10" stroke="#FBBC04" stroke-width="4" stroke-linecap="round"/><path d="M16 14v8M16 26v8" stroke="#EA4335" stroke-width="4" stroke-linecap="round"/><path d="M32 14v8M32 26v8" stroke="#34A853" stroke-width="4" stroke-linecap="round"/><path d="M8 21v6M40 21v6" stroke="#4285F4" stroke-width="4" stroke-linecap="round"/></svg>`
};

const defaultGoogleApps = {
  favorites: [
    { id: 'ga-account', title: 'Account', url: 'https://myaccount.google.com/', svgKey: 'account' },
    { id: 'ga-drive', title: 'Drive', url: 'https://drive.google.com/', svgKey: 'drive' },
    { id: 'ga-gmail', title: 'Gmail', url: 'https://mail.google.com/', svgKey: 'gmail' },
    { id: 'ga-yt', title: 'YouTube', url: 'https://www.youtube.com/', svgKey: 'youtube' },
    { id: 'ga-gemini', title: 'Gemini', url: 'https://gemini.google.com/', svgKey: 'gemini' },
    { id: 'ga-maps', title: 'Maps', url: 'https://maps.google.com/', svgKey: 'maps' },
    { id: 'ga-search', title: 'Search', url: 'https://www.google.com/', svgKey: 'search' },
    { id: 'ga-cal', title: 'Calendar', url: 'https://calendar.google.com/', svgKey: 'calendar' },
    { id: 'ga-news', title: 'News', url: 'https://news.google.com/', svgKey: 'news' }
  ],
  more: [
    { id: 'ga-photos', title: 'Photos', url: 'https://photos.google.com/', svgKey: 'photos' },
    { id: 'ga-meet', title: 'Meet', url: 'https://meet.google.com/', svgKey: 'meet' },
    { id: 'ga-trans', title: 'Translate', url: 'https://translate.google.com/', svgKey: 'translate' },
    { id: 'ga-vids', title: 'Vids', url: 'https://docs.google.com/videos/', svgKey: 'vids' },
    { id: 'ga-sheets', title: 'Sheets', url: 'https://sheets.google.com/', svgKey: 'sheets' },
    { id: 'ga-docs', title: 'Docs', url: 'https://docs.google.com/', svgKey: 'docs' },
    { id: 'ga-slides', title: 'Slides', url: 'https://slides.google.com/', svgKey: 'slides' },
    { id: 'ga-shopping', title: 'Shopping', url: 'https://shopping.google.com/', svgKey: 'shopping' },
    { id: 'ga-play', title: 'Play', url: 'https://play.google.com/', svgKey: 'play' },
    { id: 'ga-finance', title: 'Finance', url: 'https://www.google.com/finance/', svgKey: 'finance' },
    { id: 'ga-arts', title: 'Arts & Culture', url: 'https://artsandculture.google.com/', svgKey: 'arts' },
    { id: 'ga-ads', title: 'Google Ads', url: 'https://ads.google.com/ups/routing?source=206&subid=xs-ip-gemini-adlt', svgKey: 'ads' },
    { id: 'ga-merchant', title: 'Merchant ...', url: 'https://www.google.com/retail/solutions/merchant-center/', svgKey: 'merchant' },
    { id: 'ga-contacts', title: 'Contacts', url: 'https://contacts.google.com/', svgKey: 'contacts' },
    { id: 'ga-travel', title: 'Travel', url: 'https://www.google.com/travel/', svgKey: 'travel' },
    { id: 'ga-forms', title: 'Forms', url: 'https://docs.google.com/forms/', svgKey: 'forms' },
    { id: 'ga-books', title: 'Books', url: 'https://books.google.com/', svgKey: 'books' },
    { id: 'ga-webstore', title: 'Chrome Web...', url: 'https://chromewebstore.google.com/', svgKey: 'webstore' },
    { id: 'ga-passwords', title: 'Passwords', url: 'https://passwords.google.com/', svgKey: 'passwords' },
    { id: 'ga-analytics', title: 'Google A...', url: 'https://analytics.google.com/', svgKey: 'analytics' },
    { id: 'ga-blogger', title: 'Blogger', url: 'https://www.blogger.com/', svgKey: 'blogger' },
    { id: 'ga-ytmusic', title: 'YouTube M...', url: 'https://music.youtube.com/', svgKey: 'ytmusic' },
    { id: 'ga-wallet', title: 'Wallet', url: 'https://wallet.google.com/', svgKey: 'wallet' },
    { id: 'ga-notebooklm', title: 'NotebookLM', url: 'https://notebooklm.google.com/', svgKey: 'notebooklm' },
    { id: 'ga-tasks', title: 'Tasks', url: 'https://tasks.google.com/', svgKey: 'tasks' },
    { id: 'ga-keep', title: 'Keep', url: 'https://keep.google.com/', svgKey: 'keep' },
    { id: 'ga-earth', title: 'Earth', url: 'https://earth.google.com/web/', svgKey: 'earth' },
    { id: 'ga-colab', title: 'Colab', url: 'https://colab.research.google.com/', svgKey: 'colab' },
    { id: 'ga-cloud', title: 'Cloud', url: 'https://console.cloud.google.com/', svgKey: 'cloud' },
    { id: 'ga-classroom', title: 'Classroom', url: 'https://classroom.google.com/', svgKey: 'classroom' },
    { id: 'ga-scholar', title: 'Scholar', url: 'https://scholar.google.com/', svgKey: 'scholar' },
    { id: 'ga-one', title: 'Google One', url: 'https://one.google.com/', svgKey: 'one' },
    { id: 'ga-podcasts', title: 'Podcasts', url: 'https://podcasts.google.com/', svgKey: 'podcasts' }
  ]
};

const defaultEngines = [
  { id: 'e1', name: 'Google', url: 'https://www.google.com/search?q=' },
  { id: 'e2', name: 'GitHub', url: 'https://github.com/search?q=' },
  { id: 'e3', name: 'YouTube', url: 'https://www.youtube.com/results?search_query=' },
  { id: 'e4', name: 'Perplexity', url: 'https://www.perplexity.ai/search?q=' }
];

function getDefaultWidgets() {
  const rightX = Math.max(780, window.innerWidth - 280);
  return [
    { id: 'w-telemetry-1', type: 'telemetry', title: 'TELEMETRY', showTitle: true, x: 24, y: 24, w: 230, h: 120, data: {} },
    { id: 'w-scratchpad-1', type: 'scratchpad', title: 'SCRATCHPAD', showTitle: true, x: 24, y: 175, w: 240, h: 220, data: { text: '' } },
    { id: 'w-transfers-1', type: 'transfers', title: 'SESSION TRANSFERS', showTitle: true, x: rightX, y: 64, w: 260, h: 210, data: {} }
  ];
}

let shortcuts = [];
let widgets = [];
let engines = [];
let googleApps = structuredClone(defaultGoogleApps);
let currentEngine = defaultEngines[0];

let isEditMode = false;
let isFavEditMode = false;
let draggedShortcut = null;
let draggedGApp = null;
let editingId = null;
let sessionStartTime = Date.now();
let topZIndex = 35;

function persist(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({ [key]: value });
  }
}

function saveShortcuts() { persist(SHORTCUT_KEY, shortcuts); }
function saveWidgets() { persist(WIDGETS_KEY, widgets); }
function saveEngines() { persist(ENGINE_KEY, engines); }
function saveGoogleApps() { persist(GAPPS_KEY, googleApps); }

function snap(val, step = 10) { return Math.round(val / step) * step; }

function applyDynamicExtensionIcon() {
  try {
    const c = document.createElement('canvas');
    c.width = 32; c.height = 32;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#070b12';
    ctx.beginPath();
    ctx.roundRect(0, 0, 32, 32, 7);
    ctx.fill();

    ctx.strokeStyle = '#00e5ff';
    ctx.lineWidth = 2.2;
    ctx.shadowColor = '#00e5ff';
    ctx.shadowBlur = 4;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      const x = 16 + 10.5 * Math.cos(a);
      const y = 16 + 10.5 * Math.sin(a);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = '#00f59b';
    ctx.beginPath();
    ctx.arc(16, 16, 3, 0, Math.PI * 2);
    ctx.fill();

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = c.toDataURL('image/png');

    if (typeof chrome !== 'undefined' && chrome.action && chrome.action.setIcon) {
      chrome.action.setIcon({ imageData: { 32: ctx.getImageData(0, 0, 32, 32) } });
    }
  } catch {}
}

const editModeBtn = document.getElementById('edit-mode-btn');
const editToolbar = document.getElementById('edit-toolbar');

editModeBtn.addEventListener('click', () => {
  isEditMode = !isEditMode;
  document.body.classList.toggle('edit-mode', isEditMode);
  editToolbar.classList.toggle('hidden', !isEditMode);
  editModeBtn.textContent = isEditMode ? '✓ DONE' : '⚙ EDIT';
});

function deduplicateList(list) {
  const seenUrls = new Set();
  return (list || []).filter(item => {
    if (!item || !item.url) return false;
    const norm = item.url.trim().replace(/\/$/, '').toLowerCase();
    if (seenUrls.has(norm)) return false;
    seenUrls.add(norm);
    return true;
  });
}

async function readPersistentData(key, fallbackKeys = []) {
  let data = JSON.parse(localStorage.getItem(key));
  if (!data && typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    data = await new Promise(resolve => {
      chrome.storage.local.get([key], res => resolve(res[key] || null));
    });
  }
  if (!data) {
    for (const oldKey of fallbackKeys) {
      const legacy = JSON.parse(localStorage.getItem(oldKey));
      if (legacy) { data = legacy; break; }
    }
  }
  return data;
}

async function initializeAllState() {
  const loadedShortcuts = await readPersistentData(SHORTCUT_KEY, ['aeroglass_shortcuts_v62_gh']);
  shortcuts = Array.isArray(loadedShortcuts) && loadedShortcuts.length > 0
    ? deduplicateList(loadedShortcuts)
    : structuredClone(defaultShortcuts);

  const loadedWidgets = await readPersistentData(WIDGETS_KEY, ['aeroglass_widgets_v61']);
  const validTypes = new Set(['scratchpad', 'telemetry', 'transfers', 'checklist', 'monitor']);
  if (Array.isArray(loadedWidgets) && loadedWidgets.length > 0) {
    widgets = loadedWidgets
      .filter(w => validTypes.has(w.type))
      .map(w => ({
        ...w,
        title: String(w.title || 'WIDGET').slice(0, MAX_TITLE_LEN),
        showTitle: w.showTitle !== false
      }));
  } else {
    widgets = getDefaultWidgets();
  }

  const loadedEngines = await readPersistentData(ENGINE_KEY, ['aeroglass_engines_v5']);
  engines = Array.isArray(loadedEngines) && loadedEngines.length > 0
    ? loadedEngines
    : structuredClone(defaultEngines);
  currentEngine = engines[0];

  const loadedGApps = await readPersistentData(GAPPS_KEY, ['aeroglass_google_apps_v62_full']);
  if (loadedGApps && Array.isArray(loadedGApps.favorites)) {
    googleApps = loadedGApps;
  }

  saveShortcuts();
  saveWidgets();
  saveEngines();
  saveGoogleApps();

  renderEngines();
  renderShortcuts();
  renderGoogleAppsPopover();
  renderAllWidgets();
}

function getFavicon(item) {
  if (item.customIcon && item.customIcon.trim() !== '') return item.customIcon.trim();
  try {
    const domain = new URL(item.url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch { return ''; }
}

const mainGrid = document.getElementById('main-grid');

function createCard(item) {
  const a = document.createElement('a');
  a.href = item.url;
  a.className = 'shortcut-card glass';
  a.draggable = true;
  a.dataset.id = item.id;

  a.innerHTML = `
    <div class="card-actions">
      <button class="action-btn edit-btn" title="Edit">✎</button>
      <button class="action-btn delete-btn" title="Delete">×</button>
    </div>
    <div class="icon-wrapper">
      <img src="${getFavicon(item)}" alt="">
    </div>
    <span class="title">${item.title}</span>
  `;

  a.querySelector('.edit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openShortcutModal(item);
  });

  a.querySelector('.delete-btn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    shortcuts = shortcuts.filter(i => i.id !== item.id);
    saveShortcuts();
    renderShortcuts();
  });

  a.addEventListener('dragstart', (e) => {
    e.stopPropagation();
    draggedShortcut = item;
    setTimeout(() => a.classList.add('dragging'), 0);
  });

  a.addEventListener('dragend', () => {
    a.classList.remove('dragging');
    draggedShortcut = null;
  });

  a.addEventListener('dragover', (e) => {
    if (draggedShortcut) e.preventDefault();
  });

  a.addEventListener('drop', (e) => {
    if (!draggedShortcut || draggedShortcut.id === item.id) return;
    e.preventDefault();
    e.stopPropagation();

    const moving = draggedShortcut;
    draggedShortcut = null;

    shortcuts = shortcuts.filter(i => i.id !== moving.id);
    const targetIdx = shortcuts.findIndex(i => i.id === item.id);
    if (targetIdx !== -1) shortcuts.splice(targetIdx, 0, moving);
    else shortcuts.push(moving);

    saveShortcuts();
    renderShortcuts();
  });

  return a;
}

function renderShortcuts() {
  mainGrid.innerHTML = '';
  shortcuts.forEach(item => mainGrid.appendChild(createCard(item)));

  const addCard = document.createElement('div');
  addCard.className = 'shortcut-card glass add-shortcut-card';
  addCard.title = 'Add New Shortcut';
  addCard.innerHTML = `
    <div class="icon-wrapper"><span class="add-icon">＋</span></div>
    <span class="title">ADD</span>
  `;
  addCard.addEventListener('click', () => openShortcutModal());
  mainGrid.appendChild(addCard);
}

const shortcutModal = document.getElementById('shortcut-modal');
function openShortcutModal(item = null) {
  editingId = item ? item.id : null;
  document.getElementById('modal-title').textContent = item ? 'EDIT SHORTCUT' : 'ADD SHORTCUT';
  document.getElementById('site-title').value = item ? item.title : '';
  document.getElementById('site-url').value = item ? item.url : '';
  document.getElementById('site-icon').value = item ? (item.customIcon || '') : '';
  shortcutModal.classList.remove('hidden');
  document.getElementById('site-title').focus();
}

document.getElementById('cancel-btn').addEventListener('click', () => shortcutModal.classList.add('hidden'));
document.getElementById('save-btn').addEventListener('click', () => {
  const title = document.getElementById('site-title').value.trim().slice(0, 24);
  let url = document.getElementById('site-url').value.trim();
  const customIcon = document.getElementById('site-icon').value.trim();

  if (!title || !url) return;
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

  if (editingId) {
    const idx = shortcuts.findIndex(i => i.id === editingId);
    if (idx !== -1) shortcuts[idx] = { id: editingId, title, url, customIcon };
  } else {
    shortcuts.push({ id: 'sc-' + Date.now(), title, url, customIcon });
  }

  shortcuts = deduplicateList(shortcuts);
  saveShortcuts();
  renderShortcuts();
  shortcutModal.classList.add('hidden');
});

const quickAppsPopover = document.getElementById('quick-apps-popover');

function renderGoogleAppsPopover() {
  quickAppsPopover.innerHTML = `
    <div class="g-apps-container">
      <div class="g-fav-box">
        <div class="g-fav-header">
          <span class="g-fav-label">Favorites</span>
          <button type="button" class="g-fav-edit-btn ${isFavEditMode ? 'active' : ''}" title="Edit Favorites">✎</button>
        </div>
        <div class="g-apps-grid fav-grid"></div>
      </div>
      <div class="g-more-box">
        <div class="g-apps-grid more-grid"></div>
      </div>
      <a href="https://about.google/products/" target="_blank" class="g-more-solutions-btn">More from Google</a>
    </div>
  `;

  const favGrid = quickAppsPopover.querySelector('.fav-grid');
  const moreGrid = quickAppsPopover.querySelector('.more-grid');

  quickAppsPopover.querySelector('.g-fav-edit-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    isFavEditMode = !isFavEditMode;
    renderGoogleAppsPopover();
  });

  function createAppTile(app, zone) {
    const a = document.createElement('a');
    a.href = app.url;
    a.className = 'g-app-item';
    a.draggable = true;
    const svgIcon = GOOGLE_SVGS[app.svgKey] || GOOGLE_SVGS.search;

    a.innerHTML = `
      ${isFavEditMode ? `<button class="g-star-btn" title="Move between Favorites & More">${zone === 'favorites' ? '★' : '☆'}</button>` : ''}
      <div class="g-app-icon">${svgIcon}</div>
      <span title="${app.title}">${app.title}</span>
    `;

    const starBtn = a.querySelector('.g-star-btn');
    if (starBtn) {
      starBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetZone = zone === 'favorites' ? 'more' : 'favorites';
        googleApps[zone] = googleApps[zone].filter(i => i.id !== app.id);
        googleApps[targetZone].push(app);
        saveGoogleApps();
        renderGoogleAppsPopover();
      });
    }

    a.addEventListener('dragstart', (e) => {
      e.stopPropagation();
      draggedGApp = { app, fromZone: zone };
    });

    a.addEventListener('dragover', (e) => {
      if (draggedGApp) e.preventDefault();
    });

    a.addEventListener('drop', (e) => {
      if (!draggedGApp || draggedGApp.app.id === app.id) return;
      e.preventDefault();
      e.stopPropagation();

      const moving = draggedGApp.app;
      const from = draggedGApp.fromZone;
      draggedGApp = null;

      googleApps[from] = googleApps[from].filter(i => i.id !== moving.id);
      const idx = googleApps[zone].findIndex(i => i.id === app.id);
      googleApps[zone].splice(idx, 0, moving);

      saveGoogleApps();
      renderGoogleAppsPopover();
    });

    return a;
  }

  googleApps.favorites.forEach(app => favGrid.appendChild(createAppTile(app, 'favorites')));
  googleApps.more.forEach(app => moreGrid.appendChild(createAppTile(app, 'more')));
}

const canvas = document.getElementById('widget-canvas');

function createWidgetInstance(type, customProps = null) {
  const presets = {
    scratchpad: { title: 'SCRATCHPAD', w: 250, h: 220, data: { text: '' } },
    telemetry:  { title: 'TELEMETRY', w: 230, h: 120, data: {} },
    transfers:  { title: 'SESSION TRANSFERS', w: 260, h: 210, data: {} },
    checklist:  { title: 'CHECKLIST', w: 250, h: 220, data: { items: [] } },
    monitor:    { title: 'PING MONITOR', w: 250, h: 125, data: { target: 'https://www.google.com' } }
  };

  const base = presets[type] || presets.scratchpad;
  const offset = (widgets.length % 5) * 20;

  const newWidget = customProps ? {
    ...structuredClone(customProps),
    id: 'w-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
    title: customProps.title.slice(0, MAX_TITLE_LEN),
    showTitle: customProps.showTitle !== false,
    x: Math.min(window.innerWidth - customProps.w - 20, customProps.x + 30),
    y: Math.min(window.innerHeight - customProps.h - 20, customProps.y + 30)
  } : {
    id: 'w-' + Date.now(),
    type,
    title: base.title,
    showTitle: true,
    x: 30 + offset,
    y: 160 + offset,
    w: base.w,
    h: base.h,
    data: structuredClone(base.data)
  };

  widgets.push(newWidget);
  saveWidgets();
  renderAllWidgets();
}

function renderAllWidgets() {
  canvas.innerHTML = '';
  widgets.forEach(w => {
    const el = document.createElement('div');
    const isNaked = w.type === 'telemetry';
    const titleHiddenClass = w.showTitle === false ? 'title-hidden' : '';
    el.className = `free-widget ${isNaked ? 'naked-widget' : 'glass'} ${titleHiddenClass}`.trim();
    el.dataset.id = w.id;
    el.style.left = `${w.x}px`;
    el.style.top = `${w.y}px`;
    el.style.width = `${w.w}px`;
    if (!isNaked) el.style.height = `${w.h}px`;

    el.innerHTML = `
      <div class="w-header">
        <input type="text" class="w-title" maxlength="${MAX_TITLE_LEN}" value="${w.title}" title="Edit widget name (max 20 chars)">
        <div class="w-controls">
          <button type="button" class="w-btn toggle-title-btn ${w.showTitle !== false ? 'active' : ''}" title="Show / Hide Title">T</button>
          <button type="button" class="w-btn grab-btn" title="Hold or Double-Tap & Hold to Move">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M18 11V6a2 2 0 0 0-4 0v5h-1V4a2 2 0 0 0-4 0v7H8V7a2 2 0 0 0-4 0v10c0 3.31 2.69 6 6 6h6c3.31 0 6-2.69 6-6v-6a2 2 0 0 0-4 0z"/>
            </svg>
          </button>
          <button type="button" class="w-btn dup" title="Duplicate Widget">⧉</button>
          <button type="button" class="w-btn del" title="Remove Widget">×</button>
        </div>
      </div>
      <div class="w-body"></div>
      <div class="resize-handle" title="Drag to resize"></div>
    `;

    const titleInput = el.querySelector('.w-title');
    titleInput.addEventListener('input', () => {
      if (titleInput.value.length > MAX_TITLE_LEN) {
        titleInput.value = titleInput.value.slice(0, MAX_TITLE_LEN);
      }
      w.title = titleInput.value;
      saveWidgets();
    });
    titleInput.addEventListener('blur', () => {
      w.title = (titleInput.value.trim() || 'WIDGET').slice(0, MAX_TITLE_LEN);
      titleInput.value = w.title;
      saveWidgets();
    });

    const toggleTitleBtn = el.querySelector('.toggle-title-btn');
    toggleTitleBtn.addEventListener('click', () => {
      w.showTitle = w.showTitle === false ? true : false;
      el.classList.toggle('title-hidden', !w.showTitle);
      toggleTitleBtn.classList.toggle('active', w.showTitle);
      saveWidgets();
    });

    el.querySelector('.w-btn.dup').addEventListener('click', () => createWidgetInstance(w.type, w));
    el.querySelector('.w-btn.del').addEventListener('click', () => {
      widgets = widgets.filter(item => item.id !== w.id);
      saveWidgets();
      renderAllWidgets();
    });

    setupWidgetInteractions(el, w);
    buildWidgetBody(el.querySelector('.w-body'), w);
    canvas.appendChild(el);
  });

  updateTelemetryAndMonitors();
  pollDownloads();
}

function setupWidgetInteractions(el, w) {
  const grabBtn = el.querySelector('.grab-btn');
  const resizer = el.querySelector('.resize-handle');

  el.addEventListener('pointerdown', () => {
    if (!isEditMode) return;
    topZIndex++;
    el.style.zIndex = topZIndex;
  });

  grabBtn.addEventListener('pointerdown', (e) => {
    if (!isEditMode) return;
    e.preventDefault();
    e.stopPropagation();
    grabBtn.setPointerCapture(e.pointerId);
    el.classList.add('active-drag');

    const startX = e.clientX - w.x;
    const startY = e.clientY - w.y;

    function onPointerMove(ev) {
      w.x = snap(Math.max(0, Math.min(window.innerWidth - w.w, ev.clientX - startX)));
      w.y = snap(Math.max(0, Math.min(window.innerHeight - 60, ev.clientY - startY)));
      el.style.left = `${w.x}px`;
      el.style.top = `${w.y}px`;
    }

    function onPointerUp(ev) {
      el.classList.remove('active-drag');
      try { grabBtn.releasePointerCapture(ev.pointerId); } catch {}
      saveWidgets();
      grabBtn.removeEventListener('pointermove', onPointerMove);
      grabBtn.removeEventListener('pointerup', onPointerUp);
      grabBtn.removeEventListener('pointercancel', onPointerUp);
    }

    grabBtn.addEventListener('pointermove', onPointerMove);
    grabBtn.addEventListener('pointerup', onPointerUp);
    grabBtn.addEventListener('pointercancel', onPointerUp);
  });

  resizer.addEventListener('pointerdown', (e) => {
    if (!isEditMode) return;
    e.preventDefault();
    e.stopPropagation();
    resizer.setPointerCapture(e.pointerId);
    el.classList.add('active-drag');

    const startW = w.w, startH = w.h, startX = e.clientX, startY = e.clientY;

    function onPointerMove(ev) {
      w.w = snap(Math.max(190, startW + (ev.clientX - startX)));
      w.h = snap(Math.max(95, startH + (ev.clientY - startY)));
      el.style.width = `${w.w}px`;
      if (w.type !== 'telemetry') el.style.height = `${w.h}px`;
    }

    function onPointerUp(ev) {
      el.classList.remove('active-drag');
      try { resizer.releasePointerCapture(ev.pointerId); } catch {}
      saveWidgets();
      resizer.removeEventListener('pointermove', onPointerMove);
      resizer.removeEventListener('pointerup', onPointerUp);
      resizer.removeEventListener('pointercancel', onPointerUp);
    }

    resizer.addEventListener('pointermove', onPointerMove);
    resizer.addEventListener('pointerup', onPointerUp);
    resizer.addEventListener('pointercancel', onPointerUp);
  });
}

async function pingEndpointBox(box) {
  const urlInput = box.querySelector('.mon-url');
  const msEl = box.querySelector('.mon-ms');
  const timeEl = box.querySelector('.mon-updated');
  if (!urlInput || !msEl || !timeEl) return;

  let target = urlInput.value.trim();
  if (!target) return;
  if (!/^https?:\/\//i.test(target)) target = 'https://' + target;

  const start = performance.now();
  try {
    await fetch(target, { mode: 'no-cors', cache: 'no-store' });
    const ms = Math.max(1, Math.round(performance.now() - start));
    msEl.textContent = `${ms} ms`;
    msEl.style.color = 'var(--accent-green)';
  } catch {
    msEl.textContent = 'TIMEOUT';
    msEl.style.color = 'var(--danger)';
  }
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString('en-US', {
    hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}

function buildWidgetBody(container, w) {
  if (w.type === 'telemetry') {
    container.innerHTML = `
      <div class="metric-item">
        <div class="metric-label"><span>RAM</span><span class="t-mem">-- / -- GB</span></div>
        <div class="progress-track"><div class="progress-fill t-mem-bar"></div></div>
      </div>
      <div class="metric-item">
        <div class="metric-label"><span>BAT</span><span class="t-bat">--%</span></div>
        <div class="progress-track"><div class="progress-fill accent-green t-bat-bar"></div></div>
      </div>
      <div class="ping-row">
        <span>PING</span><span class="ping-value t-ping">-- ms</span>
      </div>
    `;
  } else if (w.type === 'scratchpad') {
    container.innerHTML = `
      <textarea class="scratchpad-area" placeholder="// Type notes here...">${w.data.text || ''}</textarea>
      <div class="w-footer">
        <span class="sp-count">${(w.data.text || '').length} chars</span>
        <button class="mini-action-btn sp-copy">COPY</button>
      </div>
    `;
    const area = container.querySelector('.scratchpad-area');
    const count = container.querySelector('.sp-count');
    const copyBtn = container.querySelector('.sp-copy');
    area.addEventListener('input', () => {
      w.data.text = area.value;
      count.textContent = `${area.value.length} chars`;
      saveWidgets();
    });
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(area.value);
      copyBtn.textContent = 'COPIED!';
      setTimeout(() => { copyBtn.textContent = 'COPY'; }, 1200);
    });
  } else if (w.type === 'transfers') {
    container.innerHTML = `
      <div class="dl-list"></div>
      <div class="w-footer">
        <span>ACTIVE SESSION</span>
        <button class="mini-action-btn dl-clear">CLEAR</button>
      </div>
    `;
    container.querySelector('.dl-clear').addEventListener('click', () => {
      sessionStartTime = Date.now();
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.session) {
        chrome.storage.session.set({ sessionStartTime });
      }
      pollDownloads();
    });
  } else if (w.type === 'checklist') {
    container.innerHTML = `
      <input type="text" class="chk-input" placeholder="Add task + Enter...">
      <ul class="chk-list"></ul>
    `;
    const input = container.querySelector('.chk-input');
    const list = container.querySelector('.chk-list');
    function renderItems() {
      list.innerHTML = '';
      (w.data.items || []).forEach((item, idx) => {
        const li = document.createElement('li');
        li.className = `chk-item ${item.done ? 'done' : ''}`;
        li.innerHTML = `
          <label>
            <input type="checkbox" class="cyber-checkbox" ${item.done ? 'checked' : ''}>
            <span class="chk-text">${item.text}</span>
          </label>
          <button class="chk-del" title="Delete">×</button>
        `;
        li.querySelector('input').addEventListener('change', () => {
          item.done = !item.done;
          saveWidgets();
          renderItems();
        });
        li.querySelector('.chk-del').addEventListener('click', () => {
          w.data.items.splice(idx, 1);
          saveWidgets();
          renderItems();
        });
        list.appendChild(li);
      });
    }
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && input.value.trim()) {
        w.data.items = w.data.items || [];
        w.data.items.unshift({ text: input.value.trim(), done: false });
        input.value = '';
        saveWidgets();
        renderItems();
      }
    });
    renderItems();
  } else if (w.type === 'monitor') {
    container.innerHTML = `
      <div class="monitor-box">
        <input type="url" class="chk-input mon-url" value="${w.data.target || 'https://www.google.com'}" placeholder="https://...">
        <div class="ping-row">
          <span class="ping-value mon-ms">-- ms</span>
          <span class="mon-updated">--:--:--</span>
        </div>
      </div>
    `;
    const box = container.querySelector('.monitor-box');
    const urlInput = container.querySelector('.mon-url');

    urlInput.addEventListener('change', () => {
      w.data.target = urlInput.value.trim();
      saveWidgets();
      pingEndpointBox(box);
    });
    pingEndpointBox(box);
  }
}

function startZeroLagClock() {
  function tick() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', {
      hour12: false, hour: '2-digit', minute: '2-digit'
    });
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
    }).toUpperCase();
    const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds() + 5;
    setTimeout(tick, msToNextMinute);
  }
  tick();
  document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });
}

const engineTrigger = document.getElementById('engine-trigger');
const engineCurrentName = document.getElementById('engine-current-name');
const engineOptions = document.getElementById('engine-options');
const engineModal = document.getElementById('engine-modal');

function renderEngines() {
  if (!engines.find(e => e.id === currentEngine?.id)) currentEngine = engines[0];
  engineCurrentName.textContent = currentEngine.name;
  engineOptions.innerHTML = '';

  engines.forEach(eng => {
    const item = document.createElement('div');
    item.className = `custom-option ${eng.id === currentEngine.id ? 'selected' : ''}`;
    item.innerHTML = `<span>${eng.name}</span>${eng.id === currentEngine.id ? '<span>●</span>' : ''}`;
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      currentEngine = eng;
      engineOptions.classList.add('hidden');
      renderEngines();
      document.getElementById('search-input').focus();
    });
    engineOptions.appendChild(item);
  });

  const list = document.getElementById('engine-list');
  list.innerHTML = '';
  engines.forEach(eng => {
    const row = document.createElement('div');
    row.className = 'engine-item';
    row.innerHTML = `
      <span><strong>${eng.name}</strong></span>
      ${engines.length > 1 ? `<button class="action-btn delete-btn">×</button>` : ''}
    `;
    const delBtn = row.querySelector('.delete-btn');
    if (delBtn) {
      delBtn.addEventListener('click', () => {
        engines = engines.filter(e => e.id !== eng.id);
        saveEngines();
        renderEngines();
      });
    }
    list.appendChild(row);
  });
}

engineTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  engineOptions.classList.toggle('hidden');
});

const addWidgetBtn = document.getElementById('add-widget-btn');
const widgetMenu = document.getElementById('widget-menu');
addWidgetBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  widgetMenu.classList.toggle('hidden');
});
document.addEventListener('click', () => {
  widgetMenu.classList.add('hidden');
  engineOptions.classList.add('hidden');
});
widgetMenu.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => createWidgetInstance(btn.dataset.type));
});

document.getElementById('open-engine-modal').addEventListener('click', () => engineModal.classList.remove('hidden'));
document.getElementById('close-eng-btn').addEventListener('click', () => engineModal.classList.add('hidden'));
document.getElementById('add-eng-btn').addEventListener('click', () => {
  const name = document.getElementById('eng-name').value.trim().slice(0, 18);
  const url = document.getElementById('eng-url').value.trim();
  if (!name || !url) return;
  engines.push({ id: Date.now().toString(), name, url });
  saveEngines();
  renderEngines();
  document.getElementById('eng-name').value = '';
  document.getElementById('eng-url').value = '';
});

function executeSearch(query) {
  const val = query.trim();
  if (!val) return;
  if (/^(https?:\/\/|localhost)/i.test(val)) {
    window.location.href = val.startsWith('http') ? val : `http://${val}`;
  } else {
    window.location.href = currentEngine.url + encodeURIComponent(val);
  }
}

document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  executeSearch(document.getElementById('search-input').value);
});

const voiceBtn = document.getElementById('voice-btn');
const searchInput = document.getElementById('search-input');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = navigator.language || 'ja-JP';
  let isListening = false;
  voiceBtn.addEventListener('click', () => {
    if (isListening) recognition.stop();
    else { try { recognition.start(); } catch {} }
  });
  recognition.onstart = () => {
    isListening = true;
    voiceBtn.classList.add('listening');
    searchInput.placeholder = 'Listening...';
  };
  recognition.onresult = (event) => {
    const transcript = Array.from(event.results).map(r => r[0].transcript).join('');
    searchInput.value = transcript;
    if (event.results[0].isFinal) executeSearch(transcript);
  };
  recognition.onerror = recognition.onend = () => {
    isListening = false;
    voiceBtn.classList.remove('listening');
    searchInput.placeholder = 'Search or type a URL...';
  };
} else {
  voiceBtn.style.display = 'none';
}

async function updateTelemetryAndMonitors() {
  if (document.hidden) return;

  document.querySelectorAll('.monitor-box').forEach(box => {
    if (document.activeElement !== box.querySelector('.mon-url')) {
      pingEndpointBox(box);
    }
  });

  const teleNodes = document.querySelectorAll('.free-widget.naked-widget');
  if (teleNodes.length === 0) return;

  if (typeof chrome !== 'undefined' && chrome.system && chrome.system.memory) {
    chrome.system.memory.getInfo((info) => {
      const totalGb = (info.capacity / (1024 ** 3)).toFixed(1);
      const usedBytes = info.capacity - info.availableCapacity;
      const usedGb = (usedBytes / (1024 ** 3)).toFixed(1);
      const pct = Math.round((usedBytes / info.capacity) * 100);
      teleNodes.forEach(node => {
        node.querySelector('.t-mem').textContent = `${usedGb} / ${totalGb} GB (${pct}%)`;
        node.querySelector('.t-mem-bar').style.width = `${pct}%`;
      });
    });
  }

  if (navigator.getBattery) {
    try {
      const bat = await navigator.getBattery();
      const pct = Math.round(bat.level * 100);
      teleNodes.forEach(node => {
        node.querySelector('.t-bat').textContent = `${pct}% ${bat.charging ? '⚡' : ''}`;
        node.querySelector('.t-bat-bar').style.width = `${pct}%`;
      });
    } catch {}
  }

  const start = performance.now();
  try {
    await fetch('https://www.google.com/generate_204', { mode: 'no-cors', cache: 'no-store' });
    const ms = Math.max(1, Math.round(performance.now() - start));
    teleNodes.forEach(node => { node.querySelector('.t-ping').textContent = `${ms} ms`; });
  } catch {
    teleNodes.forEach(node => { node.querySelector('.t-ping').textContent = 'OFFLINE'; });
  }
}

function initSessionTime(callback) {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.session) {
    chrome.storage.session.get(['sessionStartTime'], (res) => {
      if (res.sessionStartTime) sessionStartTime = res.sessionStartTime;
      else {
        sessionStartTime = Date.now();
        chrome.storage.session.set({ sessionStartTime });
      }
      callback();
    });
  } else { callback(); }
}

function formatBytes(bytes) {
  if (!bytes || bytes <= 0) return '0 MB';
  const mb = bytes / (1024 * 1024);
  return mb < 1 ? `${(bytes / 1024).toFixed(0)} KB` : `${mb.toFixed(1)} MB`;
}

function pollDownloads() {
  if (document.hidden) return;
  const dlLists = document.querySelectorAll('.dl-list');
  if (dlLists.length === 0) return;

  if (typeof chrome !== 'undefined' && chrome.downloads) {
    chrome.downloads.search(
      { startedAfter: new Date(sessionStartTime).toISOString(), limit: 6, orderBy: ['-startTime'] },
      (results) => {
        const items = (results || []).filter(d => d.state === 'in_progress' || (d.state === 'complete' && d.exists !== false));
        dlLists.forEach(container => {
          container.innerHTML = '';
          if (items.length === 0) {
            container.innerHTML = `<div class="dl-empty">NO RECENT TRANSFERS</div>`;
            return;
          }
          items.forEach(d => {
            const name = d.filename ? d.filename.split(/[\\/]/).pop() : 'downloading_file';
            const total = d.totalBytes > 0 ? d.totalBytes : 0;
            const received = d.bytesReceived || 0;
            const isComplete = d.state === 'complete';
            const pct = isComplete ? 100 : (total > 0 ? Math.min(99, Math.round((received / total) * 100)) : 50);

            const el = document.createElement('div');
            el.className = 'dl-item';
            el.innerHTML = `
              <div class="dl-top">
                <span class="dl-name" title="${name}">${name}</span>
                <span class="dl-percent">${isComplete ? '100%' : pct + '%'}</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill ${isComplete ? 'accent-green' : ''}" style="width: ${pct}%"></div>
              </div>
              <div class="dl-bottom">
                <span>${total > 0 ? `${formatBytes(received)} / ${formatBytes(total)}` : formatBytes(received)}</span>
                <div class="dl-actions">
                  ${isComplete ? `<button class="mini-action-btn open-btn">OPEN</button>` : ''}
                  <button class="mini-action-btn folder-btn">FOLDER</button>
                </div>
              </div>
            `;
            const openBtn = el.querySelector('.open-btn');
            if (openBtn) openBtn.addEventListener('click', () => chrome.downloads.open(d.id));
            el.querySelector('.folder-btn').addEventListener('click', () => chrome.downloads.show(d.id));
            container.appendChild(el);
          });
        });
      }
    );
  }
}

const sysModal = document.getElementById('system-modal');
document.getElementById('open-system-modal').addEventListener('click', () => sysModal.classList.remove('hidden'));
document.getElementById('close-sys-btn').addEventListener('click', () => sysModal.classList.add('hidden'));

document.getElementById('export-btn').addEventListener('click', () => {
  const payload = { shortcuts, widgets, engines, googleApps };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'glasstab-workspace.json';
  a.click();
});

document.getElementById('import-input').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.shortcuts) { shortcuts = deduplicateList(data.shortcuts); saveShortcuts(); }
      if (data.widgets) { widgets = data.widgets; saveWidgets(); }
      if (data.engines) { engines = data.engines; saveEngines(); }
      if (data.googleApps) { googleApps = data.googleApps; saveGoogleApps(); }
      renderShortcuts();
      renderAllWidgets();
      renderEngines();
      renderGoogleAppsPopover();
      sysModal.classList.add('hidden');
    } catch {}
  };
  reader.readAsText(file);
});

document.getElementById('reset-btn').addEventListener('click', () => {
  localStorage.removeItem(SHORTCUT_KEY);
  localStorage.removeItem(WIDGETS_KEY);
  localStorage.removeItem(ENGINE_KEY);
  localStorage.removeItem(GAPPS_KEY);
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.remove([SHORTCUT_KEY, WIDGETS_KEY, ENGINE_KEY, GAPPS_KEY]);
  }
  location.reload();
});

applyDynamicExtensionIcon();
startZeroLagClock();
initializeAllState();

initSessionTime(() => {
  pollDownloads();
  setInterval(pollDownloads, 1500);
});

setInterval(updateTelemetryAndMonitors, 4000);
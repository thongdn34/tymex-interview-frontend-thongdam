export const DEFAULT_LIMIT = 30;
export const DEFAULT_UNIT = 'ETH';

export const HEADERS = [
  {
    key: 'home',
    label: 'HOME',
  },
  {
    key: 'about-us',
    label: 'ABOUT US',
  },
  {
    key: 'our-teams',
    label: 'OUR TEAMS',
  },
  {
    key: 'marketplace',
    label: 'MARKETPLACE',
  },
  {
    key: 'roadmap',
    label: 'ROADMAP',
  },
  {
    key: 'whitepaper',
    label: 'WHITEPAPER',
  },
];

export const DEFAULT_FILTERS = {
  tier: 'all',
  theme: 'all',
  time: 'all',
  price: 'all',
};

export enum Filter {
  TIER = 'tier',
  THEME = 'theme',
  TIME = 'time',
  PRICE = 'price',
}

export const TIERS = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'basic',
    label: 'Basic',
  },
  {
    value: 'premium',
    label: 'Premium',
  },
  {
    value: 'deluxe',
    label: 'Deluxe',
  },
];

export const THEMES = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'halloween',
    label: 'Halloween',
  },
  {
    value: 'dark',
    label: 'Dark',
  },
  {
    value: 'light',
    label: 'Light',
  },
  {
    value: 'colorful',
    label: 'Colorful',
  },
];

export const TIMES = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'latest',
    label: 'Latest',
  },
  {
    value: 'oldest',
    label: 'Oldest',
  },
];

export const PRICES = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'low-to-high',
    label: 'Low to high',
  },
  {
    value: 'high-to-low',
    label: 'High to low',
  },
];

export const CATEGORIES = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'Upper Body',
    label: 'Upper Body',
  },
  {
    value: 'Lower Body',
    label: 'Lower Body',
  },
  {
    value: 'Hat',
    label: 'Hat',
  },
  {
    value: 'Shoes',
    label: 'Shoes',
  },
  {
    value: 'Accessory',
    label: 'Accessory',
  },
  {
    value: 'Legendary',
    label: 'Legendary',
  },
  {
    value: 'Mythic',
    label: 'Mythic',
  },
  {
    value: 'Epic',
    label: 'Epic',
  },
  {
    value: 'Rare',
    label: 'Rare',
  },
  {
    value: 'Common',
    label: 'Common',
  },
];

export const CHARACTER_IMAGES = [
  '/characters/neon-guy.png',
  '/characters/the-dj.png',
  '/characters/basketball-girl.png',
  '/characters/assassin.png',
  '/characters/mafia-england.png',
  '/characters/neon-guy.png',
  '/characters/the-dj.png',
  '/characters/basketball-girl.png',
  '/characters/assassin.png',
  '/characters/mafia-england.png',
  '/characters/neon-guy.png',
  '/characters/the-dj.png',
  '/characters/basketball-girl.png',
  '/characters/assassin.png',
  '/characters/mafia-england.png',
  '/characters/neon-guy.png',
  '/characters/the-dj.png',
  '/characters/basketball-girl.png',
  '/characters/assassin.png',
  '/characters/mafia-england.png',
  '/characters/neon-guy.png',
  '/characters/the-dj.png',
  '/characters/basketball-girl.png',
  '/characters/assassin.png',
  '/characters/mafia-england.png',
];

export const USER_STATUS_IMAGES: Record<string, string> = {
  idle: '/idle-status.svg',
  offline: '/offline-status.svg',
  busy: '/busy-status.svg',
  online: '/online-status.svg',
} as const;

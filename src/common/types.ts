export interface User {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  onlineStatus: string;
}

export enum Category {
  UpperBody = 'Upper Body',
  LowerBody = 'Lower Body',
  Hat = 'Hat',
  Shoes = 'Shoes',
  Accessory = 'Accessory',
  Legendary = 'Legendary',
  Mythic = 'Mythic',
  Epic = 'Epic',
  Rare = 'Rare',
  Common = 'Common',
}

export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
  Colorful = 'Colorful',
  Halloween = 'Halloween',
}

export enum Tier {
  Basic = 'Basic',
  Premium = 'Premium',
  Deluxe = 'Deluxe',
}

export interface Character {
  id: number;
  title: string;
  category: Category | string;
  price: number;
  isFavorite: boolean;
  createdAt: number;
  theme: Theme | string;
  tier: Tier | string;
  imageId: number;
  user: User;
}

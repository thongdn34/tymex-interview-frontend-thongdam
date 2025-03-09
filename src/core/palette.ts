export const colors = {
  // Rarity colors (start and end colors)
  common: {
    primary: '#49DD81',
    secondary: '#22B4C6',
  },
  epic: {
    primary: '#DD5AFE',
    secondary: '#6366F1',
  },
  rare: {
    primary: '#43A6F6',
    secondary: '#5868F3',
  },
  legendary: {
    primary: '#FE955A',
    secondary: '#F1DA63',
  },
  mythic: {
    primary: '#FE5A5A',
    secondary: '#F163D2',
  },

  // Category colors
  categories: {
    upperBody: {
      primary: '#6A0DAD',
      secondary: '#FF8C00',
    },
    lowerBody: {
      primary: '#009688',
      secondary: '#03A9F4',
    },
    hat: {
      primary: '#FFC107',
      secondary: '#673AB7',
    },
    shoes: {
      primary: '#3F51B5',
      secondary: '#4CAF50',
    },
    accessory: {
      primary: '#FF5722',
      secondary: '#795548',
    },
  },

  // Flat color palette derived from the gradients
  palette: {
    green: '#49DD81',
    teal: '#22B4C6',
    purple: {
      light: '#DD5AFE',
      dark: '#6A0DAD',
      medium: '#673AB7',
    },
    blue: {
      light: '#43A6F6',
      medium: '#03A9F4',
      dark: '#3F51B5',
    },
    indigo: '#6366F1',
    orange: {
      light: '#FE955A',
      dark: '#FF8C00',
      burnt: '#FF5722',
    },
    yellow: '#F1DA63',
    amber: '#FFC107',
    red: '#FE5A5A',
    pink: '#F163D2',
    mint: '#009688',
    lime: '#4CAF50',
    brown: '#795548',
  },
};

export const gradients: { [key: string]: string } = {
  Common: `linear-gradient(90.13deg, ${colors.palette.green} 0%, ${colors.palette.teal} 100%)`,
  Epic: `linear-gradient(90.13deg, ${colors.palette.purple.light} 0%, ${colors.palette.indigo} 100%)`,
  Rare: `linear-gradient(90deg, ${colors.palette.blue.light} 0%, ${colors.palette.blue.medium} 100%)`,
  Legendary: `linear-gradient(90.13deg, ${colors.palette.orange.light} 0%, ${colors.palette.yellow} 100%)`,
  Mythic: `linear-gradient(90.13deg, ${colors.palette.red} 0%, ${colors.palette.pink} 100%)`,
  ['Upper Body']: `linear-gradient(90.13deg, ${colors.palette.purple.dark} 0%, ${colors.palette.orange.light} 100%)`,
  ['Lower Body']: `linear-gradient(90.13deg, ${colors.palette.mint} 0%, ${colors.palette.blue.medium} 100%)`,
  Hat: `linear-gradient(90.13deg, ${colors.palette.amber} 0%, ${colors.palette.purple.medium} 100%)`,
  Shoes: `linear-gradient(90.13deg, ${colors.palette.lime} 0%, ${colors.palette.purple.medium} 100%)`,
  Accessory: `linear-gradient(90.13deg, ${colors.palette.orange.burnt} 0%, ${colors.palette.brown} 100%)`,
};

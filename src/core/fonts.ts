import localFont from 'next/font/local';

export const droneFont = localFont({
  src: [
    {
      path: '../assets/fonts/dronerangerpro_black.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/dronerangerpro_bold.otf',
      weight: 'bold',
      style: 'normal',
    },
  ],
  display: 'swap',
});

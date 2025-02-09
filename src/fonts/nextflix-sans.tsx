import localFont from 'next/font/local'

const nextFlixSans = localFont({
  src: [
    {
      path: '../../assets/fonts/NetflixSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NetflixSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NetflixSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-netflix-sans',
});

export default nextFlixSans
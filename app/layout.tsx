import type { Metadata } from 'next';
import { Outfit, Ovo } from 'next/font/google';
import './globals.css';

const outfitFont = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ovoFont = Ovo({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Portfolio - Isaladwy',
  description: 'Portfolio of Isaladwy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth w-auto overflow-x-hidden " >
      <body
        className={`${outfitFont.className} ${ovoFont.className} antialiased leading-8 w-auto overflow-x-hidden dark:bg-darkTheme dark:text-white`} 
      >
        {children}
      </body>
    </html>
  );
}

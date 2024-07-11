import '@/app/ui/global.css';
// import { inter } from './ui/fonts';
//below is better, it is called alias path configurable in tsconfig
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

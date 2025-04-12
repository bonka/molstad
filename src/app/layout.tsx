import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google'; // Endre fra Inter til DM_Sans
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes'; // Legg til ThemeProvider

// Konfigurer DM_Sans font
const dmSans = DM_Sans({ 
  subsets: ['latin'],
  // Vi trenger ikke variable siden du laster fonten via CSS
});

export const metadata: Metadata = {
  title: 'Bjørn Molstad | Business Advisor & Storyteller',
  description: 'Strategic advisor with expertise in innovation, digital strategy, and storytelling. Helping businesses navigate the intersection of design, brand, technology, and business development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

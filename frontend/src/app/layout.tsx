import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import ProviderWrapper from '@/components/custom/ProviderWrapper';
import UseLoggedInUser from '@/components/custom/useLoggedInUser';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umurava",
  description: "Umurava edtech Skills Challenges Program",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <ProviderWrapper>
          <UseLoggedInUser />
          <body className={poppins.className}>{children}</body>
        </ProviderWrapper>
      </html>
  );
}

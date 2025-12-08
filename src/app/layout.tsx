import type { Metadata } from "next";
import { Instrument_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"], 
  variable: "--font-instrument-sans" 
});
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Refined Portfolio Template",
  description: "A refined portfolio template for designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${playfair.variable} font-sans`}>
        <Script
          id="unicorn-studio"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}


import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./context/theme";
import Head from "next/head";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://hossamhamdy.me/"),
  title: "Hossam Hamdy — Full Stack Developer",
  description:
    "Dynamic Full Stack Developer adept in MERN technologies with a proven record of accomplishment of delivering impactful projects for diverse businesses. Merging technical expertise with creative problem-solving to innovate seamless digital experiences.",
  keywords: ["Full Stack Developer", "MERN", "Portfolio"],
  openGraph: {
    type: "website",
    url: "https://hossamhamdy.me/",
    title: "Hossam Hamdy — Full Stack Developer",
    description:
      "Dynamic Full Stack Developer adept in MERN technologies with a proven record of accomplishment of delivering impactful projects for diverse businesses. Merging technical expertise with creative problem-solving to innovate seamless digital experiences.",
    images: [
      {
        url: "/logo512.png", // Ensure the path is correct
        width: 800,
        height: 600,
        alt: "Hossam Hamdy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://hossamhamdy.me/",
    title: "Hossam Hamdy — Full Stack Developer",
    description:
      "Dynamic Full Stack Developer adept in MERN technologies with a proven record of accomplishment of delivering impactful projects for diverse businesses. Merging technical expertise with creative problem-solving to innovate seamless digital experiences.",
    images: ["/logo512.png"], // Ensure the path is correct
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon and manifest */}
        <link rel="icon" type="image/png" href="/logo192.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        {/* IE compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <body className={inter.className}>
        <div id="backdrop-root" />
        <div id="overlay-root" />

        <ThemeProvider>{children}</ThemeProvider>

        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-QD4LMMQF9X" />
      </body>
    </html>
  );
}

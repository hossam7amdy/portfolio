import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./context/theme";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://hossamhamdy.me/"),
  title: "Hossam Hamdy — Full Stack Developer",
  description:
    "Hossam Hamdy is a dynamic Full Stack Developer specializing in the MERN stack, renowned for crafting innovative and efficient web solutions. With a robust portfolio showcasing diverse projects, Hossam blends technical expertise with creative problem-solving to deliver seamless digital experiences. Whether building responsive user interfaces or optimizing back-end performance, Hossam is dedicated to pushing the boundaries of web development. Explore my portfolio to see how I can bring your vision to life with cutting-edge technology and design.",
  keywords: [
    "Full Stack Developer",
    "JavaScript Developer",
    "Web Developer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Database",
    "API",
    "RESTful",
    "GraphQL",
    "Responsive Design",
    "SEO",
    "Performance",
    "Accessibility",
    "Web Development",
  ],
  openGraph: {
    type: "website",
    url: "https://hossamhamdy.me/",
    title: "Hossam Hamdy — Full Stack Developer",
    description:
      "Hossam Hamdy is a dynamic Full Stack Developer specializing in the MERN stack, renowned for crafting innovative and efficient web solutions. With a robust portfolio showcasing diverse projects, Hossam blends technical expertise with creative problem-solving to deliver seamless digital experiences. Whether building responsive user interfaces or optimizing back-end performance, Hossam is dedicated to pushing the boundaries of web development. Explore my portfolio to see how I can bring your vision to life with cutting-edge technology and design.",
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
      "Hossam Hamdy is a dynamic Full Stack Developer specializing in the MERN stack, renowned for crafting innovative and efficient web solutions. With a robust portfolio showcasing diverse projects, Hossam blends technical expertise with creative problem-solving to deliver seamless digital experiences. Whether building responsive user interfaces or optimizing back-end performance, Hossam is dedicated to pushing the boundaries of web development. Explore my portfolio to see how I can bring your vision to life with cutting-edge technology and design.",
    images: ["/logo512.png"], // Ensure the path is correct
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and manifest */}
        <link rel="icon" type="image/png" href="/logo192.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        {/* IE compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>

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

import { Poppins } from "next/font/google";
import Providers from "./providers";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

import localFont from "next/font/local";

const ggsans = localFont({
  src: [
    {
      path: "./fonts/ggsans-ExtraBold.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ggsans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ggsans-Normal.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ggsans-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

export const metadata = {
  title: "DC Faker",
  description:
    "DCFaker to platforma umożliwiająca interaktywne wyświetlanie informacji o profilach użytkowników oraz szczegółowych danych dotyczących serwerów Discord, oraz tworzenie autentycznych, fikcyjnych wiadomości, idealnych do różnorodnych zastosowań.",
  image: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content="https://www.dcfaker.xyz/" />
        <meta
          name="keywords"
          content="discord, discord tools, profile viewer, server viewer, message creator, fake messages, discord profile viewer, discord server viewer, discord server details, discord icons, discord splash, message generator, message examples, discord utilities"
        />

        <link rel="icon" type="image/png" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#642ff7" />
      </head>
      <GoogleAnalytics />
      <body className={ggsans.className}>
        <Navigation />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}

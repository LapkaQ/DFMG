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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
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

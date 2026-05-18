import { Caveat, Plus_Jakarta_Sans, Nunito_Sans, Patrick_Hand } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["600", "700"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["400", "700"],
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  variable: "--font-patrick-hand",
  weight: ["400"],
});

export const metadata = {
  title: "Shajjadul • CSE Student & Software Engineer",
  description: "A CSE Student passionate about problem solving, algorithms, and web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${caveat.variable} ${plusJakartaSans.variable} ${nunitoSans.variable} ${patrickHand.variable} scroll-smooth`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

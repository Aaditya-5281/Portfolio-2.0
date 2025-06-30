import "./globals.css";
import { getUrl } from "@/utilities/getUrl";
import { Geist_Mono, Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next"

type Props = {
  children: React.ReactNode;
};

const GeistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/a.svg" type="image/svg" />
      </head>
      <body className="font-geist-sans bg-white overscroll-none dark:bg-zinc-900">
        <ThemeProvider defaultTheme="system" storageKey="aaditya-theme">
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="" />
      <Analytics />
    </html>
  );
};

export default RootLayout;

export const viewport: Viewport = {
  themeColor: "##ffffff",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(getUrl),
  title: {
    default: "Aaditya | Software Engineer | Based in India",
    template: `%s - Aaditya | Software Engineer | Based in India`,
  },
  description: "Explore my projects and previous work, or contact me.",
};

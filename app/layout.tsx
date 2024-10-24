import Gallery from "@/components/layout/Gallery";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import { NextUIProvider } from "@nextui-org/react";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Massimiliano Morosinotto - Tre Cime di Lavaredo, Italia",
  },
  {
    src: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Sascha Bosshard - Pizol, Mels, Schweiz",
  },
  {
    src: "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Yusuf Evli - Foggy Road",
  },
  {
    src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Jay Mantri - Misty shroud over a forest",
  },
  {
    src: "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Florian van Duyn - Bled, Slovenia",
  },
  {
    src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Juan Davila - Bled, Slovenia",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by David Marcu - Ciucaș Peak, Romania",
  },
  {
    src: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by whoisbenjamin - Snowdonia National Park, Blaenau Ffestiniog, UK",
  },
  {
    src: "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Aaron Burden - Grayling, Michigan, United States",
  },
  {
    src: "https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Kalen Emsley - Yukon Territory, Canada",
  },
  {
    src: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Kace Rodriguez - Pfeiffer Beach, United States",
  },
  {
    src: "https://images.unsplash.com/photo-1610448721566-47369c768e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Pat Whelen - Portsea VIC, Australia",
  },
  {
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Derek Thomson - McWay Falls, United States",
  },
  {
    src: "https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Michal Janek - Big Sur, United States",
  },
  {
    src: "https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Iris Papillon - Big Sur, United States",
  },
  {
    src: "https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by piyush dubey - Published on August 2, 2020",
  },
  {
    src: "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by fynn - Wasserauen, Appenzell Innerrhoden, Schweiz",
  },
  {
    src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Daniel Leone - Poon Hill, Ghode Pani, Nepal",
  },
  {
    src: "https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Boba Jovanovic - Bay of Kotor",
  },
  {
    src: "https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Surendra Vikram Singh - Lachung, Sikkim, India",
  },
  {
    src: "https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
    alt: "Photo by Cam Adams - Banff, Canada",
  },
  {
    src: "https://pic.netbian.com/uploads/allimg/241023/234955-17296985953e14.jpg",
    alt: "ces ",
  },
  {
    src: "https://pic.netbian.com/uploads/allimg/241023/231835-1729696715f4d7.jpg",
    alt: "ces",
  },
  {
    src: "https://pic.netbian.com/uploads/allimg/241020/235248-1729439568e63d.jpg",
    alt: "ces",
  },
  {
    src: "https://pic.netbian.com/uploads/allimg/241014/171403-1728897243c203.jpg",
    alt: "ces",
  },
  {
    src: "https://pic.netbian.com/uploads/allimg/240514/004624-1715618784f9c9.jpg",
    alt: "ces",
  },
  {
    src: "https://pic.netbian.com/uploads/allimg/240521/233805-17163058853baa.jpg",
    alt: "ces",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>
          <Header />
          <Main>
            <Gallery images={images} />
            {children}
          </Main>
        </NextUIProvider>
      </body>
    </html>
  );
}

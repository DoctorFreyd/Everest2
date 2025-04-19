'use client'
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import React, { Component } from "react";
import { Nav } from "./components/Nav";

import styles from "./styles/layout.module.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   metadataBase: new URL('https://everest.com'),
//   alternates: {
//     canonical: '/',
//     languages: {
//       'en-US': '/en-US',
//     },
//   },
//   title: "Everest",
//   description: "The best travel company that will help you create an unforgettable journey to every corner of the world ",
//   icons: {
//     icon: [
//       {
//         "url": "/everest.ico",
//         "sizes": "32x32",
//         "type": "image/x-icon"
//       }
//         ]
//   },
//   openGraph: {
//     title: "Everest",
//     description: "The best travel company that will help you create an unforgettable journey to every corner of the world ",
//     images: [
//       {
//         url: "/everest.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
            <div className='mydiv'>
                <Nav />
                <main className={styles.main}>{children}</main>
            </div>
        </body>
      </html>
    </Provider>
  );
}


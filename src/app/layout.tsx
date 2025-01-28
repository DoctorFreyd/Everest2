'use client'; // This should still be here
import "./globals.css";
import {Provider} from "react-redux";
import {store} from "@/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body>
         <Provider store={store}>
             {children}
         </Provider>
     </body>
    </html>
  );
}

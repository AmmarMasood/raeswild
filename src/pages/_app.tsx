import "@/styles/globals.scss";
import "antd/dist/reset.css";
import type { AppProps } from "next/app";
import { Raleway, Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}

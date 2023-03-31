import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.scss";

interface LayoutProps {
  title?: string;
  keywords?: string;
  description?: string;
  children?: any;
}
function Layout({ title, keywords, description, children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Navbar isLoggedIn={false} />
      <div className={styles["container"]}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Raeswild | Pet shop",
  keywords: "Raeswild pet shop pet shop dog food cat food",
  description: "Pet shop",
};
export default Layout;

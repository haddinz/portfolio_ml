import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";

function Layout({ children }: { children: React.ReactNode }) {
  const { state: location } = useLocation();
  const { targetID } = location || {}

  useEffect(() => {
    const goto = document.getElementById(targetID);
    const scrollIntoView = goto && goto.scrollIntoView({ behavior: "smooth" });

    return () => {
      scrollIntoView
    }
  },[targetID])

  return (
    <section className="flex flex-col justify-between min-h-[100vh] bg-gray-100">
      <Header />
      <main className="z-40">{children}</main>
      <Footer />
    </section>
  );
}

export default Layout;

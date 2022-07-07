import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../components/Contact";
import { Home } from "../components/Home";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Portfolio } from "../components/Portfolio";
import References from "../components/References";
import NotFound from "../components/NotFound";
export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="max-w-7xl mx-auto p-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/references" element={<References />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

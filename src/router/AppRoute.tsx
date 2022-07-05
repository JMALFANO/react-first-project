import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "../components/Contact";
import { Home } from "../components/Home";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Portfolio } from "../components/Portfolio";
import { Curriculum } from "../components/Curriculum";
export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Header />

      <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<span>La página ingresada no existe :(</span>} />
          </Routes>
          </div>
        </main>

      <Footer />
    </BrowserRouter>
  );
};

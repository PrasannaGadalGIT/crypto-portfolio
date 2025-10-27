"use client";

import HeroSection from "/components/HeroSection";
import HowItWorks from "/components/HowItWorks";
import DashboardSlide from "/components/DashboardSlide";
import ContactUs from "/components/ContactUs";
import Footer from "/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <DashboardSlide />
      <ContactUs />
      <Footer />
    </div>
  );
}

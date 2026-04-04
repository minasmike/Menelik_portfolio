import React from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutMe } from './components/sections/AboutMe';
import { TechStack } from './components/sections/TechStack';
import { WebProjects } from './components/sections/WebProjects';
import { DesignGallery } from './components/sections/DesignGallery';
import { Services } from './components/sections/Services';
import { ProvenImpact } from './components/sections/ProvenImpact';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { ClientTestimonials } from './components/sections/ClientTestimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-zinc-950 text-zinc-950 dark:text-white selection:bg-cyan-400 selection:text-black scroll-smooth">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <ProvenImpact />
        <TechStack />
        <WebProjects />
        <ProcessTimeline />
        <DesignGallery />
        <Services />
        <ClientTestimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { FeedbackForm } from './components/FeedbackForm';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

import { PortfolioDetailed } from './components/PortfolioDetailed';

function App() {
  const [view, setView] = React.useState<'home' | 'portfolio'>('home');

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-purple-100 selection:text-purple-900 scroll-smooth">
      <Toaster position="top-center" richColors />
      <Navbar onHome={() => setView('home')} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <Services />
            <Stats />
            <div id="portfolio">
              <Projects onViewAll={() => setView('portfolio')} />
            </div>
            <Testimonials />
            <FeedbackForm />
            <ContactInfo />
            <ContactForm />
          </>
        ) : (
          <PortfolioDetailed onBack={() => setView('home')} />
        )}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
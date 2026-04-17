/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';
import AboutTeam from './components/AboutTeam';
import ServicesList from './components/ServicesList';
import Testimonials from './components/Testimonials';
import AwaabsLaw from './components/AwaabsLaw';
import ServiceGrid from './components/ServiceGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBadges />
      <Features />
      <HowItWorks />
      <CallToAction />
      <FAQ />
      <AboutTeam />
      <ServicesList />
      <Testimonials />
      <AwaabsLaw />
      <ServiceGrid />
      <Footer />
    </div>
  );
}


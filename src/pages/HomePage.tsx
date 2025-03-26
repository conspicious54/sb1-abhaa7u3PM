import React from 'react';
import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { Team } from '../components/Team';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';

export function HomePage() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="brands">
        <Brands />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
    </main>
  );
}
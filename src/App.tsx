import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { AuditPage } from './pages/AuditPage';
import { QualificationPage } from './pages/QualificationPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/free-audit" element={<AuditPage />} />
            <Route path="/yourapplication" element={<QualificationPage />} />
            <Route path="*" element={<Navigate to="/\" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
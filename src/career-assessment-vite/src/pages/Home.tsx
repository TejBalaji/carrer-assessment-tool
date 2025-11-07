import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Career Assessment Tool</h1>
        <p className="mb-6">
          This tool helps you discover your skills, personality traits, and interests to guide you in your career path.
        </p>
        <Card>
          <h2 className="text-xl font-semibold mb-2">Get Started</h2>
          <p className="mb-4">Take the full assessment or a quick weekly check-in to track your progress.</p>
          <Button onClick={() => alert('Start Full Assessment')}>Start Full Assessment</Button>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
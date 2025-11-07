import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import FullAssessment from './components/assessment/FullAssessment';
import WeeklyAssessment from './components/assessment/WeeklyAssessment';
import ReviewPanel from './components/assessment/ReviewPanel';
import ResultCard from './components/assessment/ResultCard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/assessment/full" element={<FullAssessment />} />
            <Route path="/assessment/weekly" element={<WeeklyAssessment />} />
            <Route path="/assessment/review" element={<ReviewPanel />} />
            <Route path="/assessment/results" element={<ResultCard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Career Assessment Tool. All rights reserved.</p>
        <p className="text-sm">Designed for students to explore their career paths.</p>
      </div>
    </footer>
  );
};

export default Footer;
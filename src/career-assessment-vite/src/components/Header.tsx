import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <div className="text-lg font-bold">Career Assessment Tool</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
          <li><a href="/profile" className="hover:underline">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 bg-transparent">
      <div className="container mx-auto text-center">
        <p className="text-white">
          Made by{' '}
          <a
            href="https://github.com/Si1ex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Si1eX
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

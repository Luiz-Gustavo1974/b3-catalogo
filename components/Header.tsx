'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  'Assentos',
  'Mesas Corporativas',
  'Divisórias',
  'Armazenamentos',
  'Elementos Acústicos',
  'Cabines'
];

// Map display names to actual family names in data
const categoryMap: { [key: string]: string } = {
  'Assentos': 'Assentos',
  'Mesas Corporativas': 'Mesas',
  'Divisórias': 'Divisórias',
  'Armazenamentos': 'Armários',
  'Elementos Acústicos': 'Elementos Acústicos',
  'Cabines': 'Cabines'
};

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <h1>B3</h1>
        </Link>
        <nav className="nav">
          <div 
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="dropdown-button">
              Produtos
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/produtos/${encodeURIComponent(categoryMap[category])}`}
                    className="dropdown-item"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/catalogo" className="contact-button">
            Contato
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .header {
          background: #003399;
          color: white;
          padding: 20px 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          text-decoration: none;
          color: white;
        }
        
        .logo h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        
        .nav {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        
        .dropdown {
          position: relative;
        }
        
        .dropdown-button {
          background: none;
          border: none;
          color: white;
          font-size: 16px;
          font-weight: 400;
          cursor: pointer;
          padding: 8px 0;
          transition: opacity 0.2s;
        }
        
        .dropdown-button:hover {
          opacity: 0.8;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 8px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          min-width: 220px;
          padding: 8px 0;
          z-index: 1000;
        }
        
        .dropdown-item {
          display: block;
          padding: 12px 20px;
          color: #212121;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          transition: background-color 0.2s;
        }
        
        .dropdown-item:hover {
          background-color: #f7f7f7;
        }
        
        .contact-button {
          background: white;
          color: #003399;
          padding: 10px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 400;
          transition: background-color 0.2s;
        }
        
        .contact-button:hover {
          background-color: #f7f7f7;
        }
        
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            gap: 16px;
            padding: 0 16px;
          }
          
          .logo h1 {
            font-size: 24px;
          }
          
          .nav {
            gap: 16px;
            width: 100%;
            justify-content: center;
          }
          
          .dropdown-menu {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </header>
  );
}

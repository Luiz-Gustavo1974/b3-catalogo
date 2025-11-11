'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <h1>B3 Móveis</h1>
          <span>Catálogo Digital</span>
        </Link>
        <nav className="nav">
          <Link href="/catalogo">Buscar Produtos</Link>
        </nav>
      </div>
      <style jsx>{`
        .header {
          background: #1976d2;
          color: white;
          padding: 16px 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
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
          font-size: 24px;
          font-weight: 700;
        }
        
        .logo span {
          font-size: 14px;
          opacity: 0.9;
        }
        
        .nav {
          display: flex;
          gap: 24px;
        }
        
        .nav a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.2s;
        }
        
        .nav a:hover {
          opacity: 0.8;
        }
        
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
          
          .logo h1 {
            font-size: 20px;
          }
          
          .nav {
            gap: 16px;
          }
        }
      `}</style>
    </header>
  );
}

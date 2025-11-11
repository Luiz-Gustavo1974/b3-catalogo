'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} B3 Móveis. Todos os direitos reservados.</p>
        <p className="tagline">Móveis corporativos de qualidade para o seu negócio</p>
      </div>
      <style jsx>{`
        .footer {
          background: #212121;
          color: white;
          padding: 32px 0;
          margin-top: 64px;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          text-align: center;
        }
        
        .container p {
          margin: 8px 0;
        }
        
        .tagline {
          font-size: 14px;
          opacity: 0.7;
        }
      `}</style>
    </footer>
  );
}

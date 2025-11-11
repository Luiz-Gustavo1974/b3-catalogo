import Link from 'next/link';
import { families } from '@/lib/data';

export default function Home() {
  return (
    <div className="container">
      <h1 className="page-title">Catálogo Digital B3 Móveis</h1>
      <p className="page-subtitle">
        Explore nossa linha completa de móveis corporativos organizados por família de produtos
      </p>

      <div className="families-grid">
        {families.map((family) => (
          <Link 
            key={family} 
            href={`/produtos/${encodeURIComponent(family)}`}
            className="family-card"
          >
            {family}
          </Link>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Link href="/catalogo" className="btn btn-primary">
          Buscar Todos os Produtos
        </Link>
      </div>
    </div>
  );
}

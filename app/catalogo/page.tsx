'use client';

import { useState, useEffect } from 'react';
import { searchProducts } from '@/lib/data';
import { Product } from '@/lib/types';
import ProductCard from '@/components/ProductCard';

export default function CatalogoPage() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const results = searchProducts(query);
    setProducts(results);
    setIsLoading(false);
  }, [query]);

  return (
    <div className="container">
      <h1 className="page-title">Buscar Produtos</h1>
      <p className="page-subtitle">
        Encontre o móvel ideal para o seu espaço corporativo
      </p>

      <div style={{ marginBottom: '32px' }}>
        <input
          type="text"
          className="search-box"
          placeholder="Digite o nome, categoria ou família do produto..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {isLoading ? (
        <p>Carregando...</p>
      ) : products.length > 0 ? (
        <>
          <p style={{ color: '#757575', marginBottom: '16px' }}>
            {products.length} {products.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="empty-state">
          <h2>Nenhum produto encontrado</h2>
          <p>Tente usar outros termos de busca</p>
        </div>
      )}
    </div>
  );
}

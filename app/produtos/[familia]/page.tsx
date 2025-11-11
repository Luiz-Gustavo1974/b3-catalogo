'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getProductsByFamily } from '@/lib/data';
import { Product, ProductFamily } from '@/lib/types';
import ProductCard from '@/components/ProductCard';

const ITEMS_PER_PAGE = 6;

export default function ProdutosFamiliaPage() {
  const params = useParams();
  const familia = decodeURIComponent(params.familia as string) as ProductFamily;
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const familyProducts = getProductsByFamily(familia);
    setProducts(familyProducts);
    setFilteredProducts(familyProducts);
  }, [familia]);

  useEffect(() => {
    if (categoryFilter) {
      setFilteredProducts(products.filter(p => p.category === categoryFilter));
    } else {
      setFilteredProducts(products);
    }
    setCurrentPage(1);
  }, [categoryFilter, products]);

  const categories = Array.from(new Set(products.map(p => p.category)));
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="container">
      <nav style={{ marginTop: '16px', marginBottom: '24px' }}>
        <Link href="/" style={{ color: '#1976d2', textDecoration: 'none' }}>
          Início
        </Link>
        {' > '}
        <span>{familia}</span>
      </nav>

      <h1 className="page-title">{familia}</h1>
      <p className="page-subtitle">
        Explore nossa linha de {familia.toLowerCase()} para ambientes corporativos
      </p>

      {categories.length > 1 && (
        <div style={{ marginBottom: '24px' }}>
          <label style={{ fontWeight: 600, marginRight: '12px' }}>
            Filtrar por categoria:
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{
              padding: '8px 12px',
              fontSize: '14px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            <option value="">Todas as categorias</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <>
          <p style={{ color: '#757575', marginBottom: '16px' }}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'}
          </p>
          <div className="products-grid">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              <span>
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                Próxima
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <h2>Nenhum produto encontrado</h2>
          <p>Não há produtos disponíveis para esta categoria</p>
        </div>
      )}
    </div>
  );
}

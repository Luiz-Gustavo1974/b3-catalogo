'use client';

import Link from 'next/link';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/produto/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.photos[0]} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
      </div>
      <style jsx>{`
        .product-card {
          display: block;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          color: inherit;
          background: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
        }
        
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 51, 153, 0.15);
        }
        
        .product-image {
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: #f7f7f7;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 16px;
        }
        
        .product-info {
          padding: 20px;
          text-align: center;
        }
        
        .product-name {
          font-size: 18px;
          font-weight: 400;
          margin: 0;
          color: #212121;
          line-height: 1.4;
        }
        
        @media (max-width: 768px) {
          .product-image {
            height: 200px;
          }
          
          .product-name {
            font-size: 16px;
          }
          
          .product-info {
            padding: 16px;
          }
        }
      `}</style>
    </Link>
  );
}

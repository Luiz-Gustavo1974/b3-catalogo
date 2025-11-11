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
        <span className="product-family">{product.family}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
      </div>
      <style jsx>{`
        .product-card {
          display: block;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          color: inherit;
          background: white;
        }
        
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .product-image {
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: #f5f5f5;
        }
        
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .product-info {
          padding: 16px;
        }
        
        .product-family {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          color: #1976d2;
          background: #e3f2fd;
          padding: 4px 8px;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        
        .product-name {
          font-size: 18px;
          font-weight: 600;
          margin: 8px 0 4px 0;
          color: #212121;
        }
        
        .product-category {
          font-size: 14px;
          color: #757575;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .product-image {
            height: 200px;
          }
          
          .product-name {
            font-size: 16px;
          }
        }
      `}</style>
    </Link>
  );
}

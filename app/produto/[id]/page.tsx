'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getProductById } from '@/lib/data';
import { Product } from '@/lib/types';

export default function ProdutoPage() {
  const params = useParams();
  const id = params.id as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container">
        <div className="empty-state">
          <h2>Produto não encontrado</h2>
          <p>O produto que você está procurando não existe</p>
          <Link href="/" className="btn btn-primary" style={{ marginTop: '16px' }}>
            Voltar ao Início
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto: ${product.name} (${product.family} - ${product.category})`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleWhatsAppWithPhoto = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto: ${product.name} (${product.family} - ${product.category})\n\nFoto: ${product.photos[selectedPhoto]}`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="container">
      <nav style={{ marginTop: '16px', marginBottom: '24px' }}>
        <Link href="/" style={{ color: '#003399', textDecoration: 'none' }}>
          Início
        </Link>
        {' > '}
        <Link 
          href={`/produtos/${encodeURIComponent(product.family)}`}
          style={{ color: '#003399', textDecoration: 'none' }}
        >
          {product.family}
        </Link>
        {' > '}
        <span>{product.name}</span>
      </nav>

      <div className="product-detail">
        <div className="gallery">
          <div className="main-image">
            <img src={product.photos[selectedPhoto]} alt={product.name} />
          </div>
          {product.photos.length > 1 && (
            <div className="thumbnails">
              {product.photos.map((photo, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === selectedPhoto ? 'active' : ''}`}
                  onClick={() => setSelectedPhoto(index)}
                >
                  <img src={photo} alt={`${product.name} - foto ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-details">
          <span className="product-family-badge">{product.family}</span>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-category-text">{product.category}</p>
          
          <div className="product-description">
            <h2>Descrição</h2>
            <p>{product.description}</p>
          </div>

          <div className="whatsapp-buttons">
            <button onClick={handleWhatsApp} className="btn btn-success">
              <span style={{ marginRight: '8px' }}>💬</span>
              Consultar via WhatsApp
            </button>
            <button onClick={handleWhatsAppWithPhoto} className="btn btn-outline">
              <span style={{ marginRight: '8px' }}>📷</span>
              Enviar esta foto
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-detail {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin: 32px 0;
        }

        .gallery {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .main-image {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #f5f5f5;
          border-radius: 8px;
          overflow: hidden;
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnails {
          display: flex;
          gap: 12px;
          overflow-x: auto;
        }

        .thumbnail {
          width: 100px;
          height: 75px;
          border: 2px solid #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.2s;
          background: none;
          padding: 0;
        }

        .thumbnail:hover {
          border-color: #003399;
        }

        .thumbnail.active {
          border-color: #003399;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-details {
          display: flex;
          flex-direction: column;
        }

        .product-family-badge {
          display: inline-block;
          font-size: 14px;
          font-weight: 400;
          color: #003399;
          background: #f7f7f7;
          padding: 6px 12px;
          border-radius: 4px;
          margin-bottom: 16px;
          width: fit-content;
        }

        .product-title {
          font-size: 32px;
          font-weight: 400;
          color: #212121;
          margin: 0 0 8px 0;
        }

        .product-category-text {
          font-size: 18px;
          color: #757575;
          margin-bottom: 24px;
        }

        .product-description {
          margin-bottom: 32px;
        }

        .product-description h2 {
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 12px;
          color: #212121;
        }

        .product-description p {
          font-size: 16px;
          line-height: 1.6;
          color: #424242;
        }

        .whatsapp-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
        }

        @media (max-width: 768px) {
          .product-detail {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .product-title {
            font-size: 24px;
          }

          .product-category-text {
            font-size: 16px;
          }

          .thumbnail {
            width: 80px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
}

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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const nextPhoto = () => {
    if (product) {
      setSelectedPhoto((prev) => (prev + 1) % product.photos.length);
    }
  };

  const prevPhoto = () => {
    if (product) {
      setSelectedPhoto((prev) => (prev - 1 + product.photos.length) % product.photos.length);
    }
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight' && product) {
        setSelectedPhoto((prev) => (prev + 1) % product.photos.length);
      } else if (e.key === 'ArrowLeft' && product) {
        setSelectedPhoto((prev) => (prev - 1 + product.photos.length) % product.photos.length);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, product]);

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
      `Olá! Tenho interesse no produto: ${product.name} da categoria ${product.category}.`
    );
    window.open(`https://wa.me/5581999999999?text=${message}`, '_blank');
  };

  const handleWhatsAppWithPhoto = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto: ${product.name} da categoria ${product.category}.\n\nFoto: ${product.photos[selectedPhoto]}`
    );
    window.open(`https://wa.me/5581999999999?text=${message}`, '_blank');
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
          <div className="main-image-container">
            <div className="main-image" onClick={openLightbox}>
              <img 
                src={product.photos[selectedPhoto]} 
                alt={product.name}
                loading="lazy"
                decoding="async"
              />
            </div>
            {product.photos.length > 1 && (
              <>
                <button className="nav-arrow nav-arrow-left" onClick={prevPhoto} aria-label="Foto anterior">
                  ←
                </button>
                <button className="nav-arrow nav-arrow-right" onClick={nextPhoto} aria-label="Próxima foto">
                  →
                </button>
              </>
            )}
          </div>
          {product.photos.length > 1 && (
            <div className="thumbnails">
              {product.photos.map((photo, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === selectedPhoto ? 'active' : ''}`}
                  onClick={() => setSelectedPhoto(index)}
                >
                  <img 
                    src={photo} 
                    alt={`${product.name} - foto ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
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
              Falar com B3
            </button>
            <button onClick={handleWhatsAppWithPhoto} className="btn btn-outline">
              <span style={{ marginRight: '8px' }}>🖼️</span>
              Enviar esta foto via WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={product.photos[selectedPhoto]} 
              alt={product.name}
              loading="lazy"
              decoding="async"
            />
            {product.photos.length > 1 && (
              <>
                <button className="lightbox-arrow lightbox-arrow-left" onClick={prevPhoto}>
                  ←
                </button>
                <button className="lightbox-arrow lightbox-arrow-right" onClick={nextPhoto}>
                  →
                </button>
              </>
            )}
          </div>
          <div className="lightbox-counter">
            {selectedPhoto + 1} / {product.photos.length}
          </div>
        </div>
      )}

      <style jsx>{`
        .product-detail {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin: 32px 0;
          padding: 32px;
          background: white;
          border-radius: 12px;
        }

        .gallery {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .main-image-container {
          position: relative;
          width: 100%;
        }

        .main-image {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #f7f7f7;
          border-radius: 12px;
          overflow: hidden;
          cursor: zoom-in;
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 16px;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 51, 153, 0.9);
          color: white;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.2s ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .nav-arrow:hover {
          background: rgba(0, 51, 153, 1);
          transform: translateY(-50%) scale(1.05);
        }

        .nav-arrow-left {
          left: 16px;
        }

        .nav-arrow-right {
          right: 16px;
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
          color: #1a1a1a;
          margin: 0 0 8px 0;
        }

        .product-category-text {
          font-size: 18px;
          color: #616161;
          margin-bottom: 24px;
        }

        .product-description {
          margin-bottom: 32px;
          padding: 24px;
          background: #f7f7f7;
          border-radius: 8px;
        }

        .product-description h2 {
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .product-description p {
          font-size: 16px;
          line-height: 1.6;
          color: #3a3a3a;
        }

        .whatsapp-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: auto;
        }

        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: zoom-out;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          cursor: default;
        }

        .lightbox-content img {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
        }

        .lightbox-close {
          position: fixed;
          top: 24px;
          right: 24px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          transition: background 0.2s;
          z-index: 10000;
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .lightbox-arrow {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          font-size: 32px;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-arrow:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .lightbox-arrow-left {
          left: 24px;
        }

        .lightbox-arrow-right {
          right: 24px;
        }

        .lightbox-counter {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 12px 24px;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .product-detail {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 20px;
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

          .nav-arrow {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .nav-arrow-left {
            left: 8px;
          }

          .nav-arrow-right {
            right: 8px;
          }

          .lightbox-arrow {
            width: 48px;
            height: 48px;
            font-size: 24px;
          }

          .lightbox-arrow-left {
            left: 12px;
          }

          .lightbox-arrow-right {
            right: 12px;
          }

          .lightbox-close {
            top: 16px;
            right: 16px;
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .product-description {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}

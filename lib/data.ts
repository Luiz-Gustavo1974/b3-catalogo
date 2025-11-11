import { Product, ProductFamily } from './types';
import { getCached, setCache } from './cache';

export const products: Product[] = [
  // Assentos
  {
    id: 'assento-1',
    name: 'Cadeira Executiva Premium',
    family: 'Assentos',
    category: 'Cadeira Executiva',
    description: 'Cadeira executiva premium com apoio lombar ergonômico, ajuste de altura pneumático e braços reguláveis em 4D. Revestimento em couro sintético de alta qualidade.',
    photos: ['https://placehold.co/600x400/e3f2fd/1976d2?text=Cadeira+Executiva+1', 'https://placehold.co/600x400/e3f2fd/1976d2?text=Cadeira+Executiva+2', 'https://placehold.co/600x400/e3f2fd/1976d2?text=Cadeira+Executiva+3']
  },
  {
    id: 'assento-2',
    name: 'Cadeira Operacional Confort',
    family: 'Assentos',
    category: 'Cadeira Operacional',
    description: 'Cadeira operacional com encosto em tela respirável, sistema sincronizado e ajuste de tensão. Ideal para uso prolongado no dia a dia.',
    photos: ['https://placehold.co/600x400/e3f2fd/1976d2?text=Cadeira+Operacional+1', 'https://placehold.co/600x400/e3f2fd/1976d2?text=Cadeira+Operacional+2']
  },
  {
    id: 'assento-3',
    name: 'Poltrona Presidente Luxury',
    family: 'Assentos',
    category: 'Poltrona Presidente',
    description: 'Poltrona presidente em couro legítimo com acabamento em madeira nobre. Sistema reclinável e apoio para os pés integrado.',
    photos: ['https://placehold.co/600x400/e3f2fd/1976d2?text=Poltrona+Presidente+1', 'https://placehold.co/600x400/e3f2fd/1976d2?text=Poltrona+Presidente+2', 'https://placehold.co/600x400/e3f2fd/1976d2?text=Poltrona+Presidente+3', 'https://placehold.co/600x400/e3f2fd/1976d2?text=Poltrona+Presidente+4']
  },
  {
    id: 'assento-4',
    name: 'Banqueta Alta Design',
    family: 'Assentos',
    category: 'Banqueta',
    description: 'Banqueta alta com design moderno e apoio para os pés em aço inox. Perfeita para ambientes de coworking e cafeterias corporativas.',
    photos: ['https://placehold.co/600x400/e3f2fd/1976d2?text=Banqueta+1', 'https://placehold.co/600x400/e3f2fd/1976d2?text=Banqueta+2']
  },

  // Mesas
  {
    id: 'mesa-1',
    name: 'Mesa Executiva Elegance',
    family: 'Mesas',
    category: 'Mesa Executiva',
    description: 'Mesa executiva em L com tampo de 25mm, acabamento em laminado melamínico e estrutura metálica. Inclui gaveteiro volante e passagem de cabos.',
    photos: ['https://placehold.co/600x400/fff3e0/ff6f00?text=Mesa+Executiva+1', 'https://placehold.co/600x400/fff3e0/ff6f00?text=Mesa+Executiva+2', 'https://placehold.co/600x400/fff3e0/ff6f00?text=Mesa+Executiva+3']
  },
  {
    id: 'mesa-2',
    name: 'Mesa Reunião Oval',
    family: 'Mesas',
    category: 'Mesa de Reunião',
    description: 'Mesa de reunião oval para 8 pessoas com sistema de eletrificação integrado. Tampo em MDF com acabamento premium e base metálica cromada.',
    photos: ['https://placehold.co/600x400/fff3e0/ff6f00?text=Mesa+Reuniao+1', 'https://placehold.co/600x400/fff3e0/ff6f00?text=Mesa+Reuniao+2']
  },
  {
    id: 'mesa-3',
    name: 'Mesa Colaborativa Flex',
    family: 'Mesas',
    category: 'Mesa Colaborativa',
    description: 'Mesa colaborativa retangular para 6 pessoas com tampo dobrável e rodízios. Fácil movimentação e armazenamento.',
    photos: ['https://placehold.co/600x400/fff3e0/ff6f00?text=Mesa+Colaborativa+1', 'https://placehold.co/600x400/fff3e0/ff6f00?text=Mesa+Colaborativa+2', 'https://placehold.co/600x400/fff3e0/ff6f00?text=Mesa+Colaborativa+3']
  },
  {
    id: 'mesa-4',
    name: 'Mesa Centro Office',
    family: 'Mesas',
    category: 'Mesa de Centro',
    description: 'Mesa de centro quadrada com tampo de vidro temperado e estrutura em aço pintado. Ideal para salas de espera e recepção.',
    photos: ['https://placehold.co/600x400/fff3e0/ff6f00?text=Mesa+Centro+1']
  },

  // Estações
  {
    id: 'estacao-1',
    name: 'Estação de Trabalho Linear 4 Lugares',
    family: 'Estações',
    category: 'Estação Linear',
    description: 'Estação de trabalho linear para 4 colaboradores com divisórias em vidro temperado, calhas para fiação e gaveteiros individuais.',
    photos: ['https://placehold.co/600x400/e8f5e9/388e3c?text=Estacao+Linear+1', 'https://placehold.co/600x400/e8f5e9/388e3c?text=Estacao+Linear+2', 'https://placehold.co/600x400/e8f5e9/388e3c?text=Estacao+Linear+3']
  },
  {
    id: 'estacao-2',
    name: 'Estação Operacional Modular',
    family: 'Estações',
    category: 'Estação Modular',
    description: 'Sistema modular de estações de trabalho configurável para 2, 4 ou 6 posições. Inclui painéis acústicos e suporte para monitor.',
    photos: ['https://placehold.co/600x400/e8f5e9/388e3c?text=Estacao+Modular+1', 'https://placehold.co/600x400/e8f5e9/388e3c?text=Estacao+Modular+2']
  },
  {
    id: 'estacao-3',
    name: 'Estação Call Center Compact',
    family: 'Estações',
    category: 'Estação Call Center',
    description: 'Estação compacta para call center com painel frontal personalizado, suporte para headset e porta-documentos integrado.',
    photos: ['https://placehold.co/600x400/e8f5e9/388e3c?text=Estacao+Call+1', 'https://placehold.co/600x400/e8f5e9/388e3c?text=Estacao+Call+2', 'https://placehold.co/600x400/e8f5e9/388e3c?text=Estacao+Call+3']
  },

  // Armários
  {
    id: 'armario-1',
    name: 'Armário Alto com Portas',
    family: 'Armários',
    category: 'Armário Alto',
    description: 'Armário alto de 1,80m com 4 prateleiras reguláveis e portas de abrir. Acabamento em laminado melamínico e fechadura com chave.',
    photos: ['https://placehold.co/600x400/fce4ec/c2185b?text=Armario+Alto+1', 'https://placehold.co/600x400/fce4ec/c2185b?text=Armario+Alto+2']
  },
  {
    id: 'armario-2',
    name: 'Armário Baixo Credenza',
    family: 'Armários',
    category: 'Armário Baixo',
    description: 'Credenza baixa de 0,74m de altura com portas de correr e prateleira interna. Tampo superior para apoio de objetos decorativos.',
    photos: ['https://placehold.co/600x400/fce4ec/c2185b?text=Armario+Baixo+1', 'https://placehold.co/600x400/fce4ec/c2185b?text=Armario+Baixo+2', 'https://placehold.co/600x400/fce4ec/c2185b?text=Armario+Baixo+3']
  },
  {
    id: 'armario-3',
    name: 'Gaveteiro Volante Móvel',
    family: 'Armários',
    category: 'Gaveteiro',
    description: 'Gaveteiro volante com 3 gavetas, sendo uma para pasta suspensa. Estrutura em aço com rodízios e sistema de travamento.',
    photos: ['https://placehold.co/600x400/fce4ec/c2185b?text=Gaveteiro+1', 'https://placehold.co/600x400/fce4ec/c2185b?text=Gaveteiro+2']
  },
  {
    id: 'armario-4',
    name: 'Estante Aberta Modular',
    family: 'Armários',
    category: 'Estante',
    description: 'Estante aberta modular de 5 prateleiras com laterais e fundo em MDF. Sistema de encaixe para composições diversas.',
    photos: ['https://placehold.co/600x400/fce4ec/c2185b?text=Estante+1']
  },

  // Acessórios
  {
    id: 'acessorio-1',
    name: 'Suporte Monitor Articulado',
    family: 'Acessórios',
    category: 'Suporte Monitor',
    description: 'Braço articulado para monitor de 13" a 32" com ajuste de altura, rotação 360° e inclinação. Fixação por grampo ou furo.',
    photos: ['https://placehold.co/600x400/f3e5f5/7b1fa2?text=Suporte+Monitor+1', 'https://placehold.co/600x400/f3e5f5/7b1fa2?text=Suporte+Monitor+2']
  },
  {
    id: 'acessorio-2',
    name: 'Organizador de Cabos Horizontal',
    family: 'Acessórios',
    category: 'Gerenciamento Cabos',
    description: 'Calha horizontal para organização de cabos em estações de trabalho. Instalação sob o tampo com sistema de click.',
    photos: ['https://placehold.co/600x400/f3e5f5/7b1fa2?text=Organizador+Cabos+1']
  },
  {
    id: 'acessorio-3',
    name: 'Apoio para Pés Ergonômico',
    family: 'Acessórios',
    category: 'Ergonomia',
    description: 'Apoio para pés com superfície antiderrapante e regulagem de ângulo. Auxilia na postura correta durante o trabalho.',
    photos: ['https://placehold.co/600x400/f3e5f5/7b1fa2?text=Apoio+Pes+1', 'https://placehold.co/600x400/f3e5f5/7b1fa2?text=Apoio+Pes+2']
  },
  {
    id: 'acessorio-4',
    name: 'Luminária LED de Mesa',
    family: 'Acessórios',
    category: 'Iluminação',
    description: 'Luminária LED de mesa com temperatura de cor ajustável (3000K a 6000K), braço articulado e entrada USB para carregamento.',
    photos: ['https://placehold.co/600x400/f3e5f5/7b1fa2?text=Luminaria+1', 'https://placehold.co/600x400/f3e5f5/7b1fa2?text=Luminaria+2']
  },

  // Divisórias
  {
    id: 'divisoria-1',
    name: 'Divisória Piso-Teto Eucatex',
    family: 'Divisórias',
    category: 'Divisória Piso-Teto',
    description: 'Sistema de divisórias piso-teto em Eucatex Naval 10mm com perfis de alumínio anodizado. Altura até 3,00m com porta de abrir.',
    photos: ['https://placehold.co/600x400/ede7f6/512da8?text=Divisoria+Piso+1', 'https://placehold.co/600x400/ede7f6/512da8?text=Divisoria+Piso+2', 'https://placehold.co/600x400/ede7f6/512da8?text=Divisoria+Piso+3']
  },
  {
    id: 'divisoria-2',
    name: 'Painel Divisor de Vidro',
    family: 'Divisórias',
    category: 'Painel Vidro',
    description: 'Painel divisor em vidro temperado 8mm com perfil de alumínio. Fixação entre pisos ou em estrutura independente.',
    photos: ['https://placehold.co/600x400/ede7f6/512da8?text=Painel+Vidro+1', 'https://placehold.co/600x400/ede7f6/512da8?text=Painel+Vidro+2']
  },
  {
    id: 'divisoria-3',
    name: 'Biombo Móvel Dupla Face',
    family: 'Divisórias',
    category: 'Biombo',
    description: 'Biombo móvel de 1,60m de altura com rodízios e sistema de travamento. Revestimento acústico em ambas as faces.',
    photos: ['https://placehold.co/600x400/ede7f6/512da8?text=Biombo+1']
  },

  // Elementos Acústicos
  {
    id: 'acustico-1',
    name: 'Painel Acústico Parede',
    family: 'Elementos Acústicos',
    category: 'Painel de Parede',
    description: 'Painel acústico de parede 60x60cm em fibra de poliéster com coeficiente de absorção NRC 0,85. Disponível em diversas cores.',
    photos: ['https://placehold.co/600x400/e0f2f1/00796b?text=Painel+Acustico+1', 'https://placehold.co/600x400/e0f2f1/00796b?text=Painel+Acustico+2']
  },
  {
    id: 'acustico-2',
    name: 'Absorvedor Acústico de Teto',
    family: 'Elementos Acústicos',
    category: 'Absorvedor Teto',
    description: 'Nuvem acústica suspensa para teto com sistema de fixação por cabos de aço. Formato circular de 120cm de diâmetro.',
    photos: ['https://placehold.co/600x400/e0f2f1/00796b?text=Absorvedor+Teto+1', 'https://placehold.co/600x400/e0f2f1/00796b?text=Absorvedor+Teto+2', 'https://placehold.co/600x400/e0f2f1/00796b?text=Absorvedor+Teto+3']
  },
  {
    id: 'acustico-3',
    name: 'Tela Acústica Desktop',
    family: 'Elementos Acústicos',
    category: 'Tela Desktop',
    description: 'Tela acústica para instalação em estações de trabalho com fixação por grampo. Reduz ruído entre posições adjacentes.',
    photos: ['https://placehold.co/600x400/e0f2f1/00796b?text=Tela+Desktop+1', 'https://placehold.co/600x400/e0f2f1/00796b?text=Tela+Desktop+2']
  },

  // Cabines
  {
    id: 'cabine-1',
    name: 'Cabine Telefônica Individual',
    family: 'Cabines',
    category: 'Cabine Individual',
    description: 'Cabine acústica individual para chamadas telefônicas e videoconferências. Tratamento acústico completo, ventilação forçada e iluminação LED.',
    photos: ['https://placehold.co/600x400/e1f5fe/0277bd?text=Cabine+Individual+1', 'https://placehold.co/600x400/e1f5fe/0277bd?text=Cabine+Individual+2', 'https://placehold.co/600x400/e1f5fe/0277bd?text=Cabine+Individual+3']
  },
  {
    id: 'cabine-2',
    name: 'Cabine Reunião 4 Pessoas',
    family: 'Cabines',
    category: 'Cabine Reunião',
    description: 'Cabine acústica para reuniões de até 4 pessoas com mesa integrada, sistema de videoconferência e quadro branco.',
    photos: ['https://placehold.co/600x400/e1f5fe/0277bd?text=Cabine+Reuniao+1', 'https://placehold.co/600x400/e1f5fe/0277bd?text=Cabine+Reuniao+2', 'https://placehold.co/600x400/e1f5fe/0277bd?text=Cabine+Reuniao+3', 'https://placehold.co/600x400/e1f5fe/0277bd?text=Cabine+Reuniao+4']
  },
  {
    id: 'cabine-3',
    name: 'Pod de Foco Work',
    family: 'Cabines',
    category: 'Pod Trabalho',
    description: 'Pod de trabalho individual com mesa dobrável, tomadas e entrada USB. Ideal para trabalho focado e concentrado.',
    photos: ['https://placehold.co/600x400/e1f5fe/0277bd?text=Pod+Foco+1', 'https://placehold.co/600x400/e1f5fe/0277bd?text=Pod+Foco+2']
  }
];

export const families: ProductFamily[] = [
  'Assentos',
  'Mesas',
  'Estações',
  'Armários',
  'Acessórios',
  'Divisórias',
  'Elementos Acústicos',
  'Cabines'
];

export function getProductsByFamily(family: ProductFamily): Product[] {
  const cacheKey = `family:${family}`;
  const cached = getCached<Product[]>(cacheKey);
  if (cached) return cached;
  
  const result = products.filter(p => p.family === family);
  setCache(cacheKey, result);
  return result;
}

export function getProductById(id: string): Product | undefined {
  const cacheKey = `product:${id}`;
  const cached = getCached<Product | undefined>(cacheKey);
  if (cached !== null) return cached;
  
  const result = products.find(p => p.id === id);
  setCache(cacheKey, result);
  return result;
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return products;
  
  const cacheKey = `search:${lowerQuery}`;
  const cached = getCached<Product[]>(cacheKey);
  if (cached) return cached;
  
  const result = products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.family.toLowerCase().includes(lowerQuery)
  );
  setCache(cacheKey, result);
  return result;
}

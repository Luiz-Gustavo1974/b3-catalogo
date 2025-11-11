export type ProductFamily = 
  | 'Assentos' 
  | 'Mesas' 
  | 'Estações' 
  | 'Armários' 
  | 'Acessórios' 
  | 'Divisórias' 
  | 'Elementos Acústicos' 
  | 'Cabines';

export interface Product {
  id: string;
  name: string;
  family: ProductFamily;
  category: string;
  description: string;
  photos: string[];
}

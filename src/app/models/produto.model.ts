// src/app/models/produto.model.ts
export interface Produto {
  id: number; // ID do produto
  title: string; // Nome do produto
  price: number; // Preço do produto
  description: string; // Descrição opcional
  category: string; // Categoria do produto
  // Você pode adicionar mais campos conforme necessário
  showDescription?: boolean;
}

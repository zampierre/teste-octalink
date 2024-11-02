import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './models/produto.model'; // Ajuste o caminho conforme necessário

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(produtos: Produto[], searchTerm: string): Produto[] {
    if (!produtos || !searchTerm) {
      return produtos;
    }

    const term = searchTerm.toLowerCase(); // Converte o termo de pesquisa para minúsculas
    return produtos.filter(
      (produto) =>
        produto.title.toLowerCase().includes(term) ||
        produto.description.toLowerCase().includes(term) ||
        produto.category.toLowerCase().includes(term) ||
        produto.price.toString().includes(term) // Verifica o preço como string
    );
  }
}

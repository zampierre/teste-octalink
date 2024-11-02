import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos/produtos.service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
})
export class ListarProdutosComponent implements OnInit {
  produtos: Produto[] = []; // Inicialize como um array vazio
  searchTerm: string = ''; // Adicione esta linha para a pesquisa

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtosService.listarProdutos().subscribe({
      next: (produtos: Produto[]) => {
        // Inicializa a propriedade showDescription
        this.produtos = produtos.map((produto) => ({
          ...produto,
          showDescription: false, // Inicializa a propriedade para controle do dropdown
        }));
      },
      error: (err: any) => {
        console.error('Erro ao listar produtos:', err); // Exiba erro no console
      },
    });
  }

  editarProduto(id: number): void {
    // Lógica para editar produto
  }

  deletarProduto(id: number): void {
    // Lógica para deletar produto
  }
}

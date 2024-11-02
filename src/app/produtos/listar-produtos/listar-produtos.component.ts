// src/app/produtos/listar-produtos/listar-produtos.component.ts
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

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtosService.listarProdutos().subscribe({
      next: (produtos: Produto[]) => {
        this.produtos = produtos; // Atribua a resposta ao array de produtos
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

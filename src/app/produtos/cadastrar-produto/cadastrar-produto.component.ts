import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos/produtos.service';
import { Produto } from '../../models/produto.model';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css'],
})
export class CadastrarProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  searchTerm: string = '';
  displayedColumns: string[] = ['toggle', 'title', 'category', 'price'];
  currentProduto: Produto = {
    id: 0,
    title: '',
    category: '',
    price: 0,
    description: '',
  };

  private searchSubject = new Subject<string>();

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.listarProdutos();

    // Escutar as mudanças na busca
    this.searchSubject
      .pipe(
        debounceTime(300),
        switchMap((query) => this.produtosService.pesquisarProduto(query))
      )
      .subscribe((response: any) => {
        if (response && Array.isArray(response.products)) {
          this.produtos = response.products; // Atualiza a lista de produtos com o array
        } else {
          console.error(
            'Resposta da pesquisa não contém um array de produtos:',
            response
          );
          this.produtos = []; // Limpa os produtos caso a resposta não seja válida
        }
      });
  }

  listarProdutos(): void {
    this.produtosService.listarProdutos().subscribe({
      next: (produtos: Produto[]) => {
        this.produtos = produtos.map((produto) => ({
          ...produto,
          showDescription: false,
        }));
      },
      error: (err: any) => {
        console.error('Erro ao listar produtos:', err);
      },
    });
  }

  onSearchChange(): void {
    this.searchSubject.next(this.searchTerm); // Emite o novo valor de pesquisa
  }

  salvarProduto(): void {
    if (this.currentProduto.id) {
      this.produtosService
        .atualizarProduto(this.currentProduto.id, this.currentProduto)
        .subscribe({
          next: () => {
            this.listarProdutos();
            this.limparFormulario();
          },
          error: (err: any) => console.error('Erro ao atualizar produto:', err),
        });
    } else {
      this.produtosService.cadastrarProduto(this.currentProduto).subscribe({
        next: () => {
          this.listarProdutos();
          this.limparFormulario();
        },
        error: (err: any) => console.error('Erro ao cadastrar produto:', err),
      });
    }
  }

  editarProduto(produto: Produto): void {
    this.currentProduto = { ...produto };
  }

  deletarProduto(id: number): void {
    this.produtosService.deletarProduto(id).subscribe({
      next: () => {
        this.listarProdutos();
      },
      error: (err: any) => console.error('Erro ao deletar produto:', err),
    });
  }

  limparFormulario(): void {
    this.currentProduto = {
      id: 0,
      title: '',
      category: '',
      price: 0,
      description: '',
    };
  }
}

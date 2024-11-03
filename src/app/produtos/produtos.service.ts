// src/app/services/produtos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private apiURL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<{ products: Produto[] }>(this.apiURL).pipe(
      map((response) => response.products) // Mapeia a resposta para pegar apenas o array de produtos
    );
  }

  cadastrarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiURL}/add`, produto);
  }

  atualizarProduto(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiURL}/${id}`, produto);
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  pesquisarProduto(query: string): Observable<any> {
    return this.http.get(`${this.apiURL}/search?q=${query}`);
  }
}

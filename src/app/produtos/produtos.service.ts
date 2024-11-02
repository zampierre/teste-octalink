// src/app/services/produtos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Certifique-se de importar 'map'
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

  cadastrarProduto(produto: any): Observable<any> {
    return this.http.post(`${this.apiURL}/add`, produto);
  }

  atualizarProduto(id: number, produto: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, produto);
  }

  deletarProduto(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  pesquisarProduto(query: string): Observable<any> {
    return this.http.get(`${this.apiURL}/search?q=${query}`);
  }
}

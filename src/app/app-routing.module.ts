import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './produtos/cadastrar-produto/cadastrar-produto.component';
import { PesquisarProdutoComponent } from './produtos/pesquisar-produto/pesquisar-produto.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'produtos', component: ListarProdutosComponent },
  { path: 'produtos/criar', component: CadastrarProdutoComponent },
  { path: 'produtos/pesquisar', component: PesquisarProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

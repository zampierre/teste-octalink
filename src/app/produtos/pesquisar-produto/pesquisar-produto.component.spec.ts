import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarProdutoComponent } from './pesquisar-produto.component';

describe('PesquisarProdutoComponent', () => {
  let component: PesquisarProdutoComponent;
  let fixture: ComponentFixture<PesquisarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../shared/model/produto';
import { ProdutoService } from '../../../shared/servico/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  ngOnInit(): void {}
  produtos: Produto[];
  constructor(private ProdutoService: ProdutoService) {
    this.produtos = new Array<Produto>();
  }
}

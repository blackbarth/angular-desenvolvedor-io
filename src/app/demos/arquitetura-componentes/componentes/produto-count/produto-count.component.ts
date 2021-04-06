import {Component, Input, OnInit} from '@angular/core';
import {Produto} from "../../Models/produto";

@Component({
  selector: 'app-produto-count',
  templateUrl: './produto-count.component.html',
  styleUrls: ['./produto-count.component.css']
})
export class ProdutoCountComponent implements OnInit {

  @Input()
  produtos: Produto[];


  constructor() { }

  ngOnInit(): void {
  }

  contadorAtivos(): number{
    if(!this.produtos) return ;

    return this.produtos.filter((produto: Produto)=> produto.ativo).length;
  }

}

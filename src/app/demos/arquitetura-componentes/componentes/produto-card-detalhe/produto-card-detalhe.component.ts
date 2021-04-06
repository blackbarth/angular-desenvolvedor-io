import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Produto} from "../../Models/produto";
import {providerDef} from "@angular/compiler/src/view_compiler/provider_compiler";

@Component({
  selector: 'app-produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  styleUrls: ['./produto-card-detalhe.component.css']
})
export class ProdutoCardDetalheComponent implements OnInit {

  @Input()
  produto: Produto


  @Output()
  status: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  emitirEvento() {
    this.status.emit(this.produto);
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Produto} from '../models/produto';
import {ProdutoService} from "../services/produto.service";

@Component({
    selector: 'app-editar-produto',
    templateUrl: './editar-produto.component.html',
    styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
    produto: Produto;

    constructor(
        private route: ActivatedRoute,
        private produtoService: ProdutoService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.produto = this.produtoService.obterPorId(params['id'])
        })
    }

    salvar() {
//fazer comunicacao com backend

        this.router.navigate(['/produtos'])
        //this.router.navigateByUrl('/produtos'); // é como se voce tiversse carregado o site pela url ele recarrega o site
    }
}

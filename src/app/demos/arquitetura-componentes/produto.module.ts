import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './componentes/produto-count/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import {ProdutoAppComponent} from "./produto.app.component";
import {ProdutoService} from "./services/produto.service";

@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent,
        ProdutoCountComponent,
        EditarProdutoComponent,

    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    providers:[
        ProdutoService
    ],
    exports: []
})
export class ProdutoModule { }

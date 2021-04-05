import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ProdutoDashboardComponent} from "./produto-dashboard/produto-dashboard.component";

@NgModule({
    declarations:[
        ProdutoDashboardComponent
    ],
    imports:[
        CommonModule,
    ],
    exports:[]
})
export class ProdutoModule{};

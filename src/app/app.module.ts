import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {SobreComponent} from "./institucional/sobre/sobre.component";
import {ContatoComponent} from "./institucional/contato/contato.component";
import {CadastroComponent} from "./demos/reactiveforms/cadastro/cadastro.component";
import {NgBrazil} from "ng-brazil";
import {TextMaskModule} from "angular2-text-mask";
import {CustomFormsModule} from "ng2-validation";
import {NavegacaoModule} from "./navegacao/navegacao.module";
import {AppRoutingModule} from "./app.routes";
import {ProdutoDashboardComponent} from './demos/arquitetura-componentes/produto-dashboard/produto-dashboard.component';
import {AdminModule} from "./admin/admin.module";
import {AuthGuard} from "./services/app.guard";

@NgModule({
    declarations: [
        AppComponent,
        SobreComponent,
        ContatoComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgBrazil,
        TextMaskModule,
        CustomFormsModule,
        AppRoutingModule,
        NavegacaoModule,
        AdminModule
    ],
    providers: [
        // { provide: APP_BASE_HREF, useValue: "/" } // retiramos daqui e inserimos tag <base href="/"> no arquivo index
        AuthGuard

    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}

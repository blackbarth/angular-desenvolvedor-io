import {BrowserModule} from "@angular/platform-browser";
import {NgModule, Provider} from "@angular/core";
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

import {FilmesComponent} from "./demos/pipes/filmes/filmes.component";
import {ImageFormaterPipe} from "./demos/pipes/filmes/image.pipe";

import {AuthGuard} from "./services/app.guard";
import {CadastroGuard} from "./services/cadastro.guard";

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {FileSizePipe} from "./demos/pipes/filmes/filesize.pipe";
import {BarModule} from "./demos/bar-di-zones/bar.module";
import {BarServices, BarServicesMock} from "./demos/bar-di-zones/bar.service";
registerLocaleData(localePt);

export const BAR_PROVIDERS: Provider[]=[
    BarServices
];



@NgModule({
    declarations: [
        AppComponent,
        SobreComponent,
        ContatoComponent,
        FilmesComponent,
        ImageFormaterPipe,
        FileSizePipe,
        CadastroComponent,


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
        AdminModule,
        BarModule,
    ],
    providers: [
        // { provide: APP_BASE_HREF, useValue: "/" } // retiramos daqui e inserimos tag <base href="/"> no arquivo index
        AuthGuard,
        CadastroGuard,
       // BAR_PROVIDERS

    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}

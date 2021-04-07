import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./navegacao/home/home.component";
import {ContatoComponent} from "./institucional/contato/contato.component";
import {SobreComponent} from "./institucional/sobre/sobre.component";
import {CadastroComponent} from "./demos/reactiveforms/cadastro/cadastro.component";
import {NotFoundComponent} from "./navegacao/not-found/not-found.component";
import {AuthGuard} from "./services/app.guard";
import {CadastroGuard} from "./services/cadastro.guard";

const rootRouterConfig: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "contato", component: ContatoComponent},
    {path: "sobre", component: SobreComponent},
    {path: "cadastro", component: CadastroComponent, canDeactivate: [CadastroGuard]},
    {
        path: "produtos",
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)
    },

    {
        path: "admin",
        loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
    },
    //sempre ficar por ultimo
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, {enableTracing: false}) //ativando tracing route
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {
};

import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { CadastroComponent } from "./demos/reactiveforms/cadastro/cadastro.component";

const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contato", component: ContatoComponent },
  { path: "sobre", component: SobreComponent },
  { path: "cadastro", component: CadastroComponent },
];
@NgModule({
  imports:[
      RouterModule.forRoot(rootRouterConfig)
  ],
  exports:[
      RouterModule
  ]

})
export class AppRoutingModule{};

import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styles: [],
})
export class CadastroComponent implements OnInit {
  cadastroForm = new FormGroup({
    nome: new FormControl(""),
    cpf: new FormControl(""),
    email: new FormControl(""),
    senha: new FormControl(""),
    confimarsenha: new FormControl(""),
  });
  constructor() {}

  ngOnInit(): void {}

  adicionarUsuario() {
    let x = this.cadastroForm.value;
    console.warn(this.cadastroForm.value);
  }
}

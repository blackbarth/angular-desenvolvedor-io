import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styles: [],
})
export class CadastroComponent implements OnInit {
  cadastroForm = this.fb.group({
    nome: [""],
    cpf: [""],
    email: [""],
    senha: [""],
    confimarsenha: [""],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  adicionarUsuario() {
    let x = this.cadastroForm.value;
    console.warn(this.cadastroForm.value);
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Usuario } from "src/app/Model/usuario";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styles: [],
})
export class CadastroComponent implements OnInit {
  usuario: Usuario;

  cadastroForm = this.fb.group({
    nome: ["", Validators.required],
    cpf: [""],
    email: [""],
    senha: [""],
    confimarsenha: [""],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  adicionarUsuario() {
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
  }
}

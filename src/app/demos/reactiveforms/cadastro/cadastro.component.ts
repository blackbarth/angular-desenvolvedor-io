import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Usuario } from "src/app/Model/usuario";
import { MASKS, NgBrazilValidators } from "ng-brazil";
import { CustomValidators } from "ng2-validation";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styles: [],
})
export class CadastroComponent implements OnInit {
  senha = new FormControl("", [
    Validators.required,
    CustomValidators.rangeLength([6, 15]),
  ]);
  confimarsenha = new FormControl("", [
    Validators.required,
    CustomValidators.rangeLength([6, 15]),
    CustomValidators.equalTo(this.senha),
  ]);
  public MASKS = MASKS;
  usuario: Usuario;
  formResult: string = "";

  cadastroForm = this.fb.group({
    nome: [
      "",
      [Validators.required, Validators.minLength(2), Validators.maxLength(150)],
    ],
    cpf: ["", [Validators.required, NgBrazilValidators.cpf]],
    email: ["", [Validators.required, Validators.email]],
    senha: this.senha,
    confimarsenha: this.confimarsenha,
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }
  }
}

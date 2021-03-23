import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormControlName,
  Validators,
} from "@angular/forms";
import { Usuario } from "src/app/Model/usuario";
import { MASKS, NgBrazilValidators } from "ng-brazil";
import { CustomValidators } from "ng2-validation";
import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from "./generic-form-validation";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styles: [],
})
export class CadastroComponent implements OnInit, AfterViewInit {
  //implementaçao importante para ser observada
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

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
  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: "Nome é de preenchimento obrigatorio",
        minLength: "Minimo 2 caracteres",
        maxLength: "Maximo 15 Caracteres",
      },
      cpf: {
        required: "Informe o CPF",
        cpf: "CPF em formato inválido",
      },
      email: {
        required: "Informe e-mail",
        email: "E-mail inválido",
      },
      senha: {
        required: "Informe senha",
        rangeLength: "A senha deve possuir entre 6 e 15 caracteres",
      },
      confimarsenha: {
        required: "Informe senha",
        rangeLength: "A senha deve possuir entre 6 e 15 caracteres",
        equalTo: "As senhas não conferem",
      },
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }

  //assim que html foi desponibilizado para o browser
  ngOnInit(): void {}

  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }
  }
}

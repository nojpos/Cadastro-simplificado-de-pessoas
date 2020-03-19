import { Component, OnInit } from '@angular/core';
import { Pessoa } from './models/Pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: 'cadastro-pessoa.component.html'
})
export class CadastroPessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa;
  listaPessoa: Pessoa[] = []
  constructor() { }

  ngOnInit(): void {
    (document.getElementById('nome') as HTMLElement).focus();
  }

  adicionar() {
    if (this.pessoa.nome === undefined) {
      return alert('O campo Nome não foi preenchido')
    }
    this.listaPessoa.push(this.pessoa)
    this.pessoa = new Pessoa;
    (document.getElementById('nome') as HTMLElement).focus();
  }
}

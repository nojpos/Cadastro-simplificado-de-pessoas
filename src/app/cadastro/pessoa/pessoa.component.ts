import { Component, OnInit } from '@angular/core';
import { Pessoa } from './models/Pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: 'pessoa.component.html'
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa;
  listaPessoa: Pessoa[] = []
  constructor() { }

  ngOnInit(): void {
  }

  adicionar() {
    this.listaPessoa.push(this.pessoa)
    this.pessoa = new Pessoa;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  urlImagem: string = 'http://lorempixel.com/400/200/nature';
  valorAtual: string;
  valorSalvo: string;
  isMouseOver: boolean = false;
  nomeCurso: string = 'Angular';
  valorInicial: number = 15;

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyup(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;

    if(this.isMouseOver)
      console.log('Mouse over');
    else
      console.log('Mouse out');
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }
}

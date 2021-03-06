import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {

  texto: string = 'Interpolação funciona!';
  estiloVermelho = 'estilo1';
  verdadeiro: boolean = true;
  false = false;

  constructor() { }

  ngOnInit() {
  }

  getValorQualquer() : number {
    return 10;
  }

}

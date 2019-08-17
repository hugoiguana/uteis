import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-simples',
  template: `<p>Exemplo de um componente com um template simples {{nome}}</p>`,
  styleUrls: ['./template-simples.component.css']
})
export class TemplateSimplesComponent implements OnInit {

  nome: string = 'Iguana';
  constructor() { }

  ngOnInit() {
  }

}

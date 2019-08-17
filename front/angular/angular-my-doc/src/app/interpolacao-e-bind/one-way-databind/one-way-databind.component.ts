import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-databind',
  templateUrl: './one-way-databind.component.html',
  styleUrls: ['./one-way-databind.component.css']
})
export class OneWayDatabindComponent implements OnInit {
  
  nome: string;
  meu_github: any = 'https://github.com/hugoiguana';

  constructor() {
    this.nome = 'Iguana';
   }

  ngOnInit() {
  }

}

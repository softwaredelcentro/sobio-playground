import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  deployados: boolean[] = [ null ];

  constructor() {
    for (let i = 0; i < 8; i++) {
      this.deployados.push(false);
    }
  }

  ngOnInit() {
  }

  deployar(id) {
    this.deployados.forEach((value, idx) => {
      this.deployados[idx] = !value;
    });
    this.deployados[id] = true;
  }

}

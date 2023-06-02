import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styles: [
    `img {
      filter: brightness(0);
      /* width: 275px;
      height: 200px; */
    }`,
    `.cover { object-fit: cover; }`,
    `.show { filter: brightness(1); }`
  ]
})
export class PokemonViewComponent implements OnInit {

  @Input() url: string = '';
  @Input() show: boolean = true;
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() adjust: boolean = false;

  constructor() { }

  ngOnInit(): void {

    let img = document.getElementById("imagen_pok")

    //@ts-ignore
    img.addEventListener("dblclick", ()=> {
      // @ts-ignore
      if (img.style.backgroundColor === 'red' || img.style.backgroundColor === 'black') {
        // @ts-ignore
        img.style.backgroundColor = 'white';
      } else {
        // @ts-ignore
        img.style.backgroundColor = 'red';

      }
    })
  }
}

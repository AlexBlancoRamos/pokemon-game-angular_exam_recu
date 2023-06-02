import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sessio-recu-blanco',
  templateUrl: './iniciar-sessio-recu-blanco.component.html',
  styleUrls: ['./iniciar-sessio-recu-blanco.component.css']
})
export class IniciarSessioRecuBlancoComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }



  guardar_data() {
    let nom;let puntos;
    //@ts-ignore
    nom = document.getElementById("jugador").value;
    //@ts-ignore
    puntos = document.getElementById("puntos").value;

    localStorage.setItem("nombre", nom)

    localStorage.setItem("puntos", puntos)

    //@ts-ignore
    //document.getElementById("jugador").reset
    //@ts-ignore
    //document.getElementById("punts").reset

  }
}


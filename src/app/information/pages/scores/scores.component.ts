import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../../game/services/player.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  nombre: any;
  puntos: any;

  get score(): number {
    return this.playerService.score;
  }

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem("nombre")

    this.puntos = localStorage.getItem("puntos_fi")

  }

}


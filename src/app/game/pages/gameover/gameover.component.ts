import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import {Pokemon} from "../../interfaces/pokemon.interface";

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  puntos: any;
  nombre: any;
  loaded: boolean = false;
  private score_total: any;

  get score(): number {
    let punts
    punts = Number(this.puntos)

    let score = this.playerService.score;

    this.score_total = score + punts

    return this.score_total;
  }

  get highScore(): number {
    return this.playerService.highScore;
  }

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.puntos = localStorage.getItem("puntos")

    this.nombre = localStorage.getItem("nombre")

    let puntos_fi;
    //@ts-ignore
    puntos_fi = this.score

    // @ts-ignore
    localStorage.setItem("puntos_fi", puntos_fi)

    console.log(puntos_fi)

  }



}

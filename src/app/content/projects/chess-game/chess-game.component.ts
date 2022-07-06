import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})  

export class ChessGameComponent implements OnInit {
  title:String;
  constructor() {
    this.title= "3D Networking Chess Project"
   }

  ngOnInit(): void {
  }

}

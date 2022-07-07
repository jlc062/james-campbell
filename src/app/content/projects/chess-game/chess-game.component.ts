import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})  

export class ChessGameComponent implements OnInit {
  title:String;
  paragraph1: String;
  paragraph2: String;
  constructor() {
    this.title= "3D Networking Chess Project";
    this.paragraph1 = "With a team of four developers, we realized that most computerized chess games left a lot of room for improvement with their graphical interface. We decided to create our own version of a chess game that provided a more exciting user experience.";
    this.paragraph2 = "Our team designed and implemented an MVC approach utilizing Java, and adopted scrum methodologies in order to manage the workload and complete in a timely manner."
   }

  ngOnInit(): void {
  }

}

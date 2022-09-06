import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { throwError } from 'rxjs';
import {State} from './state';
@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  home = new PageComponent('Home', true,'/');
  projects = new PageComponent('Projects', false, '/Projects');
  current = new PageComponent('About Me', false, '/Current');
  pages = [this.home, this.projects, this.current]
  state: State;
  isLinksShown: boolean = false;
  isMouseIn: boolean = false;
  constructor(private router: Router) {
    this.state = State.Home;
   }
   clicked(state:string): void{
    this.pages.forEach(page => {
        page.pageName == state? page.on(): page.off();
    });
   }


  handleError(){
    console.log('in error');
    
  };
  toggleShown(){
    if(this.isMouseIn == true){
      this.isMouseIn = false;
    } else{
      this.isLinksShown = !this.isLinksShown;
    }
  }
  mouseEnter(){
    this.isMouseIn = true;
    setTimeout(()=>{
    }, 1000);

  }
  mouseLeave(){
    setTimeout(()=>{
      this.isMouseIn = false;
    }, 1000);
    
  }
  // toggleShownOff(){
  //   console.log('left');
  //   this.isLinksShown = false;
  // }
  ngOnInit(): void {
    console.log(this.isLinksShown);
    this.pages.forEach(page => {
      this.router.url == page.routerLink? page.on(): page.off();
  });
    this.router.navigateByUrl(this.home.routerLink);
  }

}
class PageComponent{
  pageName: string;
  selected: boolean;
  routerLink: string;
  constructor(pageName: string, selected: boolean, routerLink: string){
    this.pageName = pageName;
    this.selected = selected;
    this.routerLink = routerLink;
  }
  off(){
    this.selected =  false;
  }
  on(){
    this.selected = true;
  }
}

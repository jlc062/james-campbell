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
  home = new PageComponent('Home', true,'');
  projects = new PageComponent('Projects', false, '/Projects');
  quickLinks = new PageComponent('QuickLinks', false, '/QuickLinks');
  current = new PageComponent('Current', false, '/Current');
  pages = [this.home, this.projects, this.quickLinks, this.current]
  state: State;
  constructor(private router: Router) {
    this.state = State.Home;
   }
   clicked(state:string): void{
    this.pages.forEach(page => {
        page.pageName == state? page.on(): page.off();
        console.log(this.pages);
    });
    
    // let newLink = '';
    // switch (state){
    //   case 'Home':
    //     break;
    //   default:
    //     newLink = '/${state}'
    // let state = 
    

   }
  handleError(){
    console.log('in error');
    
  };
  ngOnInit(): void {
    console.log(this.router.url);

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

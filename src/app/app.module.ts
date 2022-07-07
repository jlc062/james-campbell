import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomePageComponent } from './content/home-page/home-page.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { CurrentComponent } from './content/current/current.component';
import { QuickLinksComponent } from './content/quick-links/quick-links.component';
import { ContentComponent } from './content/content.component';
import { ChessGameComponent } from './content/projects/chess-game/chess-game.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    HomePageComponent,
    ProjectsComponent,
    CurrentComponent,
    QuickLinksComponent,
    ContentComponent,
    ChessGameComponent,
    FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

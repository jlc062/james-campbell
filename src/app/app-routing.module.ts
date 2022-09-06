import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './content/home-page';
import { ProjectsComponent } from './content/projects';
import { CurrentComponent } from './content/current/current.component';
const routes: Routes = [{ path: '', component: HomePageComponent },
{path: '', component: HomePageComponent},
{path: 'Projects', component: ProjectsComponent},
{path: 'Current', component: CurrentComponent},
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

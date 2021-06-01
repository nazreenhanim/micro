import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { OnScrollComponent } from '../app/on-scroll/on-scroll.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OnHoverComponent } from '../app/on-hover/on-hover.component';
import { OnClickComponent } from '../app/on-click/on-click.component';
import { PlayGameComponent } from '../app/play-game/play-game.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },

  //Pages
  {path:'home', component: HomeComponent},
  {path:'navigation', component: NavigationComponent},
  {path:'on-scroll', component: OnScrollComponent},
  {path:'on-hover', component: OnHoverComponent},
  {path:'on-click', component: OnClickComponent},
  {path:'play-game', component: PlayGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

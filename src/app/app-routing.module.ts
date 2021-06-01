import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { LoaderComponent } from '../app/loader/loader.component';
import { OnScrollComponent } from '../app/on-scroll/on-scroll.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path:'',redirectTo:'loader', pathMatch: 'full' },

  //Pages
  {path:'home', component: HomeComponent},
  {path:'navigation', component: NavigationComponent},
  {path:'loader', component: LoaderComponent},
  {path:'on-scroll', component: OnScrollComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

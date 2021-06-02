import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LottieModule } from 'ngx-lottie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnScrollComponent } from './on-scroll/on-scroll.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OnHoverComponent } from './on-hover/on-hover.component';
import { OnClickComponent } from './on-click/on-click.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnScrollComponent,
    NavigationComponent,
    OnHoverComponent,
    OnClickComponent,
    PlayGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LottieModule.forRoot({ player: playerFactory})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

export function playerFactory() { 
  return import('lottie-web');
}

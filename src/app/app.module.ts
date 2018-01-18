import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { VoteComponent } from './vote/vote.component';
import { VotetakerComponent } from './votetaker/votetaker.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    VoteComponent,
    VotetakerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

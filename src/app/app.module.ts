import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';

import { MzSidenavModule } from 'ng2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent
  ],
  imports: [
    BrowserModule,
    MzSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

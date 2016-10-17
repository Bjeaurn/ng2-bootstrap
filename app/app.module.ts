import {NgModule}      from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent}   from './app.component';
import {MenuComponent} from './menu/menu.component';
import {PageNotFoundComponent} from './errors/pagenotfound.component';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  declarations: [ 
    AppComponent, 
    MenuComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
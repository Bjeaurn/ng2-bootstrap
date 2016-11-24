import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './errors/pagenotfound.component';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: '**', component: PageNotFoundComponent }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {enableTracing: true})
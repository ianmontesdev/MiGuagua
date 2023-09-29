import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, AppRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { RoutesComponent } from './components/routes/routes.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    SearchComponent,
    RoutesComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, routing, ReactiveFormsModule],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}

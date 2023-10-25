import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import {HttpClientModule} from '@angular/common/http'
import { MovieAppService } from './service/movieApp.service';

import {ReactiveFormsModule} from '@angular/forms'
import { MovieDetailsComponent } from './pages/movieDetails/movieDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [MovieAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

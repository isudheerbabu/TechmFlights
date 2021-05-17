import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmPageComponent } from './components/confirm-page/confirm-page.component';
import { SuccessComponent } from './components/success/success.component';
import { HotelsPageComponent } from './components/hotels-page/hotels-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFlightComponent,
    SearchResultComponent,
    ConfirmPageComponent,
    SuccessComponent,
    HotelsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

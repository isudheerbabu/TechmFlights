import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ConfirmPageComponent } from './components/confirm-page/confirm-page.component';
import { SuccessComponent } from './components/success/success.component';
import { HotelsPageComponent } from './components/hotels-page/hotels-page.component';


const routes: Routes = [
  {path: '', component: BookFlightComponent},
  {path: 'result', component: SearchResultComponent},
  {path: 'confirm', component: ConfirmPageComponent},
  {path: 'success', component: SuccessComponent},
  {path: '**', component: HotelsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

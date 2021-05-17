import { Component, OnInit } from '@angular/core';
import { FlightResultsService } from 'src/app/shared/flight-results.service';
import { Router } from '@angular/router';
import all from 'src/assets/city.json';
import {  City } from 'src/app/shared/cities.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  flightForm: FormGroup;
  cities: City[];
  keyword = 'city';
  submitted = false;
  check = true;
  constructor(private router: Router,
              private fb: FormBuilder,
              ) { }

  ngOnInit() {
    this.cities = all.cities;
    this.flightForm = this.fb.group({
      fromCity : ['', Validators.required],
      toCity : ['', Validators.required],
      depDate : ['', Validators.required],
      reDate : [''],
      pass : ['', Validators.required],
      tClass : ['', Validators.required]
    });

  }


 searchFlights() {
  this.submitted = true;
  if ( this.flightForm.invalid) {
    return;
  } else {
    localStorage.setItem('flight', JSON.stringify(this.flightForm.value));
    let params = this.router.navigate(['result'], {
      queryParams : {
        // tslint:disable-next-line:object-literal-key-quotes
        fromCity : this.flightForm.value.fromCity.city,
        toCity : this.flightForm.value.toCity.city
      }
  });
 }
}

 selectEvent(item) {
}

onChangeSearch(val: string) {
}

onFocused(e){
}
}

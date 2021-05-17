import { Component, OnInit } from '@angular/core';
import { FlightResultsService } from 'src/app/shared/flight-results.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  passDetails: any;
  flightDetails: any;
  locDetails: any;
  constructor(private flightService: FlightResultsService) {
    this.flightService.apiData$.subscribe(data => {
      this.locDetails = data[0];
    });
  }

  ngOnInit() {
    this.passDetails = JSON.parse(localStorage.getItem('details'));
    this.flightDetails = JSON.parse(localStorage.getItem('flight'));
  }

}

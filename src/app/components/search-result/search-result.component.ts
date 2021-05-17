import { Component, OnInit } from '@angular/core';
import { Flights } from 'src/app/shared/flights.interface';
import { FlightResultsService } from 'src/app/shared/flight-results.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 6, 7, 8, 9, 10];
  flightsData: Flights[] = [];
  savedData;
  constructor(private resultService: FlightResultsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.savedData = JSON.parse(localStorage.getItem('flight'));
    this.route.queryParamMap.subscribe({
      next: (paramMap: ParamMap) => {
        // tslint:disable-next-line:variable-name
        const fromCity = paramMap.get('fromCity');
        const toCity = paramMap.get('toCity');
        // tslint:disable-next-line:object-literal-shorthand
        this.getFilterResults({fromCity,
                             toCity
                            });
      }
    });
  }


  getFilterResults(params?) {
      this.resultService.getFilterResults(params).subscribe({
        next: (res) => {
          this.flightsData = res;
        },
        error: (response: HttpErrorResponse) => {
          console.log(response);
        }
      });
    }

    onTableDataChange(event) {
      this.page = event;
      this.getFilterResults();
    }

     onTableSizeChange(event): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.getFilterResults();
    }


}

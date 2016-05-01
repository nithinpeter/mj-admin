import { Component } from 'angular2/core';
import { HomeService } from './home.service';
import { RouterLink } from 'angular2/router';

@Component({
  selector: 'home',
  template: `
    <a [routerLink]="['AddNew']">Add New</a>
    <kendo-grid [options]='gridOptions' ></kendo-grid>
  `,
  providers: [HomeService],
  directives: [RouterLink]
})
export default class HomeComponent {

  gridOptions;
  constructor(private _homeService: HomeService) {

    this._homeService.getMovies().subscribe((response) => {

      this.gridOptions = {
        dataSource: [
          ...response
        ],
        sortable: true,
        selectable: true,
        columns: [
          { field: "_id", title: "Id", filterable: true },
          { field: "title", title: "Title", filterable: true },
          { field: "type", title: "Type", filterable: true },
          { field: "language", title: "Language", filterable: true },
          { field: "year", title: "Type", filterable: true },
          { field: "mjRating", title: "Rating", filterable: true },
          { field: "mjScore", title: "Score", filterable: true },
          { field: "mjVotes", title: "Votes", filterable: true }
        ],
        pageable: {
          pageSize: 5
        },
        filterable: {
          messages: {
            and: "and",
            or: "or",
            filter: "Apply filter",
            clear: "Clear filter"
          }
        }
      };
    })
  }


  // ngOnInit() {
  // }




}



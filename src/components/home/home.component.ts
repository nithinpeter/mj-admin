import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
// import { Store } from '@ngrx/store';

@Component({
  selector: 'home',
  template: `
    <a [routerLink]="['AddNew']">Add New</a>
    <kendo-grid [options]='gridOptions' ></kendo-grid>
    {{counter}}
  `,
  providers: [HomeService],
  directives: [ROUTER_DIRECTIVES]
})
export default class HomeComponent {

  gridOptions;
  counter;
  
  constructor(private _homeService: HomeService) {
    
    
    this._homeService.getMovies().subscribe((response) => {
      
      this.gridOptions = {
        sortable: true,
        selectable: true,
        columns: [
          { field: "mjId", title: "Id", filterable: true },
          { field: "title", title: "Title", filterable: true, template: function(dataItem) {
            return `<a href="/#/admin/edit/${dataItem._id}">${(<any>window).kendo.htmlEncode(dataItem.title)}</a>`;
          }},
          { field: "type", title: "Type", filterable: true },
          { field: "language", title: "Language", filterable: true },
          { field: "year", title: "Type", filterable: true },
          { field: "mjRating", title: "Rating", filterable: true },
          { field: "mjScore", title: "Score", filterable: true },
          { field: "mjVotes", title: "Votes", filterable: true }
        ],
        dataSource: [
          ...response
        ],
        pageable: {
          pageSize: 13
        },
        filterable: {
          messages: {
            and: "and",
            or: "or",
            filter: "Apply",
            clear: "Clear"
          }
        }
      };
    })
  }


  // ngOnInit() {
  // }

}



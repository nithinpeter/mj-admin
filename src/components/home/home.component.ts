import { Component } from 'angular2/core';
import { HomeService } from './home.service'

@Component({
  selector: 'home',
  template: `
    <kendo-grid [options]='gridOptions' ></kendo-grid>
  `,
  providers: [HomeService]
})
export default class HomeComponent {

  gridOptions;
  constructor(private _homeService: HomeService) {
    
    this._homeService.getMovies().subscribe((response)=>{
      
      this.gridOptions = {
        dataSource: [
          ...response    
        ],
        sortable: true,
        selectable: true,
        columns: [
          { field: "_id", title: "Id", filterable: true },
          { field: "title", title: "Type", filterable: true },
          { field: "type", title: "Type",  filterable: true},
          { field: "language", title: "Language",  filterable: true},
          { field: "year", title: "Type", filterable: true },
          { field: "mjRating", title: "Rating",  filterable: true},
          { field: "mjScore", title: "Score",  filterable: true},
          { field: "mjVotes", title: "Votes",  filterable: true}
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



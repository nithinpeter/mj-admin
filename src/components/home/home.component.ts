import { Component } from '@angular/core';
import { HomeService } from './home.service';
import StoreService from '../../redux/store';

@Component({
  selector: 'home',
  template: `
    <kendo-grid [options]='gridOptions' ></kendo-grid>
    <button (click)="getState()">Get state</button>
  `,
  providers: [HomeService]
})
export default class HomeComponent {

  gridOptions;
  moviesResponse;
  counter;
  
  getState() {
    console.log(this._store.select("movies"));
  }
  
  
  constructor(private _homeService: HomeService, private _store: StoreService) {
    
    
    this._homeService.getMovies();
    
    this.moviesResponse = this._store.select("movies");
    
    this.gridOptions = {
      sortable: true,
      selectable: true,
      columns: [
        { field: "mjId", title: "Id", filterable: true },
        { field: "title", title: "Title", filterable: true, template: function(dataItem) {
          return `<a href="/#/edit/${dataItem._id}">${(<any>window).kendo.htmlEncode(dataItem.title)}</a>`;
        }},
        { field: "type", title: "Type", filterable: true },
        { field: "language", title: "Language", filterable: true },
        { field: "year", title: "Type", filterable: true },
        { field: "mjRating", title: "Rating", filterable: true },
        { field: "mjScore", title: "Score", filterable: true },
        { field: "mjVotes", title: "Votes", filterable: true }
      ],
      dataSource: this.moviesResponse,
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
  };
  
  // ngOnInit() {
  // }

}



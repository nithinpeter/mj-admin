import { Component } from 'angular2/core';
import { HomeService } from './home.service'

@Component({
  selector: 'home',
  template: `
    <h5>Home</h5>
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
          { field: "productName", title: "Product Name", filterable: true },
          { field: "category", title: "Category" }
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



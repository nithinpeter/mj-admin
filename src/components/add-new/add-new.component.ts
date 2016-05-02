import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { Movie } from '../../models/movie.model';
import { AddNewService } from './add-new.service';

// To remove compile time error 'require is not defined'
declare var require: any

@Component({
    selector: 'login',
    template: require('./add-new.template.html'),
    directives: [RouterLink],
    providers: [AddNewService]
})
export default class AddNewComponent {
    
    model: Movie;
    errorMessage: string;
    
    constructor(private _router: Router, private _addNewService: AddNewService) {
        
    } 
    
    ngOnInit() {
        this.model = new Movie();
    }
    
    addNew() {
        this._addNewService.addNew(this.model).subscribe(
            response => {
                this._router.navigate( ['Home'] );
            },
            error => this.errorMessage = <any>error
        );
    }

}



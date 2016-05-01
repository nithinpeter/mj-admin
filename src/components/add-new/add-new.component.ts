import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { Movie } from '../../models/movie.model';

// To remove compile time error 'require is not defined'
declare var require: any

@Component({
    selector: 'login',
    template: require('./add-new.template.html'),
    directives: [RouterLink]
})
export default class AddNewComponent {
    
    model: Movie;
    
    constructor() {
        
    } 
    
    ngOnInit() {
        this.model = new Movie();
    }

}



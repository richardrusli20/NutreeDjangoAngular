import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'frontend';
  dietprograms = [];
  selectedMovie;
  faSearch = faSearch;

  constructor(private api:ApiService){
    this.getDietprogram();
  }
  getDietprogram = () =>{
    this.api.getAllDietProgram().subscribe(
      data => {
        this.dietprograms = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}

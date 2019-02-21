import { Component, OnInit } from '@angular/core';
import { Movie } from '../components/models/movie';
import { fakeMovie } from '../components/fake.movies'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
//implements là thực thi interface ten là OnInit (ben trong interface có các hàm khi 
//ta khai báo implement oninit thì có cái hàm ngOnInit() )
export class MoviesComponent implements OnInit {
movie:Movie = {
  id:1,
  name:"Nắng",
  releaseYear:1996,
}
movies = fakeMovie;
  constructor() { }

  ngOnInit() {
  }

  selectedMovie: Movie
  onSelect(movie:Movie): void{
    this.selectedMovie = movie;
    // alert(`selectedMovie = ${ JSON.stringify(this.selectedMovie)}`);
  }

}

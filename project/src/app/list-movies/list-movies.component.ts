import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-list-movies",
  templateUrl: "./list-movies.component.html",
  styleUrls: ["./list-movies.component.scss"],
})
export class ListMoviesComponent implements OnInit {
  movies = [];
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getMoviesFromService();
  }
  getMoviesFromService() {
    let observable = this._httpService.getAllMovies();
    observable.subscribe((data) => {
      this.movies = data["data"];
    });
  }
}

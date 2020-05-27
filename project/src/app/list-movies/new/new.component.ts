import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"],
})
export class NewComponent implements OnInit {
  movies = [];

  newMovie: any;

  error = "";
  errorReview = "";

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.getMoviesFromService();
    this.newMovie = {
      title: "",
      reviews: {
        name: "",
        stars: "",
        comment: "",
      },
    };
  }
  getMoviesFromService() {
    let observable = this._httpService.getAllMovies();
    observable.subscribe((data) => {
      this.movies = data["data"];
    });
  }

  onSubmit() {
    let observable = this._httpService.createMovie(this.newMovie);
    observable.subscribe((data: any) => {
      if (data.error) {
        this.error = data.error.errors;
        for (let i in data.error.errors) {
          this.errorReview = data.error.errors[i];
        }
        this._router.navigate(["movies/new"]);
      } else {
        this.getMoviesFromService();
        this._router.navigate([""]);
      }
    });
  }
}

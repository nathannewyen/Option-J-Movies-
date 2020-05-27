import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  movieID: string;
  movieData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.movieID = this.route.snapshot.paramMap.get("id");
    this.getOneMovie();
  }

  getOneMovie() {
    let observable = this.httpService.oneMovie(this.movieID);
    observable.subscribe((data) => {
      this.movieData = data;
    });
  }
  onDelete(id) {
    const observable = this.httpService.deleteMovie(id);
    observable.subscribe((data) => {
      this.router.navigate([""]);
    });
  }

  deleteReview(commentid) {
    let observable = this.httpService.deleteReview(this.movieID, commentid);
    observable.subscribe((data) => {
      this.router.navigate([`/movies`]);
    });
  }
}

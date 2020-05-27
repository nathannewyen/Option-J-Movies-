import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  movieID: string;
  movieData: any;
  newReview = {
    name: "",
    stars: "",
    comment: "",
  };
  errors = [];

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

  createReview() {
    let observable = this.httpService.createComment(
      this.movieID,
      this.newReview
    );
    observable.subscribe((data) => {
      this.errors = [];
      if (data["ServerMessage"] == "Error") {
        for (var key in data["Error"]["errors"]) {
          this.errors.push(data["Error"]["errors"][key]["message"]);
          console.log(this.errors);
        }
      } else {
        this.newReview = {
          name: "",
          stars: "",
          comment: "",
        };
        this.router.navigate([`/movies/${this.movieID}`]);
      }
    });
  }
}

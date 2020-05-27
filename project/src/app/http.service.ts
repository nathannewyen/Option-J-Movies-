import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAllMovies() {
    return this._http.get("/show");
  }

  createMovie(newmovie) {
    return this._http.post("/create", newmovie);
  }

  oneMovie(id) {
    return this._http.get(`/show/${id}`);
  }

  createComment(id, comment) {
    return this._http.post(`/create/${id}/comment`, comment);
  }

  deleteMovie(id) {
    return this._http.delete(`/delete/${id}`);
  }
  deleteReview(id, commentid) {
    return this._http.delete(`/delete/${id}/comment/${commentid}`);
  }
}

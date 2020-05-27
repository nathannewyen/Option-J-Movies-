import { DetailsComponent } from "./details/details.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListMoviesComponent } from "./list-movies/list-movies.component";
import { NewComponent } from "./list-movies/new/new.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: "", redirectTo: "/movies", pathMatch: "full" },
  {
    path: "movies",
    component: ListMoviesComponent,
  },
  { path: "movies/new", component: NewComponent },
  { path: "movies/:id", component: DetailsComponent },
  { path: "movies/:id/reviews", component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

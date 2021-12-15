import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";
import {BookComponent} from "./components/books/book/book.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'books', component:BookComponent},

  {path:'', pathMatch:'full' ,redirectTo:'/home'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

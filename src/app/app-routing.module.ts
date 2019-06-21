import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelfComponent } from './shelf/shelf.component'
import { SearchComponent } from './search/search.component'
const routes: Routes = [
  {
    path: '', component: ShelfComponent,
  },
  {
    path: 'search', component: SearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

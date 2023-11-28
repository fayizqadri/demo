import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTableComponent } from './show-table/show-table.component';
import { Showtable2Component } from './showtable2/showtable2.component';

const routes: Routes = [
  { path: '', component: ShowTableComponent },
  {path:'table',component:Showtable2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

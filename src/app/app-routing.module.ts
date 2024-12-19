import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  { path: 'reservation',
             loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule) },
             { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

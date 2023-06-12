import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./views/menu/menu.component";
import {ContactComponent} from "./views/contact/contact.component";
import {OrderComponent} from "./views/order/order.component";
import {OverviewComponent} from "./views/overview/overview.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu'},
  { path: 'menu', component: MenuComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'order', component: OrderComponent},
  { path: 'overview/:id', component: OverviewComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

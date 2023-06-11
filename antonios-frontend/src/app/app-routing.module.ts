import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./views/menu/menu.component";
import {PersonalizationComponent} from "./views/personalization/personalization.component";
import {ContactComponent} from "./views/contact/contact.component";
import {OrderComponent} from "./views/order/order.component";
import {OverviewComponent} from "./views/overview/overview.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu'},
  { path: 'menu', component: MenuComponent},
  { path: 'personalize', component: PersonalizationComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'order', component: OrderComponent},
  { path: 'overview/:id', component: OverviewComponent},
  { path: '**', redirectTo: 'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

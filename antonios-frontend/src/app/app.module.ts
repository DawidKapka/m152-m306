import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './views/menu/menu.component';
import { PersonalizationComponent } from './views/personalization/personalization.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import {MenuService} from "./services/menu.service";
import {OrderService} from "./services/order.service";
import { OrderComponent } from './views/order/order.component';
import { OrderStep1Component } from './views/order/order-step1/order-step1.component';
import { OrderStep2Component } from './views/order/order-step2/order-step2.component';
import { OrderStep3Component } from './views/order/order-step3/order-step3.component';
import {HttpService} from "./services/http.service";
import {PersonalizationService} from "./services/personalization.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PersonalizationComponent,
    ContactComponent,
    FooterComponent,
    MenuItemComponent,
    OrderComponent,
    OrderStep1Component,
    OrderStep2Component,
    OrderStep3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuService, OrderService, HttpService, PersonalizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

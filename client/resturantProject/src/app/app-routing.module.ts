import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInUserComponent } from './components/user/sing-in-user/sing-in-user.component';
import { LoginComponent } from './components/user/login/login.component';
import { MenuByCategotyComponent } from './components/user/menu-by-categoty/menu-by-categoty.component';
import { MenuComponent } from './components/user/menu/menu.component';
import { HomeComponent } from './components/user/home/home.component';
import { StarComponent } from './components/user/star/star.component';
import { PartyComponent } from './components/user/party/party.component';
import { GiftCardComponent } from './components/user/gift-card/gift-card.component';
import { FormPartyPageComponent } from './components/user/form-party-page/form-party-page.component';




const routes: Routes = [
  {
    path: "star",
    component: StarComponent,
  },
  {
    path: "sign-in-user",
    component: SingInUserComponent,
  },
  {
    path: "log-in",
    component: LoginComponent,
  },
  {
    path: "menu-by-categoty",
    component: MenuByCategotyComponent,
  },
  {
    path: "party",
    component: PartyComponent,
  },
  {
    path: "menu",
    component: MenuComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch:"full"
  },
  {
    path: "gift-card",
    component : GiftCardComponent, 
  },
  {
    path: "form-party",
    component : FormPartyPageComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

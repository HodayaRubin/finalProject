import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Menu } from '../modals/menu';
import { Subject, Observable } from 'rxjs';
import { InventDose } from '../modals/invent-dose';
import { InventDetails } from '../modals/invent-details';

@Injectable({
  providedIn: 'root'
})
export class VisitersOrderManagementService {

BaseUrl= "http://localhost:51437/api";
  URL: string = "http://localhost:51437/api/Visiters";
  subjectCart = new Subject();
  cart: InventDetails[] = [];

  constructor(public httpClient: HttpClient, private userService: UserService) {
    this.cart = this.userService.InventDose.inventDetails;
  }

  idCurrentUser = this.userService.CurrentUser.id;

  getAllOrder(idVisiter: number): Observable<InventDose[]> {
    return this.httpClient.get<InventDose[]>(`${this.BaseUrl}/InventDose/GetInvent/${idVisiter}`);
  }
   addInvent() {
  //   var inventDetails = JSON.parse(localStorage.getItem("currentInvent")).inventDetails;
  //   var vis = new InventDose();
  //   var user = JSON.parse(localStorage.getItem("currentUser")).ld;
  //   vis.idVisiter = user;
  //   vis.status = 1;
  //   vis.inventDetails = [];

  //   inventDetails.forEach(element => {
  //     vis.inventDetails.push({ amount: element.amount, idMenu: element.idMenu })
  //   });

  //   debugger;
    //  return this.httpClient.post(`${this.URL}/AddDose`, vis);
return null;
   }
  castMenuToInvetDetails(item: Menu) {
    let invent = new InventDetails();
    invent.idMenu = item.id;
    invent.amount = 1;
    return invent;
  }

  addOrderToCart(item: Menu) {
    if (this.userService.CurrentUser) {
      this.cart.push(this.castMenuToInvetDetails(item));
      this.userService.setInvetDetails(this.userService.InventDose, this.cart);
      // let dose: InventDose = { ...this.userService.InventDose };
      // dose.inventDetails.push({ idDose: 0, idMenu: itemId, amount: 0 });
      // this.userService.InventDose = dose;
      this.subjectCart.next(this.cart);
      return this.cart;
    }
    else
      return false;
  }
  MinusProductAmount(itemId) {
    let item = this.cart.find(p => p.idMenu == itemId);
    if (item) {
      item.amount--;
      this.userService.setInvetDetails(this.userService.InventDose, this.cart);
    }
  }
  plusProductAmount(itemId) {
    let item = this.cart.find(p => p.idMenu == itemId);
    if (item) {
      item.amount++;
      this.userService.setInvetDetails(this.userService.InventDose, this.cart);
    }
  }
  cartIsEmpty() {
    return this.cart.length == 0;
  }
}





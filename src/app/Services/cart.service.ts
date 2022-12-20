import { ICart } from './../Models/icart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ICart[] = [];
  constructor() { }

  addToCart(cart: ICart) {
    let item = this.cartItems.find(i => i.id == cart.id);
    if (item != undefined) {
      for (let index = 0; index < this.cartItems.length; index++) {
        const element = this.cartItems[index];
        if (element.id == cart.id) {
          element.qty += cart.qty
        }
      }
      console.log(this.cartItems);
    } else {
      this.cartItems.push(cart);
    }
  }

  getCartItems() {
    return this.cartItems;
  }
}

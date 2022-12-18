import { ICart } from './../Models/icart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ICart[] = [];
  constructor() { }

  addToCart(cart: ICart) {
    this.cartItems.push(cart);
  }

  getCartItems() {
    return this.cartItems;
  }
}

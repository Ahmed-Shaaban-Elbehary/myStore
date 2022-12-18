import { ICart } from './../../Models/icart';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: ICart[] = [];
  totalPrice: number = 0;
  fullName: string = '';
  Address: string = '';
  creditNumber: string = '';
  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index];
      this.totalPrice += element.price * element.quantities;
    }
  }
  Increment() {

  }
  Decrement() {

  }
  OnSubmit() {

  }
}

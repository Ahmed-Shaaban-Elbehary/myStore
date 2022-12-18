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
  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
  }
}

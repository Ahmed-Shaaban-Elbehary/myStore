import { CartService } from './../../Services/cart.service';
import { ICart } from './../../Models/icart';
import { IProduct } from '../../Models/iproduct';
import { Component, Input, Output } from '@angular/core';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: IProduct = {} as IProduct;
  @Output() cartProducts: ICart[] = [];
  Quantity: number = 0;
  constructor(private cartSerivce: CartService) { }

  Increment(): void {
    this.Quantity++;
  }

  Decrement(): void {
    if (this.Quantity > 0) {
      this.Quantity--;
    }
  }

  AddToCart(product: IProduct) {
    const cart: ICart = {
      id: product.id,
      name: product.name,
      url: product.url,
      price: product.price,
      description: product.description,
      quantities: this.Quantity
    }
    this.cartSerivce.addToCart(cart)
    this.resetQuantity;
  }

  resetQuantity() {
    this.Quantity = 0;
  }
}

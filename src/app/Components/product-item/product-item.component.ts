import { AlertifyService } from './../../Services/alertify.service';
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
  constructor(private cartSerivce: CartService, private alertifyService: AlertifyService) { }

  Increment(): void {
    this.Quantity++;
  }

  Decrement(): void {
    if (this.Quantity > 0) {
      this.Quantity--;
    }
  }

  AddToCart(product: IProduct) {
    if (this.Quantity > 0) {
      const cart: ICart = {
        id: product.id,
        name: product.name,
        url: product.url,
        price: product.price,
        description: product.description,
        qty: this.Quantity
      }
      this.cartSerivce.addToCart(cart)
      this.resetQuantity();
      this.alertifyService.success("Item Added To Cart Successfully!");
    }
    else {
      this.alertifyService.error("Please Select Min One Item!");
    }
  }

  resetQuantity() {
    this.Quantity = 0;
  }
}

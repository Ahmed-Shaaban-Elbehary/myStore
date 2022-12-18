import { IProduct } from '../../Models/iproduct';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct = {} as IProduct;
  Quantity: number = 0;

  constructor() {

  }
  ngOnInit(): void {

  }
  Increment(): void {
    this.Quantity++;
  }
  Decrement(): void {
    if (this.Quantity > 0) {
      this.Quantity--;
    }
  }
}

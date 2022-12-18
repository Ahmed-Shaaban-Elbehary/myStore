import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(resp => {
      this.productList = resp;
    }
    );
  }
}

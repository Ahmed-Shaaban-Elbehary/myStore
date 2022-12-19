import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})

export class ProductItemDetailComponent implements OnInit {
  product: IProduct[] = [];
  constructor(private route: ActivatedRoute,
    private productService: ProductService) {

  }
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe(resp => {
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        this.product = resp.filter(p => p.id == id);
      }
    })
  }
}


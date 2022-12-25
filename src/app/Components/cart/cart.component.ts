import { FormValidatorService } from './../../Services/form-validator.service';
import { AlertifyService } from './../../Services/alertify.service';
import { ICart } from './../../Models/icart';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user';
import { count } from 'rxjs';

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
  totalAmount: number = 0;
  isText: boolean = false;
  isNumber: boolean = false;
  constructor(private cartService: CartService,
    private router: Router,
    private userService: UserService,
    private alertify: AlertifyService,
    private validator: FormValidatorService) {

  }
  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
    for (let i = 0; i < this.items.length; i++) {
      this.totalAmount = this.items[i].qty;
      this.totalPrice += this.items[i].price * this.items[i].qty;
    }
  }

  OnSubmit() {
    if (this.isNumber || this.isText) {
      this.alertify.error("Invalid Form Input, Please Check Form Error!!")
    } else {
      let user: User = {
        name: this.fullName,
        address: this.Address,
        credit: Number(this.creditNumber),
        totalPayed: this.totalPrice
      };

      this.userService.postUser(user);
      this.router.navigate(["/confirm"]);
    }
  }
  RemoveItem(cart: ICart) {
    this.alertify.confirm(`Are You Sure You Want To Remove That ${cart.name}`, () => {
      this.items = this.items.filter(i => i.id !== cart.id);
    })
  }

  CheckText(event: any) {
    console.log("text");
    const isvalid = this.validator.preventNumber(event);
    if (!isvalid) {
      this.isText = true;
    } else {
      this.isText = false;
    }
  }
  CheckNumber(event: any) {
    console.log("number");
    const isvalid = this.validator.preventText(event);
    if (!isvalid) {
      this.isNumber = true;
    } else {
      this.isNumber = false;
    }
  }

  // Increment(price: number): void {
  //   let count = 1;
  //   this.totalAmount++;
  //   const itemTotalPrice = price * count;
  //   this.totalPrice += itemTotalPrice;
  //   count++;
  // }

  // Decrement(price: number): void {
  //   if (this.totalAmount > 0) {
  //     let count = 1;
  //     this.totalAmount--;
  //     const itemTotalPrice = price * count;
  //     this.totalPrice -= itemTotalPrice;
  //     count++;
  //   }
  // }
}

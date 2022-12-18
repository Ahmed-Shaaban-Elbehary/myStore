import { ProductItemDetailComponent } from './Components/product-item-detail/product-item-detail.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'productItemDetails/:id', component: ProductItemDetailComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

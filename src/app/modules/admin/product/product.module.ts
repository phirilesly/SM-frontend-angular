import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { Route, RouterModule } from '@angular/router';

const productRoutes: Route[] = [
  {
      path     : '',
      component: ProductComponent
  }
];


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductModule { }

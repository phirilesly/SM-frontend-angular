import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import { Route, RouterModule } from '@angular/router';

const purchaseRoutes: Route[] = [
  {
      path     : '',
      component: PurchaseComponent
  }
];


@NgModule({
  declarations: [
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(purchaseRoutes)

  ]
})
export class PurchaseModule { }

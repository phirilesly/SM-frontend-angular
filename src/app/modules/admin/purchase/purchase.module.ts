import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(purchaseRoutes)

  ]
})
export class PurchaseModule { }

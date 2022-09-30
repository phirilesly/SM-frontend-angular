import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { DetailsComponent } from './details/details.component';

const purchaseRoutes: Route[] = [
  {
      path     : '',
      component: PurchaseComponent
  },
  {
    path: 'edit/:id',
    component: AddPurchaseComponent
   
},
{
  path: 'add',
  component: AddPurchaseComponent
 
},
{
  path: 'details/:id',
  component: DetailsComponent
}
];


@NgModule({
  declarations: [
    PurchaseComponent,
    AddPurchaseComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(purchaseRoutes)

  ]
})
export class PurchaseModule { }

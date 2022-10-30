import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { DetailsComponent } from './details/details.component';
import { EditPurchaseComponent } from './edit-purchase/edit-purchase.component';
import { FuseCardModule } from '@fuse/components/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    DetailsComponent,
    EditPurchaseComponent
  ],
  imports: [
    CommonModule,
    FuseCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(purchaseRoutes)

  ]
})
export class PurchaseModule { }

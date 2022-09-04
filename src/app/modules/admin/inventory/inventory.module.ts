import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { Route, RouterModule } from '@angular/router';

const inventoryRoutes: Route[] = [
  {
      path     : '',
      component: InventoryComponent
  }
];


@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(inventoryRoutes)
  ]
})
export class InventoryModule { }

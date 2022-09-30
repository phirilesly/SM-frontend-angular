import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GridComponent } from './grid/grid.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { FuseCardModule } from '@fuse/components/card';

const inventoryRoutes: Route[] = [
  {
      path     : '',
      component: InventoryComponent
  },
      {
        path: 'edit/:id',
        component: EditComponent
       
    },
    {
      path: 'add',
      component: EditComponent
     
    },
    {
      path: 'details/:id',
      component: DetailsComponent
     
    }
      
    ];

@NgModule({
  declarations: [
    InventoryComponent,
    GridComponent,
    EditComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FuseCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(inventoryRoutes)
  ]
})
export class InventoryModule { }

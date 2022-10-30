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
import { AddComponent } from './add/add.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    DetailsComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FuseCardModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    FuseCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(inventoryRoutes)
  ]
})
export class InventoryModule { }

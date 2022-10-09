import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { GridComponent } from './grid/grid.component';
import { FuseCardModule } from '@fuse/components/card';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';


const productRoutes: Route[] = [
  {
      path     : '',
      component: ProductComponent,

     
  },
  {
    path: 'edit/:id',
    component: EditComponent
   
},
{
  path: 'add',
  component: AddComponent
 
},
{
  path: 'details/:id',
  component: DetailsComponent
 
}
  
];


@NgModule({
  declarations: [
    ProductComponent,
    DetailsComponent,
    EditComponent,
    GridComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FuseCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    ToastModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(productRoutes)
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class ProductModule { }

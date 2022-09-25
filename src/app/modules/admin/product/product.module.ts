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
  component: EditComponent
 
}
  
];


@NgModule({
  declarations: [
    ProductComponent,
    DetailsComponent,
    EditComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    FuseCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductModule { }

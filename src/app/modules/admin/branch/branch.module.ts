import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from '@fuse/components/card';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { DetailsComponent } from './details/details.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const branchRoutes: Route[] = [
  {
      path     : '',
      component: BranchComponent
  },
  {
    path: 'edit/:id',
    component: AddBranchComponent
   
},
{
  path: 'add',
  component: AddBranchComponent
 
},
{
  path: 'details/:id',
  component: DetailsComponent
}
];


@NgModule({
  declarations: [
    BranchComponent,
    AddBranchComponent,
    DetailsComponent,
    EditBranchComponent
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
    RouterModule.forChild(branchRoutes)

  ]
})
export class BranchModule { }

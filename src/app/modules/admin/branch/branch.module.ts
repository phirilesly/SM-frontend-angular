import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from '@fuse/components/card';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { DetailsComponent } from './details/details.component';

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
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FuseCardModule,
    MatButtonModule,
    RouterModule.forChild(branchRoutes)

  ]
})
export class BranchModule { }

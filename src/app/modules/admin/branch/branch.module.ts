import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { Route, RouterModule } from '@angular/router';

const branchRoutes: Route[] = [
  {
      path     : '',
      component: BranchComponent
  }
];


@NgModule({
  declarations: [
    BranchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(branchRoutes)

  ]
})
export class BranchModule { }

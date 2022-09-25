import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices.component';
import { Route, RouterModule } from '@angular/router';

const invoicesRoutes: Route[] = [
  {
      path     : '',
      component: InvoicesComponent
  }
];

@NgModule({
  declarations: [
    InvoicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(invoicesRoutes)
  ]
})
export class InvoicesModule { }

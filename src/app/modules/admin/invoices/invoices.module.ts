import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';

const invoicesRoutes: Route[] = [
  {
      path     : '',
      component: InvoicesComponent
  }
];

@NgModule({
  declarations: [
    InvoicesComponent,
   
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FuseCardModule,
    MatButtonModule,
    RouterModule.forChild(invoicesRoutes)
  ]
})
export class InvoicesModule { }

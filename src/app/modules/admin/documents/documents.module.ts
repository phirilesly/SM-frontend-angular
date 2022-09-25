import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import { Route, RouterModule } from '@angular/router';

const documentsRoutes: Route[] = [
  {
      path     : '',
      component: DocumentsComponent
  }
];


@NgModule({
  declarations: [
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(documentsRoutes)
  ]
})
export class DocumentsModule { }

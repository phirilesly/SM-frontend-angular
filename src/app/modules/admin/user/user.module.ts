import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Route, RouterModule } from '@angular/router';

const userRoutes: Route[] = [
  {
      path     : '',
      component: UserComponent
  }
];


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)

  ]
})
export class UserModule { }

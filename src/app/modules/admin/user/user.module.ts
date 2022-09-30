import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';
import { AddUserComponent } from './add-user/add-user.component';

const userRoutes: Route[] = [
  {
      path     : '',
      component: UserComponent
  }
  ,{
    path: 'add',
    component: AddUserComponent
   
  },
  {
    path: 'edit/:id',
    component: AddUserComponent
   
  },
 
];


@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FuseCardModule,
    MatButtonModule,
    RouterModule.forChild(userRoutes)

  ]
})
export class UserModule { }

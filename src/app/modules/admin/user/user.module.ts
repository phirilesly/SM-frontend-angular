import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastModule } from 'primeng/toast';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FuseCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    ToastModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)

  ]
})
export class UserModule { }

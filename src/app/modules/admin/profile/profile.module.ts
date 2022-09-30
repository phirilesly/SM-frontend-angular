import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';

const profileRoutes: Route[] = [
  {
      path     : '',
      component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FuseCardModule,
    MatButtonModule,
    RouterModule.forChild(profileRoutes)
  ]
})
export class ProfileModule { }

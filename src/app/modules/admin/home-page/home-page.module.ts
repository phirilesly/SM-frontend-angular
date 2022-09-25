import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
import { UserModule } from 'app/layout/common/user/user.module';

const homepageRoutes: Route[] = [
  {
      path     : '',
      component: HomePageComponent
  }
];



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NotificationsModule,
    UserModule,
    RouterModule.forChild(homepageRoutes)
  ]
})
export class HomePageModule { }

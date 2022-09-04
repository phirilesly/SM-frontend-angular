import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';

const landingRoutes: Route[] = [
  {
      path     : '',
      component: LandingComponent
  }
];

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(landingRoutes)
  ]
})
export class LandingModule { }

import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'home'},

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'main/dashboard'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [

          
        ]
    },

   

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/admin/landing/landing.module').then(m => m.LandingModule)},
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        data: {
            layout: 'classic'
        },
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'main', children: [
            {path: 'dashboard', loadChildren: () => import('app/modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
            {path: 'products', loadChildren: () => import('app/modules/admin/product/product.module').then(m => m.ProductModule)},
            {path: 'inventories', loadChildren: () => import('app/modules/admin/inventory/inventory.module').then(m => m.InventoryModule)},
            {path: 'sales', loadChildren: () => import('app/modules/admin/purchase/purchase.module').then(m => m.PurchaseModule)},
            {path: 'branches', loadChildren: () => import('app/modules/admin/branch/branch.module').then(m => m.BranchModule)},
           
            
        ]},
        {path: 'accounting', children: [
            {path: 'invoices', loadChildren: () => import('app/modules/admin/invoices/invoices.module').then(m => m.InvoicesModule)},
            {path: 'documents', loadChildren: () => import('app/modules/admin/documents/documents.module').then(m => m.DocumentsModule)},


        ]},
        {path: 'settings', children: [
            {path: 'users', loadChildren: () => import('app/modules/admin/user/user.module').then(m => m.UserModule)},
            {path: 'profile', loadChildren: () => import('app/modules/admin/profile/profile.module').then(m => m.ProfileModule)}

        ]},

        ]
    }
];
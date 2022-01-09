import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
        //component: HomeComponent
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m=>m.ProductsModule)
        //component: HomeComponent
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m=>m.ContactModule),
        //canActivate: [AdminGuard]
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m=>m.DemoModule)
        //component: HomeComponent
      },
      {
        path: 'about-us',
        loadChildren: () => import('./about-us/about-us.module').then(m=>m.AboutUsModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m=>m.PageNotFoundModule)
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

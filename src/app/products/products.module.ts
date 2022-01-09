import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MaterialModule
    //FormsModule
  ]
})
export class ProductsModule { }

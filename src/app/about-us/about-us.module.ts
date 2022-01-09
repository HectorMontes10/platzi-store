import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    GoogleMapsModule,
    MaterialModule
  ]
})
export class AboutUsModule { 
  
}

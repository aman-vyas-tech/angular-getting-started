import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VendorListComponent } from './vendor-list.component';
import { VendorDetailsComponent } from './vendor-detail.component';
import { VendorDetailGuard } from './vendor-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({

  imports: [
    RouterModule.forChild([
      { path: 'vendors', component: VendorListComponent },
      { path: 'vendorDetails/:id', component: VendorDetailsComponent }
    ]),
    SharedModule
  ],
  declarations: [
    VendorListComponent, VendorDetailsComponent
  ]
})

export class VendorModule { }
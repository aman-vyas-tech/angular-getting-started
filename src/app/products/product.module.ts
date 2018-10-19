import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({

  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailsGuard], component: ProductDetailsComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductDetailsComponent, 
    ProductListComponent, 
    ConvertToSpacesPipe
  ]
})

export class ProductModule { }
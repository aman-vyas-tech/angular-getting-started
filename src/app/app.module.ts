import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { VendorModule } from './vendors/vendor.module';


@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
      // { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    VendorModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent],

  bootstrap: [AppComponent]
})
export class AppModule {

}

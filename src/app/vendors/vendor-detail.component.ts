import { Component, OnInit } from '@angular/core';
import { IVendor } from './vendor';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from './vendor.service';

@Component({
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})

export class VendorDetailsComponent {
  private pageTitle = "Vendor Details Page";
  vendor: IVendor | undefined;
  error: string;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private vendorService: VendorService) { }

  ngOnInit(): void {
    const param = + this.route.snapshot.paramMap.get('id');
    this.getVendor(param);
  }

  getVendor(id: number) {
    this.vendorService.getVendor(id).subscribe(
      vendor =>{
        this.vendor = vendor;
      console.log(this.vendor)} ,
      error => this.error = error
    )
  }

}
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IVendor } from './vendor';
import { VendorService } from './vendor.service';

@Component({
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})

export class VendorListComponent implements OnInit{
  public pageTitle = "Vendor List Page";
  vendors: IVendor[];
  _listFilter = '';
  filteredVendors: IVendor[];

  constructor(private vendorService: VendorService) { }

  get listFilter(): string {
    return this._listFilter;
  }
   
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredVendors = this.vendors ?  this.performFilter(this._listFilter) : this.vendors;
  }

  ngOnInit(): void {

    this.vendorService.getVendors().subscribe(
      vendors => {
        this.vendors = vendors;
        this.filteredVendors=this.vendors;
      }
    )

  }

  performFilter(filterBy: string): IVendor[]{
    filterBy= filterBy.toLocaleLowerCase();
    return this.vendors.filter(
      (vendor: IVendor)=> vendor.vendorName.toLocaleLowerCase().indexOf(filterBy)!==-1
    )
  }

}
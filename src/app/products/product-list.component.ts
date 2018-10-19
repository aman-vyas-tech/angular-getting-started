import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  showImage: boolean = false;
  _listFilter = '';
  filtertedProducts: IProduct[];
  error: string;
  products: IProduct[];

  constructor(private productService: ProductService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List' + message;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filtertedProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
  }

  ngOnInit(): void {
    console.log("Initializing On Init Interface");
    this.productService.getProducts().subscribe(
      products => {
        this.products = products
        this.filtertedProducts = this.products;
      },
      error => this.error = <any>error
    )

  }

  toggleImage(): void {

    this.showImage = !this.showImage;

  }

  calculateDiscount(percent: number): number {
    return;
  }

  performFilter(filterBy: string): IProduct[] {

    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)

  }

}
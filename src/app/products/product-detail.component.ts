import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailsComponent {
  public pageTitle = "Product Details Page";
  product: IProduct | undefined;
  error: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {

  }
  ngOnInit(): void {
    const param = + this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }

  }

  //Getting Product Details
  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.error = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
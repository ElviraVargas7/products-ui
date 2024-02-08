import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productList: Product[] = []

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.productList = data
    }, error => {
      console.log(error)
    })
  }

  deleteProduct(id: any) {
    this._productService.deleteProduct(id).subscribe(data => {
      this.getProducts()
    }, error => {
      console.log(error)
    })
  }
}

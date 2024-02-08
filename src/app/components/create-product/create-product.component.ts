import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  productForm: FormGroup;
  title = "Create Product"
  id: String | null

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private _productService: ProductService,
              private aRouter: ActivatedRoute) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get("id")
  }

  ngOnInit() {
    this.isEdit()
  }

  addProduct() {
    const PRODUCT: Product = {
      product: this.productForm.get("product")?.value,
      category: this.productForm.get("category")?.value,
      price: this.productForm.get("price")?.value
    }

    if(this.id !== null) {
      this._productService.updateProduct(this.id, PRODUCT).subscribe(data => {
        this.router.navigate(['/'])
      }, error => {
        console.log(error)
      })
    } else {
      this._productService.createProduct(PRODUCT).subscribe(data => {
        this.router.navigate(['/'])
      }, error => {
        console.log(error)
        this.productForm.reset()
      })
    }
  }

  isEdit() {
    if (this.id !== null) {
      this.title = "Upate product"
      this._productService.getProduct(this.id).subscribe(data => {
        this.productForm.setValue({
          product: data.product,
          category: data.category,
          price: data.price
        })
      }, error => {
        console.log(error)
      })
    }
  }
}

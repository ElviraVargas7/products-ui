import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
  { path: "", component: ProductsListComponent },
  { path: "create-product", component: CreateProductComponent },
  { path: "edit-product/:id", component: CreateProductComponent },
  { path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

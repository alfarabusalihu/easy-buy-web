import { Component, OnInit, Output } from '@angular/core';
// import { PhoneSpecifics } from 'src/app/shared/interfaces/user.interface';
import { Router } from '@angular/router';
import { Product } from '../shared/interfaces/product.interface';
import { CartItem } from '../shared/interfaces/cart.interface';
import { CartServiceService } from '../cart/cart-service.service';
import { ProductServiceService } from './product-service.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // productInterface:boolean=true;
  p: number = 1;
  products: Product[] = []
  featuredProducts: Product[] = []
  cartData: CartItem;
  productItem: Product;


  constructor(public productService: ProductServiceService, public categoryService: CategoryService, public cartService: CartServiceService, private router: Router) { }

  ngOnInit(): void {

    this.products = this.productService.getProducts()
    console.log(this.products)
    // this.productService.sortProducts()
    this.featuredProductsIdentification()
    // this.categoryService.getAllMainCtg()
  }


  addToCart(item: Product) {
    const data: CartItem = {
      id: item.id,
      name: item.name,
      unitPrice: item.unitPrice,
      qty: 1,
    }
    this.cartService.addToCart(data)
    // console.log("data",data)
  }

  featuredProductsIdentification() {
    this.featuredProducts = [];
    this.products.filter(item => {
      if (item.isFeatured) this.featuredProducts.push(item)
    })
  }


  // productInfo(index: any) {
  //   this.productService.productInfo(index);
  // }

  // specificDisplay(index: any) {
  //   let productid = this.products[index];
  //   console.log(productid);
  // }

  navigateProductDetail(id: string) { this.router.navigate(['/product-detail', id]) }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ClientPagesRoutingModule } from './client-pages-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthRoutingModule } from '../auth/auth-routing.module';
import { RouterModule } from '@angular/router';
// import { AuthModule } from '../auth/auth.module';
import { ContactComponent } from './contact/contact.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { HomeBestsellerComponent } from './home/home-bestseller/home-bestseller.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { HomeFeaturesComponent } from './home/home-features/home-features.component';
import { HomeProductsComponent } from './home/home-products/home-products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    HomeComponent,
    CheckoutComponent,
    CartComponent,
    ProductDetailComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    HomeFeaturesComponent,
    HomeProductsComponent,
    LayoutComponent,
    ContactComponent,
    HomeBestsellerComponent,
    TestimonialComponent,
    HomeCarouselComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    NgxPaginationModule,
    ClientPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    ModalModule.forChild()
  ],
  exports:[
  ]
})
export class ClientPagesModule { }


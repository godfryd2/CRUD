import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { ReadProductsComponent } from './read-products/read-products.component';
// import { CreateProductComponent } from './create-product/create-product.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ReadProductsComponent
    // CreateProductComponent
  ],
  imports: [
    BrowserModule, HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
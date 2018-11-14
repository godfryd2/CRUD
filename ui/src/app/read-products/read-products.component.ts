import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable} from 'rxjs';
import { Product } from '../product';
 
@Component({
    selector: 'app-read-products',
    templateUrl: './read-products.component.html',
    styleUrls: ['./read-products.component.css'],
    providers: [ProductService]
})
 
export class ReadProductsComponent implements OnInit {
 
    @Output() show_create_product_event=new EventEmitter();
    
    // store list of products
    products: Product[];
 
    // initialize productService to retrieve list products in the ngOnInit()
    constructor(private productService: ProductService){}
 
    // methods that we will use later

    // when user clicks the 'create' button
    createProduct(){
        // tell the parent component (AppComponent)
        this.show_create_product_event.emit({
            title: "Create Product"
        });
    }
    
    readOneProduct(id){}
    updateProduct(id){}
    deleteProduct(id){}
 
    // Read products from API.
    ngOnInit(){
        this.productService.readProducts()
            .subscribe(products =>
                this.products=products['records']
            );
    }
}
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
 
@Injectable()
 
// Service for products data.
export class ProductService {
 
    // We need Http to talk to a remote server.
    constructor(private _http : Http){ }
 
    // Get list of products from remote server.
    readProducts(): Observable<Product[]>{
 
        return this._http
            .get("http://godfryd21.unixstorm.org/api/product/read.php")
            .pipe(map((res: Response) => res.json()));
    }
 
    // Send product data to remote server to create it.
    createProduct(product): Observable<Product>{
    
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'my-auth-token'
            })
          };
    
        console.log("product: ", product);
        console.log("headers: ", headers);
        console.log("options: ", options);
        
        return this._http.post(
            "http://godfryd21.unixstorm.org/api/product/create.php",
            {
                "name": "213",
                "price": 123,
                "description": "123",
                "category_id": "3"
            },
            options
        ).pipe(map((res: Response) => res.json()));
    }

    // Get a product details from remote server.
    readOneProduct(product_id): Observable<Product>{
        return this._http
            .get("http://godfryd21.unixstorm.org/api/product/read_one.php?id="+product_id)
            .pipe(map((res: Response) => res.json()));
    }
}
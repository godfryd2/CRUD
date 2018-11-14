import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product';
import { map } from 'rxjs/operators';
 
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
    
        console.log("product: ", product);
        
        return this._http.post(
            "http://godfryd21.unixstorm.org/api/product/create.php",
            product,
            options
        ).pipe(map((res: Response) => res.json()));

    }
}
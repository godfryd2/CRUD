import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Category } from './category';
 
@Injectable()
 
// Service for categories data.
export class CategoryService {
 
    // We need Http to talk to a remote server.
    constructor(private _http: Http) { }
 
    // Get list of categories from database via api.
    readCategories(): Observable<Category[]>{
        return this._http
            .get("http://godfryd21.unixstorm.org/api/category/read.php")
            .pipe(map((res: Response) => res.json()));
    }
 
}
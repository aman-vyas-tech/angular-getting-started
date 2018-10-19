import { Injectable } from '@angular/core';
import { IVendor } from './vendor';
// import { IProduct} from '../products/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VendorService{

private vendorUrl='/assets/vendors.json';

constructor(private http: HttpClient){

}

getVendors(): Observable<IVendor[]>{

  return this.http.get<IVendor[]>(this.vendorUrl)
    .pipe(
      tap(data => console.log("Vendors Data", data)),
      catchError(this.handleError)
    )
}

getVendor(id): Observable<IVendor> {

  return this.getVendors()
  .pipe(
    map((vendors: IVendor[])=>vendors.find(v=>v.vendorId===id)),
    catchError(this.handleError)
    
  )
}

private handleError(err: HttpErrorResponse){
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
  let errorMessage='';

  if(err.error instanceof ErrorEvent){
      // A client-side or network error occurred. Handle it accordingly.
    errorMessage=`Error Occured: ${err.error.message}`;
  }
  else{
     // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
    errorMessage=`Server Error ${err.status} Error Message ${err.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
} 
}
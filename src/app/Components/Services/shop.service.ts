import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stockdetail } from '../Models/stockdetail';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http : HttpClient) { }

  private getstocklisturl = "http://localhost:53861/api/Stockdetail";

  GetStockList() : Observable<Stockdetail[]>{ //This observable needed because when you creating a object in Stockdetail[] type in corresponding ts file need to mention Stockdetail[]  

    return this.http.get<Stockdetail[]>(this.getstocklisturl,httpOptions);

  }



}
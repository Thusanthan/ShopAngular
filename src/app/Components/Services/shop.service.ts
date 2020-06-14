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

  private getstocklisturl = "http://localhost:57629/api/StockDetail";
  private stockentryurl = "http://localhost:57629/api/StockDetail/";
  private sellentryupdateurl = "http://localhost:57629/api/StockDetail/"

  GetStockList() : Observable<Stockdetail[]>{ //This observable needed because when you creating a object in Stockdetail[] type in corresponding ts file need to mention Stockdetail[]  
    return this.http.get<Stockdetail[]>(this.getstocklisturl,httpOptions);
  }

  Stockentry(stockinfo : Stockdetail) : Observable<any>{
    return this.http.post<any>(this.stockentryurl,stockinfo,httpOptions);
  }

  GetStockbyName(ItemName : string): Observable<Stockdetail[]>{
    return this.http.get<Stockdetail[]>(this.getstocklisturl+ItemName,httpOptions);
  }

  SellEntryUpdate(ItemNo : any, sellinfo : Stockdetail) : Observable<any>{
    return this.http.put<any>(this.sellentryupdateurl+ItemNo, sellinfo, httpOptions);
  }


}
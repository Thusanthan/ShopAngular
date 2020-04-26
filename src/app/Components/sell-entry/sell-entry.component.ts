import { Component, OnInit } from '@angular/core';
import { ShopService } from '../Services/shop.service';
import { Stockdetail } from '../Models/stockdetail';

@Component({
  selector: 'app-sell-entry',
  templateUrl: './sell-entry.component.html',
  styleUrls: ['./sell-entry.component.css']
})
export class SellEntryComponent implements OnInit {

  form : any = {};

  stocklist : Stockdetail[];
  searchterm : string;

  constructor(private shopservice : ShopService) { }

  ngOnInit() {

    this.shopservice.GetStockList().subscribe(
      datab => {
        console.log(datab);
        this.stocklist = datab;
      })

  }

  onSave(dataf :any){
    console.log(dataf);

  }

}

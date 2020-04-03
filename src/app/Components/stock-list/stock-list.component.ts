import { Component, OnInit } from '@angular/core';
import { ShopService } from '../Services/shop.service';
import { Stockdetail } from '../Models/stockdetail';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stockdetail : Stockdetail [];

  constructor(private getStockdetailService : ShopService) { }

  ngOnInit() {

    this.getStockdetailService.GetStockList().subscribe(
      datab => {
        console.log(datab)
        this.stockdetail = datab;
        

      }
    )



  }

}

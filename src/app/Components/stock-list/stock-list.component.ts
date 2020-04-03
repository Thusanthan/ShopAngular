import { Component, OnInit } from '@angular/core';
import { ShopService } from '../Services/shop.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  constructor(private getStockdetailService : ShopService) { }

  ngOnInit() {

    this.getStockdetailService.GetStockList().subscribe(
      datab => {
        console.log(datab)
      }
    )



  }

}

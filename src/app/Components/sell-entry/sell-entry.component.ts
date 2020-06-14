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
  selectedItemName : string ;
  stock : Stockdetail;

  sellstock : Stockdetail;

  constructor(private shopservice : ShopService) { }

  ngOnInit() {

    this.shopservice.GetStockList().subscribe(
      datab => {
        console.log(datab);
        this.stocklist = datab;
        
      })

     
  }

  selectChangeHandler(event : any){
    this.selectedItemName = event.target.value;
    console.log(this.selectedItemName);

    this.stocklist.forEach(stocks => {
      if(stocks.ItemName == this.selectedItemName)
      {
        this.stock = stocks;

      }
    })
    
  }

  onSave(dataf :any){
    console.log(dataf);
    console.log(this.stock.ItemId);

    var num = this.stock.Quantity - this.form.quantity;
    console.log(num);
    console.log(this.form.itemName);
    console.log(this.stock.PurchasePrice);
    console.log(this.stock.SellingPrice);
    
    
   this.sellstock = new Stockdetail(this.form.itemName, num,this.stock.PurchasePrice,this.stock.SellingPrice);

   this.shopservice.SellEntryUpdate(this.stock.ItemId, this.sellstock).subscribe(
     datab => {

      console.log(datab);

      })



  }

}

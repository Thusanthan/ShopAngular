import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShopService } from '../Services/shop.service';
import { Stockdetail } from '../Models/stockdetail';
import { Router } from '@angular/router';



@Component({
  selector: 'app-stock-entry',
  templateUrl: './stock-entry.component.html',
  styleUrls: ['./stock-entry.component.css']
})
export class StockEntryComponent implements OnInit {

  form : any = {};

  stockinfo : Stockdetail ;
  

  constructor(private shopservice : ShopService, private route : Router) { }

  ngOnInit() {


  }



  resetForm(forms?: NgForm){
    if(forms != null )
    forms.resetForm();

  }

  onSave(dataf : any){
    
    this.stockinfo = new Stockdetail(this.form.ItemName, this.form.Quantity, this.form.PurchasePrice, this.form.SellingPrice);
    

    this.shopservice.Stockentry(this.stockinfo).subscribe(
      datab => {
        console.log(datab);
      })

  }

  onEnter(dataf1 : any){
    console.log(dataf1);

    


  }

}

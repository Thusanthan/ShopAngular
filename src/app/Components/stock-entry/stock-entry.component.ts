import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-entry',
  templateUrl: './stock-entry.component.html',
  styleUrls: ['./stock-entry.component.css']
})
export class StockEntryComponent implements OnInit {

  form : any = {};

  constructor() { }

  ngOnInit() {
  }

  onSave(dataf : any){
    console.log(dataf);

  }

  onEnter(dataf1 : any){
    console.log(dataf1);

  }

}

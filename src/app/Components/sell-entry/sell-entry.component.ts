import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-entry',
  templateUrl: './sell-entry.component.html',
  styleUrls: ['./sell-entry.component.css']
})
export class SellEntryComponent implements OnInit {

  form : any = {};

  constructor() { }

  ngOnInit() {
  }

  onSave(dataf :any){
    console.log(dataf);

  }

}

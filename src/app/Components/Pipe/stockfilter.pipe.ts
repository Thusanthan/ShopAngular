import { Pipe, PipeTransform } from '@angular/core';
import { Stockdetail } from '../Models/stockdetail';

@Pipe({
  name: 'stockfilter'
})
export class StockfilterPipe implements PipeTransform {

  transform(stocklist : Stockdetail[], searchterm : string): Stockdetail[] {
    if(!stocklist || !searchterm){
      return stocklist
    }

    return stocklist.filter(stock => stock.ItemName.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);
  }


}

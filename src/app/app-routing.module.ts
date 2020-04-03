import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockEntryComponent } from './Components/stock-entry/stock-entry.component';
import { SellEntryComponent } from './Components/sell-entry/sell-entry.component';
import { HomeComponent } from './Components/home/home.component';
import { StockListComponent } from './Components/stock-list/stock-list.component';

const routes: Routes = [

  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'stock-list',
    component : StockListComponent
  },
  {
    path : 'stock-entry',
    component : StockEntryComponent
  },
  {
    path : 'sell-entry',
    component : SellEntryComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

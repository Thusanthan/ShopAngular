import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { StockEntryComponent } from './Components/stock-entry/stock-entry.component';
import { SellEntryComponent } from './Components/sell-entry/sell-entry.component';
import { StockListComponent } from './Components/stock-list/stock-list.component';
import { ShopService } from './Components/Services/shop.service';
import { StockfilterPipe } from './Components/Pipe/stockfilter.pipe';
import { ReturnEntryComponent } from './Components/return-entry/return-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StockEntryComponent,
    SellEntryComponent,
    StockListComponent,
    
    StockfilterPipe,
    
    ReturnEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }

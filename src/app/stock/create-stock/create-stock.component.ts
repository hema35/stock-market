import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent  {

public stock: Stock;
public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
public confirmed = false;
  constructor() {
    this.stock = new Stock('','',0,0,'NASDAQ');
   }

  //  setStockPrice(price) {
  //    this.stock.price = price;
  //    this.stock.previousPrice = price;
  //  }

   createStock(stockForm) {
     console.log('Stock form', stockForm.value);
     if(stockForm.valid) {
       this.stock = stockForm.value.stock;
     console.log('Creating stock', this.stock);
   } else {
     console.error('Stock form is in an invalid state');
   }

  }

}

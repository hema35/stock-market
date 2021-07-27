import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Stock } from 'src/app/model/stock';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent  {

  public stockForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.stockForm = this.fb.group({
    name: [null, Validators.required ],
    code: [null, [Validators.required, Validators.minLength(2)]],
    price: [0, [Validators.required, Validators.min(0)]]
  });
  }



  onSubmit() {
    console.log('Stock Form Value', this.stockForm.value);
  }
}

// public stock: Stock;
// public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
// public confirmed = false;
//   constructor() {
//     this.stock = new Stock('','',0,0,'NASDAQ');
//    }

  //  setStockPrice(price) {
  //    this.stock.price = price;
  //    this.stock.previousPrice = price;
  //  }

  //  createStock(stockForm) {
  //    console.log('Stock form', stockForm.value);
  //    if(stockForm.valid) {
  //      this.stock = stockForm.value.stock;
  //    console.log('Creating stock', this.stock);
  //  } else {
  //    console.error('Stock form is in an invalid state');
  //  }


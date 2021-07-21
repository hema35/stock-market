import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-market';

  public stock: Stock;

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }
  onToggleFavorite(stock:Stock){
    console.log('favorite for stock', stock, 'was triggered');
    this.stock.favorite = !this.stock.favorite;
  }
}

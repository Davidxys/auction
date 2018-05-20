import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  private stocks : Stock[]= [
    new Stock(1, "1 the first1 stock", 1.99, 3.5, "this is the first which i study", ["IT", "internet"]),
    new Stock(2, "2 the first2 stock", 2.99, 1.5, "this is the 2 which i study", ["xxx", "internet"]),
    new Stock(3, "3 the first3 stock", 4.99, 2.5, "this is the 3 which i study", ["ccc", "bbb"]),
    new Stock(4, "the first4 stock", 11.99, 4.5, "this is the 4 which i study", ["IT", "bbb"]),
    new Stock(5, "the first5 stock", 3.99, 3.5, "this is the 5 which i study", ["xxx", "bbb"]),
    new Stock(6, "the first6 stock", 7.99, 2, "this is the 6 which i study", ["ccc", "aaa"]),
    new Stock(7, "the first7 stock", 5.99, 1, "this is the 7 which i study", ["IT", "internet"]),
    new Stock(8, "the first8 stock", 8.99, 4, "this is the 8 which i study", ["IT", "internet"]),
  ];

  getStocks():Stock[] {
    return this.stocks;
  }
  getStock(id:number) {
    var stock = this.stocks.find(stock => stock.id == id);
    if(!stock) {
      stock = new Stock(0, "", 0, 0, "", []);
    }
    return stock;
  }
}
export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
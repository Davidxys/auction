import { Component, OnInit } from '@angular/core';
import { StockService, Stock } from '../stock.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  public stocks:Array<Stock>;
  private nameFilter:FormControl = new FormControl();
  private keyword:string;


  constructor(public rout:Router, public stockService:StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
        .subscribe(value => this.keyword = value);
  }
  update(stock:Stock) {
    this.rout.navigateByUrl("/stock/"+stock.id);
  }
}


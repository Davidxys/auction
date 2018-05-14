import { Component, OnInit } from '@angular/core';
import { Stock, StockService } from '../stock.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  private stocks:Stock;
  constructor(private stockService: StockService, 
    private roteInfo:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let stockId = this.roteInfo.snapshot.params['id'];
    this.stocks = this.stockService.getStock(stockId);
  }
  cancel(){
    this.router.navigateByUrl("stock");
  }
  save(){
    this.router.navigateByUrl("stock");
  }
}

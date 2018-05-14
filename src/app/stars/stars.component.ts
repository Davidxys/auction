import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  rating:number = 0;
  @Output()
  ratingChange:EventEmitter<number> = new EventEmitter();

  @Input()
  readonly:boolean = true;
  stars:boolean[];
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i = 1; i<= 5; i++) {
      this.stars.push(i > this.rating);
    }
    this.stars = [false, false, true, true, true];
  }
  clickStar(index:number) {
    if(!this.readonly) {
      this.rating = index + 1;
      for(let i = 1; i<= 5; i++) {
        this.stars.push(i > this.rating);
      }
      this.stars = [false, false, true, true, true];
      this.ratingChange.emit(this.rating);
    } 
  }

}

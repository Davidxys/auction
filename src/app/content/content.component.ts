import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle = "";

  constructor(public router: Router) {
    // this.router.events.filter(event => event instanceof NavigationEnd)
    // .subscribe((event:NavigationEnd) => {
    //   if(event.url == '/dashboard') {
    //     this.pageTitle = "这里是首页";
    //   } else if(event.url.startsWith('/stock')) {
    //     this.pageTitle = "股票信息管理";
    //   }
    // });
   }

  ngOnInit() {
    
  }

}


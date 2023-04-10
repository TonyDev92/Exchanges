import { ExchangesService } from './../../shared/services/exchanges.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  constructor(private ExchangesService : ExchangesService) {}
    exchanges!: any;
    entries!: any;
    base!: any;
    data: any = 'EUR';
    money: number = 1

    getExchangesByBase(param: string | null){
      this.ExchangesService.getExchangesByBase(this.data).subscribe(res => {
        this.exchanges = res;
        this.entries = Object.entries(this.exchanges.rates)
        console.log(res);
        
      })
    }
    ngOnInit(): void {
      this.ExchangesService.getExchanges().subscribe(res => {
        
        this.exchanges = res;
        console.log(this.exchanges);
        this.entries = Object.entries(this.exchanges.rates)
        console.log(this.entries);
        
        
      })
      // this.ExchangesService.getExchangesByBase(this.data).subscribe(res => {
      //     this.base = res;
      //     console.log(this.base);
      //     console.log(res);
          
      // })
    }
}

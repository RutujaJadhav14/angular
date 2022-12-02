import { Component, EventEmitter, OnInit } from '@angular/core';
import { QuoteserviceService } from '../quoteservice.service';
import { Input,Output } from '@angular/core';

import { faArrowUp ,faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { Icompanyname, Istock } from '../models/stock';
@Component({
  selector: 'app-stockcomponent',
  templateUrl: './stockcomponent.component.html',
  styleUrls: ['./stockcomponent.component.css']
})

export class StockcomponentComponent implements OnInit {
  icon1=faArrowUp;
  icon2=faArrowDown;

  constructor(private quote:QuoteserviceService) {
}
  @Input() symbol1='';
  @Output() remove=new EventEmitter<string>;
   newdata: Istock | undefined;
   newdata1:Icompanyname | undefined ;
   Sdescription:string="";
  Schange:number | undefined;
  //  Operation = true ;
  
   
  ngOnInit(): void {
 
    console.log("symbol1value"+this.symbol1)
    this.quote.getsym(this.symbol1);

      
    this.quote.getConfig1().subscribe((res1:Icompanyname)=> {this.newdata1=res1;
      this.Sdescription=this.newdata1?.result[0].description ;
    })

    //console.log(this.newdata1);
    this.quote.getConfig().subscribe((res:Istock)=>{this.newdata=res;
      this.Schange=this.newdata.d ;}
    );
    
    //console.log(this.newdata);
  }
  //console.log( this.newdata);
  removeSymbol(symbol:string){
   
this.remove.emit(symbol);
  }
}



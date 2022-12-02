import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QuoteserviceService } from '../quoteservice.service';
import { faArrowUp ,faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { Isentiment,Icompanyname  } from '../models/stock';
@Component({
  selector: 'app-detailcomponent',
  templateUrl: './detailcomponent.component.html',
  styleUrls: ['./detailcomponent.component.css']
})
export class DetailcomponentComponent implements OnInit {
  icon1=faArrowUp;
  icon2=faArrowDown;
  newdata2:Isentiment | undefined;




  // monthN=this.D1.getMonth()+1;
  // monthN1=this.D1.getMonth()-3;
  months=[ "January", "February", "March", "April", "May", "June", 

  "July", "August", "September", "October", "November", "December" ];
  id: string="";
  newdata1:Icompanyname | undefined ;
 
newdata3!: string;

current = new Date();

mo1=this.current.getMonth()-3;
mo11=this.months[this.mo1];
mo2=this.current.getMonth()-2;
mo22=this.months[this.mo2];
mo3=this.current.getMonth()-1;
mo33=this.months[this.mo3];
   
  

  constructor(private quote:QuoteserviceService,private route: ActivatedRoute

    ) {
     
  }
  datazerochange!:number ;
  dataonechange!:number ;
  datatwochange!:number  ;
  datazeromspr:number | undefined;
  dataonemspr:number | undefined;
  datatwomspr:number | undefined;
  datazeromonth!:number;
  dataonemonth!:number ;
  datatwomonth!:number ;

  ngOnInit(): void {
    
    this.id = String(this.route.snapshot.paramMap.get('id'));
    
    console.log(this.id);
    
    
    this.quote.getid(this.id);
   
   this.quote.getConfig3().subscribe((res3:any)=> {this.newdata3=res3.result[0].description;
  });
    this.quote.getConfig2().subscribe((res2:Isentiment)=> {this.newdata2=res2;
    this.datazerochange=this.newdata2?.data[0].change ;
    this.dataonechange=this.newdata2?.data[1].change ;
    this.datatwochange=this.newdata2?.data[2].change ;
    this.datazeromspr=this.newdata2?.data[0].mspr;
    this.dataonemspr=this.newdata2?.data[1].mspr;
    this.datatwomspr=this.newdata2?.data[2].mspr;
    this.datazeromonth=this.newdata2?.data[0].month;
    this.dataonemonth=this.newdata2?.data[1].month;
    this.datatwomonth=this.newdata2?.data[2].month;
    });
     
    
  }


    
    
  
}

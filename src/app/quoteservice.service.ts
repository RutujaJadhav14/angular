import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Istock,Icompanyname ,Isentiment} from './models/stock';

@Injectable({
  providedIn: 'root'
})

export class QuoteserviceService {
  
  symbname: string=" ";
  
  
  today = new Date();
dd = String(this.today. getDate()). padStart(2, '0');
 mm = String(this.today. getMonth() + 1). padStart(2, '0'); //January is 0!
 yyyy = this.today. getFullYear();
today1 = this.yyyy + '-' + this.mm + '-' +this.dd ;



backdate = new Date();
t1=this.backdate.setMonth(this.backdate.getMonth()- 3);
backdat1 = new Date(this.t1);
mo1=this.backdat1.getMonth()+1;
dd1 = String(this.backdat1. getDate()). padStart(2, '0');
 mm1 = String(this.backdat1. getMonth() + 1). padStart(2, '0'); 
 yyyy1 = this.backdat1. getFullYear();
​today2 = this.yyyy1 + '-' + this.mm1 + '-' +this.dd1 ;

  
symbid: string="";
 
 getsym(s1:string){
      this.symbname=s1;
    }
    getid(s2:string){
      this.symbid=s2;
      console.log(this.symbid);
    }
    
    getConfig1() {
      
      return this.http.get<Icompanyname>("https://finnhub.io/api/v1/search?q="+this.symbname+"&token=bu4f8kn48v6uehqi3cqg");
  
    }
    getConfig() {
      
      return this.http.get<Istock>("https://finnhub.io/api/v1/quote?symbol="+this.symbname+"&token=bu4f8kn48v6uehqi3cqg");
  
    }

    getConfig2() {
      //console.log(this.symbid);
      return this.http.get<Isentiment>("https://finnhub.io/api/v1/stock/insider-sentiment?symbol="+this.symbid+"&from="+this.today2+"&to="+this.today1+"&token=bu4f8kn48v6uehqi3cqg");
  
    }
    getConfig3(){
      return this.http.get("https://finnhub.io/api/v1/search?q="+this.symbid+"&token=bu4f8kn48v6uehqi3cqg");
    }
   
  constructor(private http:HttpClient) { 

    
   
  }
  

  
  
}

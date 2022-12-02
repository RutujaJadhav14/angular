import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {
  //symbol = 'Television';

  rForm!: FormGroup;
  symbol: any={};
  symbolValue : any;
  
  symbols:string[]=[];
  constructor(private fb:FormBuilder ) { }

  ngOnInit() {
   this.createRForm();
   let stocks = localStorage.getItem('Symbols');

    if (stocks !== null) {

      this.symbols = JSON.parse(stocks);

    }

  }

  createRForm(){
    this.rForm= new FormGroup({
      symbolName: new FormControl(null,Validators.required)   
   
    })
  }
  onSubmit(){
    // console.log(this.rForm.get('symbolName')?.value);
    this.symbol=this.rForm.get('symbolName')?.value;
   this.addSymbol(this.symbol);
  }
//symbols:any ;
  addSymbol(symbol:String){
    //let symbols=[];
   
    if( localStorage.getItem("Symbols")){
      this.symbols=JSON.parse( localStorage.getItem("Symbols") || "{}");
      //console.log(this.symbols)
      this.symbols=[ ...this.symbols, this.symbol];
      console.log(this.symbols)
     //this.symbols.push(symbol)
    } else{
      this.symbols=[this.symbol]
    }
    localStorage.setItem("Symbols", JSON.stringify(this.symbols));
  }

remove(symbol:string){
 
const Stack=localStorage.getItem('Symbols');
if(Stack!==null)
{
  const oldStack:string[]=JSON.parse(Stack);
  const newStack:string[]=oldStack.filter((sym)=> sym!==symbol);
  localStorage.setItem('Symbols',JSON.stringify(newStack));
}
this.symbols=this.symbols.filter((sym)=> sym!==symbol)
}

}

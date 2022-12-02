export interface Istock {
    c:number;
    d:number;
    h:number;
    o:number;
   
}
export interface Icompanyname{
    result:Array<Icompanydetails>
}
 interface Icompanydetails{
    description:string;
}
export interface Isentiment{
    data:Array<Idetails>
}
 interface Idetails{
    change:number;
    mspr:number;
    month:number;
    symbol:string;
}

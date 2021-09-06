import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';
export class ProductSubcat{
  Id:number=0;
  Name:string="";
  maincategoryId:number=0;
}


// export class Products{
//   ProductId:number=0;
//   Productname:string="";
//   Productfeatures:string="";
// }
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // ProductName:string="Acer";
  // ProductCategory :Products=new Products();
  // ProductArray:Products[]=[];
  //  Id:string="Acer";
  Name:string="men";
  ProductSubCategory :ProductSubcat=new ProductSubcat();
  ProductSubArray:ProductSubcat[]=[];
  

  //ProductSubArray: any;

  constructor(private http:HttpClient) {
    for( var i:number=1;i<=100;i++){
    
      var data = new ProductSubcat();
       data.Id=i;
       data.Name="women"+i;
       data.maincategoryId=1;
       this.ProductSubArray.push(data)
   }
}
GetProductSubcat():Observable<any>{
  var data=this.http.get('https://localhost:44327/api/ProductSubcat')
  return data;
// GetProducts():Observable<any>{
//    var data2=this.http.get('https://localhost:44327/api/AllProducts')
//    return data2;
}
}
                                                 
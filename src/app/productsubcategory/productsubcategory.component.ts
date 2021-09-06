import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
export class ProductSubcat{
  Id:number=0;
  Name:string="";
  maincategoryId:number=0;
}

@Component({
  selector: 'app-productsubcategory',
  templateUrl: './productsubcategory.component.html',
  styleUrls: ['./productsubcategory.component.css']
})
export class ProductsubcategoryComponent implements OnInit {
ProductSubCategory :ProductSubcat=new ProductSubcat();
ProductSubArray:ProductSubcat[]=[];
InputArray:ProductSubcat[]=[];
allProductSubcat:ProductSubcat[]=[];
n:any;
 //name: string;
constructor(private  Httpapi:ProductService) { 
  //this.name=this.Httpapi.Name;
  this.allProductSubcat=this.Httpapi.ProductSubArray;

  for( var i:number=1;i<=100;i++){
    
    var data = new ProductSubcat();
     data.Id=i;
     data.Name="women"+i;
     data.maincategoryId=1;
     this.ProductSubArray.push(data)
     //this.allProducts=this.ProductServiceapi.
     }
}

  ngOnInit(): void {
  }

}

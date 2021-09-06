import { Component, OnInit } from '@angular/core';
import{ ProductService } from './../product.service';
export class Products{
  ProductId:number=0;
  Productname:string="";
  Productfeatures:string="";
}

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {
ProductCategory :Products=new Products();
ProductArray:Products[]=[];
InputArray:Products[]=[];
allProducts:Products[]=[];
Products:any;
n:any;
//name: string;
  constructor(private  Httpapi:ProductService ) { 
     //this.name=this.Httpapi.ProductName;
     //this.allProducts=this.Httpapi.ProductArray;
    /*this.ProductCategory.ProductId=1;
    this.ProductCategory.Productname="Hp";
    this.ProductCategory.Productfeatures="8GB RAM 512 GB SSD"; 
    this.ProductArray.push( this.ProductCategory);

    this.ProductCategory.ProductId=2;
    this.ProductCategory.Productname="DELL";
    this.ProductCategory.Productfeatures="4GB RAM 1T  HDD"; 
    this.ProductArray.push( this.ProductCategory);*/
    debugger;
    /*var data = new Products();
    data.ProductId=1;
    data.Productname="Dell";
    data.Productfeatures="8GB RAM 500GB";
    this.ProductArray.push(data);
    
    var data1 = new Products();
    data1.ProductId=2;
    data1.Productname="HP";
    data1.Productfeatures="4GB RAM 1T";
    this.ProductArray.push(data1);*/
    
    for( var i:number=1;i<=100;i++){
    
   var data2 = new Products();
    data2.ProductId=i;
    data2.Productname="LENOVO"+i;
    data2.Productfeatures="32GB RAM 1T";
    this.ProductArray.push(data2)
    //this.allProducts=this.ProductServiceapi.
    }
  }

  ngOnInit(): void {
 }
  Add(){
    this.InputArray.push(new Products());
  }
  Remove(n:number){
    this.InputArray.splice(n,1);
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductService } from './../../product/product.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss'],
  providers: [ProductService]
})
export class EditproductComponent implements OnInit {
  productIDX;productRESget;productRES;catRES;
  selected = '16';
  constructor(private router2: Router,private route: ActivatedRoute,private productAPI: ProductService) { }

  ngOnInit() 
  {
    this.updateProduct();
    this.getCat();  
  }
  getCat()
  {
   this.productAPI.getCategory()
   .subscribe((productMODEL) => {this.catRES = productMODEL;console.log(productMODEL);});  
  } 
updateProduct()
{
   this.route.params.subscribe( (params) => {
     this.productIDX = params;
      console.log("editproduct: "+params.id);      
      let idx =  params.id;    
      this.DetailProduct(idx);
    });
}
DetailProduct(xi)
 {
   
    this.productAPI.getdetailProduct(xi)
    .subscribe((productMODEL) => {
      this.productRESget = productMODEL;
      if(productMODEL.status.cause=='SUCCESS')
      {
        console.log("getDetailProduct "+JSON.stringify(productMODEL));
      }
      
      });  
 }
  upProduct(credentials) 
  {
    
    credentials.id=(<HTMLInputElement>document.getElementById("id")).value;
    credentials.code=(<HTMLInputElement>document.getElementById("code")).value;
    credentials.name=(<HTMLInputElement>document.getElementById("name")).value;
    credentials.price=(<HTMLInputElement>document.getElementById("price")).value;
    credentials.stock=(<HTMLInputElement>document.getElementById("stock")).value;    
    if(credentials.productCategoryid=="")
    {
    } 
    credentials.productCategoryid=this.productRESget.body[0].categoryId;
    credentials.shortDescription=(<HTMLInputElement>document.getElementById("shortDescription")).value;
    credentials.description=(<HTMLInputElement>document.getElementById("description")).value;
    
    this.productAPI.updatedProduct(credentials)
    .subscribe((productMODEL) => { this.productRES = productMODEL;
      console.log("updated : "+this.productRES.status.cause);
      if(this.productRES.status.cause=="SUCCESS")
      {
        this.router2.navigate(['/product']);
      }else
      {
        alert("error update data!");
      }
    });  
   
}

}

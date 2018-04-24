import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../product/product.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
  providers: [ProductService]
})
export class AddproductComponent implements OnInit {
productRES;catRES;
  constructor(private productAPI: ProductService,private router: Router) { }
  ngOnInit() {
    this.getCat();
  }
  getCat()
 {
  this.productAPI.getCategory()
  .subscribe((productMODEL) => {this.catRES = productMODEL;
    console.log("Category: "+productMODEL);
  });  
 }
  saveProduct2(credentials) {
      
    this.productAPI.addProduct(credentials)
      .subscribe((productMODEL) => { 
        this.productRES = productMODEL;
        console.log("Log status: "+this.productRES.status.cause);
        if(this.productRES.status.cause=="SUCCESS")
        {
          this.router.navigate(['/product']);
        }else
        {
          alert("error save data!");
        }
      });    
      
      /*
      (<HTMLInputElement>document.getElementById("code")).value = "";
      (<HTMLInputElement>document.getElementById("name")).value = "";
      (<HTMLInputElement>document.getElementById("price")).value = "";
      (<HTMLInputElement>document.getElementById("stock")).value = "";
      (<HTMLInputElement>document.getElementById("productCategoryid")).value = "";
      (<HTMLInputElement>document.getElementById("shortDescription")).value = "";
      (<HTMLInputElement>document.getElementById("description")).value = "";
  */
  }
}

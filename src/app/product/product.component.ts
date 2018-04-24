import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { ProductService } from './product.service';
import {MatPaginator, MatSort, MatDialog,MatTableDataSource} from '@angular/material';
import { PAGING_PAGESIZE, PAGING_PAGESIZEOPTIONS } from '../_const/properties.const';
import { DialogsService } from '../shared/dialogs/dialogs.service';
import {SelectionModel} from '@angular/cdk/collections';
import {
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatSlideToggleModule,
  MatTableModule,
  MatSelectModule } from '@angular/material';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService,DialogsService] 
})
export class ProductComponent implements OnInit , AfterViewInit
{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  productRES;productRESDel;
  matTableDataSource = new MatTableDataSource<any>();
  matTableDataSourceColumns = ['code','name','description','price','stock','activeStatus','action'];
  selection = new SelectionModel<any>(true, []);
  pageSize: number = PAGING_PAGESIZE;
  pageSizeOptions: number[] = PAGING_PAGESIZEOPTIONS;
  constructor(public productAPI: ProductService,
    public dialog: MatDialog,
    private dialogsService: DialogsService) { }
  
  ngOnInit() 
  {
      this.loadData();
  }
  ngAfterViewInit() {
    this.matTableDataSource.paginator = this.paginator;
    this.matTableDataSource.sort = this.sort;
  }
  updateUSERS()
  {
    this.productAPI.updateUSER()
    .subscribe((productMODEL) => {
      this.productRES = productMODEL;
      console.log(("updateUSERS: "+productMODEL));
      console.log("updateUSERS Res: "+JSON.stringify(productMODEL));
      
      }); 
  }
  loadData() 
  {
   this.productAPI.getProduct()
   .subscribe((productMODEL) => {
      this.productRES = productMODEL;
      console.log(("Ndata: "+productMODEL.body.length));
      console.log("Product Res: "+JSON.stringify(productMODEL.body));
      this.matTableDataSource.data = (productMODEL.body);
      });    
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.matTableDataSource.filter = filterValue;
  }
  deleteProduct(xi)
  {
    
      this.productAPI.deleteProduct(xi)
      .subscribe((productMODEL) => {
        this.productRESDel = productMODEL;
        if(productMODEL.status.cause=='SUCCESS')
        {
          this.loadData();
        }
        console.log(productMODEL.status.cause);
        });  
      
  }
 
}

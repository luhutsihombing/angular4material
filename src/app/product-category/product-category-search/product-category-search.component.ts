import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialogRef, MatDialog } from '@angular/material';
import { ProductCategoryService } from '../_services/product-category.service';
import { ProductCategory, ProductCategoryResponse } from '../_models/product-category';
import { DELETE_TITLE_DIALOG, DELETE_MESSAGE_DIALOG, PAGING_PAGESIZE, PAGING_PAGESIZEOPTIONS } from '../../_const/properties.const';
import { DialogsService } from '../../shared/dialogs/dialogs.service';

@Component({
  selector: 'app-product-category-search',
  templateUrl: './product-category-search.component.html',
  styleUrls: ['./product-category-search.component.scss']
})
export class ProductCategorySearchComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'code', 'name', 'actions'];
  fleetData = null;
  dataSource = new MatTableDataSource<ProductCategory>();

  pageSize: number = PAGING_PAGESIZE;
  pageSizeOptions: number[] = PAGING_PAGESIZEOPTIONS;

  title: string ;
  message: string;
  color: string;

  statusCode: ProductCategoryResponse;
  result: any;

  constructor(
    private _prodCatService: ProductCategoryService,
    public dialog: MatDialog,
    private dialogsService: DialogsService
  ) { }

  ngOnInit() {
    this.loadData();
    this.title = `${DELETE_TITLE_DIALOG}`;
    this.color = 'warn';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadData() {
    this._prodCatService.getProductCategories().subscribe(data => {
      this.fleetData = data.body;
      this.dataSource.data = this.fleetData;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public showDialog(_prodCat: ProductCategory) {
    this.dialogsService.confirm(this.title, this.getMessage(_prodCat.name), _prodCat, this.color)
      .subscribe(res => {
        this.result = res;
        if (res) {
          this._prodCatService.deleteProductCategoryById(this.result.id)
            .subscribe(successCode => {
              this.statusCode = successCode;
              this.loadData();
            },
              errorCode => this.statusCode = errorCode
            );
        }
      });
  }

  getMessage(param: any) {
    this.message = `${DELETE_MESSAGE_DIALOG}` + param + ' ?';
    return this.message;
  }

}

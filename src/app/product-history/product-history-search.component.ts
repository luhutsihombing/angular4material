import { PAGING_PAGESIZE, PAGING_PAGESIZEOPTIONS } from './../_const/properties.const';
import { ProductHistorySearchService } from './_service/product-history-search.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
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
  selector: 'app-product-history-search',
  templateUrl: './product-history-search.component.html',
  styleUrls: ['./product-history-search.component.scss'],
  providers: [ProductHistorySearchService]
})
export class ProductHistorySearchComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  productHistoryRES; productHistoryRESDel;
  matTableDataSource = new MatTableDataSource<any>();
  matTableDataSourceColumns = ['id', 'code', 'name', 'description', 'shortDescription', 'price', 'stock'];
  selection = new SelectionModel<any>(true, []);

  pageSize: number = PAGING_PAGESIZE;
  pageSizeOptions: number[] = PAGING_PAGESIZEOPTIONS;

  constructor(public productHistorySearchAPI: ProductHistorySearchService) { }

  ngOnInit() {
      this.loadData();
      this.matTableDataSource.sort = this.sort;
      this.matTableDataSource.paginator = this.paginator;


  }

  loadData() {
   this.productHistorySearchAPI.getProductHistory()
   .subscribe((productHistorySearchMODEL) => {
      this.productHistoryRES = productHistorySearchMODEL;
      this.matTableDataSource.data = (productHistorySearchMODEL.body);
      });
 }

 applyFilter(filterValue: string) {
  filterValue = filterValue.trim();
  filterValue = filterValue.toLowerCase();
  this.matTableDataSource.filter = filterValue;
}


}

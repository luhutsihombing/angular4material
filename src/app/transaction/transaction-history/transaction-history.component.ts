import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { TransactionHistoryService } from './transaction-history.service';
import {MatPaginator, MatSort, MatDialog,MatTableDataSource} from '@angular/material';
import { PAGING_PAGESIZE, PAGING_PAGESIZEOPTIONS } from '../../_const/properties.const';
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
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
  providers: [TransactionHistoryService] 
})
export class TransactionHistoryComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  productRES;productRESDel;
  matTableDataSource = new MatTableDataSource<any>();
  matTableDataSourceColumns = ['id','orderPrice','productId','quantity','totalPrice'];
  selection = new SelectionModel<any>(true, []);
  pageSize: number = PAGING_PAGESIZE;
  pageSizeOptions: number[] = PAGING_PAGESIZEOPTIONS;
  constructor(public API: TransactionHistoryService) { }

  ngOnInit() {
    this.loadData();
  }
  ngAfterViewInit() {
    this.matTableDataSource.paginator = this.paginator;
    this.matTableDataSource.sort = this.sort;
  }
  loadData() 
  {
   this.API.getTransaction()
   .subscribe((historyMODEL) => {
      this.productRES = historyMODEL;
      //console.log(("Ndata: "+historyMODEL.body.length));console.log("Transaction History : "+JSON.stringify(historyMODEL.body));
      this.matTableDataSource.data = (historyMODEL.body);
      }); 
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.matTableDataSource.filter = filterValue;
  }
}

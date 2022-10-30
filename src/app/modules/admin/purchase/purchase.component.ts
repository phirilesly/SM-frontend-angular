import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from 'app/shared/models/product.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Location } from '@angular/common';
import { PurchaseService } from './purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'barcode',
   'category', 'price','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  id = this.actRoute.snapshot.params['id'];

  purchaseData: any = [];




  public display: number = 1;

  constructor(private purchaseService: PurchaseService, private router: Router, public actRoute: ActivatedRoute,private location: Location) { }

  
  ngOnInit(): void {
    this.getPurchases();

    this.purchaseService.getPurchase(this.id).subscribe((data: {}) => {
      this.purchaseData = data;
    })

    this.loadPurchases();
  }



  changeDisplay(mode: number): void {
    this.display = mode;
  }

  loadPurchases() {
    return this.purchaseService.getPurchases().subscribe((data: {}) => {
      this.purchaseData = data;
    });
  }
 
  
  getPurchases(): void {
    this.purchaseService.getPurchases()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  updatePurchase(purchaseid: string) {
    this.router.navigateByUrl(`main/purchases/edit/${purchaseid}`);
  }


  deletePurchase(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.purchaseService.deletePurchase(id).subscribe((data) => {
        this.loadPurchases();
      });
     

    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}

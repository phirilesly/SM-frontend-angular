import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from 'app/shared/models/product.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Location } from '@angular/common';
import { InventoryService } from '../inventory.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
 
  id = this.actRoute.snapshot.params['id'];
 
  productData: any = [];
 
 
 
 
  public display: number = 1;
 
  constructor(private inventoriesService: InventoryService, private router: Router,  public actRoute: ActivatedRoute,private location: Location) { }
 
  
  ngOnInit(): void {
    this.getInventories();
 
    this.inventoriesService.getInventory(this.id).subscribe((data: {}) => {
      this.productData = data;
    })
 
    this.loadInventories();
  }
 
 
 
  changeDisplay(mode: number): void {
    this.display = mode;
  }
 
  loadInventories() {
    return this.inventoriesService.getInventories().subscribe((data: {}) => {
      this.productData = data;
    });
  }
 
  
  getInventories(): void {
    this.inventoriesService.getInventories()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }
 
  updateInventory(productid: string) {
    this.router.navigateByUrl(`main/products/edit/${productid}`);
  }
 
 
  deleteProduct(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.inventoriesService.deleteInventory(id).subscribe((data) => {
        this.loadInventories();
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

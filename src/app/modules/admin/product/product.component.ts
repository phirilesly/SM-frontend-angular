import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from './product.service';
import { Product } from 'app/shared/models/product.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Location } from '@angular/common';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit  {

  displayedColumns: string[] = ['id','name', 'barcode',
   'category', 'price','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  id = this.actRoute.snapshot.params['id'];

  productData: any = [];




  public display: number = 1;

  constructor(private productsService: ProductService, private router: Router,  private messageService: MessageService,
    private confirmationService: ConfirmationService, public actRoute: ActivatedRoute,private location: Location) { }

  
  ngOnInit(): void {
    this.getProducts();

    this.productsService.getProduct(this.id).subscribe((data: {}) => {
      this.productData = data;
    })

    this.loadProducts();
  }



  changeDisplay(mode: number): void {
    this.display = mode;
  }

  loadProducts() {
    return this.productsService.getProducts().subscribe((data: {}) => {
      this.productData = data;
    });
  }
 
  
  getProducts(): void {
    this.productsService.getProducts()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  updateProduct(productid: string) {
    this.router.navigateByUrl(`main/products/edit/${productid}`);
  }


  deleteProduct(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.productsService.deleteProduct(id).subscribe((data) => {
        this.loadProducts();
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

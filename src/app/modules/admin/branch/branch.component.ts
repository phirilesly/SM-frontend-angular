import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from 'app/shared/models/product.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Location } from '@angular/common';
import { BranchService } from './branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'town',
  'phone', 'address','action'];



 dataSource !: MatTableDataSource<any>;

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;


 id = this.actRoute.snapshot.params['id'];

 branchData: any = [];




 public display: number = 1;

 constructor(private branchService: BranchService, private router: Router, public actRoute: ActivatedRoute,private location: Location) { }

 
 ngOnInit(): void {
   this.getBranches();

   this.branchService.getBranch(this.id).subscribe((data: {}) => {
     this.branchData = data;
   })

   this.loadBranches();
 }



 changeDisplay(mode: number): void {
   this.display = mode;
 }

 loadBranches() {
   return this.branchService.getBranches().subscribe((data: {}) => {
     this.branchData = data;
   });
 }

 
 getBranches(): void {
   this.branchService.getBranches()
   .subscribe({
     next:(res)=>{
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
     }
   });
 }

 updateBranch(branchid: string) {
   this.router.navigateByUrl(`main/branches/edit/${branchid}`);
 }


 deleteBranch(id: any) {
   if (window.confirm('Are you sure, you want to delete?')) {
     this.branchService.deleteBranch(id).subscribe((data) => {
       this.loadBranches();
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

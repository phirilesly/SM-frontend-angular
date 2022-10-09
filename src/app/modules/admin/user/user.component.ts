import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from 'app/shared/models/product.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'barcode',
  'category', 'price','action'];
 dataSource !: MatTableDataSource<any>;

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;


 id = this.actRoute.snapshot.params['id'];

 userData: any = [];




 public display: number = 1;

 constructor(private userService: UserService, private router: Router,  private messageService: MessageService,
   private confirmationService: ConfirmationService, public actRoute: ActivatedRoute,private location: Location) { }

 
 ngOnInit(): void {
   this.getUsers();

   this.userService.getUser(this.id).subscribe((data: {}) => {
     this.userData = data;
   })

   this.loadUsers();
 }



 changeDisplay(mode: number): void {
   this.display = mode;
 }

 loadUsers() {
   return this.userService.getUsers().subscribe((data: {}) => {
     this.userData = data;
   });
 }

 
 getUsers(): void {
   this.userService.getUsers()
   .subscribe({
     next:(res)=>{
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
     }
   });
 }

 updateUser(productid: string) {
   this.router.navigateByUrl(`main/users/edit/${productid}`);
 }


 deleteUser(id: any) {
   if (window.confirm('Are you sure, you want to delete?')) {
     this.userService.deleteUser(id).subscribe((data) => {
       this.loadUsers();
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

import { InventoryService } from './../inventory.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Product } from 'app/shared/models/product.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

 
  @Input() inventoryDetails = { branchId: '', productId: '', orderDate: '',orderPrice: 0,quantity: 0};
  inventoryForm : FormGroup;

  
  id: string;
  inventory: any = {};

 
  inventoryData: any = {};

  constructor(  private formBuilder: FormBuilder,
    private inventoryService: InventoryService,
    public router: Router,
    private location: Location,
    public actRoute: ActivatedRoute,

    ) {
      this.inventoryForm = this.formBuilder.group({
        branchId: [''],
         productId:[''],
          orderdate: [''],
          orderPrice: [''],
          quantity: [''],
        
      })
     }

  ngOnInit(): void {
  
    
    this.id = this.actRoute.snapshot.params['id'];

    this.inventoryService.getInventory(this.id).subscribe(data => {
      this.inventory = data;
      this.patchForm();

      
    }, error => console.log(error));
  }



  onSubmit(){
    this.inventory = {...this.inventory};
    this.inventory = {...this.inventoryForm.value}

    console.log(this.inventory,'updatedProduct')
    // this.product.name = this.productForm.value['name'],
    // this.product.supplier,
    //   this.product.barcode,
    //   this.product.category,
    // this.product.brand,
    //  this.product.price,
    //   this.product.description,
    this.inventoryService.updateInventory(this.inventory,this.id).subscribe( data =>{
      this.location.back();
    }
    , error => console.log(error));
  }

  patchForm() : any {
    this.inventoryForm.patchValue({
      branchId: this.inventory.branchId,
         productId:this.inventory.productId,
          orderDate: this.inventory.orderDate,
          orderPrice: this.inventory.orderPrice,
          quantity: this.inventory.quantity,
         
    })

  }


 
  onCancle() {
    this.location.back();
  }


}

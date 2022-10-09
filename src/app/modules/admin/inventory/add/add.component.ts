import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../inventory.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  @Input() inventoryDetails = { branchId: '', productId: '', orderDate: '',orderPrice: 0,quantity: 0};

  id = this.actRoute.snapshot.params['id'];
  inventoryData: any = {};

  constructor(  private formBuilder: FormBuilder,
    private inventoryService: InventoryService,
    public router: Router,
    private location: Location,
    public actRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.inventoryService.getInventory(this.id).subscribe((data: {}) => {
      this.inventoryData = data;
    })
   

    
  }


  addProduct(dataProduct: any) {
    this.inventoryService.createInventory(this.inventoryDetails).subscribe((data: {}) => {
      this.location.back();
    });
  }


  updateProduct() {
    if(window.confirm('Are you sure, you want to update?')){
      this.inventoryService.updateInventory(this.id, this.inventoryData).subscribe(data => {
        this.location.back();
      })
    }
  }


  
 
  onCancle() {
    this.location.back();
  }

}

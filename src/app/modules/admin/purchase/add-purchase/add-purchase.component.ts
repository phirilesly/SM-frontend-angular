import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from '../purchase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.scss']
})
export class AddPurchaseComponent implements OnInit {

  @Input() purchaseDetails = { productId: '', branchId: '', saleDate: '',quantity: '',price: ''};

  id = this.actRoute.snapshot.params['id'];
  purchaseData: any = {};

  constructor(  private formBuilder: FormBuilder,
    private purchaseService: PurchaseService,
    public router: Router,
    private location: Location,
    public actRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.purchaseService.getPurchase(this.id).subscribe((data: {}) => {
      this.purchaseData = data;
    })
   

    
  }


  addPurchase(dataPurchase: any) {
    this.purchaseService.createPurchase(this.purchaseDetails).subscribe((data: {}) => {
      this.location.back();
    });
  }


  updatePurchase() {
    if(window.confirm('Are you sure, you want to update?')){
      this.purchaseService.updatePurchase(this.id, this.purchaseData).subscribe(data => {
        this.location.back();
      })
    }
  }


  
 
  onCancle() {
    this.location.back();
  }

}

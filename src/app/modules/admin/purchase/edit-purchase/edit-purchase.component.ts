import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from '../purchase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-purchase',
  templateUrl: './edit-purchase.component.html',
  styleUrls: ['./edit-purchase.component.scss']
})
export class EditPurchaseComponent implements OnInit {

  @Input() purchaseDetails = { productId: '', branchId: '', saleDate: '',quantity: '',price: ''};
  purchaseForm : FormGroup;
  
  id: string;
  purchase: any = {};

  
 
  purchaseData: any = {};

  constructor(  private formBuilder: FormBuilder,
    private purchaseService: PurchaseService,
    public router: Router,
    private location: Location,
    public actRoute: ActivatedRoute,

    ) {
      this.purchaseForm = this.formBuilder.group({
        productId: [''],
         branchId:[''],
          saleDate: [''],
          quantity: [''],
          price: [''],
         
      })
     }

  ngOnInit(): void {
  
    
    this.id = this.actRoute.snapshot.params['id'];

    this.purchaseService.getPurchase(this.id).subscribe(data => {
      this.purchase = data;
      this.patchForm();

      
    }, error => console.log(error));
  }



  onSubmit(){
    this.purchase = {...this.purchase};
    this.purchase = {...this.purchaseForm.value}

    console.log(this.purchase,'updatedProduct')
    // this.product.name = this.productForm.value['name'],
    // this.product.supplier,
    //   this.product.barcode,
    //   this.product.category,
    // this.product.brand,
    //  this.product.price,
    //   this.product.description,
    this.purchaseService.updatePurchase(this.purchase,this.id).subscribe( data =>{
      this.location.back();
    }
    , error => console.log(error));
  }

  patchForm() : any {
    this.purchaseForm.patchValue({
      productId: this.purchase.productId,
         branchId:this.purchase.branchId,
          saleDate: this.purchase.saleDate,
          quantity: this.purchase.quantity,
          price: this.purchase.price,
        
    })

  }


 
  onCancle() {
    this.location.back();
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import { Product } from 'app/shared/models/product.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() inventoryDetails = { name: '', supplier: '', barcode: '',category: '',brand: '',price:0,description:''};
  productForm : FormGroup;
  
  id: string;
  product: any = {};

  

 
  productData: any = {};

  constructor(  private formBuilder: FormBuilder,
    private productsService: ProductService,
    public router: Router,
    private location: Location,
    public actRoute: ActivatedRoute,

    ) {
      this.productForm = this.formBuilder.group({
        name: [''],
         supplier:[''],
          barcode: [''],
          category: [''],
          brand: [''],
          price:[''],
          description:[''],
      })
     }

  ngOnInit(): void {
  
    
    this.id = this.actRoute.snapshot.params['id'];

    this.productsService.getProduct(this.id).subscribe(data => {
      this.product = data;
      this.patchForm();

      
    }, error => console.log(error));
  }



  onSubmit(){
    this.product = {...this.product};
    this.product = {...this.productForm.value}

    console.log(this.product,'updatedProduct')
    // this.product.name = this.productForm.value['name'],
    // this.product.supplier,
    //   this.product.barcode,
    //   this.product.category,
    // this.product.brand,
    //  this.product.price,
    //   this.product.description,
    this.productsService.updateProduct(this.product,this.id).subscribe( data =>{
      this.location.back();
    }
    , error => console.log(error));
  }

  patchForm() : any {
    this.productForm.patchValue({
      name: this.product.name,
         supplier:this.product.supplier,
          barcode: this.product.barcode,
          category: this.product.category,
          brand: this.product.brand,
          price:this.product.price,
          description: this.product.description,
    })

  }



 
  onCancle() {
    this.location.back();
  }

 

}

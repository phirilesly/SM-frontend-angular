import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() productDetails = { name: '', supplier: '', barcode: '',category: '',brand: '',price:0,description:''};

  id = this.actRoute.snapshot.params['id'];
  productData: any = {};

  constructor(  private formBuilder: FormBuilder,
    private productsService: ProductService,
    public router: Router,
    private location: Location,
    public actRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.productsService.getProduct(this.id).subscribe((data: {}) => {
      this.productData = data;
    })
   

    
  }


  addProduct(dataProduct: any) {
    this.productsService.createProduct(this.productDetails).subscribe((data: {}) => {
      this.location.back();
    });
  }


  updateProduct() {
    if(window.confirm('Are you sure, you want to update?')){
      this.productsService.updateProduct(this.id, this.productData).subscribe(data => {
        this.location.back();
      })
    }
  }


  
 
  onCancle() {
    this.location.back();
  }


}

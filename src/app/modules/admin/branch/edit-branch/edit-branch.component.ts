import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Product } from 'app/shared/models/product.model';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.scss']
})
export class EditBranchComponent implements OnInit {

  @Input() branchDetails = { name: '', town: '', phone: '',address: ''};
  branchForm : FormGroup;
  
  id: string;
  branch: any = {};


 
  branchData: any = {};

  constructor(  private formBuilder: FormBuilder,
    private branchService: BranchService,
    public router: Router,
    private location: Location,
    public actRoute: ActivatedRoute,

    ) {
      this.branchForm = this.formBuilder.group({
        name: [''],
         town:[''],
          phone: [''],
          address: [''],
        
      })
     }

  ngOnInit(): void {
  
    
    this.id = this.actRoute.snapshot.params['id'];

    this.branchService.getBranch(this.id).subscribe(data => {
      this.branch = data;
      this.patchForm();

      
    }, error => console.log(error));
  }



  onSubmit(){
    this.branch = {...this.branch};
    this.branch = {...this.branchForm.value}

    console.log(this.branch,'updatedBranch')
    // this.product.name = this.productForm.value['name'],
    // this.product.supplier,
    //   this.product.barcode,
    //   this.product.category,
    // this.product.brand,
    //  this.product.price,
    //   this.product.description,
    this.branchService.updateBranch(this.branch,this.id).subscribe( data =>{
      this.location.back();
    }
    , error => console.log(error));
  }

  patchForm() : any {
    this.branchForm.patchValue({
      name: this.branch.name,
         town:this.branch.town,
          phone: this.branch.phone,
          address: this.branch.address,
         
    })

  }



 
  onCancle() {
    this.location.back();
  }


}

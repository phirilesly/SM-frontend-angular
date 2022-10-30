
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Product } from 'app/shared/models/product.model';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss']
})
export class AddBranchComponent implements OnInit {

  @Input() branchDetails = { name: '', town: '', phone: '',address: ''};

  id = this.actRoute.snapshot.params['id'];
  branchData: any = {};

  constructor(  private formBuilder: FormBuilder,
    private branchService: BranchService,
    public router: Router,
    private location: Location,
    public actRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.branchService.getBranch(this.id).subscribe((data: {}) => {
      this.branchData = data;
    })
   

    
  }


  addBranch(dataProduct: any) {
    this.branchService.createBranch(this.branchDetails).subscribe((data: {}) => {
      this.location.back();
    });
  }


  updateBranch() {
    if(window.confirm('Are you sure, you want to update?')){
      this.branchService.updateBranch(this.id, this.branchData).subscribe(data => {
        this.location.back();
      })
    }
  }


  
 
  onCancle() {
    this.location.back();
  }

}

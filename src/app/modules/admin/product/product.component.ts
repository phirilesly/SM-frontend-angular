import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public display: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  changeDisplay(mode: number): void {
    this.display = mode;
  }

}

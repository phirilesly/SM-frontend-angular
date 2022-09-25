import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  public display: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  changeDisplay(mode: number): void {
    this.display = mode;
  }


}

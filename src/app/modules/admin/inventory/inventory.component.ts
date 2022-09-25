import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  public display: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  changeDisplay(mode: number): void {
    this.display = mode;
  }

}

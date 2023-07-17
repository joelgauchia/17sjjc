import { Component } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  items = this.cartService.getItems();
  preuTotal: number = 0;

  constructor(private cartService: CartService) { 
    this.calcularPreuTotal();
  }

  removeProduct(id: number): void {
    this.cartService.deleteItem(id);
    console.warn('Item deleted!');
  }

  private calcularPreuTotal(): void {
    this.preuTotal = this.items.reduce((total, item) => total + item.price, 0);
  }
}

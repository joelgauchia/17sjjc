import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];
  public cartChanged: Subject<void> = new Subject<void>();

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product) {
    this.items.push(product);
    this.cartChanged.next();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.cartChanged.next();
    return this.items;
  }

  deleteItem(id: number) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.cartChanged.next();
    }
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
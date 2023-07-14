import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  items = this.cartService.getItems();
  comprat: boolean = false;

  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.showItems();
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.comprat = true;
  }

  private showItems() {
    for (let item in this.items) {
      console.warn("Has comprat ", this.items[item].name, this.items[item].price);
    }
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

  paymentForm: FormGroup;
  comprat: boolean = false;

  items = this.cartService.getItems();

  constructor(
    private formBuilder: FormBuilder, private cartService: CartService) {

      this.paymentForm = this.formBuilder.group({
        name: ['', Validators.required],
        surnames: ['', Validators.required],
        address: ['', Validators.required],
        metodePagament: [''],
        numeroTargeta: [''],
        nomTargeta: [''],
        emailPaypal: [''],
        passwordPaypal: ['']
      });
    }

  toggleCampsTargeta() {
    this.paymentForm.controls['metodePagament'].setValue('targeta');
  }

  toggleCampsPaypal() {
    this.paymentForm.controls['metodePagament'].setValue('paypal');
  }

  onSubmit(): void {
    // Process checkout data here
    this.showItems();
    this.items = this.cartService.clearCart();
    this.paymentForm.reset();
    this.comprat = true;
  }

  private showItems() {
    for (let item in this.items) {
      console.warn("Has comprat ", this.items[item].name, this.items[item].price);
    }
  }
}

import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  public titol: string;
  public carrito: string;
  public nProductes: number = 0;

  constructor(private cartService: CartService) {
    this.titol = "Telefonia Top";
    this.carrito = "Mi carrito";

    this.cartService.cartChanged.subscribe(() => {
      this.actualitzarNombreProductes();
    });
  }

  ngOnInit() {
    console.log("Component creat!");
  }

  private actualitzarNombreProductes(): void {
    this.nProductes = this.cartService.getItems().length;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
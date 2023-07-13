export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone Pro',
    price: 799,
    description: 'El mobil mas grande con camara excepcional'
  },
  {
    id: 2,
    name: 'Phone Standard',
    price: 699,
    description: 'Un buen mobil con una buena camara'
  },
  {
    id: 3,
    name: 'Phone Mini',
    price: 299,
    description: 'La opcion mas basica'
  },
  {
    id: 4,
    name: 'AirPods pro',
    price: 199,
    description: 'Auriculares de calidad'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
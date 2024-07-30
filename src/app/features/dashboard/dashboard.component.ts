import { Component } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { Status as ProductStatus } from '../../core/enum/product/status';

@Component({
  selector: 'feature-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  products: Product[] = [
    {
      title: 'Product 1',
      price: 1000,
      description: 'This is a description',
      quantity: 10000,
      image: 'https://picsum.photos/200',
      status: ProductStatus.IN_STOCK
    },
    {
      title: 'Product 2',
      price: 100,
      description: 'This is a description',
      quantity: 1000,
      image: 'https://picsum.photos/200',

      status: ProductStatus.IN_STOCK
    },
    {
      title: 'Product 3',
      price: 10,
      image: 'https://picsum.photos/200',
      description: 'This is a description',
      quantity: 0,
      status: ProductStatus.OUT_OF_STOCK
    },
  ]

  changeTitle(e: KeyboardEvent) {
    // this.cardTitle = (e.target as HTMLInputElement).value
  }

  logTitle(e: Product) {
    console.log(e)
  }
}

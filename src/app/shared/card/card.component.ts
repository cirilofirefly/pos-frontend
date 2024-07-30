import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../../core/interfaces/product";
import { Status as ProductStatus } from "../../core/enum/product/status";

@Component({
    selector: 'custom-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {
    
    @Input() product!: Product;
    @Output() clicked = new EventEmitter<Product>();

    productStatus = ProductStatus;
  
}
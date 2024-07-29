import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'custom-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {
    
    @Input() title: string = '';
    @Output() clicked = new EventEmitter<string>();
    
}
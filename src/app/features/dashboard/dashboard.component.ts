import { Component } from '@angular/core';

@Component({
  selector: 'feature-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  cardTitle: string = 'This is a card'

  changeTitle(e: KeyboardEvent) {
    this.cardTitle = (e.target as HTMLInputElement).value
  }

  logTitle(e: string) {
    console.log(e)
  }
}

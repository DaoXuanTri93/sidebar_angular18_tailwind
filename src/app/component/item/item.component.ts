import { Component, Input } from '@angular/core';
import { AddItemComponent } from '../add-item/add-item.component';
import { Store } from '@ngrx/store';
import { addToCart } from '../store/cart.action'
import { AppState } from '../store/appState';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [AddItemComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() item: any

  constructor(private store: Store<AppState>) { }

  addToCart() {
    console.log('item', this.item);
    
    this.store.dispatch(addToCart(this.item))

  }
}

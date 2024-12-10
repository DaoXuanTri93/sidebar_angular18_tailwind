import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-add-item',
  standalone: true,
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() addItemToCart = new EventEmitter();

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addItemToCart.emit();
    // this.store.dispatch(addToCart({msg: "Item is added"}));
    // this.store.dispatch(addToCart());
  }

  removeToCart() {
    // this.store.dispatch(removeFromCart());
  }

}

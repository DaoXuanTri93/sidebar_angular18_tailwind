import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCart, selectQuantity } from '../store/cart.selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Input() cart: any[] = [];
  // cart: any[] = [];
  cartQuantity : any;
  constructor(private router: Router, private store: Store<any>) {

  }

  ngOnInit(): void {
    // this.store.select('cartCount').subscribe(item => {
    //   this.cart = item.cart;
    // })
    this.store.select(selectCart).subscribe(res => console.log('res', res));
    this.cartQuantity =  this.store.select(selectQuantity);
    console.log('quantity', this.cartQuantity);
    
  }

  goToFruits() {
    this.router.navigate(['fruits']);
  }

  goToVegetables() {
    this.router.navigate(['vegetables']);
  }

}

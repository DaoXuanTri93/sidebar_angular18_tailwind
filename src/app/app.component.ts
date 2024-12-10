import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { CartService } from './cart.service';
import { FruitsComponent } from './component/fruits/fruits.component';
import { HeaderComponent } from './component/header/header.component';
import { Store } from '@ngrx/store';
import { selectQuantity } from './component/store/cart.selector';
import { AppState } from './component/store/appState';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ButtonClickComponent } from './button/button-click/button-click.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FruitsComponent,
    CommonModule,
    ButtonClickComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
  cart: any = []
  // count: any;
  messageInput: string = '';
  count$!: Observable<any>;
  constructor(private cartService: CartService, private store: Store<AppState>) {

  }
  handleClick = (event : any) => {
    console.log('click cha', event);
    
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Changes detected', changes);
  }

  ngOnInit() {
    
    
   this.count$ =  this.store.select(selectQuantity);
   console.log('quantity', this.count$.subscribe(item => console.log('item', item))
   );
    // this.store.select('cartCount').subscribe(item => {
    //   this.count = item;
    // })
    // console.log(localStorage.getItem('cart'));

    // if (localStorage.getItem('cart') === null) {
    //   localStorage.setItem('cart', JSON.stringify([]));
    // }
    // this.cartService.cartSubject.subscribe((res) => {
    //   let cart = localStorage.getItem('cart') || '[]';
    //   this.cart = JSON.parse(cart);
    // });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Component is being destroyed');
  }
}

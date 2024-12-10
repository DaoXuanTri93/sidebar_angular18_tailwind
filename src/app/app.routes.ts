import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { AppComponent } from './app.component';
import { FruitsComponent } from './component/fruits/fruits.component';

export const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'detail', component: DetailComponent },
  // { path: '/f', component: AppComponent },
  // { path: 'fruits', component: FruitsComponent },
];

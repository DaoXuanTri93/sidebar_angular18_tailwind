import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Store } from '@ngrx/store';
import { DataService } from '../../service/data.service';
import { AppState } from '../store/appState';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [ItemComponent, NgFor],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})
export class FruitsComponent implements OnInit{
  // apple = {
  //   id: 1,
  //   name: "Apple",
  //   pic: "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=acFVqLYdwzZQ4WQRre3MUKW9PCMewLldoMVEXLyplkM="
  // };

  // orange = {
  //   id: 2,
  //   name: "Orange",
  //   pic: "https://media.istockphoto.com/id/1357864202/photo/mandarine-orange-fruits-or-tangerines-isolated-on-white-background-fresh-mandarine-close-up.jpg?b=1&s=612x612&w=0&k=20&c=Nmwb013cZAQ6UeO033bKe90RThXlZ2gTODL5VQxqA6k="
  // };

  // grapes = {
  //   id: 3,
  //   name: "Grapes",
  //   pic: "https://media.istockphoto.com/id/682505832/photo/ripe-red-grape-pink-bunch-with-leaves-isolated-on-white-with-clipping-path-full-depth-of-field.jpg?b=1&s=612x612&w=0&k=20&c=FV-KZqPFwi09flA5ZokOT4Pg2-1rbge1epBRpvqTLJY="
  // };

  fruits: any[] = [];
  isLoading = true;
  constructor(
    private dataService: DataService,
    private store: Store<AppState>
    // private sharedService: SharedService
    ) {}

  ngOnInit(): void {
    // this.isLoading = true;
    this.dataService.getFruits().subscribe((res) => {
      this.fruits = res;
      this.isLoading = false;
    });
    // this.fruits = this.sharedService.fruits;
    // this.store.select(selectFruits).subscribe((res) => {
    //   this.fruits = res.fruits;
    // });
  }
}

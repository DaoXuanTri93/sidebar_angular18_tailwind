import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-click',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RouterLink],
  templateUrl: './button-click.component.html',
  styleUrl: './button-click.component.css'
})
export class ButtonClickComponent {

  @Input() title: string = '';
  @Output() dataEvent = new EventEmitter<any>();
  handleClick(props: any){
    console.log('click here');
    this.dataEvent.emit(props);
  }


  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
  menuItems = [
    {
      label: 'Dashboard',
      route: null,
      isExpanded: false,
      isActive: true,
      children: []
    },
    {
      label: 'Profile',
      route: null,
      isExpanded: false,
      isActive: false,
      children: [
        { label: 'Edit Profile', route:'/detail', isActive: false },
        { label: 'Change Password', link: '#' }
      ]
    },
    {
      label: 'Settings',
      route: null,
      isExpanded: false,
      isActive: false,
      children: [
        { label: 'General', link: '#' },
        { label: 'Privacy', link: '#' }
      ]
    },
    {
      label: 'Help',
      route: null,
      isExpanded: false,
      isActive: false,
      children: []
    }
  ];

  toggleSubmenu(item: any) {
    item.isExpanded = !item.isExpanded;
  }

  setActiveMenu(selectedItem: any) {
    this.menuItems.forEach(item => {
      item.isActive = false; // Reset tất cả các mục
      item.children?.forEach(child => (child.isActive = false));
    });
    selectedItem.isActive = true; // Đặt active cho mục được chọn
  }
}


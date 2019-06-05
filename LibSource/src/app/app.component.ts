import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is demo generate UI';
  menuItems = [{ name: 'Menu 1', url: 'menu1.html' }, { name: 'Menu 2', url: 'menu2.html' }];
  logoUrl = 'http://placehold.it/150x50?text=Logo';
  userInfo = {name: 'Thach Nguyen', avartar: 'https://randomuser.me/api/portraits/men/7.jpg'};
  menuContents = [{ name: 'Dashboard', url: 'dashboard.html' }, { name: 'About me', url: 'about-me.html' }, { name: 'Contact', url: 'contact.html' }];

  // npm install --save @ng-bootstrap/ng-bootstrap
  // npm install bootstrap
  //npm install jquery
  //npm install popper
  // ng add @angular/material
  // get library: npm i demo-ui-basic

}

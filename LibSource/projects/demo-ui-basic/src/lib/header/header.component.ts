import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'demo-ui-basic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() logoUrl = 'http://placehold.it/150x50?text=Logo';
  @Input() menuItems = [{ name: 'About me', url: 'about-me.html' }, { name: 'Contact', url: 'contact.html' }];
  @Input() userInfo = {name: 'Demo User', avartar: 'https://randomuser.me/api/portraits/men/7.jpg'};


  constructor() { }

  ngOnInit() {
  }

}

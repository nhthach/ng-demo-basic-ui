import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'demo-ui-basic-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  @Input() menuContents = [{ name: 'Dashboard', url: 'dashboard.html' }, { name: 'About me', url: 'about-me.html' }, { name: 'Contact', url: 'contact.html' }];
  constructor() { }

  ngOnInit() {
  }

}

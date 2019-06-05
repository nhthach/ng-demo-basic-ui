# DemoUiBasic
    This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0 that support generate a demo UI includes: menu header , left sidebar, basic login form and footer

##Required
    npm install bootstrap
    npm install jquery
    npm install popper
    ng add @angular/material

##How to install the library to Project
  npm i demo-ui-basic

##Header Component

    Inputs parameter:
    @Input() logoUrl = 'http://placehold.it/150x50?text=Logo'; // String
    @Input() menuItems = [{ name: 'About me', url: 'about-me.html' }, { name: 'Contact', url: 'contact.html' }]; // Array[Object]
    @Input() userInfo = {name: 'Demo User', avartar: 'https://randomuser.me/api/portraits/men/7.jpg'}; // Object

##Left-sidebar Compoment

    Inputs parameter:
    //Array[Object]
    @Input() menuContents = [{ name: 'Dashboard', url: 'dashboard.html' }, { name: 'About me', url: 'about-me.html' }, { name: 'Contact', url: 'contact.html' }];

##Footer Component
    This is static content

##Login Component
    This will show pop-up that include data
#Example
    Link githhub: https://github.com/nhthach/ng-demo-basic-ui
    In file: app.component.html

        <div class="content">
        <demo-ui-basic-header [menuItems] = 'menuItems'  [userInfo] = 'userInfo' [logoUrl] = 'logoUrl'></demo-ui-basic-header>
        <div class="row">
            <div class="col-3">
                <demo-ui-basic-left-sidebar [menuContents] = 'menuContents'></demo-ui-basic-left-sidebar>
            </div>
            <div class="col-9">
                <demo-ui-basic-login></demo-ui-basic-login>
            </div>
        </div>
        <demo-ui-basic-footer></demo-ui-basic-footer>
        </div>


    In file: app.component.ts
        
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
        }
    

    In file: app.module.ts
        
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';
        import { AppRoutingModule } from './app-routing.module';
        import { DemoUiBasicModule } from 'demo-ui-basic';
        import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

        @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            DemoUiBasicModule,
            BrowserAnimationsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
        })
        export class AppModule { }

        
    In file: app.component.scss. Add line
        @import '~bootstrap/dist/css/bootstrap.min.css';

#Demo Project 
   Link github: https://github.com/nhthach/ng-demo-basic-ui


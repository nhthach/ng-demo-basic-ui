import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, LeftSidebarComponent, LoginComponent],
  imports: [
  	BrowserModule,
  	FormsModule,
  	MaterialModule,
  ],
  exports: [HeaderComponent, FooterComponent, LeftSidebarComponent, LoginComponent]
})
export class DemoUiBasicModule { }

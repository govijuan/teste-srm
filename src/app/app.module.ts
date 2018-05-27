import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarNavComponent } from './components/component.sidebar-nav';
import { topBarComponent } from './components/component.topbar';

@NgModule({
  declarations: [
    AppComponent, SidebarNavComponent, topBarComponent
  ],
  imports: [
    BrowserModule, MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

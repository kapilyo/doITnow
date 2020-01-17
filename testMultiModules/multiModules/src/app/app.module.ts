import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './first-module/dashboard/dashboard.component';
import { TestSuitesComponent } from './first-module/test-suites/test-suites.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TestSuitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

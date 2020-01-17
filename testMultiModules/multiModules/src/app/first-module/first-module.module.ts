import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestSuitesComponent } from './test-suites/test-suites.component';

@NgModule({
  declarations: [DashboardComponent, TestSuitesComponent],
  imports: [
    CommonModule
  ]
})
export class FirstModuleModule { }

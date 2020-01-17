import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './first-module/dashboard/dashboard.component';
import { TestSuitesComponent } from './first-module/test-suites/test-suites.component';


const routes: Routes = [
 {
   path: '',
   component: DashboardComponent,
   outlet: 'leftOutlet'
},
{
  path: '',
  component: DashboardComponent,
},
{
  path: 'testSuites',
  component: TestSuitesComponent,
  outlet: 'leftOutlet'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

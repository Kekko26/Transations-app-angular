import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: 'home', loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: '**', redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

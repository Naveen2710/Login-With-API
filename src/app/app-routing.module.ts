import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [

  {'path': '', component: LoginPageComponent},
  {'path': 'home', component: HomeComponent},
  {'path': 'detail/:id', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

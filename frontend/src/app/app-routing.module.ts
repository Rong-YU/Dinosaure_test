import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './information/information.component'
import { ListAmiComponent } from './list-ami/list-ami.component'
import { ListUserComponent } from './list-user/list-user.component'
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { 
    path: '',
    component: InformationComponent,
    canActivate: [AuthGuard],
  },
  { 
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'list', 
    component: ListUserComponent,
    canActivate: [AuthGuard],
  },
  { 
    path: 'friends',
    component: ListAmiComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Router} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './userservice.service'
import { AuthGuard } from './auth.guard';
import { AbcComponent } from './abc/abc.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AbcComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
         path: 'dashboard',
         component: DashboardComponent,
         canActivate: [AuthGuard]
      },
      {path: '',component:LoginComponent}
   ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

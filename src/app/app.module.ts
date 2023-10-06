import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserindComponent } from './userind/userind.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainscreenComponent,
    WidgetsComponent,
    BottombarComponent,
    TopbarComponent,
    UserindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

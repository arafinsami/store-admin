import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { AuthService } from './service/auth.service';
import { SpinnerInterceptorProvider } from './interceptor/spinner-interceptor';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './material/material';
import { NavigationComponent } from './components/nav-bar/navigation/navigation.component';
import { DeleteDialog } from './components/book/book-list/book-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    DeleteDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: "legacy" })
  ],
  providers: [
    AuthService,
    SpinnerInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

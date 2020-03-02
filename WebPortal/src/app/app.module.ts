import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule }    from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';

// Page's and components modules
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';

import { startsWithPipe} from 'src/app/services/filter.pipe';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { sharedService } from 'src/app/services/sharedService';
import { HttpConfigInterceptor } from './helpers/http.interceptor';
import { HttpCallsService } from './services/http-calls.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    MainHeaderComponent,
    NavBarComponent,
    MainFooterComponent,
    ProductsComponent,
    startsWithPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    NgxWebstorageModule.forRoot()

  ],
  providers: [sharedService,
    HttpCallsService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  // entryComponents: [DialogComponent,DocFormComponent]
})
export class AppModule { }

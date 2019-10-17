import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './header/header.component';  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeImageComponent } from './home-image/home-image.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginLandingComponent } from './login-landing/login-landing.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MatCardModule } from '@angular/material';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardViewComponent } from './card-view/card-view.component';

@NgModule({  
  declarations: [  
    AppComponent, HeaderComponent, HomeImageComponent, LoginLandingComponent, FooterComponent,
     NavComponent,
     SidenavComponent,
     CardViewComponent  
  ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    SlickCarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    // MatButtonModule,
    //  MatNativeDateModule, 
    //  MatIconModule,
    //   MatSidenavModule, 
    //   MatListModule,
    //    MatToolbarModule,
    MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule,
    MDBBootstrapModule.forRoot(),
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  
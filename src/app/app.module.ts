import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { StoryComponent } from './Story/story.component';
import { ReviewsComponent} from './Reviews/reviews.component';
import { scrollComponent } from './Scroll/scroll.component';
// import { NavbarComponent } from './navbar/navbar.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
// import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoryComponent,
    ReviewsComponent,
    scrollComponent,
    // NavbarComponent,
    // BrowserAnimationsModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatListModule,
    // MatListModule,
    // MatButtonModule,
    // MatIconModule,
    // FlexLayoutModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

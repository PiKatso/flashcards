import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { TermListComponent } from './term-list/term-list.component';
import { TermDetailComponent } from './term-detail/term-detail.component';

import { EditTermComponent } from './edit-term/edit-term.component';
import { AuthComponent } from './auth/auth.component';
import { CategoryPipe } from './category.pipe';
import { SubjectPipe } from './subject.pipe';
import { SearchPipe } from './search.pipe';
import { AuthService } from './auth.service';
import { TermPanelComponent } from './term-panel/term-panel.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    SplashPageComponent,
    TermListComponent,
    TermDetailComponent,
    EditTermComponent,
    AuthComponent,
    CategoryPipe,
    SubjectPipe,
    SearchPipe,
    TermPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

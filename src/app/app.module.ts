import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/Forms';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutesModule } from './app-routes.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserService } from './services/user.service';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AddUserComponent,
    UsersComponent,
    UserDetailsComponent,
    NotFoundComponent,
    PostsComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'weblog'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

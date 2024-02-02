import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users/users.service';
import { UsersComponent } from './components/users/users.component';
import { PostsService } from './services/users/posts.service';
import { PostComponent } from './components/post/post.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SelectComponent } from './components/select/select.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FiltersComponent,
    SelectComponent,
    UsersComponent,
    InputComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UsersService, PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BackgroundDirective } from './background.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    PageNotFoundComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    RouterModule.forRoot([
      {path:'quiz', component: QuizComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo:'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

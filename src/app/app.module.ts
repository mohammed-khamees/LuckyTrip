import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TrendingComponent } from './components/trending/trending.component';
import { TrendingItemComponent } from './components/trending-item/trending-item.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostItemComponent } from './components/post-item/post-item.component';


const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'results',
    component: ResultsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchButtonComponent,
    SearchBarComponent,
    TrendingComponent,
    TrendingItemComponent,
    SearchComponent,
    ResultsComponent,
    PostsComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

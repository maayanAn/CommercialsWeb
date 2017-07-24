import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { SingleComViewComponent } from './single-com-view/single-com-view.component';
import { AllComViewComponent } from './all-com-view/all-com-view.component';
import {RouterModule} from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HomeScreenComponent,
    GoogleMapsComponent,
    SingleComViewComponent,
    AllComViewComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'updateComs', component:AllComViewComponent},
      {path:'statistics', component:StatisticsComponent},
      {path:'home', component:HomeScreenComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'}
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCfdd-RBo1sIkw8mDjwUUmrCbrwoUcLq6U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HomeScreenComponent,
    GoogleMapsComponent,
    SingleComViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCfdd-RBo1sIkw8mDjwUUmrCbrwoUcLq6U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

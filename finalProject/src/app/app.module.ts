import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule}   from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { SingleComViewComponent } from './single-com-view/single-com-view.component';
import { AllComViewComponent } from './all-com-view/all-com-view.component';
import {RouterModule} from '@angular/router';
import { AddNewComComponent } from './add-new-com/add-new-com.component'
import {HttpClientModule} from '@angular/common/http';
import {GroupPriceComponent} from './groupPrice/groupPrice.component'
import {SafePipe} from './SafePipe/SafePipe.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyAsideSearchComponent } from './my-aside-search/my-aside-search.component';
import { MySearchPageComponent } from './my-search-page/my-search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    GoogleMapsComponent,
    SingleComViewComponent,
    AllComViewComponent,    
    AddNewComComponent,    
    GroupPriceComponent,
    SafePipe,
    MyAboutComponent,
    MyAsideSearchComponent,
    MySearchPageComponent,
  ],
  imports: [
    BrowserModule,       
    FormsModule,
    ReactiveFormsModule,    
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'updateComs', component:AllComViewComponent},      
      {path:'home', component:HomeScreenComponent},
      {path:'addCom', component:AddNewComComponent},
      {path: 'groupCom', component:GroupPriceComponent},
      {path:'search', component:MySearchPageComponent},
      {path:'about', component:MyAboutComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCfdd-RBo1sIkw8mDjwUUmrCbrwoUcLq6U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app.routes'; 

import { AppComponent } from './app.component';
import { userReducer } from './Reducers/user.reducer';
import { UserEffects } from './Effects/user.effects';
import { HeaderComponent } from '../Components/components/header/header.component';
import { UserCardComponent } from '../Components/components/user-card/user-card.component';
import { UserDetailsComponent } from '../Components/components/user-details/user-details.component';
import { UserListComponent } from '../Components/components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserCardComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

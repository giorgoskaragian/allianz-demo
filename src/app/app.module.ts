import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserDataComponent } from './_components/user-data/user-data.component';
import { UserMainInfoComponent } from './_components/user-main-info/user-main-info.component';
import { UserAddressInfoComponent } from './_components/user-address-info/user-address-info.component';
import { TagsComponent } from './_components/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserMainInfoComponent,
    UserAddressInfoComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

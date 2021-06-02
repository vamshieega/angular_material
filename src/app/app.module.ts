import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { DialogComponent } from './dialog/dialog.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DialogComponent
  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

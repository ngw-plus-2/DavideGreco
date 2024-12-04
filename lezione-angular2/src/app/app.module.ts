import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleParagraphComponent } from './componenti/toggle-paragraph/toggle-paragraph.component';
import { PersoneComponent } from './componenti/persone/persone.component';
import { TendinaComponent } from './componenti/tendina/tendina.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToggleParagraphComponent,
    PersoneComponent,
    TendinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { isStandalone, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent, // Deve essere in declarations
    ContactComponent,
    HomeComponent,
    AboutComponent, 
    ContactComponent, 
    RegistrationFormComponent,
     // Aggiungi qui il tuo componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // I moduli di Angular rimangono in imports
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

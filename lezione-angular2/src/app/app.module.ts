import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleParagraphComponent } from './componenti/toggle-paragraph/toggle-paragraph.component';
import { PersoneComponent } from './componenti/persone/persone.component';
import { TendinaComponent } from './componenti/tendina/tendina.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ComponentiComponent } from './child-component/componenti/componenti.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
      // Componenti normali
      
      ParentComponent,
      
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // Componenti standalone, devono essere importati e non dichiarati
    TendinaComponent, // Standalone
    ProductDetailComponent, // Standalone
     // Standalone
    ChildComponent,
    ProductListComponent,
    ChildComponent,
    ComponentiComponent,
    AppComponent,
    ToggleParagraphComponent,
    PersoneComponent,   // Se ChildComponent è standalone, lo aggiungi a imports
],
  providers: [],
  bootstrap: []
})
export class AppModule { }

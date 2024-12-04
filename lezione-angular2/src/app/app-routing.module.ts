import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleParagraphComponent } from './componenti/toggle-paragraph/toggle-paragraph.component';
import { PersoneComponent } from './componenti/persone/persone.component';
import { TendinaComponent } from './componenti/tendina/tendina.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
  { path: 'toggle-paragraph', component: ToggleParagraphComponent },
  {path: 'persone', component: PersoneComponent},
  { path: 'tendina', component:TendinaComponent},
  {path:  'APP', component: AppComponent},
  { path: '', redirectTo: '/toggle-paragraph', pathMatch: 'full' } // Redirect to toggle-paragraph page if no path is provided
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

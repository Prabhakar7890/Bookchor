import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { BookDetailsComponent } from './home/book-details/book-details.component';


const routes: Routes = [
   {path:'',component: HomeComponent},
   {path:'home/:id', component: BookDetailsComponent},
   {path:'aboutus',component: AboutusComponent},
   {path:'contact',component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

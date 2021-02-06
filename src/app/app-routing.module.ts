import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiphersComponent } from './ciphers/ciphers.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: 'ciphers', component: CiphersComponent},
  {path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

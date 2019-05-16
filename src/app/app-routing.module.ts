import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoadingShowcaseComponent } from './loading-showcase/loading-showcase.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'loading-showcase', component: LoadingShowcaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

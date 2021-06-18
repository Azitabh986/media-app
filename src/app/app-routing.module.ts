import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AuthGuardService } from './auth-guard.service';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about',component: AboutPageComponent },
  { path: 'gallery', canActivate: [AuthGuardService],component: GalleryPageComponent },
  { path: '**',component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'map', component: MapComponent },
];

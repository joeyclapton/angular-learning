import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TravelAddFormComponent } from './views/travel-add-form/travel-add-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'travels',
    component: TravelAddFormComponent,
  },
];

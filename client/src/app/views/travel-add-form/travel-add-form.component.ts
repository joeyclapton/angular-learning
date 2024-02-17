import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TravelDetailsComponent } from '../../components/travels/travel-details/travel-details.component';
import { TravelsDetailsSchematicsComponent } from '../../components/travels/travels-details-schematics/travels-details-schematics.component';

@Component({
  selector: 'app-travel-add-form',
  standalone: true,
  imports: [
    MatButtonModule,
    TravelDetailsComponent,
    TravelsDetailsSchematicsComponent,
  ],
  templateUrl: './travel-add-form.component.html',
  styleUrl: './travel-add-form.component.scss',
})
export class TravelAddFormComponent {
  showMessage = false;

  constructor(private router: Router) {}

  onNavigateToTravelCreate() {
    this.router.navigate(['/travels/create']);
  }
}

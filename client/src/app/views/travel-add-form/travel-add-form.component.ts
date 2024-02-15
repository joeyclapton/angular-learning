import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-add-form',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './travel-add-form.component.html',
  styleUrl: './travel-add-form.component.scss',
})
export class TravelAddFormComponent {
  constructor(private router: Router) {}

  onNavigateToTravelCreate() {
    this.router.navigate(['/travels/create']);
  }
}

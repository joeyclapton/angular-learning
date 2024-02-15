import { Component, OnInit, inject } from '@angular/core';
import { TravelService } from '../../../shared/services/travel/travel.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Travel } from '../../../shared/models/travel.model';

@Component({
  selector: 'app-travel-create',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './travel-create.component.html',
  styleUrl: './travel-create.component.scss',
})
export class TravelCreateComponent implements OnInit {
  travelService = inject(TravelService);
  router = inject(Router);

  travel: Travel = {
    id: 12,
    city: 'São Paulo',
    country: 'Brazil',
    date: new Date(),
    stars: 5,
  };

  ngOnInit(): void {}

  onCreateTravel() {
    this.travelService.create(this.travel).subscribe(() => {
      this.travelService.showMessage('Viagem cadastrada com sucesso...');
      this.router.navigate(['/travels']);
    });
  }

  onCancel() {
    this.router.navigate(['/travels']);
  }
}

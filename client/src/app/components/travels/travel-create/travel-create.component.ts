import { Component, OnInit, inject } from '@angular/core';
import { TravelService } from '../../../shared/services/travel/travel.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Travel } from '../../../shared/models/travel.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-travel-create',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
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
    const updatedTravel = {
      ...this.travel,
      stars: Number(this.travel.stars),
    };
    updatedTravel.stars = Number(updatedTravel.stars);

    this.travelService.create(updatedTravel).subscribe(() => {
      this.travelService.showMessage('Viagem cadastrada com sucesso...');
      this.router.navigate(['/travels']);
    });
  }

  onCancel() {
    this.router.navigate(['/travels']);
  }
}

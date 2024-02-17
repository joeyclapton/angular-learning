import { Component, OnInit, inject } from '@angular/core';
import { Travel } from '../../../shared/models/travel.model';
import { TravelService } from '../../../shared/services/travel/travel.service';

@Component({
  selector: 'app-travel-details',
  standalone: true,
  imports: [],
  templateUrl: './travel-details.component.html',
  styleUrl: './travel-details.component.scss',
})
export class TravelDetailsComponent implements OnInit {
  travelService = inject(TravelService);

  travels: Travel[] = [];

  ngOnInit() {
    this.getTravels();
  }

  getTravels() {
    this.travelService.getAll().subscribe((travels) => {
      this.travels = travels;
      console.log(travels);
    });
  }
}

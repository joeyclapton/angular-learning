import { Component, inject } from '@angular/core';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-create-fruit',
  standalone: true,
  imports: [],
  templateUrl: './create-fruit.component.html',
  styleUrl: './create-fruit.component.scss',
})
export class CreateFruitComponent {
  fruitsService = inject(FruitsService);

  onAddFruit() {
    this.fruitsService.add('Banana');
    console.log('Lista de frutas: ', this.fruitsService.getAll());
  }
}

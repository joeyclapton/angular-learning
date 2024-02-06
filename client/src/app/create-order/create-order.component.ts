import { Component, inject } from '@angular/core';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss',
})
export class CreateOrderComponent {
  fruitsService = inject(FruitsService);

  onAddFruitOrder() {
    this.fruitsService.add('Morango');
    this.fruitsService.add('Abacaxi');

    console.log('Lista de frutas do pedido: ', this.fruitsService.getAll());
  }
}

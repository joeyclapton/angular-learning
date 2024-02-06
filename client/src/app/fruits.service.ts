import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class FruitsService {
  fruits: Array<String>;

  constructor() {
    this.fruits = ['Uva', 'Manga'];
  }

  add(fruit: string) {
    this.fruits.push(fruit);
  }

  getAll(): Array<String> {
    return this.fruits;
  }
}

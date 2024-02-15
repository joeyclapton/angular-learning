import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../../environments/environment';
import { Travel } from '../../models/travel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  snackBar = inject(MatSnackBar);
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;

  constructor() {}

  showMessage(msg: string) {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(travel: Travel): Observable<Travel> {
    return this.http.post<Travel>(`${this.baseUrl}/travels`, travel);
  }
}

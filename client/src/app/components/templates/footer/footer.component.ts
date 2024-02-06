import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AccentColorDirective } from '../../../shared/directives/accent-color.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, AccentColorDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  iconColor = '#f20505';
}

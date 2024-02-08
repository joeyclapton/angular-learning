import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AccentColorDirective } from '../../../shared/directives/accent-color.directive';
import { CustomForDirective } from '../../../shared/directives/custom-for/custom-for.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    AccentColorDirective,
    CustomForDirective,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  iconColor = '#f20505';
}

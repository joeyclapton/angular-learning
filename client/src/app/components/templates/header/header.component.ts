import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor() {
    console.log('I am a constructor');
  }

  ngOnInit(): void {
    console.log('I am a OnInit');
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-avatar.component.html',
  styleUrl: './profile-avatar.component.sass'
})
export class ProfileAvatarComponent {

  url: string;

  constructor() {
    this.url = "https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg";
  }

}

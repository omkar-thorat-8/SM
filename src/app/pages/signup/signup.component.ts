import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  name = '';
  email = '';
  password = '';

  signup() {
    console.log(this.name, this.email, this.password);
  }
}
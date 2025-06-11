import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../app.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToMain(): void {
    this.router.navigate(['/']);
  }
}

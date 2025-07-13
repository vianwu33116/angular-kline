import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  // constructor(private readonly router: Router) {}
  private readonly router = inject(Router);

  navigateToMain(): void {
    this.router.navigate(['/']);
  }
}

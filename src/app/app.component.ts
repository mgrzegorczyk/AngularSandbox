import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSandbox';

  constructor(private router: Router) { }

  onHomeClick() {
    this.router.navigate(['/']);
  }

  onAboutUsClick() {
    this.router.navigate(['aboutus']);
  }
}

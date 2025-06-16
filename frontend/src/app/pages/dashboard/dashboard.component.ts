import { Component } from '@angular/core';
import { ShowListComponent } from '../../components/show-list/show-list.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ShowFormComponent } from '../../components/show-form/show-form.component';

@Component({
  selector: 'app-dashboard',
  imports: [ShowListComponent, ShowFormComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}

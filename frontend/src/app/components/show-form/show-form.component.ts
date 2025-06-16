import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss'],
})
export class ShowFormComponent {
  title = '';
  category = '';
  description = '';
  success = '';
  error = '';

  constructor(private showService: ShowService) {}

  submit() {
    this.showService
      .addShow({
        title: this.title,
        category: this.category,
        description: this.description,
      })
      .subscribe({
        next: () => {
          this.success = '✅ Show added!';
          this.error = '';
          this.title = this.category = this.description = '';
          this.showService.refresh$.next();
        },
        error: (err: any) => {
          this.error = err.error?.message || 'Failed to add show';
          this.success = '';
        },
      });
  }
}

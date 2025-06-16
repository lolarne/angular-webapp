import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../services/show.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
})
export class ShowListComponent implements OnInit {
  shows: any[] = [];

  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.showService.getMyShows().subscribe((data: any) => {
      this.shows = data;
    });
  }
}

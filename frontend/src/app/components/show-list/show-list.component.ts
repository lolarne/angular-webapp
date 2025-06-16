import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShowService } from '../../services/show.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
})
export class ShowListComponent implements OnInit, OnDestroy {
  shows: any[] = [];
  private sub: Subscription = new Subscription();

  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.loadShows();

    this.sub = this.showService.refresh$.subscribe(() => {
      this.loadShows();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadShows() {
    this.showService.getMyShows().subscribe((data: any) => {
      this.shows = data;
    });
  }
}

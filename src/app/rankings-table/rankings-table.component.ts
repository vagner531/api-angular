import { Component, OnInit } from '@angular/core';
import { RankingsService } from '../rankings.service';

@Component({
  selector: 'app-rankings-table',
  templateUrl: './rankings-table.component.html',
  styleUrls: ['./rankings-table.component.scss'],
})
export class RankingsTableComponent implements OnInit {
  rankings: any;
  searchTerm = '';

  search() {
    this.searchTerm = this.searchTerm.trim();
  }

  constructor(private rankingsService: RankingsService) {}

  ngOnInit() {
    this.rankingsService.getRankings().subscribe((data: unknown[]) => {
      this.rankings = data;
    });
  }
}

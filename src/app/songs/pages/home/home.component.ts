import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { Item } from '../../interfaces/songs.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  items: Item[] = [];

  constructor(private songsService: SongsService) {
    this.songsService.getPlaylist().subscribe((res) => {
      this.items = res.tracks.items;
      console.log(this.items);
    });
  }

  ngOnInit(): void {}
}

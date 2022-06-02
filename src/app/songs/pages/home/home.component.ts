import { Component } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { Item } from '../../interfaces/playlist.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  items: Item[] = [];

  constructor(
    private songsService: SongsService,
    private authService: AuthService
  ) {
    this.songsService.getPlaylist().subscribe((res) => {
      this.items = res.tracks.items;
    });
  }

  addToFavorites(idTrack: string) {
    const favoritesList = JSON.parse(
      localStorage.getItem(this.authService.user.uid)!
    );

    if (!favoritesList.includes(idTrack)) {
      favoritesList.push(idTrack);
      localStorage.setItem(
        this.authService.user.uid,
        JSON.stringify(favoritesList)
      );
    }
  }

  removeOfFavorites(idTrack: string) {
    const favoritesList = JSON.parse(
      localStorage.getItem(this.authService.user.uid)!
    );

    if (favoritesList.includes(idTrack)) {
      const indexTrack = favoritesList.indexOf(idTrack);
      favoritesList.splice(indexTrack, 1);
      localStorage.setItem(
        this.authService.user.uid,
        JSON.stringify(favoritesList)
      );
    }
  }

  isFavorite(idTrack: string): boolean {
    const favoritesList = JSON.parse(
      localStorage.getItem(this.authService.user.uid)!
    );
    return favoritesList.includes(idTrack);
  }
}

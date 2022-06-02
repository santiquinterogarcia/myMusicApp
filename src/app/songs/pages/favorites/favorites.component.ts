import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SongsService } from '../../services/songs.service';
import { RESTTrackSpotify } from '../../interfaces/track.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: [],
})
export class FavoritesComponent implements OnInit {
  tracksList: RESTTrackSpotify[] = [];

  constructor(
    private songsService: SongsService,
    private authService: AuthService
  ) {
    const favoritesList = JSON.parse(
      localStorage.getItem(this.authService.user.uid)!
    );
    if (favoritesList) {
      favoritesList.forEach((id: string) => {
        this.songsService.getTrack(id).subscribe((res) => {
          this.tracksList.push(res);
        });
      });
    }
  }

  ngOnInit(): void {}

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
}

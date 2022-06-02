import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RESTPlaylistSpotify } from '../interfaces/playlist.interface';
import { RESTTrackSpotify } from '../interfaces/track.interface';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  baseUrl: string = environment.baseUrlSongs;
  token: string =
    'BQBef90ObrxAP6A_uHPr-vQ2Oiw8V-wxN_6riEKcDpz3R6KiH00DUSH7UhoySQrIKD37mYfzwAPmVap1PoI';

  credentials = {
    clienId: '7221ee9d0856473c84c52ce14200352b',
    clienSecret: '348119c0def24959a2441cdbc93268cf',
  };

  constructor(private http: HttpClient) {}

  getPlaylist() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<RESTPlaylistSpotify>(
      `${this.baseUrl}/playlists/37i9dQZF1DZ06evO21P2NG`,
      {
        headers,
      }
    );
  }

  getTrack(id: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<RESTTrackSpotify>(`${this.baseUrl}/tracks/${id}`, {
      headers,
    });
  }
}

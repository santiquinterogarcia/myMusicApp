import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RESTSpotify } from '../interfaces/songs.interface';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  baseUrl: string = environment.baseUrlSongs;

  credentials = {
    clienId: '7221ee9d0856473c84c52ce14200352b',
    clienSecret: '348119c0def24959a2441cdbc93268cf',
  };

  constructor(private http: HttpClient) {}

  getPlaylist() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC3EHuBqTP50_rcYcyKNRFE8goBSTdA05XJtUzqRDondcmaR8oTan58aBEVYyeI9e-9dJHlh3Mw2hRvfYQ',
    });

    return this.http.get<RESTSpotify>(
      `${this.baseUrl}/playlists/37i9dQZF1DZ06evO21P2NG`,
      {
        headers,
      }
    );
  }
}

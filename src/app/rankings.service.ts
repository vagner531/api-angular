import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  private apiUrl = 'https://api.opendota.com/api/rankings';

  constructor(private http: HttpClient) { }

  getRankings() {
    return this.http.get<{ hero_id: number, rankings: any[] }>(this.apiUrl).pipe(
      map(response => response.rankings.map((ranking: any) => ({
        account_id: ranking.account_id,
        score: ranking.score,
        steamid: ranking.steamid,
        avatar: ranking.avatar,
        avatarmedium: ranking.avatarmedium,
        avatarfull: ranking.avatarfull,
        profileurl: ranking.profileurl,
        personaname: ranking.personaname,
        last_login: ranking.last_login,
        full_history_time: ranking.full_history_time,
        cheese: ranking.cheese,
        fh_unavailable: ranking.fh_unavailable,
        loccountrycode: ranking.loccountrycode,
        rank_tier: ranking.rank_tier
      }))),
      tap(data => console.log('Dados'))
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  base_url = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }

  getUser() {
    const params = new HttpParams().append('page', '1');

    return this.http.get(`${this.base_url}/user`, {
      params,
    }).pipe(
      map((res: any) => res['data'])
    );
  }


}

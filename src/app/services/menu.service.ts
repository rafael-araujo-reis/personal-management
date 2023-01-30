import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IMenu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  url = 'http://localhost:3000/menu';

  constructor(private http: HttpClient) {}

  getMenu(): Observable<IMenu[]> {
    console.log('getMenu');
    return this.http.get<IMenu[]>(this.url).pipe(retry(2));
  }
}
